import React, { Component} from "react";
import { Image, List } from 'semantic-ui-react'

class Feeds extends Component{
  constructor(props) {
    super(props)
    this.renderTweets = this.renderTweets.bind(this)
  }
  renderTweets(tweets) {
    const items = []
    Object.keys(tweets).forEach((tweet) => {
      items.push(
        <List.Item key={tweet}>
          <Image avatar src={tweets[tweet].user.profile_image_url}/>
          <List.Content>
            <List.Header>{tweets[tweet].user.name}</List.Header>
            {tweets[tweet].text}
          </List.Content>
        </List.Item>
      )
    })
    return items
  }
  render(){
    const items = this.renderTweets(this.props.tweets)
    return(
      <List celled>
        {items}
      </List>
    );
  }
}

export default Feeds;
