import React from 'react'
import styled from 'styled-components'
import {
  FormText,
  FormEmail,
  FormRadio
} from './FormInputs'
import useForm from '../hooks/useForm'

const FormBody = styled.form`
  text-align: left;
  max-width: 576px;
  width: 100%;
  margin: 60px auto;
  padding: 40px;
  border: 1px solid;
  box-shadow: 1.8px 2.4px 5px 0 rgba(0, 0, 0, 0.3);
  p {
    text-align: left;
    font-size: 18px;
    margin: 20px auto;
    span {
      color: #ef2334;
    }
  }
`

export default function FormWrapper() {
  const { userInputs, handleInput, handleSubmit, handleOnBlur } = useForm()
  return (
    <FormBody action="" onSubmit={handleSubmit}>
      <h1>React Form</h1>
      <p>Event Date：2077/12/32 ~ 2078/12/33</p>
      <p>Event Location： Pandora</p>
      <p><span>* Required</span></p>
      <FormText
        isRequired={true}
        name="nickname"
        userInputs={userInputs}
        handleInput={handleInput}
        handleOnBlur={handleOnBlur}
      />
      <FormEmail
        isRequired={true}
        userInputs={userInputs}
        handleInput={handleInput}
        handleOnBlur={handleOnBlur}
      />
      <FormText
        isRequired={true}
        name="phone"
        userInputs={userInputs}
        handleInput={handleInput}
        handleOnBlur={handleOnBlur}
      />
      <FormRadio
        isRequired={true}
        userInputs={userInputs}
        handleInput={handleInput}
        handleOnBlur={handleOnBlur}
      />
      <FormText
        isRequired={true}
        name="how"
        userInputs={userInputs}
        handleInput={handleInput}
        handleOnBlur={handleOnBlur}
      />
      <FormText
        isRequired={false}
        name="other"
        userInputs={userInputs}
        handleInput={handleInput}
      />
      <button>Submit</button>
    </FormBody>
  )
}
