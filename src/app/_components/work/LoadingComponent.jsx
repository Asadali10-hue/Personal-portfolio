import { Loader } from "lucide-react"

const LoadingComponent = () => {
  return (
    <div className='text-white container mx-auto min-h-[20vh] mt-5 flex items-center justify-center'> 
      <div className="flex items-center gap-2">

        <Loader className=" animate-spin text-main"/>
      <span className="text-[clamp(18px,5vw,24px)]">Loading...</span>
        </div>  
        </div>
  )
}

export default LoadingComponent