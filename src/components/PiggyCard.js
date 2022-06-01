import {React, useState} from 'react'

function PiggyCard({name, image, greased, medal, weight, specialty}) {

  const [cardDetails, setCardDetails] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  const details = cardDetails ? ` Greased: ${greased} | Top medal: ${medal} | Weight: ${weight} lbs | Specialty: ${specialty}` : null

  const handleClick = () => {
    setCardDetails((cardDetails) => !cardDetails)
  }

  const handleHide = () => {
    setIsHidden((isHidden) => !isHidden)
  }

  if (isHidden) return null

  return (
    <div onClick={handleClick} className="ui eight wide column">
      <div className="column">
        <div className="ui fluid card">
          <div className="image">
            <img src={image} />
            </div>
          <div className="content">
            <h1 className="header">{name}</h1>
              <p>{details}</p>
         </div>
          <button onClick={handleHide}>
            hide me
          </button>
        </div>
      </div>
    </div>
  )
}

export default PiggyCard



