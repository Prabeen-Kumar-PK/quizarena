import { motion } from 'framer-motion'

export function ActionButton({
  children,
  className = '',
  href,
  icon: Icon,
  type = 'button',
  variant = 'primary',
  ...props
}) {
  const Component = href ? motion.a : motion.button

  return (
    <Component
      className={`action-button action-button-${variant} ${className}`}
      href={href}
      type={href ? undefined : type}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {Icon ? <Icon aria-hidden="true" size={18} strokeWidth={2.2} /> : null}
      <span>{children}</span>
    </Component>
  )
}
