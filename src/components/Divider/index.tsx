import './Divider.scss'

type Props = {
  label?: string
}

const Divider = ({ label }: Props) => {
  return (
    <div className={`Divider ${label ? 'with-label' : ''}`}>
      {label && <span className="label">{label}</span>}
    </div>
  )
}

export default Divider
