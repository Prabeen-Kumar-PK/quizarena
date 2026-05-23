import { motion } from 'framer-motion'

export function FeatureSlide({ copy, icon: Icon, title }) {
  return (
    <motion.article className="feature-slide" whileHover={{ y: -4 }}>
      <div className="feature-icon">
        <Icon aria-hidden="true" size={22} />
      </div>
      <h3>{title}</h3>
      <p>{copy}</p>
    </motion.article>
  )
}
