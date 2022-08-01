import styled from 'styled-components'

export const MailWrapper = styled.div`
  .input-mailchimp {
    text-align: left;
    padding: 10px 16px;
    font-size {
      font-size: 16px;
      line-height: 24px;
      color: #AFABAB;
    }
    &:placeholder {
      color: #AFABAB;
    }
  }
  .btn-submit {
    background: #D92626;
    padding: 10px 4px;
    height: 100%;
  }
  .mc__alert {
    color: red;
    margin-top: 4px;
    &--success {
      color: green;
    }
    &--error {
      color: red;
    }
  }
`