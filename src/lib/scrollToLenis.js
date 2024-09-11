import Lenis from "lenis";
import { useEffect } from "react";

export const scrollTo = (target) => {

    useEffect(()=>{
        const lenis = new Lenis({
            easing: function(t) {
                return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; // Ease In-Out Cubic
              }
        });
      
        if(target?.startsWith('/#')){
            lenis?.scrollTo(target)
      
        }

    }, [])

};
