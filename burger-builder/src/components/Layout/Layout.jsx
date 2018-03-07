import React from 'react'
import Aux from '../../hoc/auxiliary'
import './Layout.css'

const layout = (props) => (
    <Aux>
        <div>ToolsBar, SideDrawer, BackDrop</div>
        <main className="Content">
            { props.children }
        </main>
    </Aux>
)

export default layout
    