'use client'
import Script from "next/script";
import {motion} from 'framer-motion'

 const LongVideoCard = ({
    product,
    translate
  }) => {
    return (
      (<motion.div
        style={{
          x: translate,
        }}
        whileHover={{
          y: -20,
        }}
        key={product.id}
        className="group/product h-fit w-[30rem] relative flex-shrink-0">
           <div className="relative aspect-w-16 aspect-h-9 ">
       <div className=''>
      {/* Wistia embed */}
      <div
        className={`wistia_embed wistia_async_${product.url} seo=false videoFoam=false `}
        style={{ height: '100%', position: 'relative', width: '100%' }}
      >
        {/* &nbsp; */}
      </div>

      {/* Wistia external scripts */}
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
      </motion.div>)
    );
  };

  export default LongVideoCard