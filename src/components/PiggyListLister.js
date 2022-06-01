import React from 'react'
import PiggyCard from './PiggyCard'

function PiggyListLister({swines}) {

    const porkerCards = swines.map((swine) => { 
        return ( <PiggyCard 
            name={swine.name} 
            image={swine.image}
            greased={swine.greased}
            specialty={swine.specialty}
            weight={swine.weight}
            medal={swine["highest medal achieved"]}
        /> )
    })

  return (
      <div class="ui grid container">
          {porkerCards}
      </div>
    )
}

export default PiggyListLister