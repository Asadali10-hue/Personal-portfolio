import { createClient } from 'contentful';


export const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFULL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFULL_ACCESS_TOKEN
  });

// const VIDEO_PER_PAGE = 6
  export const contentfullvideos = async (currentPage, perPage, currentCategory) => {
    const offset = perPage * (currentPage - 1)
 
    try {
      const response = await client.getEntries({
        content_type: 'youtubeVideos', 
        // select: 'fields',
        // 'fields.sys.contentType.sys?.id': "youtubeVideos",  
        'fields.plateform.sys.contentType.sys.id': "categories", //works
        'fields.plateform.fields.slug[match]': currentCategory,   
        // order: 'sys.createdAt',                    
        limit: perPage,                           
        skip: offset,                              
                                      
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


  export const contentfullvideosCategories = async () => {
 
    try {
      const response = await client.getEntries({
        content_type: 'categories', 
                                  
                                      
      },
      { next: { revalidate: 0 } }
    );
      
      return { items: response.items };  // Return filtered items
    } catch (error) {
      console.error('Error fetching Contentful entries:', error);
      return [];
    }
  };


  export const contentfullUsers= async () => {
 
    try {
      const response = await client.getEntries({
        content_type: 'users', 
                                  
                                      
      },
      { next: { revalidate: 0 } }
    );
      
      return { items: response.items };  // Return filtered items
    } catch (error) {
      console.error('Error fetching Contentful entries:', error);
      return [];
    }
  };
  
  export const contentfullShortReviews= async () => {
 
    try {
      const response = await client.getEntries({
        content_type: 'shortreviewvideos',
                                  
                                      
      },
      { next: { revalidate: 0 } }
    );
      
      return { items: response.items };  // Return filtered items
    } catch (error) {
      console.error('Error fetching Contentful entries:', error);
      return [];
    }
  };