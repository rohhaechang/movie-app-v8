import React from 'react'

export default function Result({ results }) {
  return (
    <div>
      {results.map((result) => (
        <h1>{result.title}</h1>
      ))}
    </div>
  )
}
