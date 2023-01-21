import React, { useState } from 'react'

interface GiffyProps {
  gifLink: string
  gifAlt?: string
  gifWidth?: number
  gifHeight?: number
  children: React.ReactNode
}

const Giffy: React.FC<GiffyProps> = ({ gifLink, gifAlt, gifWidth, gifHeight, children }) => {
  const [onHover, setOnHover] = useState(false)

  return (
    <div onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
      {children}
      {onHover && <img src={gifLink} alt={gifAlt} width={gifWidth} height={gifHeight} />}
    </div>
  )
}

Giffy.defaultProps = {
  gifAlt: '',
  gifWidth: 100,
  gifHeight: 100,
}

export default Giffy
