import React from 'react'

import CreatorsComponent from '../components/CreatorsComponent'

export class CreatorsContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      creators: [],
      isLoading: true
    }
  }

  componentDidMount () {
    fetch('https://shujaaz.salmanyagaka.com/api/users/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          creators: data,
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
          <CreatorsComponent creators={this.state.creators} />
        )}
      </div>
    )
  }
}

export default CreatorsContainer
