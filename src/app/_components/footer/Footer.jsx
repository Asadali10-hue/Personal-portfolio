import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'
import logo from '../../../../public/logo.png'
import Image from 'next/image'
const footerNavs = [
   {
      label: 'Product',
      items: [
         {
            href: '/',
            name: 'Email Collection',
         },
         {
            href: '/pricing',
            name: 'Pricing',
         },
         {
            href: '/faq',
            name: 'FAQ',
         },
      ],
   },

   {
      label: 'Community',
      items: [
         {
            href: '/',
            name: 'Discord',
         },
         {
            href: '/',
            name: 'Twitter',
         },
         {
            href: 'mailto:hello@chatcollect.com',
            name: 'Email',
         },
      ],
   },
   {
      label: 'Legal',
      items: [
         {
            href: '/terms',
            name: 'Terms',
         },

         {
            href: '/privacy',
            name: 'Privacy',
         },
      ],
   },
]

const footerSocials = [
  {
    href: "",
    name: "Discord",
    icon: <Facebook className="size-4" />,
    url: "https://www.instagram.com/visualjungle/",
  },
  {
    href: "",
    name: "Twitter",
    icon: <Instagram className="size-4" />,
    url: "https://www.instagram.com/visualjungle/",
  },
];

export function Footer() {
   return (
     <footer>
       <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
         <div className="gap-4 p-4 px-8 py-16 sm:pb-16 md:flex md:justify-between">
           <div className="mb-12 flex flex-col gap-4">
             <Link href="/" className="flex items-center gap-2">
               <Image
                 src={logo}
                 className="text-primary w-32 lg:w-44"
                 alt="logo"
               />
             </Link>
             <p className="max-w-xs text-neutral-500">
               we grow brands, We help entrepreneurs and creators build, grow,
               and monetize their brands on Instagram and YouTube.
             </p>
           </div>

           <div>
             <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10 text-white">
               <Link
                 href="https://www.instagram.com/visualjungle/"
                 target="_blank"
                 className="block "
               >
                 {/* <Twitter className="md:size-8" /> */}
                 <Instagram className="md:size-8" />
               </Link>
               <Link
                 href="https://www.linkedin.com/in/asad-a-244bb4256/"
                 target="_blank"
                 className="block "
               >
               {/* </Link>
               <Link
                 href="https://www.linkedin.com/in/"
                 target="_blank"
                 className="block "
               > */}
                 <Linkedin className="md:size-8" />
               </Link>
             </div>

             <div className="flex gap-1 items-center text-white mt-5">
               Say hi 👋{" "}
               <Link href="mailto:info@visualjungle.com" className="text-main">
                 info@visualjungle.com
               </Link>
             </div>
           </div>
         </div>

         <div className="flex flex-col gap-2 rounded-md border-neutral-700/20 px-8 py-4 sm:flex sm:flex-row sm:items-center sm:justify-between">
           <div className="flex gap-1 text-xs sm:mt-0 sm:justify-center text-muted-foreground">
             <span>Developed by</span>{"Alihassan "}
             <Link
               href="#"
               target="_blank"
               className="text-main"
             >
               Ali Hassan
             </Link>
           </div>
           <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
             Copyright © {new Date().getFullYear()}{" "}
             <Link href="/" className="cursor-pointer">
             Visual Jungle
             </Link>
             . All Rights Reserved.
           </span>
         </div>
       </div>
     </footer>
   );
}
