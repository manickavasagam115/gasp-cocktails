import gsap from "gsap"
import {ScrollTrigger,SplitText } from "gsap/all"
import React from 'react'


gsap.registerPlugin(ScrollTrigger, SplitText)
const App = () => {
  return (
    <div className="flex-center h-[100vh]">
        <h1 className="text-sxl text-indigo-300">Hello Stark</h1>
    </div>
  )
}

export default App
