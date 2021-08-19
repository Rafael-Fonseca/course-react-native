import React from 'react'
import Filho from './Filho'

export default props => {
    let x = 13
    let y = 100
    return(
        <React.Fragment>
            <Filho a={x} b={y}/>
            <Filho a={x*2} b={y*2}/>
        </React.Fragment>
    )
}