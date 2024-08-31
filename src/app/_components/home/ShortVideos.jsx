
import {
  Card,
  CardContent,
  CardFooter,

} from "@/components/ui/card";

const ShortVideos = () => {
  return (
    <div className="mt-32 relative max-w-6xl mx-auto flex flex-col items-center md:flex-row text-sm md:justify-between gap-8">
      <Card className="p-0 w-[50vw] md:w-[50vw] lg:w-[20vw] bg-black">
  <CardContent className="p-2">
    <div className="aspect-w-9 aspect-h-16 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <iframe
        src="https://fast.wistia.net/embed/iframe/hgk0eqtkwk"
        frameBorder="0"
        className="w-full h-full"
        allowFullScreen
      ></iframe>
    </div>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
      <Card className="p-0 w-[50vw] md:w-[50vw] lg:w-[20vw] bg-black">
  <CardContent className="p-2">
    <div className="aspect-w-9 aspect-h-16 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <iframe
        src="https://fast.wistia.net/embed/iframe/hgk0eqtkwk"
        frameBorder="0"
        className="w-full h-full"
        allowFullScreen
      ></iframe>
    </div>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
      <Card className="p-0 w-[50vw] md:w-[50vw] lg:w-[20vw] bg-black">
  <CardContent className="p-2">
    <div className="aspect-w-9 aspect-h-16 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <iframe
        src="https://fast.wistia.net/embed/iframe/hgk0eqtkwk"
        frameBorder="0"
        className="w-full h-full"
        allowFullScreen
      ></iframe>
    </div>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
      <Card className="p-0 w-[50vw] md:w-[50vw] lg:w-[20vw] bg-black">
  <CardContent className="p-2">
    <div className="aspect-w-9 aspect-h-16 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <iframe
        src="https://fast.wistia.net/embed/iframe/hgk0eqtkwk"
        frameBorder="0"
        className="w-full h-full"
        allowFullScreen
      ></iframe>
    </div>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
     
    </div>
  );
};

export default ShortVideos;
