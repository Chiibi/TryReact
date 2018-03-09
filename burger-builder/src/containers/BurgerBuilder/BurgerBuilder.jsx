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
      meat: 1,
      salad: 1,
      cheese: 2,
      bacon: 2,
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