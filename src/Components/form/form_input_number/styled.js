import { Form } from 'antd'
import styled from 'styled-components'
import { MEDIA_WIDTHS } from 'Themes'

export const FormItemStyled = styled(Form.Item)`
  margin-bottom: 0;
  .ant-input-affix-wrapper {
    min-width: 640px;
    padding: 0 0 0 14px;
    border: 2px solid #DBDBDB;
    input {
      font-size: 20px;
      line-height: 28px;
      &::placeholder {
        font-size: 20px;
        line-height: 28px;
        color: ${({ theme }) => theme.title_grey};
      }
    }
  }
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    .ant-input-affix-wrapper {
      min-width: 328px;
    }
  }
`
