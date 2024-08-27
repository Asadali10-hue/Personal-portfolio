'use client'
import { InlineWidget } from 'react-calendly'

const Calendly = () => {
  return (
    <div className="overflow-hidden h-screen flex flex-col mt-20">
        <InlineWidget url="https://calendly.com/fultonkilebe7/30min?back=1&month=2024-08" styles={{
      minWidth: "320px",
      height: '630px', 
      position: 'relative',
    }}/>
    </div>
  )
}

export default Calendly