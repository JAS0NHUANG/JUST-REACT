import React from 'react'
import styled from 'styled-components'

const FormInput = styled.div`
  font-size: 18px;
  text-align: left;
  padding-top: 15px;
  div {
    text-align: left;
  }
  span {
    color: #ef2334;
  }
`

const TextInput = styled.input`
  font-size: 18px;
  text-align: left;
  border: none;
  background: #dddedf;
  padding: 5px;
  width: 60%;
`

const Warnning = styled.p`
  color: #ef2334;
  height: 15px;
`

function FormText({
  isRequired,
  handleInput,
  userInputs,
  handleOnBlur,
  name
}) {
  const value = userInputs[name].content
  const isValid = userInputs[name].isValid
  const isEmpty = userInputs[name].isEmpty
  console.log(userInputs)
  let warnningMessage = ""
  if (isEmpty === true) {
    warnningMessage = "Field required."
  } else if (isValid === false) {
    warnningMessage = "Not valid input."
  }

  return(
    <FormInput>
      <label htmlFor={name}>
        {name.toUpperCase()} {isRequired && <span>*</span>}
      </label>
      <br />
      <TextInput
        onChange={handleInput}
        onBlur={handleOnBlur}
        type="text"
        name={name}
        placeholder="Your answer."
        value={value}
      />
      <br />
      <Warnning>
        {warnningMessage ? warnningMessage : ""}
      </Warnning>
    </FormInput>
  )
}

function FormEmail({
  isRequired,
  userInputs,
  handleInput,
  handleOnBlur
}) {
  const value = userInputs.email.content
  const isValid = userInputs.email.isValid
  const isEmpty = userInputs.email.isEmpty
  console.log(userInputs)
  let warnningMessage = ""
  if (isEmpty === true) {
    warnningMessage = "Field required."
  } else if (isValid === false) {
    warnningMessage = "Not valid input."
  }
  return(
    <FormInput>
      <label htmlFor="user_email">
        EMAIL {isRequired && <span>*</span>}
      </label>
      <br />
      <TextInput
        onChange={handleInput}
        onBlur={handleOnBlur}
        type="email"
        name="email"
        placeholder="Your answer."
        value={value}
      />
      <br />
      <Warnning>
        {warnningMessage ? warnningMessage : ""}
      </Warnning>
    </FormInput>
  )
}

function FormRadio({
  isRequired,
  userInputs,
  handleInput
}) {
  const id = userInputs.type.content
  return (
    <FormInput>
      <label htmlFor="type">
        YOUR TYPE {isRequired && <span>*</span>}
      </label>
      <br />
      <div>
        <input
          type="radio"
          name="type"
          id="type_1"
          onChange={handleInput}
          checked={id === "type_1"}
        />
        <label htmlFor="type_1">
          <span> </span>Super imagination in your bed
        </label>
        <br />
      </div>
      <br />
      <div>
        <input
          type="radio"
          name="type"
          id="type_2"
          onChange={handleInput}
          checked={id === "type_2"}
        />
        <label htmlFor="type_2">
          <span> </span>All done effortless on the floor.
        </label>
        <br />
      </div>
      <Warnning />
    </FormInput>
  )
}

export { FormText, FormEmail, FormRadio }
