import './Logo.scss'

type Props = {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
}

const Logo = ({ variant = 'dark', size = 'md' }: Props) => {
  return (
    <div className={`Logo ${variant} ${size}`}>
      <span className="mark" />
      <span className="wordmark">Clarity360</span>
    </div>
  )
}

export default Logo
