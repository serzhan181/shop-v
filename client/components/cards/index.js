import { Card } from './card'
import { MotionFlex } from '@/components/common'
import { motion } from 'framer-motion'

const parentVariant = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
}

const childrenVariants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeIn',
    },
  },
}

export default function Cards() {
  return (
    <MotionFlex variants={parentVariant} initial='hidden' animate='show'>
      <Card variants={childrenVariants} />
      <Card variants={childrenVariants} />
      <Card variants={childrenVariants} />
    </MotionFlex>
  )
}
