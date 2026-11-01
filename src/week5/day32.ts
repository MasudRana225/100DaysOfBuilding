//Polymarket Markets fetcher

async function fetchMarketsData() {
  try {
       const response = await fetch('https://gamma-api.polymarket.com/markets?closed=false&limit=5')

        if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json()
        
    for (const market of data) {
        console.log(`Market: ${market.question}, 
                    ID: ${market.id}, 
                    slug: ${market.slug},
                    tokenID: ${market.clobTokenIds}`);
            // console.log(typeof market.clobTokenIds);
            
    }
  } catch (error) {
    console.error(`❌ Something went wrong: ${error}`);
  }
}
fetchMarketsData();