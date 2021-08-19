import React from 'react'
import {Text} from 'react-native'

export default props => {
    return(
        <React.Fragment>
            <Text>
                Membros da família:
            </Text>
            {props.children}
        </React.Fragment>
    )
}