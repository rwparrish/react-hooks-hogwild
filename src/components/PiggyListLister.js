import React from 'react'
import PiggyCard from './PiggyCard'

function PiggyListLister({swines}) {

    const porkerCards = swines.map((swine) => { 
        return ( <PiggyCard
            key={swine.image} 
            name={swine.name} 
            image={swine.image}
            greased={swine.greased}
            specialty={swine.specialty}
            weight={swine.weight}
            medal={swine["highest medal achieved"]}
        /> )
    })

  return (
      <div className="ui grid container">
          {porkerCards}
      </div>
    )
}

export default PiggyListLister