'use client'
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";



export default function CalcButton({children}) {
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
  return <button data-cal-namespace="30min"
    data-cal-link="miraj-ahmed-b4vkbd/30min"
  
    data-cal-config='{"layout":"month_view"}'
    >{children}</button>;
};