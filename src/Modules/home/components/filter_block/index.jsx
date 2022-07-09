import { BTN_SEARCH_RED, BTN_X, BUTTON_IMAGE } from 'Assets'
import { CheckboxGroup, FormInput } from 'Components'
import { NFT_OPTIONS } from 'Constants'
import React, { useState, useCallback, memo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { SearchOutlined } from '@ant-design/icons'
import { parseParamsCollectionToQueryString } from 'Utils'
import { FilterBlockSchema } from './schema'
import { CheckBoxWrapper } from './styled'
import { yupResolver } from '@hookform/resolvers/yup'
import { Filter, Sort } from './components'
import { useGetNftAllCollection } from 'Hooks'

const DEFAULT_VALUE = {
  queries: '',
}

const FilterBlock = () => {
  const { getNftAllCollectionAction, deleteNftAllCollectionAction } = useGetNftAllCollection()
  const form = useForm({
    resolver: yupResolver(FilterBlockSchema())
  })

  const { handleSubmit, reset, watch } = form

  const {
    queries
  } = watch()
  console.log('queries', queries)

  const handleReset = useCallback((formData) => {
    reset({
      queries: null
    })
    deleteNftAllCollectionAction()
  }, [])

  const onSubmit = useCallback((formData) => {
    console.log('123')
    getNftAllCollectionAction({ params: { page: 0, limit: 10, queries: formData.queries } })
  }, [])

  console.log('rerender')

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name="queries"
          placeholder="Search by keyword..."
          suffix={
            <>
              {queries && queries.length > 0 && <img onClick={handleReset} src={BTN_X} alt="icon-search" />}
              <img onClick={handleSubmit(onSubmit)} src={BTN_SEARCH_RED} alt="icon-search" />
            </>
          }
        />
      </form>
    </FormProvider>
  )
}

export default memo(FilterBlock)
