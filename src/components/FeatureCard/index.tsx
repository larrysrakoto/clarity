import type { ReactNode } from 'react'
import './FeatureCard.scss'

type Props = {
  icon: ReactNode
  title: string
  description: string
}

const FeatureCard = ({ icon, title, description }: Props) => {
  return (
    <div className="FeatureCard">
      <span className="icon-wrap">{icon}</span>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard
