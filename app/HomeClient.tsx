'use client'

import { useEffect, useState } from 'react'

export default function HomeClient() {
  const [username, setUsername] = useState('')

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api.lanyard.rest/v1/users/1183396538140073998')
      const json = await res.json()
      setUsername(json.data.discord_user.username)
    }

    fetchData()
  }, [])

  return <div>{username}</div>
}
