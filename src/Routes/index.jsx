import { PublicRoute, CustomRoute } from '../Components'
import React, { Suspense, lazy, useEffect } from 'react'
import { Switch, useLocation } from 'react-router-dom'

import LoadingScreen from 'Modules/loading'
import { ROUTE_NAMES } from './constant'

//screen
const HomeScreen = lazy(() => import('Modules/home'))
const AboutScreen = lazy(() => import('Modules/about'))
const CollectionDetailScreen = lazy(() => import('Modules/collection_detail'))
const NFTDetailScreen = lazy(() => import('Modules/nft_detail'))
const DirectionScreen = lazy(() => import('Modules/direction'))

export default function AppRoutes() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <CustomRoute path={ROUTE_NAMES.LOADING} component={LoadingScreen} />\
        <PublicRoute exact path={ROUTE_NAMES.DIRECTION} component={DirectionScreen} />
        <PublicRoute exact path={ROUTE_NAMES.HOME} component={HomeScreen} />
        <PublicRoute exact path={ROUTE_NAMES.ABOUT_US} component={AboutScreen} />
        <PublicRoute exact path={ROUTE_NAMES.COLLECTION_DETAIL(':collectionId')} component={CollectionDetailScreen} />
        <PublicRoute exact path={ROUTE_NAMES.NFT_DETAIL(':nftId')} component={NFTDetailScreen} />
      </Switch>
    </Suspense>
  )
}
