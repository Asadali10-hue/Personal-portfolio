import BlurFade from "@/components/magicui/blur-fade";
import { contentfullvideos } from "@/lib/contentfulData";
import ReacttVideo from "./ReacttVideo";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const VideReact = dynamic(() => import("./ReacttVideo"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const WorkData = async () => {
  const data = await contentfullvideos();
  const contentfullData = data.items;

  console.log("data", contentfullData);
  return (
    <section className="min-h-screen  container px-2 mx-auto">
      <div className="mx-auto  flex justify-center">
        <div className="text-white">Filters</div>
      </div>

      <div className="mt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {contentfullData.map((item, idx) => {
          return (
            <BlurFade
              key={item.sys.id}
              delay={0.25 + idx * 0.05}
              inView
              className="text-white overflow-hidden rounded-md"
            >
              <div className="!h-[250px] !w-full]">
                <VideReact
                  video={item.fields?.videoUrl}
                  style={{ height: "100%", width: "100%" }}
                />
              </div>

              <div className="py-8 flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="font-main font-medium text-base lg:text-lg">{item.fields?.title}</p>
              </div>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
};

export default WorkData;
