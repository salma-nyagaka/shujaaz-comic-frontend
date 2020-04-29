import React from 'react'

import SingleCreatorComponent from '../components/SingleCreatorComponent'

export class SingleCreatorContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      creator: [],
      isLoading: true
    }
  }

  id = window.location.pathname.replace('http://', '').split('/')


  componentDidMount () {
    fetch(`https://shujaaz.salmanyagaka.com/api/users/${this.id[2]}/`)

      .then(res => res.json())
      .then(data => {
        this.setState({
          creator: data,
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
          <SingleCreatorComponent creator={this.state.creator} />
        )}
      </div>
    )
  }
}

export default SingleCreatorContainer
