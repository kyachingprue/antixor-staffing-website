import { motion } from 'motion/react'

export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 28,
  className = '',
  once = true,
  amount = 0.2,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div

  const offsets = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },

    // Added
    top: { y: distance, x: 0 },
    bottom: { y: -distance, x: 0 },

    none: { x: 0, y: 0 }
  }

  const offset = offsets[direction] ?? offsets.up

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

export function StaggerGroup({
  children,
  className = '',
  stagger = 0.12,
  once = true,
  amount = 0.2
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = '',
  direction = 'up',
  distance = 24
}) {
  const offsets = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    top: { y: distance, x: 0 },
    bottom: { y: -distance, x: 0 },
    none: { x: 0, y: 0 }
  }

  const offset = offsets[direction] ?? offsets.up

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          ...offset
        },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}
