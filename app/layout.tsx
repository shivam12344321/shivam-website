export const metadata = {
  title: 'shivam kumar',
  description: 'shivam kumar-portfolio',
   icons: {
    icon: "/favicon.jpg",  
  },
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
