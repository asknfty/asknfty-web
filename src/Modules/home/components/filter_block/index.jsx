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
  filters: [],
  sorts: []
}

const FilterBlock = () =>
{
  const { getNftAllCollectionAction, deleteNftAllCollectionAction, queries } = useGetNftAllCollection()
  const form = useForm({
    resolver: yupResolver(FilterBlockSchema()),
    defaultValues: DEFAULT_VALUE
  })

  const { handleSubmit, reset, watch, setValue } = form

  const [sorts, filters, queriesWatch] = watch(['sorts', 'filters', 'queries'])

  const handleReset = useCallback((formData) =>
  {
    reset({
      queries: null
    })
    deleteNftAllCollectionAction()
  }, [])

  const onSubmit = (formData) =>
  {
    const { queries } = formData
    getNftAllCollectionAction({ params: { page: 0, pageSize: 10, queries, filters, sorts } })
  }

  console.log('rerender')

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name="queries"
          placeholder="Search by keyword..."
          suffix={
            <>
              {(queriesWatch && queriesWatch.length > 0) && <img onClick={handleReset} src={BTN_X} alt="icon-search" />}
              <img onClick={handleSubmit(onSubmit)} src={BTN_SEARCH_RED} alt="icon-search" />
            </>
          }
        />
        <Filter filters={filters} setValue={setValue} queries={queries} />
        <Sort sorts={sorts} setValue={setValue} queries={queries} />
      </form>
    </FormProvider>
  )
}

export default memo(FilterBlock)
