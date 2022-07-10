import React, { useEffect, useState } from 'react'
import HomeLayout from '../layouts/home'
import { FilterBlock } from './components'
import { TextNormal, Container } from 'Components'
import { CLOUD, COIN, RIGHT_HAND, WELCOME } from 'Assets'
import { useGetNftAllCollection } from 'Hooks'
import { ListWrapper, Wrapper } from './styled'
import ListNFT from './components/list'

const HomeScreen = () => {
  const [isAvailable, setIsAvailable] = useState(false)

  const onChange = (checkedValues) => {
    console.log('Boy 🚀 ~ file: index.jsx ~ line 24 ~ onChange ~ checkedValues', checkedValues)
  }

  const SearchBlock = () => {
    return (
      <Wrapper>
        <Container>
          <div className="search-block">
            <img src={WELCOME} alt="welcome" />
            <div className="label">
              <TextNormal fontSize="size_32" fontWeight="fw_700">
                Find a NFT Collection
              </TextNormal>
            </div>
            <FilterBlock />
          </div>
          <ListWrapper>
            <ListNFT />
          </ListWrapper>
        </Container>
        <div className="cloud-img hidden-mobile">
          <img src={CLOUD} alt="cloud" />
        </div>
        <div className="coin-img hidden-mobile">
          <img src={COIN} alt="coin" />
        </div>
        <div className="hand hidden-mobile">
          <img src={RIGHT_HAND} alt="right-hand" />
        </div>
      </Wrapper >
    )
  }

  return (
    <HomeLayout>
      <SearchBlock />
    </HomeLayout>
  )
}

export default HomeScreen
