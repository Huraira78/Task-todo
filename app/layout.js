
'use client'
import Header from "../Components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {/* <Header/> */}
        <main>{children}</main>
      </body>
    </html>
  )
}