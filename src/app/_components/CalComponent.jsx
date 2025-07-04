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
              },
             
            },
        
        
        });
      })();
    }, [])
  return (
    <div className="mt-20 !pointer-events-auto iframe-parent">
        <Cal namespace="30min"
	  calLink="asada/30min"
	  style={{width:"100%",height:"100%",overflow:"scroll"}}
	  config={{layout: 'month_view'}}
    
	  
	/>
    </div>
  )
}

export default CalComponent


  