'use client'


import {
    HoveredLink,
    Menu,
    MenuItem,
    ProductItem,
  } from "@/components/ui/navbar-menu";
import { contentfullvideosCategories } from "@/lib/contentfulData";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";




export function FilterCategory({ className}) {
    const [active, setActive] = useState(null);
    const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName]= useState('Real Estate')



    useEffect(()=>{
    
        const getCategories = async()=>{
          
    
          try {
            const data = await contentfullvideosCategories();
            console.log(data);
            setCategories(data.items)
            
          } catch (error) {
            console.log(error);
            
          }finally{
    
          }
    
        }
        getCategories()
      }, [])

    return (
      <div className={cn("  max-w-2xl mx-auto z-10", className)}>
        <Menu setActive={setActive} className="w-fit">
          <MenuItem
            setActive={setActive}
            active={active}
            item={
               'Pick your Category'
              }
            className=""
          >
            <ul className="grid w-fit gap-3 p-4 md:w-[500px] grid-cols-2  md:grid-cols-2 lg:grid-cols-3 lg:w-[600px]">
              {categories?.map((category)=>{
                console.log(category);
                return(
                  <Link
                  key={category.sys.id}
                  href={`/our-work?page=1&industry=${category.fields.slug}`}
                >
                  {category.fields.title}
                </Link>
                )
              })}
            </ul>
          </MenuItem>
        </Menu>
      </div>
    );
  }