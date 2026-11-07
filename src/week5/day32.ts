//Polymarket Markets fetcher

async function fetchMarketsData() {
  const maxRetries = 3;

  for(let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
       const response = await fetch('https://gamma-api.polymarket.com/markets?closed=false&limit=2')

        if(response.ok){
          const data = await response.json()
        
          //1. Handle successful response
          for (const market of data) {
          console.log(`Market: ${market.question}, 
                      ID: ${market.id}, 
                      slug: ${market.slug},
                      tokenID: ${market.clobTokenIds}`);
              // console.log(typeof market.clobTokenIds);
              
          }
          return; // success! Exit the function completely
        }
        
        //2. Handle HTTP Erros using an AllowList
        const is429 = response.status === 429;
        const is5xx = response.status >=  500 && response.status < 600;
        
        if(is429 || is5xx) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }else{
          //any other non-200 status(e.g., 400, 403, 404) fails fast immediately
          console.error(`❌ Permanent HTTP error! Status: ${response.status} stopping execution`);
          return;
        }

      } catch (error) {

        console.log(`❌ failed: ${error}`)

        //If we've hit our maximum allowed attempts, throw the error out of the function 
        if(attempt === maxRetries) {
          console.log("Giving up, max retries reached");
          throw error;
        }
        const waitMs = 1000 * 2 ** (attempt - 1); //1s, 2s, 4s
        console.log(`Waiting ${waitMs}ms before retry...`);
        await new Promise((resolve) => setTimeout(resolve, waitMs))
      }
  }
}
fetchMarketsData();