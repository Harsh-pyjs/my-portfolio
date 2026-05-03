export const metadata = {
  title: {
    default: 'Harsh',
    template: '%s | Harsh',
  },
  description: 'Harsh Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
