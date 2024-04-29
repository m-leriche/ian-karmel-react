import { createClient } from "contentful";

const useContentful = (dataType) => {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  });

  const getData = async (dataTypes) => {
    try {
      // Check if dataTypes is an array and use it directly; otherwise, wrap it in an array
      const types = Array.isArray(dataTypes) ? dataTypes : [dataTypes];
      const entries = await client.getEntries({
        'sys.contentType.sys.id[in]': types.join(','),
        select: 'fields'
      });
      return entries;
    } catch (error) {
      console.log(error);
    }
  }
  return { getData }
}

export default useContentful;
