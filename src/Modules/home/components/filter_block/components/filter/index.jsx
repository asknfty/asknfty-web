import React, { useState } from 'react'
import { Dropdown, Menu } from 'antd'
import { ButtonImage, FormInputNumber, Image, TextNormal } from 'Components'
import { FILTER_OPTIONS, GET_LABEL_BY_VALUE } from 'Constants'
import { BG_BUTTON_APPLY_ACTIVE, BG_BUTTON_RESET, ICON_ARROW_DOWN } from 'Assets'
import { ButtonGroup, CollapseStyled, DropdownTitle, DropdownWrapper } from './styled'
import { FormProvider, useForm } from 'react-hook-form'

const { Panel } = CollapseStyled

const Filter = ({ filters, setValue }) =>
{
  const form = useForm()

  const { handleSubmit } = form

  const [filtersActive, setFiltersActive] = useState([])
  const [visibleDropdown, setVisibleDropdown] = useState(false)

  const onApply = (formData) =>
  {
    const hash = {}

    Object.keys(formData).forEach((key) => {
      const keyMain = key.split('-')[0]
      if (hash[keyMain] !== undefined) {
        hash[keyMain] = `${hash[keyMain]} ${formData[key]}`
      } else {
        hash[keyMain] = formData[key]
      }
    })
    
    setVisibleDropdown(false)
    setValue('filters', Object.keys(hash).map((key) => `${key}:${hash[key]}`))
  }

  const onReset = () =>
  {
    setFiltersActive([])
    setValue('filters', filtersActive)
  }

  const menus = [
    {
      label: <DropdownTitle>Filter</DropdownTitle>,
      key: '0',
      not_filter: true
    },
    ...FILTER_OPTIONS,
    {
      label: (
        <ButtonGroup>
          <ButtonImage
            className="btn__apply"
            imageButton={BG_BUTTON_APPLY_ACTIVE}
            text="Apply"
            fontSize="size_20"
            fontWeight="fw_700"
            onClick={handleSubmit(onApply)}
          />
          <ButtonImage
            imageButton={BG_BUTTON_RESET}
            text="Reset"
            fontSize="size_20"
            fontWeight="fw_700"
            color="reset_btn"
            onClick={onReset}
          />
        </ButtonGroup>
      ),
      key: '1',
      not_filter: true
    }
  ]

  const menuFilter = (
    <FormProvider {...form}>
      <Menu
        triggerSubMenuAction="click"
        items={menus.map((item, index) =>
        {
          if (item.not_filter) {
            return {
              label: item.label,
              key: item.key
            }
          }
          return {
            label: (
              <CollapseStyled
                onChange={(key) => console.log(key)}
                expandIcon={({ isActive }) => <img style={{ transform: isActive && 'rotate(180deg)' }} className="icon__expand" src={ICON_ARROW_DOWN} alt="icon" />}
                ghost
              >
                <Panel header={item.label} key={index}>
                  <div className="range__filter">
                    <FormInputNumber name={`${item.key}-from`} />
                    <FormInputNumber name={`${item.key}-to`} />
                  </div>
                </Panel>
              </CollapseStyled>
            ),
            key: item.key
          }
        })}
      />
    </FormProvider>
  )

  const onTouch = () => setVisibleDropdown(!visibleDropdown)

  return (
    <>
      <Dropdown overlay={menuFilter} trigger={['click']} placement="bottomRight" visible={visibleDropdown}>
        <DropdownWrapper onClick={onTouch}>
          <TextNormal className="dropdown__value" fontSize="size_20" fontWeight="fw_400">
            Filter:{' '}
            {filters.map((s, index) => (index === 0 ? GET_LABEL_BY_VALUE[s] : `, ${GET_LABEL_BY_VALUE[s]}`))}
          </TextNormal>
          <Image className="icon__down" src={ICON_ARROW_DOWN} alt="icon__down" />
        </DropdownWrapper>
      </Dropdown>
    </>
  )
}

export default Filter
