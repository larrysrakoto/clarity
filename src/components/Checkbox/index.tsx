import type { ChangeEvent } from 'react'
import './Checkbox.scss'

type Props = {
  id?: string
  name?: string
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

const Checkbox = ({ id, name, label, checked, onChange }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.checked)

  return (
    <label className="Checkbox" htmlFor={id}>
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="native"
      />
      <span className="box" />
      <span className="label">{label}</span>
    </label>
  )
}

export default Checkbox
