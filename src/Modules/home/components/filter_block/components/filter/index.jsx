import React, { useState } from 'react'
import { Collapse, Dropdown, Menu, Slider } from 'antd'
import { ButtonImage, Image, TextNormal } from 'Components'
import { FILTER_KEYS, FILTER_OPTIONS, GET_LABEL_BY_VALUE, SORT_KEYS } from 'Constants'
import { BG_BUTTON_APPLY_ACTIVE, BG_BUTTON_APPLY_UN_ACTIVE, BG_BUTTON_RESET, ICON_ARROW_DOWN } from 'Assets'
import { ButtonGroup, CollapseStyled, DropdownTitle, DropdownWrapper } from './styled'

const { Panel } = CollapseStyled

const Filter = ({ filters, setValue }) =>
{
  const [filtersActive, setFiltersActive] = useState([])
  const [visibleDropdown, setVisibleDropdown] = useState(false)

  const handleSelectSort = (value) =>
  {
    const { key } = value
    let newSortValues = [...filtersActive]
    if (newSortValues.includes(key)) {
      const indexKey = newSortValues.findIndex((v) => v === key)
      newSortValues.splice(indexKey, 1)
    } else if (key === SORT_KEYS.RELEVANCE) {
      newSortValues = [key]
    } else {
      newSortValues.push(key)
    }
    setFiltersActive(newSortValues)
  }

  const onApply = () =>
  {
    setVisibleDropdown(false)
    setValue('filters', filtersActive)
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
            imageButton={filtersActive.length ? BG_BUTTON_APPLY_ACTIVE : BG_BUTTON_APPLY_UN_ACTIVE}
            text="Apply"
            fontSize="size_20"
            fontWeight="fw_700"
            onClick={filtersActive.length ? onApply : null}
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
              <Panel header={item.label} key="1">
                <Slider min={0} max={100} />
              </Panel>
            </CollapseStyled>
          ),
          key: item.key
        }
      })}
    />
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
