import type { CSSProperties } from 'react'
import './Icon.scss'

type Props = {
  src: string
  mode?: 'mask' | 'bg'
  size?: string
  className?: string
}

const Icon = ({ src, mode = 'mask', size, className }: Props) => {
  const style = { '--icon-src': `url(${src})`, ...(size ? { fontSize: size } : {}) } as CSSProperties

  return <span className={`Icon ${mode}${className ? ` ${className}` : ''}`} style={style} aria-hidden="true" />
}

export default Icon
