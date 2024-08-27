'use client'
import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const CalComponent = () => {
    useEffect(()=>{
      (async function () {
        const cal = await getCalApi({"namespace":"30min"});
        cal("ui", {"theme":"dark","styles":{"branding":{"brandColor":"#8806cd"}},"hideEventTypeDetails":false,"layout":"month_view",
        
            hideEventTypeDetails: false,
            cssVarsPerTheme: {
              dark: {
                "cal-brand": "#8806cd",
                // "cal-text": "#6F61C0",
                // "cal-text-emphasis": "#4D408D",
                // "cal-border-emphasis": "#4D408D",
                // "cal-text-error": "pink",
                // "cal-border": "#A090E0",
                // "cal-border-default": "#A090E0",
                // "cal-border-subtle": "#A090E0",
                // "cal-border-booker": "#A090E0",
                // "cal-text-muted": "#C0B8FF",
                // "cal-bg-emphasis": "#E1DFFF",
                // "cal-border-booker-width": "3px",
                // More CSS variables are defined here
                // https://github.com/calcom/cal.com/blob/b0ca7dae1a17f897e34b83c990f30ab65f615ee0/packages/config/tailwind-preset.js#L69
              },
             
            },
        
        
        });
      })();
    }, [])
  return (
    <div className="mt-20">
        {/* <Cal calLink="rick/get-rick-rolled"></Cal> */}
        <Cal namespace="30min"
	  calLink="fulton-dev-bkr5ek/30min"
	  style={{width:"100%",height:"100%",overflow:"scroll"}}
	  config={{layout: 'month_view'}}
    
	  
	/>
    </div>
  )
}

export default CalComponent


  