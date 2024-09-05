import { createClient } from 'contentful';


export const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFULL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFULL_ACCESS_TOKEN
  });

// const VIDEO_PER_PAGE = 6
  export const contentfullvideos = async (currentPage, perPage, currentCategory) => {
    const offset = perPage * (currentPage - 1)
 
    try {
      // Fetch entries with the included reference fields
      const response = await client.getEntries({
        content_type: 'youtubeVideos',             // Ensure this is the correct content type
        // order: 'sys.createdAt',                    
        limit: perPage,                            // Limit the number of items per page
        skip: offset,                              // Skip to the correct offset based on the current page
        // include: 1                                 
      },
      { next: { revalidate: 0 } }
    );
      


       // Fetch all platforms
    const platformResponse = await client.getEntries({
      content_type: 'categories',      // Use the correct content type ID for platforms
      
    });
  
      // Manually filter items where plateform.fields.slug is 'real-estate'
      const filteredItems = response.items.filter(item => 
        item.fields.plateform && item.fields.plateform.fields.slug === currentCategory
      );
  
      const totalItems = response.total;  // Get the count after filtering
      return { totalItems, items: response.items, platformResponse };  // Return filtered items
    } catch (error) {
      console.error('Error fetching Contentful entries:', error);
      return [];
    }
  };
