import { ImagePlus } from 'lucide-react'
import { motion } from 'framer-motion'
import heroimage from '../assets/heroimage.jpg'

export function ImageFrame({
  compact = false,
  icon: Icon = ImagePlus,
  image,
  label,
  title,
}) {
  return (
    <motion.figure
      className={`image-frame ${compact ? 'image-frame-compact' : ''}`}
      whileHover={{ y: -4 }}
    >
      {image ? (
        <img alt={title} src={heroimage} />
      ) : (
        <div className="image-placeholder">
          <Icon aria-hidden="true" size={28} />
          <strong>{title}</strong>
          <span>{label}</span>
        </div>
      )}
    </motion.figure>
  )
}
