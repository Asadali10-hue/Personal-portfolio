import { cn } from "@/lib/utils"

export const Lights = ({ className }) => (
  <div className={cn('w-full h-full overflow-hidden', className)}>
    <div
      className={'w-full h-full relative bottom-[-200px] '}
      style={{
        background:
          'conic-gradient(from 180deg at 50% 50%,#8806cd 0deg,#8806cd 180deg,var(--yellow-400) 1turn)',
        filter: 'blur(75px)',
        opacity: '20%'
      }}
    />
  </div>
)
