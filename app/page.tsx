'use client'

export const metadata = {
  title: 'Home',
}

import { useEffect, useState } from 'react'
import Link from 'next/link'

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

  // 🔁 Role animation
  const roles = ['MINECRAFT Expert', 'MINECRAFT Specialist', 'MINECRAFT PvPer']
  const [roleIndex, setRoleIndex] = useState(0)
  const [fade, setFade] = useState(true)

  // 🔹 Fetch Discord
  useEffect(() => {
    async function fetchDiscord() {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`)
        const json = await res.json()
        const data: DiscordData = json.data

        // Avatar
        if (data.discord_user.avatar) {
          const avatarUrl = `https://cdn.discordapp.com/avatars/${DISCORD_ID}/${data.discord_user.avatar}.png?size=256`
          setAvatar(avatarUrl)
        } else {
          setAvatar(null)
        }

        setUsername(data.discord_user.username)

        // ✅ Correct status mapping
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

  // 🔁 Role animation
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

      {/* 🔝 Navbar */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-20">
        <div className="flex items-center justify-between px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg">

          <div className="flex items-center gap-3">
            <div className="px-3 py-1 rounded-lg bg-blue-500/20 border border-blue-400/30">
              <span className="font-mono text-blue-300 text-sm">{'</>'}</span>
            </div>
            <span className="text-white font-semibold text-lg">Harsh</span>
          </div>

          <div className="hidden md:flex gap-8 text-sm text-gray-200">
            <div className="hidden md:flex gap-8 text-sm text-gray-200">
  <Link href="/" className="cursor-pointer hover:text-white">
    Home
  </Link>

  <Link href="/experience" className="cursor-pointer hover:text-white">
    Experience
  </Link>

  <Link href="/production" className="cursor-pointer hover:text-white">
    Production
  </Link>

  <Link href="/testimonials" className="cursor-pointer hover:text-white">
    Testimonials
  </Link>
</div>
          </div>

          <button className="bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded-xl text-sm">
            Hire Me
          </button>

        </div>
      </div>

      {/* 🔥 Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://cms-assets.xboxservices.com/assets/65/15/6515e0be-8482-48bb-97f9-737010626408.jpg?n=Minecraft_Sneaky-Slider-1084_Tiny-Takeover_1600x675.jpg%202"
          className="w-full h-full object-cover blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* 🧱 Hero */}
      <div className="flex items-center min-h-screen px-24">
        <div className="flex items-center justify-between w-full max-w-7xl">

          {/* LEFT */}
          <div className="relative flex flex-col items-center">
            {avatar ? (
              <div className="p-4 rounded-full bg-white/10">
                <img
                  src={avatar}
                  className="w-72 h-72 rounded-full border-4 border-white/20 object-cover"
                />
              </div>
            ) : (
              <div className="w-72 h-72 rounded-full bg-gray-500 flex items-center justify-center">
                PFP
              </div>
            )}

            {/* Status dot (big avatar) */}
            <span className={`absolute bottom-10 right-10 w-5 h-5 rounded-full border-2 border-black ${
              status === 'Online'
                ? 'bg-green-500'
                : status === 'Idle'
                ? 'bg-yellow-400'
                : status === 'Do Not Disturb'
                ? 'bg-red-500'
                : 'bg-gray-500'
            }`}></span>

            <div className="mt-3 px-5 py-1 rounded-full bg-black/40 text-sm border border-white/10">
              {status}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-start gap-16">

            {/* TEXT */}
            <div className="max-w-xl space-y-6 ml-12">

              <h1 className="text-7xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,197,94,0.6)]">
                {(username ? username.split('.')[0].toUpperCase() : 'HARSH')}
              </h1>

              <h2 className={`text-4xl font-bold text-green-400 transition-all duration-500 ${
                fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}>
                {roles[roleIndex].split(' ')[0]}{' '}
                <span className="text-white">
                  {roles[roleIndex].split(' ').slice(1).join(' ')}
                </span>
              </h2>

              <p className="text-gray-200 text-lg">
                Minecraft Plugin Developer & Server Optimization Specialist,
                focused on scalable server systems and high-performance gameplay.
              </p>

            </div>

            {/* 🔷 DISCORD CARD */}
            <div className="w-[320px] bg-[#1e1f22]/90 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">

              <div className="h-20 bg-[#050505]"></div>

              <div className="p-4 -mt-10">

                <div className="relative w-fit">
                  {avatar && (
                    <img
                      src={avatar}
                      className="w-20 h-20 rounded-full border-4 border-[#1e1f22]"
                    />
                  )}

                  <span className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-[#1e1f22] ${
                    status === 'Online'
                      ? 'bg-green-500'
                      : status === 'Idle'
                      ? 'bg-yellow-400'
                      : status === 'Do Not Disturb'
                      ? 'bg-red-500'
                      : 'bg-gray-500'
                  }`}></span>
                </div>

                <h2 className="mt-3 text-white font-semibold text-lg">
                  Harsh
                </h2>

                <p className="text-gray-400 text-sm">@harsh.apk</p>

                <p className="text-green-400 text-xs mt-1">
                  {status}
                </p>

                <div className="my-3 border-t border-white/10"></div>

                <div className="space-y-1 text-sm text-gray-200">
                  <p>Owner/Developer of @AlphaMC</p>
                  <p>Owner/Developer of @Quinx</p>
                  <p>Manager of @FriendsSMP</p>
                  <p className="italic text-gray-400 mt-2">Veni, Vidi, Vici</p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
     
     {/* 🔻 Footer */}
<div className="fixed bottom-5 right-6 z-20">
  <div className="text-[11px] text-white-200 text-right leading-tight
                  px-3 py-2 rounded-xl
                  bg-white-500/10 backdrop-blur-md
                  border border-blue-400/20
                  shadow-[0_0_12px_rgba(59,130,246,0.15)]">
    <p className="font-medium">Made by Harsh</p>
    <p className="text-blue-300/80">© 2026 All rights reserved</p>
  </div>
</div>
    </main>
  )
}
