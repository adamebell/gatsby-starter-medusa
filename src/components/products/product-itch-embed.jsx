import React from "react"

const ProductItchEmbed = ({ widgetId, gameId, gameName }) => {

  return (
    <div className='itchembed'>
      <iframe 
        src={`https://itch.io/embed/${widgetId}`} 
        width="552" 
        height="167" 
        frameborder="0"
      >
        <a href={`https://adamebell.itch.io/${gameId}`}>{gameName}</a>
      </iframe>
    </div>
  )
}

export default ProductItchEmbed
