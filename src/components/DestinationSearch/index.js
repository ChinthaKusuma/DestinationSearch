// Write your code here
import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  change1 = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchList = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bgContainer">
        <h1 className="heading">Destination Search</h1>
        <div className="search-input">
          <input
            type="search"
            placeholder="search"
            className="input1"
            onChange={this.change1}
          />
          <img
            className="img2"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            alt="search icon"
          />
        </div>
        <ul className="li1">
          {searchList.map(eachUser => (
            <DestinationItem item={eachUser} key={eachUser.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
