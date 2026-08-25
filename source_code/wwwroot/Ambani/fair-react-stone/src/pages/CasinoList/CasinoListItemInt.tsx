import React from 'react'
const CasinoListItemInt = (props: any) => {
  const handleGameClick = (e: any, item: any) => {
    e.preventDefault()
    if (props.isLaunchingGame) return
    if (typeof props.onGameClick === 'function') {
      props.onGameClick(item)
      return
    }
    if (typeof props.setGamePlay === 'function') {
      props.setGamePlay(item)
    }
  }
  return (
    <>
      {props.games &&
        props.games.map((Item: any, key: number) => {
              return (
                <div
                  className={"casino-list-item"}
                  onClick={(e) => handleGameClick(e, Item)}
                  key={key}
                  style={props.isLaunchingGame ? { pointerEvents: 'none' } : undefined}
                >
                  <a href='#' className='' >
                      <div className="casino-list-item-banner" 
                      style={{ backgroundImage: `url(${Item.game_images})`}}>
                      </div>
                  </a>
                </div>
              )
            })}
    </>
  )
}
export default React.memo(CasinoListItemInt)
