import type { ChangeEvent, ReactNode } from 'react'
import './Input.scss'

type Props = {
  id?: string
  name?: string
  label?: string
  type?: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
  actionLabel?: string
  onActionClick?: () => void
  autoComplete?: string
  required?: boolean
}

const Input = ({
  id,
  name,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  leadingIcon,
  trailingIcon,
  actionLabel,
  onActionClick,
  autoComplete,
  required = false
}: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)

  return (
    <div className="Input">
      {(label || actionLabel) && (
        <div className="header">
          {label && (
            <label htmlFor={id} className="label">
              {label}
            </label>
          )}
          {actionLabel && (
            <button type="button" className="action" onClick={onActionClick}>
              {actionLabel}
            </button>
          )}
        </div>
      )}
      <div className="field">
        {leadingIcon && <span className="leading">{leadingIcon}</span>}
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          autoComplete={autoComplete}
          required={required}
          className="control"
        />
        {trailingIcon && <span className="trailing">{trailingIcon}</span>}
      </div>
    </div>
  )
}

export default Input
