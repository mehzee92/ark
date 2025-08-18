import React from 'react'

function H4({text,className,variant="typeOne"}) {
  var variants = {
    typeOne: `text-lg  font-bold text-cyan-500`,
    typeTwo: `text-lg  font-bold text-gray-200`,
    typeThree: ``
  }
  return (
    <h4 className={`${className} ${variants[variant]} `}>
      {text}
    </h4>
  )
}

export default H4
