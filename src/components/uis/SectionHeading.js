import React from 'react'

export default function SectionHeading({ text, variant="type_one" }) {
    var variants = {
        type_one: ` text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-fuchsia-800 bg-clip-text text-transparent`,
        heroSection:`text-4xl font-extrabold yellow-text`

      }
    return (
        <div>
            <h1 className={`${variants[variant]}`}>
                {text}
            </h1>
        </div>
    )
}
