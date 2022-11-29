import React from 'react'
import Image from 'next/image'
import { HandThumbUpIcon } from '@heroicons/react/24/outline'

function Card({ result }) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original'
  return (
    <div>
      <Image
        layout="responsive"
        src={BASE_URL + result.backdrop_path}
        width={200}
        height={100}
        alt={result.title || result.name}
      />
      <div className="">
        <p className="truncate">{result.overview}</p>
        <h2>{result.title || result.name}</h2>
        <p>
          {result.release_date || result.first_air_date}
          <HandThumbUpIcon className="h-5" />
          {result.vote_count}
        </p>
      </div>
    </div>
  )
}

export default Card
