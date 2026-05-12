'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Page() {
  const [members1, setMembers1] = useState<number | null>(null)
  const [members2, setMembers2] = useState<number | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const res1 = await fetch('https://discord.com/api/v9/invites/SKYuJz9SKz?with_counts=true')
        const data1 = await res1.json()
        setMembers1(data1.approximate_member_count)

        const res2 = await fetch('https://discord.com/api/v9/invites/CJ42UZ6tmw?with_counts=true')
        const data2 = await res2.json()
        setMembers2(data2.approximate_member_count)
      } catch {
        setMembers1(null)
        setMembers2(null)
      }
    }

    fetchData()
  }, [])

  return (
    <main className="relative min-h-screen text-white overflow-hidden">

      {/* 🔥 Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoH0Jc5P_9uEoNUiyWCTN2fbGlBeFabXMtpg&s"
          alt="background"
          className="w-full h-full object-cover blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* 🔝 Navbar */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-20">
        <div className="flex items-center justify-between px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg">

          <div className="flex items-center gap-3">
            <div className="px-3 py-1 rounded-lg bg-blue-500/20 border border-blue-400/30">
              <span className="font-mono text-blue-300 text-sm">{'</>'}</span>
            </div>
            <span className="text-white font-semibold text-lg">Harsh</span>
          </div>

          {/* ✅ CLICKABLE NAV */}
          <div className="hidden md:flex gap-8 text-sm text-gray-200">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/experience" className="hover:text-white">Experience</Link>
            <Link href="/production" className="hover:text-white">Production</Link>
            <Link href="/testimonials" className="hover:text-white">Testimonials</Link>
          </div>

          <button className="bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded-xl text-sm">
            Hire Me
          </button>
        </div>

        {/* 📝 Note */}
        <p className="text-center text-xs text-gray-400 mt-2 opacity-70 italic">
          Harsh had an important position in these servers; either he owned them or held staff roles.
        </p>
      </div>

      {/* 🧊 Cards */}
      <div className="flex items-center justify-center min-h-screen pt-40 px-10">
        <div className="flex gap-8 flex-wrap justify-center">

          {/* AlphaMC */}
          <div className="w-[260px] h-[200px] rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_18px_rgba(255,255,255,0.15)]">
            <div className="flex justify-between items-start">
              <img src="/alphamc.png" className="w-12 h-12 rounded-lg" />
              <span className="text-[11px] font-semibold px-5 py-[3px] rounded-full bg-[#0b2e1f] text-green-400 border border-green-500/25 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                ACTIVE
              </span>
            </div>

            <h2 className="mt-4 text-lg font-semibold">AlphaMC</h2>
            <p className="text-gray-400 text-xs font-semibold">OWNER / DEV</p>

            <div className="flex justify-between mt-6 text-xs text-gray-400">
              <a href="https://discord.gg/SKYuJz9SKz" target="_blank">Join Discord</a>
              <span>{members1 ? `${members1}+ Members` : 'Loading...'}</span>
            </div>
          </div>

          {/* HeartFall */}
          <div className="w-[260px] h-[200px] rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_18px_rgba(255,255,255,0.15)]">
            <div className="flex justify-between items-start">
              <img src="/Heartfall.png" className="w-12 h-12 rounded-lg" />
              <span className="text-[11px] font-semibold px-5 py-[3px] rounded-full bg-[#0b2e1f] text-green-400 border border-green-500/25 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                ACTIVE
              </span>
            </div>

            <h2 className="mt-4 text-lg font-semibold">HeartFall</h2>
            <p className="text-gray-400 text-xs font-semibold">OWNER / DEV</p>

            <div className="flex justify-between mt-6 text-xs text-gray-400">
              <a href="https://discord.gg/CJ42UZ6tmw" target="_blank">Join Discord</a>
              <span>{members2 ? `${members2}+ Members` : 'Loading...'}</span>
            </div>
          </div>

          {/* Quinx */}
          <div className="w-[260px] h-[200px] rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_18px_rgba(255,255,255,0.15)]">
            <div className="flex justify-between items-start">
              <img src="/quinx.png" className="w-12 h-12 rounded-lg" />
              <span className="text-[11px] font-semibold px-5 py-[3px] rounded-full bg-[#2b0f0f] text-red-400 border border-red-500/25 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                INACTIVE
              </span>
            </div>

            <h2 className="mt-4 text-lg font-semibold">Quinx</h2>
            <p className="text-gray-400 text-xs font-semibold">OWNER / DEV</p>

            <div className="flex justify-between mt-6 text-xs text-gray-400">
              <span className="text-gray-500">Discord: N/A</span>
              <span className="text-gray-500">N/A Members</span>
            </div>
          </div>

          {/* Omex */}
          <div className="w-[260px] h-[200px] rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_18px_rgba(255,255,255,0.15)]">
            <div className="flex justify-between items-start">
              <img src="/omex.png" className="w-12 h-12 rounded-lg" />
              <span className="text-[11px] font-semibold px-5 py-[3px] rounded-full bg-[#2b0f0f] text-red-400 border border-red-500/25 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                INACTIVE
              </span>
            </div>

            <h2 className="mt-4 text-lg font-semibold">Omex</h2>
            <p className="text-gray-400 text-xs font-semibold">OWNER / DEV</p>

            <div className="flex justify-between mt-6 text-xs text-gray-400">
              <span className="text-gray-500">Discord: N/A</span>
              <span className="text-gray-500">N/A Members</span>
            </div>
          </div>

        </div>
      </div>

      {/* 🔻 Footer */}
      <div className="fixed bottom-5 right-6 z-20">
        <div className="text-[11px] text-blue-200 text-right leading-tight
                        px-3 py-2 rounded-xl
                        bg-blue-500/10 backdrop-blur-md
                        border border-blue-400/20
                        shadow-[0_0_12px_rgba(59,130,246,0.15)]">
          <p className="font-medium">Made by Harsh</p>
          <p className="text-blue-300/80">© 2026 All rights reserved</p>
        </div>
      </div>

    </main>
  )
}
