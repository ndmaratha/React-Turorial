import React from 'react'
import Interest from './Interest'
import Experience from './Experience'
import Education from './Education'
export default function Content({children}) {
  return (
    <div>
        <div>{children}</div>
      <Interest></Interest>
      <Experience></Experience>
      <Education></Education>
    </div>
  )
}
