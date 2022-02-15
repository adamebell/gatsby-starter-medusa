import React from "react"
import Field from "../forms/field"

const CheckoutContact = ({ controller }) => {
  return (
    <div className="mt-3 mb-6">
      <Field
        formik={controller}
        name={"email"}
        defaultValue={controller.values.email}
        label={"Email"}
        autocomplete="email"
      />
      <Select
          label="Would you like to join the mailing list to get notified about new games?"
          name="newsletter"
          formik={newsletter}
          defaultValue={""}
          options={
            {label:"Yes", value:"Yes"},{label:"No",value:"No"}
        }
        />
    </div>
  )
}

export default CheckoutContact
