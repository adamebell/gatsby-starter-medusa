import React, { useEffect, useState } from "react"
import { classNames } from "../../utils/class-names"
import RegionTooltip from "../checkout/region-tooltip"


const Select = ({
  label,
  name,
  autocomplete = "on",
  formik,
  defaultValue,
  options,
  className,
  tooltip,
}) => {
  const [error, setError] = useState(null)

  useEffect(() => {
    if (formik.errors?.[name] && formik.touched?.[name]) {
      setError(formik.errors[name])
    }
  }, [formik, name])

  return (
    <div className={`w-full ${className}`}>
      <div className='flex flex-row items-start'>
      {label && <p className="font-medium text-sm mb-2">{label}</p>}
      </div>
      <select
        name={name}
        autoComplete={autocomplete}
        value={defaultValue}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={classNames(
          error ? "shadow-error" : "shadow",
          "rounded-md px-4 py-2 text-xs w-full border-transparent"
        )}
      >
        <option value="">Yes or No</option>
            <option key="0" value="Yes">
              Yes
            </option>
            <option key="1" value="No">
              No
            </option>
      </select>
      {error && (
        <div
          role="alert"
          className="flex items-center text-xs mt-2 transition duration-150 ease-in-out"
        >
          <div className="bg-red-400 text-white w-4 h-4 rounded-lg text-center mr-2">
            !
          </div>
          <span>{error}</span>
        </div>
      )}
    </div>
  )
}

export default Select
