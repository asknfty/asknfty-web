import { PublicRoute, PrivateRoute, StrictRoute, CustomRoute } from '../Components'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import { useInjectReducer } from 'Stores'
import { checkNetwork } from './store/actions'

import reducer from './store/reducer'

//screen
import HomeScreen from 'Modules/home'
import LoadingScreen from 'Modules/loading'
import AboutScreen from 'Modules/about'

export default function AppRoutes({ isOnline = true }) {
    // useInjectReducer({ key: 'globalStore', reducer })
    const dispatch = useDispatch()

    // useEffect(async () => {
    //     dispatch(checkNetwork(isOnline))
    // }, [isOnline])

    return (
        <Switch>
            <CustomRoute
                path="/loading"
                component={LoadingScreen}
            />
            <PublicRoute
                exact
                path="/"
                component={HomeScreen}
            />
            <PublicRoute
                exact
                path="/about-us"
                component={AboutScreen}
            />
        </Switch>
    )
}