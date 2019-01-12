import React, { Component} from "react";
import Feeds from './feeds'
import { Form, Input } from 'semantic-ui-react'

let twitterInterval = null

class App extends Component{
  constructor(props) {
    super(props)
    this.state = { tweets: {}, maxTwitterId: '' }
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
      .then(result => this.handleTweets(result))
    },
    3000)
  }
  handleTweets(tweets) {
    if (tweets.search_metadata.max_id_str != this.state.maxTwitterId) {
      const recievedTweets = {}
      tweets.statuses.forEach((tweet) => {
        recievedTweets[tweet.id] = tweet
      })
      this.setState({
        maxTwitterId: tweets.search_metadata.max_id_str,
        tweets: Object.assign(recievedTweets, this.state.tweets)
      })
    }
  }
  render(){
    const newProps = {tweets: this.state.tweets, grams: this.state.grams}
    return(
      <Form onSubmit={this.search}>
        <Input placeholder='Search for a hashtag!'/>
        <Feeds {...newProps}/>
      </Form>
    )
  }
}

export default App;
