'use client'

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

export default function HomeClient() {
  // 🔥 ALL your existing code stays EXACTLY SAME
}
