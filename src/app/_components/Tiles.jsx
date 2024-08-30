'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const TilesComponent = ({
  className,
  rows: r,
  cols: c
}) => {
  const rows = new Array(r || 100).fill(1)
  const cols = new Array(c || 10).fill(1)

  return (
    <div className={cn('relative z-0 flex w-full  min-h-full justify-center overflow-hidden', className)}>
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className={`md:size-40 sm:h-12 w-20 h-20 border-l border-neutral-900 relative`}
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: 'rgb(124, 5, 187, 0.2)',
                transition: { duration: .2 }
              }}
              animate={{
                transition: { duration: 2 }
              }}
              key={`col` + j}
              className="md:size-40 sm:h-12 w-20 h-20 border-r border-t border-neutral-900 relative"
            />
          ))}
        </motion.div>
      ))}
    </div>
  )
}

export const Tiles = React.memo(TilesComponent)
