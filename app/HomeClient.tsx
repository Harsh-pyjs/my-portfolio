'use client'

import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'

const DISCORD_ID = '1183396538140073998'

type DiscordData = {
  discord_user: {
    avatar: string
    username: string
  }
  discord_status: 'online' | 'offline' | 'idle' | 'dnd'
}

export default function Home() {
  const [avatar, setAvatar] = useState<string | null>(null)
  const [status, setStatus] = useState('Loading...')
  const [username, setUsername] = useState('')

  const roles = ['MINECRAFT Expert', 'MINECRAFT Specialist', 'MINECRAFT PvPer']
  const [roleIndex, setRoleIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    async function fetchDiscord() {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`)
        const json = await res.json()
        const data: DiscordData = json.data

        if (data.discord_user.avatar) {
          setAvatar(
            `https://cdn.discordapp.com/avatars/${DISCORD_ID}/${data.discord_user.avatar}.png?size=256`
          )
        }

        setUsername(data.discord_user.username)

        const statusMap: Record<string, string> = {
          online: 'Online',
          idle: 'Idle',
          dnd: 'Do Not Disturb',
          offline: 'Offline',
        }

        setStatus(statusMap[data.discord_status] || 'Offline')
      } catch {
        setStatus('Error')
      }
    }

    fetchDiscord()
    const interval = setInterval(fetchDiscord, 60000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setFade(true)
      }, 300)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="relative min-h-screen text-white overflow-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://cms-assets.xboxservices.com/assets/65/15/6515e0be-8482-48bb-97f9-737010626408.jpg"
          className="w-full h-full object-cover blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-5xl font-bold">
          {(username || 'HARSH').toUpperCase()}
        </h1>
      </div>
    </main>
  )
}
