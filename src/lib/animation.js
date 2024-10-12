


export const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  export const fadeAnim = {

    initial:{
      opacity: 0
    },
    animate:{
      opacity: 1,
      transition: {
      
        duration: 1,
        delay: .2
       
      }

    }

  }

  export   const viewAnimation = {
    initial:{
      opacity: 0,
      scale: 0,
    },
    animate:{
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 2,
       
      }

    }
  }