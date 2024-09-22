import Script from "next/script";
import React from "react";
import { Parallax } from "react-scroll-parallax";

const LontTypesVideosSection = ({ products }) => {
  return (
    <div className="min-h-[100vh] flex items-center py-32">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 container mx-auto px-2">
        {products.map((product, index) => {
          return (
              <Parallax speed={5 * index} key={product.id} >
            <div
              
              className="group/product h-fit relative flex-shrink-0 w-full"
            >

              <div className="relative aspect-w-16 aspect-h-9">
                <div>
                  {/* Wistia embed */}
                  <div
                    className={`wistia_embed wistia_async_${product.url} seo=false videoFoam=false `}
                    style={{
                      height: "100%",
                      position: "relative",
                      width: "100%",
                    }}
                  ></div>

                  <Script
                    src={`https://fast.wistia.com/embed/medias/${product.url}.jsonp`}
                    strategy="lazyOnload" // Loads script after page load
                  />
                  <Script
                    src="https://fast.wistia.com/assets/external/E-v1.js"
                    strategy="lazyOnload" // Loads script after page load
                  />
                </div>
              </div>
            </div>
                </Parallax>
          );
        })}
      </div>
    </div>
  );
};

export default LontTypesVideosSection;
