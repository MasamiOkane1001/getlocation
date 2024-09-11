import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '位置情報取得アプリ',
  description: 'Next.jsで作成した位置情報取得アプリ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}