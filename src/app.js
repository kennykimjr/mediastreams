import React, { Component} from "react";
import Feeds from './feeds'
import { Form, Input } from 'semantic-ui-react'

const twitterInterval = null
const instagramInterval = null

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      term: '', tweets: [], grams: []
    }
  }
  search() {
    alert('entered!')
  }
  render(){
    return(
      <Form onSubmit={this.search}>
        <Input placeholder='Search for a hashtag!'/>
        <Feeds/>
      </Form>
    )
  }
}

export default App;
