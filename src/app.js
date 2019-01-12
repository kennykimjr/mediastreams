import React, { Component} from "react";
import Feeds from './feeds'
import { Form, Input, Segment } from 'semantic-ui-react'

let twitterInterval = null

class App extends Component{
  constructor(props) {
    super(props)
    this.state = { tweets: {}, maxTwitterId: '', term: '' }
    this.search = this.search.bind(this)
    this.handleTweets = this.handleTweets.bind(this)
  }
  search(event) {
    const value = event.target[0].value
    if (!value) return alert('Please Enter a Term!')
    clearInterval(twitterInterval)
    twitterInterval = window.setInterval(() => {
      fetch(`/tweets?term=${value}&since=${this.state.maxTwitterId}`)
      .then(response => response.json())
      .then(result => this.handleTweets(result, value))
    },
    3000)
  }
  handleTweets(tweets, value) {
    const newMax = tweets.search_metadata.max_id_str
    if (newMax != this.state.maxTwitterId) {
      const recievedTweets = {}
      const currentTweets = value == this.state.term ? this.state.tweets : {}
      tweets.statuses.forEach((tweet) => {
        recievedTweets[tweet.id] = tweet
      })
      this.setState({
        maxTwitterId: value == this.state.term ? newMax : '',
        tweets: Object.assign(recievedTweets, currentTweets),
        term: value
      })
    }
  }
  render(){
    const newProps = {tweets: this.state.tweets, grams: this.state.grams}
    return(
        <Form onSubmit={this.search}>
          <Segment inverted>
            <Input placeholder='Search for a hashtag!' icon="search" inverted/>
          </Segment>
          <Feeds {...newProps}/>
        </Form>
    )
  }
}

export default App;
