import { PublicRoute, CustomRoute } from '../Components'
import React, { Suspense, lazy } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import { useInjectReducer } from 'Stores'
import { checkNetwork } from './store/actions'

import reducer from './store/reducer'
import LoadingScreen from 'Modules/loading'

//screen
const HomeScreen = lazy(() => import('Modules/home'))
const AboutScreen = lazy(() => import('Modules/about'))
const CollectionDetailScreen = lazy(() => import('Modules/collection_detail'))
const NFTDetailScreen = lazy(() => import('Modules/nft_detail'))

export default function AppRoutes({ isOnline = true }) {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <CustomRoute path="/loading" component={LoadingScreen} />
        <PublicRoute exact path="/" component={HomeScreen} />
        <PublicRoute exact path="/about-us" component={AboutScreen} />
        <PublicRoute exact path="/collection-detail/:collectionId" component={CollectionDetailScreen} />
        <PublicRoute exact path="/nft-detail/:nftId" component={NFTDetailScreen} />
      </Switch>
    </Suspense>
  )
}
