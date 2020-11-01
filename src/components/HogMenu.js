import React from 'react'
import HogTile from './HogTile'


function HogMenu({hogs, selectHog, greaseFilter, sortType}){

    const greasedState = greaseFilter === 'greased'

    const filteredHogs = greaseFilter === 'all' ? hogs : hogs.filter(hog => hog.greased === greasedState)

    const sortHogs = () => {
        if (sortType === 'none') {
          return filteredHogs;
        }
    
        if (sortType === 'weight') {
          return [...filteredHogs].sort((a, b) => a.weight - b.weight);
        }
    
        return [...filteredHogs].sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
    
        return 1;
        });
      }
    
      return (
        <div className="ui grid container">
          {sortHogs().map(hog => <HogTile hog={hog} selectHog={selectHog} key={hog.name} />)}
        </div>
      )
    
}

export default HogMenu