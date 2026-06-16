import type { ReactNode } from 'react'
import './Button.scss'

type Props = {
  children?: ReactNode
  variant?: 'primary' | 'secondary'
  iconLeft?: ReactNode
  iconRight?: ReactNode
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
  onClick?: () => void
  disabled?: boolean
  ariaLabel?: string
}

const Button = ({
  children,
  variant = 'primary',
  iconLeft,
  iconRight,
  type = 'button',
  fullWidth = false,
  onClick,
  disabled = false,
  ariaLabel
}: Props) => {
  const hasText = Boolean(children)
  const classes = ['Button', variant]
  if (fullWidth) classes.push('full')
  if (!hasText) classes.push('icon-only')

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes.join(' ')}
      aria-label={ariaLabel}
    >
      {iconLeft && <span className="icon-slot left">{iconLeft}</span>}
      {hasText && <span className="label">{children}</span>}
      {iconRight && <span className="icon-slot right">{iconRight}</span>}
    </button>
  )
}

export default Button
