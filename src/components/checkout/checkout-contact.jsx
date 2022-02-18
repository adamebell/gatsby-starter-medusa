import React from "react"
import Field from "../forms/field"
import { TinyLetter, Email, Submit } from 'react-tinyletter'
import styled from 'styled-components'
import SplitField from "../forms/split-field"


const StyledEmail = styled(Email)`
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  border: 1px solid #ccc;
  font-size: 18px;
  font-weight: 100;
  width: 70%;
`

const StyledSubmit = styled(Submit)`
  background: transparent;
  border-bottom-left-radius: 0;
  border-left: none;
  border-top-left-radius: 0;
  border: 1px solid #ccc;
  width: 30%;
  &:hover {
    background-color: #ccc;
    cursor: pointer;
  }
  &:active {
    background-color: deepskyblue;
    color: white;
  }
`



const CheckoutContact = ({ controller }) => {
  return (
    <div className="mt-3 mb-6">
      <SplitField>
      <Field
        formik={controller}
        name={"email"}
        defaultValue={controller.values.email}
        label={"Email"}
        autocomplete="email"
      />
      <Select
        label="Would you like to join the mailing list?"
        className="mt-4"
        name="newsletter"
        formik={controller}
        options={{label:"Yes",value="yes"},{label:"No",value="no"}}
      />
      </SplitField>
    </div>
  )
}



export default CheckoutContact
