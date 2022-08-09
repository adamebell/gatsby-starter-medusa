import React, { useEffect, useState } from "react"
import { classNames } from "../../utils/class-names"

const Banner = () => {
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    if (localStorage) {
      setIsHidden(localStorage.getItem("hideBannerMsg") === "true")
    }
  }, [])

  const hideBanner = () => {
    localStorage.setItem("hideBannerMsg", "true")
    setIsHidden(true)
  }

  return (
    <div
      className={classNames(
        isHidden ? "hidden" : "",
        "bg-ui-medium h-10 flex items-center justify-between text-sm font-medium text-blue px-4 sm:px-6 lg:px-8"
      )}
    >
      <p>If you don't see your country in the dropdown for shipping, please go to the home page and select the correct region.</p>
      <button onClick={() => hideBanner()}>&times;</button>
    </div>
  )
}

export default Banner
