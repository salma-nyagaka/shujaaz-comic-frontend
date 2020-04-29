import React from 'react';

import StoriesComponent from '../components/StoriesComponent'

import CharactersContainer from '../containers/CharactersContainer'

export class StoriesContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      stories: [],
      isLoading: true
    }
  }

  id = window.location.pathname.replace('http://', '').split('/')

  componentDidMount () {
    fetch(`https://shujaaz.salmanyagaka.com/api/comics/${this.id[2]}/stories/`)

      .then(res => res.json())
      .then(data => {
        this.setState({
        stories: data,
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
          <StoriesComponent stories={this.state.stories}  />
          )}
      </div>
    )
  }
}

export default StoriesContainer
