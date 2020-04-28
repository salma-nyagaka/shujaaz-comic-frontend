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
    fetch(`http://shujaaz.salmanyagaka.com/api/users/3/`)

      .then(res => res.json())
      .then(data => {
          console.log(data)
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
