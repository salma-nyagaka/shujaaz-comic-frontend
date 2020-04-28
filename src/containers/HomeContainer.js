import React from 'react'

import HomeComponent from '../components/HomeComponent'

export class HomeContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      comics: [],
      isLoading: true
    }
  }

  componentDidMount () {
    fetch('http://shujaaz.salmanyagaka.com/api/comics/')

      .then(res => res.json())
      .then(data => {
        this.setState({
          comics: data,
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
          <HomeComponent comics={this.state.comics} />
        )}
      </div>
    )
  }
}

export default HomeContainer
