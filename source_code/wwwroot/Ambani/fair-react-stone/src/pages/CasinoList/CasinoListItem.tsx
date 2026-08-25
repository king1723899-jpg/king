import React, { MouseEvent } from 'react'
import { isMobile } from 'react-device-detect'
import { selectCasinoMatchList } from '../../redux/actions/casino/casinoSlice'
import { useAppSelector } from '../../redux/hooks'
import ICasinoMatch from '../../models/ICasinoMatch'
import { useNavigateCustom } from '../_layout/elements/custom-link'
import { toast } from 'react-toastify'

const CasinoListItem = (props: any) => {
  const gamesList = useAppSelector<any>(selectCasinoMatchList)
  const navigate = useNavigateCustom()
  const casinoWidth = isMobile ? 'col-3' : 'col11'

  const onCasinoClick = (e: MouseEvent<HTMLAnchorElement>, Item: any) => {
    e.preventDefault()
    
    // Check if this is a homepage category (has homepage_code) or old casino game (has match_id)
    if (Item.homepage_code !== undefined) {
      // Navigate to casino games filtered by homepage_code
      navigate.go(`/casino-homepage/${Item.homepage_code}`)
    } else if (!Item.isDisable && Item.match_id !== -1) {
      // Old casino game navigation
      navigate.go(`/casino/${Item.slug}/${Item.match_id}`)
    } else {
      toast.warn('This game is suspended by admin, please try again later')
    }
  }

  return (
    <>
      {gamesList && gamesList.length > 0 ?
        gamesList.map((Item: any, key: number) => {
          // For homepage categories, use static game images (game-1.gif, game-2.gif, etc.)
          const isHomepageCategory = Item.homepage_code !== undefined;
          const imageUrl = isHomepageCategory 
            ? `/icon/game-${Item.homepage_code}.gif` 
            : Item.image;
            
          return (
            <a 
              key={key}
              href='#' 
              onClick={(e) => onCasinoClick(e, Item)} 
              className='text-decoration-none'
            >
              <div className="casino-game-box">
                <img
                  src={imageUrl}
                  alt={`Casino Game ${key + 1}`}
                  className="casino-game-image"
                />
              </div>
            </a>
          )
        })
      : 
        // Show placeholder if no data
        Array.from({ length: 12 }, (_, index) => (
          <div key={index} className="casino-game-box">
            <img
              src={`/icon/game-${index + 1}.gif`}
              alt={`Casino Game ${index + 1}`}
              className="casino-game-image"
              style={{ opacity: 0.5 }}
            />
          </div>
        ))
      }
    </>
  )
}
export default React.memo(CasinoListItem)
