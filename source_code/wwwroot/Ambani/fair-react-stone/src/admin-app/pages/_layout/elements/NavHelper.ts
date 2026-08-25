import sportsService from "../../../../services/sports.service";
import  IMatch  from "../../../../models/IMatch";
import { Dispatch, SetStateAction } from "react";

interface ISeriesGroup {
  seriesName: string;
  matches: IMatch[];
}

export const fetchCompetitions = async (sportId: number): Promise<any[]> => {
  try {
    const response = await sportsService.getSports();
    return response.data?.data?.data || [];
  } catch (error) {
    console.error("Error fetching competitions:", error);
    throw new Error("Failed to load competitions");
  }
};

export const fetchMatch = async (
  sportId: number,
  setSportMatchList: Dispatch<SetStateAction<IMatch[]>>,
  limit: number = 100
): Promise<{ matches: IMatch[]; groupedSeries: ISeriesGroup[] }> => {
  try {
    // getMatchList expects string params (default values are '') so convert explicitly
    const response = await sportsService.getMatchList(String(sportId), 'active', String(limit));

    // Support multiple possible backend shapes: data, data.data, data.data.data, data.docs
    const root = response?.data;
    const d = root?.data;
    let rawList: any[] = [];
    if (Array.isArray(root)) rawList = root;
    else if (Array.isArray(d)) rawList = d;
    else if (Array.isArray(d?.data)) rawList = d.data;
    else if (Array.isArray(d?.docs)) rawList = d.docs;
    else if (Array.isArray(root?.data?.docs)) rawList = root.data.docs; // extra fallback

    // Normalize matches; keep series name only inside externalData to avoid extending IMatch
    const matches: IMatch[] = rawList.map((match: any) => ({
      ...match,
      externalData: {
        ...(match.externalData || {}),
        cname: match.externalData?.cname || match.cname || match.series?.cname || match.series?.name || match.name
      }
    }));

    const groupedSeries = groupMatchesBySeries(matches);
    setSportMatchList(matches);

    return { matches, groupedSeries };
  } catch (err) {
    console.error("Error:", err);
    throw new Error("Failed to load matches");
  }
};

const groupMatchesBySeries = (matches: IMatch[]): ISeriesGroup[] => {
  const seriesMap = new Map<string, ISeriesGroup>();

  matches.forEach((match) => {
    const seriesName =
      match.externalData?.cname ||
      (match as any).cname ||
      (match as any).series?.cname ||
      (match as any).series?.name ||
      match.name ||
      'Other Matches';

    if (!seriesMap.has(seriesName)) {
      seriesMap.set(seriesName, {
        seriesName,
        matches: [],
      });
    }
    seriesMap.get(seriesName)?.matches.push(match);
  });

  return Array.from(seriesMap.values()).sort((a, b) =>
    a.seriesName.localeCompare(b.seriesName)
  );
};