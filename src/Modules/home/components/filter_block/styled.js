import styled from 'styled-components'

export const CheckBoxWrapper = styled.div`
  max-width: 640px;
  text-align: left;
  margin: 25px auto 0 auto;
`

export const DropdownWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  background: white;
  padding: 0 16px;
  border: 2px solid ${({ theme }) => theme.bd_grey_low};
  cursor: pointer;

  &.filter__wrapper {
    width: 122px;
  }

  &.sort__wrapper {
    width: 228px;
  }

  &.ant-dropdown-open {
    border-color: ${({ theme }) => theme.bd_active_red};
  }

  .dropdown__value {
    width: 80%;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

`

export const DropdownTitle = styled.div`
  display: flex;
  font-size: 26px;
  font-weight: 700;
`

export const DropdownItem = styled.div`
  display: flex;
  font-size: 16px;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.bd_grey_low};
  position: relative;
  pointer-events: none;

  .icon {
    position: absolute;
    right: 0;
    display: none;
    &.filter {
      display: block;
      transform: rotate(180deg);
    }
  }

  &.active {
    .icon {
      display: block;
    }
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 29px;

  .btn__apply {
    img {
      width: 102px;
      height: 52px;
    }
  }
`
