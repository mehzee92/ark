import React from 'react'

function P({text,className,variant="typeOne"}) {
  var variants = {
    typeOne: `text-lg text-gray-300`,
    typeTwo: `text-sm md:text-md text-gray-400`,
    typeThree: `text-sm`
  }
  return (
    <p className={`${className} ${variants[variant]}`}>
      {text}
    </p>
  )
}

export default P
