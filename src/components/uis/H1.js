import React from 'react'

function H1({text,variant="type_one"}) {
  var variants = {
    type_one: `text-3xl py-1 m-auto font-bold text-[#FFFFFF]`,
    type_two: `text-xl lg:text-4xl text-gray-300`,
    type_three: `text-xl text-gray-300 font-extrabold`,
    textGradient: `text-xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-pink-500 font-extrabold`
  }
  return (
    <h1 className={`${variants[variant]}`}>
      {text}
    </h1>
  )
}

export default H1
