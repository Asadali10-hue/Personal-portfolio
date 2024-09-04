'use client'
import BlurFade from "@/components/magicui/blur-fade";
import { contentfullvideos } from "@/lib/contentfulData";
import ReacttVideo from "./ReacttVideo";
import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSearchParams } from 'next/navigation'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";


const VideReact = dynamic(() => import("./ReacttVideo"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const WorkData = () => {
  const [videos, setVideos]=useState([])
  const [total, setTotal]= useState()
  const [categories, setCategories]= useState([])
  const perPage = 9

  const searchParams = useSearchParams()
  const industry = searchParams?.get('industry')

  const currentCategory = industry ?  industry : 'real-estate'
  
  const page = searchParams?.get('page')
  const currentPage = page ? parseInt(page) : 1



  useEffect(()=>{
    
    const getVideos = async()=>{

      try {
        const data = await contentfullvideos(currentPage, perPage, currentCategory);
        setVideos(data.items)
        setTotal(data.totalItems)
        setCategories(data.platformResponse.items)
        
      } catch (error) {
        
      }finally{

      }

    }
    getVideos()
  }, [currentPage, currentCategory])

  // console.log("data", categories);
  return (
    <section className="min-h-screen  container px-2 mx-auto">
      <div className="mx-auto  flex justify-center">
        <div className="">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                 
                  <span>Pick Your Industry</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent >
                  <div className="">
                {categories?.map((category)=>{
                  console.log(category);
                    return(
                      <Link href={`/our-work?page=1&industry=${category.fields.slug}`} key={category.sys.id}>{category.fields.title}</Link>
                      
                    )
                  })}

                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="mt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {videos?.map((item, idx) => {
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
                <p className="font-main font-medium text-base lg:text-lg">
                  {item.fields?.title}
                </p>
              </div>
            </BlurFade>
          );
        })}
      </div>

      <div className="mt-10 mx-auto text-main">
        <ul className="flex justify-between gap-2 lg:gap-4 items-center text-sm mt-8  w-fit mx-auto">
          <li>
            {currentPage > 1 ? (
              <Link
                href={{
                  pathname: "/our-work",
                  query: {
                    page: currentPage - 1,
                  },
                }}
              >
                <span className="flex items-center gap-1">
                  <ChevronLeft className="w-5 h-5" /> Previous
                </span>
              </Link>
            ) : (
              <span className="text-zinc-400 flex items-center gap-1">
                <ChevronLeft className="w-5 h-5" /> Previous
              </span>
            )}
          </li>

          {typeof total === "number" && (
            <li className="flex-grow flex justify-center">
              <ul className="flex items-center gap-3">
                {currentPage > 2 && (
                  <>
                    <li>
                      <Button
                        variant="outline"
                        asChild
                        size="sm"
                        className="h-auto px-2.5 py-1"
                      >
                        <Link
                          href={{ pathname: "/our-work", query: { page: 1 } }}
                        >
                          1
                        </Link>
                      </Button>
                    </li>
                    {currentPage > 3 && <li className="">...</li>}
                  </>
                )}

                {currentPage > 1 && (
                  <li>
                    <Button
                      variant="outline"
                      asChild
                      size="sm"
                      className="h-auto px-2.5 py-1"
                    >
                      <Link
                        href={{
                          pathname: "/our-work",
                          query: {
                            page: currentPage - 1,
                          },
                        }}
                      >
                        {currentPage - 1}
                      </Link>
                    </Button>
                  </li>
                )}

                <li>
                  <Button
                    variant="default"
                    asChild
                    size="sm"
                    className="h-auto px-2.5 py-1"
                  >
                    <Link
                      href={{
                        pathname: "/our-work",
                        query: {
                          page: currentPage,
                        },
                      }}
                    >
                      {currentPage}
                    </Link>
                  </Button>
                </li>

                {currentPage < Math.ceil(total / perPage) && (
                  <li>
                    <Button
                      variant="outline"
                      asChild
                      size="sm"
                      className="h-auto px-2.5 py-1"
                    >
                      <Link
                        href={{
                          pathname: "/our-work",
                          query: {
                            page: currentPage + 1,
                          },
                        }}
                      >
                        {currentPage + 1}
                      </Link>
                    </Button>
                  </li>
                )}

                {currentPage < Math.ceil(total / perPage) - 1 && (
                  <>
                    {currentPage < Math.ceil(total / perPage) - 2 && (
                      <li>...</li>
                    )}
                    <li>
                      <Button
                        variant="outline"
                        asChild
                        size="sm"
                        className="h-auto px-2.5 py-1"
                      >
                        <Link
                          href={{
                            pathname: "/our-work",
                            query: {
                              page: Math.ceil(total / perPage),
                            },
                          }}
                        >
                          {Math.ceil(total / perPage)}
                        </Link>
                      </Button>
                    </li>
                  </>
                )}
              </ul>
            </li>
          )}

          <li>
            {currentPage < Math.ceil(total / perPage) ? (
              <Link
                href={{
                  pathname: "/our-work",
                  query: {
                    page: currentPage + 1,
                  },
                }}
              >
                <span className="flex items-center gap-1">
                  Next <ChevronRight className="w-5 h-5" />
                </span>
              </Link>
            ) : (
              <span className="text-zinc-400 flex items-center gap-1">
                Next <ChevronRight className="w-5 h-5" />
              </span>
            )}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WorkData;
