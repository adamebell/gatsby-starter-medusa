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
      <p>Hello and welcome! The site is currently experiencing issues, please check back later or send an email to adamebellgames@gmail.com to manually place an order. Thank you for your patience.</p>
      <button onClick={() => hideBanner()}>&times;</button>
    </div>
  )
}

export default Banner
