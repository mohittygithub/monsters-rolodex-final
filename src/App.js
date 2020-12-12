import React from 'react'
import './App.css'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchValue: '',
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
  }
  handleChange = (e) => {
    this.setState({ searchValue: e.target.value })
  }
  render() {
    const { monsters, searchValue } = this.state
    const filteredMosters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters...'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMosters} />
      </div>
    )
  }
}
export default App
