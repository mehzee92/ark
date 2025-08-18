import React from 'react'

export default function SectionHeading({ text, variant="type_one" }) {
    var variants = {
        type_one: ` text-4xl text-center font-extrabold bg-gradient-to-r from-cyan-500 to-fuchsia-800 bg-clip-text text-transparent`,
        heroSection:`text-4xl text-center font-extrabold yellow-text`

      }
    return (
        <div>
            <h1 className={`${variants[variant]}`} style={{textShadow:"2px 2px black"}} >
                {text}
            </h1>
        </div>
    )
}
