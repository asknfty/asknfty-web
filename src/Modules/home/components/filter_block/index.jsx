import { BTN_SEARCH_RED, BTN_X } from 'Assets'
import { FormInput, Image } from 'Components'
import React, { useCallback, memo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FilterBlockSchema } from './schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useGetNftAllCollection } from 'Hooks'

const FilterBlock = () => {
  const { getNftAllCollectionAction, deleteNftAllCollectionAction } = useGetNftAllCollection()
  const form = useForm({
    resolver: yupResolver(FilterBlockSchema())
  })

  const { handleSubmit, reset, watch } = form

  const {
    queries
  } = watch()

  const handleReset = useCallback((formData) => {
    reset({
      queries: null
    })
    deleteNftAllCollectionAction()
  }, [])

  const onSubmit = useCallback((formData) => {
    getNftAllCollectionAction({ params: { page: 0, pageSize: 10, queries: formData.queries } })
  }, [])

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name="queries"
          placeholder="Search by keyword..."
          suffix={
            <>
              {queries && queries.length > 0 && <Image allowClick onClick={handleReset} src={BTN_X} alt="icon-reset" />}
              <Image allowClick onClick={handleSubmit(onSubmit)} src={BTN_SEARCH_RED} alt="icon-search" />
            </>
          }
        />
      </form>
    </FormProvider>
  )
}

export default memo(FilterBlock)
