import React, { useEffect, useState } from 'react'
import HomeLayout from '../layouts/home'
import { FilterBlock, Sort } from './components'
import { TextNormal, Container, CheckboxGroup, FormInput } from 'Components'
import { SEARCH_ICON, WELCOME } from 'Assets'
import { useGetNftAllCollection } from 'Hooks'
import { CheckBoxWrapper, Wrapper } from './styled'
import { FormProvider, useForm } from 'react-hook-form'
import { parseParamsToQueryString } from 'Utils'

const NFT_OPTIONS = [
  { label: 'NFT Collection', value: 'NFT Collection' },
  { label: 'NFT Item', value: 'NFT Item' }
]

const DEFAULT_VALUE = {
  queries: '',
  sorts: []
}

const HomeScreen = () => {
  const [isAvailable, setIsAvailable] = useState(false)

  const form = useForm({
    defaultValues: DEFAULT_VALUE
  })

  const { setValue, handleSubmit, control } = form

  const { isLoading, data, error, getNftAllCollectionAction } = useGetNftAllCollection()

  useEffect(() => {
    getNftAllCollectionAction({ page: 1, limit: 100 })
  }, [])

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
        </Container>
        {/* <Container>
          <div className="search-block">
            <img src={WELCOME} alt="welcome" />
            <div className="label">
              <TextNormal fontSize="size_32" fontWeight="fw_700">
                Find a NFT Collection
              </TextNormal>
            </div>
            <FilterBlock />
          </div>
        </Container> */}
      </Wrapper>
    )
  }

  return (
    <HomeLayout>
      <SearchBlock />
    </HomeLayout>
  )
}

export default HomeScreen
