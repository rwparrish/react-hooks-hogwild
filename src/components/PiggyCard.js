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

  if (isHidden) return

  return (
    <div onClick={handleClick} class="ui eight wide column">
      <div class="column">
        <div class="ui fluid card">
          <div class="image">
            <img src={image} />
            </div>
          <div class="content">
            <h1 class="header">{name}</h1>
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



