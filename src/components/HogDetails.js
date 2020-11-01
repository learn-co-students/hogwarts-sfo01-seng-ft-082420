import React from 'react'

function HogDetails({chosenHog, closeHog}) {

    const {name, weight, specialty, greased, ['highest medal achieved']: medal} = chosenHog
    return (
        <div>
           <h3>{name}</h3> 
           <h4>{weight} lbs</h4>
          <h4>{specialty}</h4> 
           <h4>{greased ? 'I love grease' : 'I hate grease'}</h4>
           <h4>{medal}</h4>
           <button onClick = {closeHog}> Close </button>
           
           </div>
    )

}

export default HogDetails