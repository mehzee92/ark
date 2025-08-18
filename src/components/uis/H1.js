import React from 'react'

function H1({text,variant="type_one"}) {
  var variants = {
    type_one: `text-3xl text-gray-300 font-extrabold`,
    type_two: `text-2xl lg:text-4xl text-gray-300`,
    type_three: `text-xl text-gray-300 font-extrabold`,
    textGradient: `text-3xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 font-extrabold`
  }
  return (
    <h1 className={`${variants[variant]}`}>
      {text}
    </h1>
  )
}

export default H1
