import React, { useState } from 'react'
import { Input, Button } from 'antd'
import { MailWrapper } from './styled'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

const URL = 'https://prismwallet.us14.list-manage.com/subscribe/post?u=e86edba3e1823ba92c2f8539d&id=f6c7882aa6'

const CustomForm = ({ status, message, onValidated, ...rest }) => {

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email
      })
  }

  const clearFields = () => {
    setEmail('');
  }

  const handleOnChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <MailWrapper {...rest}>
      <form className="mc__form" onSubmit={(e) => handleSubmit(e)} id='mc-embedded-subscribe-form'>
        <Input.Group compact className="mc__field-container">
          <Input
            className="input-mailchimp"
            placeholder="Email"
            style={{ width: 'calc(100% - 200px)' }}
            onChange={handleOnChange}
            type="email"
            value={email}
          />
          <Button onClick={(e) => handleSubmit(e)} className="btn-submit" type="primary">Subcribe now</Button>
          {status === "error" && (
            <div
              className="mc__alert mc__alert--error"
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          {status === "success" && (
            <div
              className="mc__alert mc__alert--success"
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
        </Input.Group>
      </form>
    </MailWrapper>
  )
}

const MailForm = () => (
  <div className="mc__form-container">
    <MailchimpSubscribe
      url={URL}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  </div>
)

export default MailForm