import BlurFade from "@/components/magicui/blur-fade";
import { contentfullvideos } from "@/lib/contentfulData";
import ReacttVideo from "./ReacttVideo";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const VideReact = dynamic(() => import("./ReacttVideo"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const WorkData = async () => {
  const data = await contentfullvideos();
  const contentfullData = data.items;

  console.log("data", contentfullData);
  return (
    <section className="min-h-screen  container px-2 mx-auto border">
      <div className="mx-auto border flex justify-center">
        <div>Filters</div>
      </div>

      <div className="mt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {contentfullData.map((item, idx) => {
          return (
            <BlurFade
              key={item.sys.id}
              delay={0.25 + idx * 0.05}
              inView
              className="text-white border overflow-hidden rounded-md"
            >
              <div className="!h-[250px] !w-full]">
              <ReacttVideo video={item.fields?.videoUrl} style={{ height: '100%', width: '100%' }} />
              </div>

              <div>Footer</div>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
};

export default WorkData;
