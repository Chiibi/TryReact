import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Auxiliary/Auxiliary'

const sideDrawer = (props) => {
  let attachedClass = ["SideDrawer", "Close"]
  if (props.open) {
    attachedClass = ["SideDrawer", "Open"]
  }

  return (
    <Aux>
      <Backdrop show={ props.open } clicked={ props.closed }/>
      <div className={ attachedClass.join(' ') }>
        <Logo style={{height:"11%", marginBottom:"32px"}} />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
}

export default sideDrawer
