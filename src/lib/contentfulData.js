import { createClient } from 'contentful';


export const client = createClient({
    space: process.env.CONTENTFULL_SPACE_ID,
    accessToken: process.env.CONTENTFULL_ACCESS_TOKEN
  });


  export const contentfullvideos = async () => {
 
    try {
      const response = await client.getEntries(
        {
          content_type: 'youtubeVideos',
          order: "sys.createdAt",
          limit: 10
         
          
        },
        // { next: { revalidate: 0 } }
      );
  
      const totalItems = response.total;
    const items = response.items;

    return { totalItems, items };
    } catch (error) {
      console.error("Error fetching Contentful entries:", error);
      return [];
    }
  };
