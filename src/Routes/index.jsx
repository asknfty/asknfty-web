import { PublicRoute, CustomRoute } from '../Components'
import React, { Suspense, lazy } from 'react'
import { Switch } from 'react-router-dom'

import LoadingScreen from 'Modules/loading'
import { ROUTE_NAMES } from './constant'

//screen
const HomeScreen = lazy(() => import('Modules/home'))
const AboutScreen = lazy(() => import('Modules/about'))
const CollectionDetailScreen = lazy(() => import('Modules/collection_detail'))
const NFTDetailScreen = lazy(() => import('Modules/nft_detail'))

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <CustomRoute path={ROUTE_NAMES.LOADING} component={LoadingScreen} />
        <PublicRoute exact path={ROUTE_NAMES.HOME} component={HomeScreen} />
        <PublicRoute exact path={ROUTE_NAMES.ABOUT_US} component={AboutScreen} />
        <PublicRoute exact path={ROUTE_NAMES.COLLECTION_DETAIL(':collectionId')} component={CollectionDetailScreen} />
        <PublicRoute exact path={ROUTE_NAMES.NFT_DETAIL(':nftId')} component={NFTDetailScreen} />
      </Switch>
    </Suspense>
  )
}
