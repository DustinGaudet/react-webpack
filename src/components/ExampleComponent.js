import React, {Component} from 'react'
import './ExampleComponent.scss'

class ExampleComponent extends Component {

  state = {
    adjective: 'mathematical'
  }

  render() {

    return (
      <React.Fragment>
        <h1 className="app">Heyo, {this.props.myProp}, {this.state.adjective} world!</h1>
      </React.Fragment>
    )
  }
} 

export default ExampleComponent