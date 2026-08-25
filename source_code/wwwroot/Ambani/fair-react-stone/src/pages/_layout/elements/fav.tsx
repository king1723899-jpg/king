import { AxiosResponse } from 'axios'
import React from 'react'
import sportsService from '../../../services/sports.service'
import IMatch from '../../../models/IMatch'

const Fav = (props: any) => {
    const [matchList, setMatchList] = React.useState<IMatch[]>([])
    React.useEffect(() => {
        sportsService.getMatchList('all', 'sports', '5')
            .then((res: AxiosResponse<any>) => {
                // Ensure we always set an array, handle different response formats
                const data = res.data?.data || res.data || [];
                if (Array.isArray(data)) {
                    setMatchList(data);
                } else if (data.docs && Array.isArray(data.docs)) {
                    // Handle paginated response
                    setMatchList(data.docs);
                } else {
                    console.warn('Fav: Expected array but got:', data);
                    setMatchList([]);
                }
            })
            .catch((error) => {
                console.error('Fav: Error fetching match list:', error);
                setMatchList([]); // Set empty array on error
        })
    }, [])
    
    return (
        <div className='favourite'>
            {/* <ul>
                {matchList && Array.isArray(matchList) && matchList.map((match: IMatch) => (
                    <li key={match.matchId}>
                        <a href={`odds/${match.matchId}`} className='new-launch-text'>
                            <span className='lable-fav'>
                                <i className='fa fa-ribbon'></i> {match.name}
                            </span>
                        </a>
                    </li>
                ))}
            </ul> */}
        </div>
    )
}
export default Fav
