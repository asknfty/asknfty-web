import { SEARCH_ICON } from 'Assets'
import { CheckboxGroup, FormInput } from 'Components'
import { NFT_OPTIONS } from 'Constants'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { parseParamsToQueryString } from 'Utils'
import { FilterBlockSchema } from './schema'
import { CheckBoxWrapper } from './styled'
import { yupResolver } from '@hookform/resolvers/yup'
import { Filter, Sort } from './components'

const DEFAULT_VALUE = {
  queries: '',
  filters: [],
  sorts: []
}

const FilterBlock = () => {
  const form = useForm({
    defaultValues: DEFAULT_VALUE,
    resolver: yupResolver(FilterBlockSchema())
  })
  const { handleSubmit, setValue, watch } = form
  const [sorts, filters] = watch(['sorts', 'filters'])

  const onSubmit = (formData) => {
    console.log('Boy ~ file: index.jsx ~ line 47 ~ onSubmit ~ formData', formData)
    // const URL = parseParamsToQueryString(formData)
  }

  const onSelectNFT = (checkedValues) => {
    console.log('Boy 🚀 ~ file: index.jsx ~ line 24 ~ onChange ~ checkedValues', checkedValues)
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name="queries"
          placeholder="Search by keyword..."
          suffix={<img onClick={handleSubmit(onSubmit)} src={SEARCH_ICON} alt="icon-search" />}
        />
        <Filter filters={filters} setValue={setValue} />
        <Sort sorts={sorts} setValue={setValue} />
      </form>
      <CheckBoxWrapper>
        <CheckboxGroup options={NFT_OPTIONS} onChange={onSelectNFT} />
      </CheckBoxWrapper>
    </FormProvider>
  )
}

export default FilterBlock
