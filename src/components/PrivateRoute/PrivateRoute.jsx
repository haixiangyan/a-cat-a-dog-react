import * as React from 'react'
// Router
import {Redirect, Route} from "react-router"

const isLogin = () => {
    const userStr = localStorage.getItem('user')
    // Not exist user info
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
                (<Redirect to={{pathname: "/register", state: {from: props.location}}}/>)}/>
    )
}
