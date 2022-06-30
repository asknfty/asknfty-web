import { Form } from 'antd'
import styled from 'styled-components'

export const FormItemStyled = styled(Form.Item)`
  margin-bottom: 0;
  .ant-input-affix-wrapper {
    height: 56px;
    width: 640px;
    padding: 17px 20px;
    border: 2px solid ${({ theme }) => theme.bd_grey_dark};
  }
`
