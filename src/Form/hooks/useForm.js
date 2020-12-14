import { useState, useEffect } from 'react';

export default function useForm() {
  const [userInputs, setUserInputs] = useState({
    "nickname": {
      "content": "",
      "isValid": true,
      "isEmpty": false
    },
    "email": {
      "content": "",
      "isValid": true,
      "isEmpty": false
    },
    "phone": {
      "content": "",
      "isValid": true,
      "isEmpty": false
    },
    "type": {
      "content": "",
      "isValid": true,
      "isEmpty": false
    },
    "how": {
      "content": "",
      "isValid": true,
      "isEmpty": false
    },
    "other": {
      "content": "",
      "isValid": true,
      "isEmpty": false
    }
  })

  function handleInput(event) {
    const target = event.target
    const value = target.type === 'radio' ? target.id : target.value
    const name = event.target.name
    setUserInputs({
      ...userInputs,
      [name]: {
        "content": value,
        "isValid": true,
        "isEmpty": false
      }
    })
    console.log(userInputs)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const userInputsKeys = Object.keys(userInputs)
    const userInputsValues = Object.values(userInputs)
    let userInputsString = ""
    for (let i = 0; i < userInputsKeys.length; i++) {
      if (
        userInputsValues[i].isValid === false ||
        userInputsValues[i].content === ""
      ) {
        alert("Please fill out the form correctly.")
        return
      }
      userInputsString += `${userInputsKeys[i]}: ${userInputsValues[i].content}\n`
    }
    alert(userInputsString)
  }

  function handleOnBlur(event) {
    const target = event.target
    const value = target.type === 'radio' ? target.id : target.value
    const name = event.target.name
    let isEmpty = false
    if (value === "") isEmpty = true
    setUserInputs({
      ...userInputs,
      [name]: {
        "content": value,
        "isValie": true,
        "isEmpty": isEmpty
      }
    })
  }

  return ({
    handleInput,
    handleSubmit,
    handleOnBlur,
    userInputs
  })
}
