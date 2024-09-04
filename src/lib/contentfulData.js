import { createClient } from 'contentful';


export const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFULL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFULL_ACCESS_TOKEN
  });

// const VIDEO_PER_PAGE = 6
  export const contentfullvideos = async (currentPage, perPage) => {
    const offset = perPage * (currentPage - 1)
 
    try {
      const response = await client.getEntries(
        {
          content_type: 'youtubeVideos',
          order: "sys.createdAt",
          limit: perPage,
          skip: offset
         
          
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
