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
      <p>Welcome to adamebell.games! Grab yourself a game or two, and <a href="https://tinyletter.com/adamebell" target="_blank">join the newsletter!</a></p>
      <button onClick={() => hideBanner()}>&times;</button>
    </div>
  )
}

export default Banner
