import React from 'react'

import SingleComicComponent from '../components/SingleComicComponent'

export class SingleComicContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      comic: [],
      isLoading: true
    }
  }

  id = window.location.pathname.replace('http://', '').split('/')

  componentDidMount () {
    fetch(`https://shujaaz.salmanyagaka.com/api/comics/${this.id[2]}/`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          comic: data,
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
          <SingleComicComponent comic={this.state.comic} />
        )}
      </div>
    )
  }
}

export default SingleComicContainer
