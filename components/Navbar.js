import React from 'react'
import { useRouter } from 'next/router'
import requests from '../utils/requests'

export default function Navbar() {
  const router = useRouter()
  return (
    <div className="flex justify-center bg-gray-600 text-gray-200 select-none text-xl lg:text-2xl">
      {Object.entries(requests).map(([key, { title, url }]) => (
        <h2
          onClick={() => router.push(`?genre=${key}`)}
          className="m-6 cursor-pointer hover:text-white active:text-red-400 "
          key={key}
        >
          {title}
        </h2>
      ))}
    </div>
  )
}

// Object.entries()는 객체에서 key, value 쌍의 배열을 반환한다
// for in 과 같이 하나씩 반환하므로 map, sort 등을 사용하여 하나씩 내놓을수있다
