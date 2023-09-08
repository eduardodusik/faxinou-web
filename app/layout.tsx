import './globals.css'
import { Inter } from 'next/font/google'
import SupabaseProvider from "@/app/supabase-provider";

const inter = Inter({ subsets: ['latin'] })

export const dynamic = 'force-dynamic'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-BR">
    <head>
      <title>Faxinou</title>
      <meta name="description" content="A melhor plataforma de faxina do Brasil" />
      <meta name="viewport" content="width=device-width, user-scalable=no" />
    </head>
      <body className={inter.className}>
        <SupabaseProvider>
          {children}
        </SupabaseProvider>
      </body>
    </html>
  )
}
