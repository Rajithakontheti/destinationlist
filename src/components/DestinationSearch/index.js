// Write your code here
import {Component} from 'react'

import DestinationItem from '.src/component/DestinationItem/index'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachDest =>
      eachDest.name.includes(searchInput),
    )

    return (
      <div className="dest-list-cont">
        <h1 className="head">Destination Search</h1>
        <input
          type="search"
          value={searchInput}
          onChange={this.onChangeSearch}
        />
        <ul className="unordered-list">
          {searchResults.map(eachItem => (
            <DestinationItem key={eachItem.id} destDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
