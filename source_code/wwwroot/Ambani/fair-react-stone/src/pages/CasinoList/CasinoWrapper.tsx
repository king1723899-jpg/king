import React, { useEffect, useMemo, useState } from "react";

type LaunchState = {
  loading: boolean;
  url: string;
  error: string;
};

const parseRouteParams = () => {
  const pathname =
    typeof window !== "undefined" && window.location
      ? String(window.location.pathname || "")
      : "";
  const segments = pathname
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean);
  const casinoIndex = segments.lastIndexOf("casino");
  const gameCode =
    casinoIndex >= 0 ? decodeURIComponent(segments[casinoIndex + 1] || "") : "";
  const matchId =
    casinoIndex >= 0 ? decodeURIComponent(segments[casinoIndex + 2] || "") : "";
  return { gameCode, matchId };
};

const extractLaunchUrl = (payload: any): string => {
  const directUrl =
    payload && payload.data && payload.data.url
      ? String(payload.data.url).trim()
      : "";
  return /^https?:\/\//i.test(directUrl) ? directUrl : "";
};

const shellStyle: React.CSSProperties = {
  minHeight: "70vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "24px",
};

const cardStyle: React.CSSProperties = {
  background: "#fff",
  color: "#111",
  borderRadius: "8px",
  border: "1px solid #ddd",
  padding: "14px 18px",
  fontFamily: "Arial, sans-serif",
  fontSize: "15px",
  fontWeight: 600,
};

const frameWrapStyle: React.CSSProperties = {
  width: "100%",
  minHeight: "86vh",
  background: "#000",
};

const frameStyle: React.CSSProperties = {
  width: "100%",
  minHeight: "86vh",
  border: 0,
  background: "#000",
};

const forceHideGlobalLaunchLoader = () => {
  try {
    ;(window as any).__forceHideCasinoLaunchLoader?.();
  } catch {
    // no-op
  }
};

const CasinoWrapper: React.FC = () => {
  const route = useMemo(() => parseRouteParams(), []);
  const [state, setState] = useState<LaunchState>({
    loading: true,
    url: "",
    error: "",
  });

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      if (!route.gameCode || route.gameCode.toLowerCase() === "undefined") {
        if (!cancelled) {
          forceHideGlobalLaunchLoader();
          setState({ loading: false, url: "", error: "This is not currently available" });
        }
        return;
      }

      try {
        const token =
          (typeof localStorage !== "undefined" &&
            (localStorage.getItem("token") ||
              localStorage.getItem("token-admin"))) ||
          "";
        const body: Record<string, any> = {
          gameCode: route.gameCode,
          vendorCode: 18,
          language: 1,
          phonetype: 1,
          random: Math.random().toString(36).slice(2),
          signature: "NA",
          timestamp: Date.now(),
        };
        if (route.matchId) body.matchId = route.matchId;

        const response = await fetch("/GetGameUrl.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify(body),
        });

        const payload = await response.json().catch(() => ({}));
        const launchUrl = extractLaunchUrl(payload);

        if (cancelled) return;
        if (launchUrl) {
          forceHideGlobalLaunchLoader();
          setState({ loading: false, url: launchUrl, error: "" });
          return;
        }

        const errorText =
          payload && (payload.message || payload.msg)
            ? String(payload.message || payload.msg)
            : "This is not currently available";
        forceHideGlobalLaunchLoader();
        setState({ loading: false, url: "", error: errorText });
      } catch {
        if (!cancelled) {
          forceHideGlobalLaunchLoader();
          setState({ loading: false, url: "", error: "This is not currently available" });
        }
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [route.gameCode, route.matchId]);

  if (state.loading) {
    return (
      <div style={shellStyle}>
        <div style={cardStyle}>Loading game...</div>
      </div>
    );
  }

  if (!state.url) {
    return (
      <div style={shellStyle}>
        <div style={cardStyle}>{state.error || "This is not currently available"}</div>
      </div>
    );
  }

  return (
    <div style={frameWrapStyle}>
      <iframe
        title="Casino Game"
        src={state.url}
        style={frameStyle}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default CasinoWrapper;
