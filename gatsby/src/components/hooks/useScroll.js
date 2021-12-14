import { useState, useEffect } from "react"

export const useScroll = () => {
  // DETECT USER SCROLLING
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50)
    })
  }, [])
  return {
    scroll,
  }
}
