import { CardFooter } from '@/components/ui/card'
import Image from 'next/image'

const ShortvideoUserDescription = ({image, name, followers}) => {
  return (
    <CardFooter>
          <div className="flex items-center gap-1 justify-between">
            <div className="size-6 md:size-10 rounded-full overflow-hidden border">
              <Image alt={name} src={image} className="h-full w-full object-cover object-center"/>
            </div>
            <p className="text-white text-xs md:text-base">{name}</p>
            <p  className="text-muted-foreground text-xs md:text-base">{followers}</p>
          </div>
        </CardFooter>
  )
}

export default ShortvideoUserDescription