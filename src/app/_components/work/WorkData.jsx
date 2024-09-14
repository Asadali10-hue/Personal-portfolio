'use client'
import BlurFade from "@/components/magicui/blur-fade";
import { contentfullvideos } from "@/lib/contentfulData";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSearchParams } from 'next/navigation'
import { XIcon } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { animationVariants } from "@/lib/popopAnimation";
import { FilterCategory } from "./FilterCategory";
import PaginationComponent from "../PaginationComponent";

const VideReact = dynamic(() => import("./ReacttVideo"), {
  ssr: false,
  loading: () => <p className="text-white">Loading...</p>,
});

const WorkData = () => {
  const [videos, setVideos] = useState([]);
  const [total, setTotal] = useState();
  const [categories, setCategories] = useState([]);
  const [videoPopup, setVideoPopup] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const animationStyle = "from-center";
  const selectedAnimation = animationVariants[animationStyle];
  const perPage = 9;

  const searchParams = useSearchParams();
  const industry = searchParams?.get("industry");

  const currentCategory = industry ? industry : "real-estate";

  const page = searchParams?.get("page");
  const currentPage = page ? parseInt(page) : 1;

  useEffect(() => {
    const getVideos = async () => {
      try {
        const data = await contentfullvideos(
          currentPage,
          perPage,
          currentCategory
        );
        setVideos(data.items);
        setTotal(data.totalItems);
        setCategories(data.items);
      } catch (error) {
      } finally {
      }
    };
    getVideos();
  }, [currentPage, industry, currentCategory]);

  return (
    <section className="relative h-full w-full pb-32">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <AnimatePresence>
        {videoPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setVideoPopup(false)}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
          >
            <motion.div
              {...selectedAnimation}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative h-[53.5vh] w-full max-w-4xl aspect-video mx-4 md:mx-0"
            >
              <motion.button className="absolute -top-16 right-0 text-white text-xl bg-neutral-900/50 ring-1 backdrop-blur-md rounded-full p-2 dark:bg-neutral-100/50 dark:text-black">
                <XIcon className="size-5" />
              </motion.button>
              <div className="size-full border-2 border-white rounded-2xl overflow-hidden isolate z-[1] relative">
                <VideReact
                  video={`https://www.youtube.com/watch?v=${videoLink}`}
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen   container px-2 mx-auto">
        <div className="mx-auto  flex justify-center">
          <div className="relative w-full flex items-center justify-center">
            <FilterCategory className="top-2" categories={categories} />
          </div>
        </div>
        <div
          className={`mt-32 grid grid-cols-1 gap-8 
  ${
    videos?.length === 1
      ? "justify-items-center items-center"
      : "sm:grid-cols-2 md:grid-cols-3"
  }`}
        >
          {videos?.map((item, idx) => {
            const videoThumb = item.fields?.videoUrl.slice(-11);

            const handleClick = (videoId) => {
              console.log("Video ID:", videoId);
              setVideoLink(videoId);
              setVideoPopup(!videoPopup);
            };

            return (
              <BlurFade
                key={item.sys.id}
                delay={0.25 + idx * 0.05}
                inView
                className="text-white overflow-hidden text-center mx-auto rounded-md relative cursor-pointer"
              >
                <div className="!h-[250px] w-full">
                  <Image
                    src={`https://img.youtube.com/vi/${videoThumb}/maxresdefault.jpg`}
                    width={500}
                    height={250}
                    alt=""
                    className="h-full w-full object-cover"
                    onClick={() => handleClick(videoThumb)}
                  />
                </div>

                <div className="py-8 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="font-main font-medium text-base lg:text-lg">
                    {item.fields?.title}
                  </p>
                </div>
              </BlurFade>
            );
          })}
        </div>
        <PaginationComponent
          currentPage={currentPage}
          total={total}
          perPage={perPage}
        />
      </div>
    </section>
  );
};

export default WorkData;


