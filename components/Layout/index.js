import React from 'react'

import { Navbar } from 'components/Navbar'

export const Layout = ({ children }) => {
  return(
    <div>
      <Navbar />
      {children}
      {/* Footer */}
    </div>
  )
}