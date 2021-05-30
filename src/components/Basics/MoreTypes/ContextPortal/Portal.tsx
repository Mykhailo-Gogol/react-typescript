import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

const Portal: React.FC<React.ReactNode> = ({ children }) => {
  const el: HTMLDivElement = document.createElement('div')
  useEffect(() => {
    document.body.appendChild(el)

    return () => {
      document.body.removeChild(el)
    }
  }, [el])

  return createPortal(children, el)
}

const PortalSection: React.FC = () => {
  return (
    <div>
      <Portal>
        <section>
          <h1>Portal</h1>
        </section>
      </Portal>
    </div>
  )
}

export default PortalSection
