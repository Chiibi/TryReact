import React, { Component } from 'react'
import Aux from '../../hoc/auxiliary'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...props}
  // }
  state = {
    ingredients: {
      meat: 0,
      salad: 0,
      cheese: 0,
      bacon: 0,
    }
  }
  render() {
    return (
      <Aux>
        <Burger ingredient={ this.state.ingredients }/>
        <div>Build Controls</div>
      </Aux>
    )
  }
}

export default BurgerBuilder