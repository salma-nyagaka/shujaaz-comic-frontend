import React from 'react'

import CharactersComponent from '../components/CharactersComponent'

export class CharactersContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      characters: [],
      isLoading: true
    }
  }

  id = window.location.pathname.replace('http://', '').split('/')

  componentDidMount () {
    fetch(
      `https://shujaaz.salmanyagaka.com/api/comics/${this.id[2]}/characters/`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          characters: data,
          isLoading: false
        })
      })
      .catch(console.log)
  }

  render () {
    return (
      <div>
        {this.state.isLoading ? (
          'Loading...'
        ) : (
          <CharactersComponent characters={this.state.characters} />
        )}
      </div>
    )
  }
}

export default CharactersContainer
