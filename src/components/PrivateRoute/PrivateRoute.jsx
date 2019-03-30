import * as React from 'react'
import {Redirect, Route} from "react-router"

function isLogin() {
    console.log('check')
    const userStr = localStorage.getItem('user')
    if (!userStr) {
        return false
    }
    const user = JSON.parse(userStr)
    return user.subId && user.type
}

export default function PrivateRoute(props) {
    const {component: Component, ...restProps} = props
    return (
        <Route {...restProps} render={props => isLogin() ?
                (<Component {...props} />) :
                (<Redirect to={{pathname: "/login", state: {from: props.location}}}/>)}/>
    )
}
