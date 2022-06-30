import styled from "styled-components"

export const DropdownWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 228px;
  height: 56px;
  background: white;
  padding: 0 16px;
  border: 2px solid ${({ theme }) => theme.bd_grey_low};
  cursor: pointer;

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

  &.active {
    .icon__active {
      display: block;
    }
  }

  .icon__active {
    position: absolute;
    right: 0;
    display: none;
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