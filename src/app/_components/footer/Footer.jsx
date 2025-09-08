import { Instagram, Facebook, Twitter, Linkedin, MapIcon, Map, MapPinned, Phone } from 'lucide-react'
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
         <div className="gap-4 p-4 px-8 py-16 sm:pb-16 lg:flex lg:justify-between lg:items-start">
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

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
             {/* Contact & Social Section */}
             <div className="space-y-6">
               <div className="text-white">
                 <div className="mb-6">
                   <p className="text-lg mb-2">Say hi 👋</p>
                   <Link href="mailto:visualjungle001@gmail.com" className="text-main hover:text-purple-300 transition-colors text-base">
                     visualjungle001@gmail.com
                   </Link>
                 </div>
                 
                 {/* Social Media */}
                 <div className="flex gap-4">
                   <Link
                     href="https://www.instagram.com/visualjungle/"
                     target="_blank"
                     className="p-2 rounded-full border border-gray-700 hover:border-main hover:bg-main/10 transition-all duration-300"
                   >
                     <Instagram className="size-5" />
                   </Link>
                   <Link
                     href="https://www.linkedin.com/in/asad-a-244bb4256/"
                     target="_blank"
                     className="p-2 rounded-full border border-gray-700 hover:border-main hover:bg-main/10 transition-all duration-300"
                   >
                     <Linkedin className="size-5" />
                   </Link>
                 </div>
               </div>
             </div>

             {/* Office Locations Section */}
             <div className="text-white space-y-8">
               <h3 className="text-lg font-semibold text-main mb-6">Our Offices</h3>
               
               {/* Sialkot Office */}
               <div className="space-y-3">
                 <div className="flex items-start gap-3">
                   <MapPinned className="size-5 text-main flex-shrink-0 mt-1" />
                   <div>
                     <p className="font-medium text-white mb-1">Sialkot, Pakistan</p>
                     <p className="text-gray-300 text-sm leading-relaxed">
                       2nd floor, Js bank building,<br />
                       Bean bags office, Sialkot
                     </p>
                   </div>
                 </div>
                 <div className="flex items-center gap-3 ml-8">
                   <Phone className="size-4 text-main flex-shrink-0" />
                   <Link 
                     href="tel:+923456727104" 
                     className="text-gray-300 hover:text-main transition-colors text-sm"
                   >
                     +92 345 6727104
                   </Link>
                 </div>
               </div>

               {/* Jakarta Office */}
               <div className="space-y-3">
                 <div className="flex items-start gap-3">
                   <MapPinned className="size-5 text-main flex-shrink-0 mt-1" />
                   <div>
                     <p className="font-medium text-white mb-1">Jakarta, Indonesia</p>
                     <p className="text-gray-300 text-sm leading-relaxed">
                       JAKARTA SERVICED OFFICE 16th FLOOR WISMA JL,<br />
                       JENDRAL SUDIRMAN KAV 1 RT, Indonesia
                     </p>
                   </div>
                 </div>
                 <div className="flex items-center gap-3 ml-8">
                   <Phone className="size-4 text-main flex-shrink-0" />
                   <Link 
                     href="tel:+6282230842795" 
                     className="text-gray-300 hover:text-main transition-colors text-sm"
                   >
                     +62 822 3084 2795
                   </Link>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <div className="flex flex-col gap-2 rounded-md border-neutral-700/20 px-8 py-4 sm:flex sm:flex-row sm:items-center sm:justify-center text-center">
           {/* <div className="flex gap-1 text-xs sm:mt-0 sm:justify-center text-muted-foreground">
             <span>Developed by</span>{"Alihassan "}
             <Link
               href="#"
               target="_blank"
               className="text-main"
             >
               Ali Hassan
             </Link>
           </div> */}
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
