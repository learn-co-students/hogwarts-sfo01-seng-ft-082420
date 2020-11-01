import React, {Component} from 'react'
import hogs from '../porkers_data'
import FilterSort from './FilterSort'
import HogMenu from './HogMenu'
import HogDetails from './HogDetails'

class HogsContainer extends Component {
    constructor() { 
        super()

        this.state = {
            greaseFilter: 'all',
            sortType: 'none',
            chosenHog: null
        }
    }

    selectHog = (name) => {
        this.setState({chosenHog: hogs.find(hog => hog.name === name)})
    }

    closeHog = () => {
        this.setState ({chosenHog: null })
    }

    selectFilter = (greaseFilter) => {
        this.setState({greaseFilter})
    } 

    selectSort = (sortType) => {
        this.setState({sortType})
    }

    render() {
        return (
            <div> 
                < FilterSort selectFilter = {this.selectFilter} selectSort = {this.selectSort}/>
                {this.state.chosenHog ? <HogDetails chosenHog = {this.state.chosenHog} closeHog = {this.closeHog}/> : 
                  <HogMenu 
                  hogs = {hogs} 
                  sortType = {this.state.sortType} 
                  greaseFilter = {this.state.greaseFilter}
                  selectHog = {this.selectHog} />}
              </div>
        )
    }
}

export default HogsContainer