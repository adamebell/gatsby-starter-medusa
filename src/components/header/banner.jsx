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
      <p>Please note that we are having some issues with the site at this time. If you are unable to checkout, please come back later or email me at adamebellgames@gmail.com to manually place an order. Thanks for your patience!</a></p>
      <button onClick={() => hideBanner()}>&times;</button>
    </div>
  )
}

export default Banner
