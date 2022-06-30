import React, { useState } from 'react'
import { Dropdown, Menu } from 'antd'
import { ButtonImage, Image, TextNormal } from 'Components'
import { GET_LABEL_BY_VALUE, SORT_KEYS, SORT_OPTIONS } from 'Constants'
import {
  BG_BUTTON_APPLY_ACTIVE,
  BG_BUTTON_APPLY_UN_ACTIVE,
  BG_BUTTON_RESET,
  ICON_ARROW_DOWN,
  ICON_ARROW_UP_LONG
} from 'Assets'
import { ButtonGroup, DropdownItem, DropdownTitle, DropdownWrapper } from './styled'

const Sort = ({ sorts, setValue }) => {
  const [sortsActive, setSortsActive] = useState([])
  const [visibleDropdown, setVisibleDropdown] = useState(false)

  const handleSelectSort = (value) => {
    const { key } = value
    let newSortValues = [...sortsActive]
    if (newSortValues.includes(key)) {
      const indexKey = newSortValues.findIndex((v) => v === key)
      newSortValues.splice(indexKey, 1)
    } else if (key === SORT_KEYS.RELEVANCE) {
      newSortValues = [key]
    } else {
      newSortValues.push(key)
    }
    setSortsActive(newSortValues)
  }

  const onApply = () => {
    setVisibleDropdown(false)
    setValue('sorts', sortsActive)
  }

  const onReset = () => {
    setSortsActive([])
    setValue('sorts', sortsActive)
  }

  const menus = [
    {
      label: <DropdownTitle>Sort</DropdownTitle>,
      key: '0',
      not_sort: true
    },
    ...SORT_OPTIONS,
    {
      label: (
        <ButtonGroup>
          <ButtonImage
            className="btn__apply"
            imageButton={sortsActive.length ? BG_BUTTON_APPLY_ACTIVE : BG_BUTTON_APPLY_UN_ACTIVE}
            text="Apply"
            fontSize="size_20"
            fontWeight="fw_700"
            onClick={sortsActive.length ? onApply : null}
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
      not_sort: true
    }
  ]

  const menuSort = (
    <Menu
      items={menus.map((item) => {
        if (item.not_sort) {
          return {
            label: item.label,
            key: item.key
          }
        }
        if (item.key === SORT_KEYS.RELEVANCE) {
          return {
            label: (
              <DropdownItem className={`${sortsActive.includes(item.key) ? 'active' : ''}`}>
                {item.label}
                <img className="icon" src={ICON_ARROW_UP_LONG} alt="icon" />
              </DropdownItem>
            ),
            key: item.key,
            onClick: (value) => handleSelectSort(value),
            disabled: sortsActive.length === 2
          }
        }
        return {
          label: (
            <DropdownItem className={`${sortsActive.includes(item.key) ? 'active' : ''}`}>
              {item.label}
              <img className="icon__active" src={ICON_ARROW_UP_LONG} alt="iconActive" />
            </DropdownItem>
          ),
          key: item.key,
          onClick: (value) => handleSelectSort(value),
          disabled:
            (sortsActive.length === 2 && !sortsActive.includes(item.key)) ||
            sortsActive.includes(SORT_KEYS.RELEVANCE)
        }
      })}
    />
  )

  const onTouch = () => setVisibleDropdown(!visibleDropdown)

  return (
    <Dropdown overlay={menuSort} trigger={['click']} placement="bottomRight" visible={visibleDropdown}>
      <DropdownWrapper onClick={onTouch}>
        <TextNormal className="dropdown__value" fontSize="size_20" fontWeight="fw_400">
          Sort:{' '}
          {sorts.map((s, index) =>
            index === 0 ? GET_LABEL_BY_VALUE[s] : `, ${GET_LABEL_BY_VALUE[s]}`
          )}
        </TextNormal>
        <Image className="icon__down" src={ICON_ARROW_DOWN} alt="icon__down" />
      </DropdownWrapper>
    </Dropdown>
  )
}

export default Sort
