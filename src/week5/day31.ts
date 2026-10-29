//CoinGecko fetcher
  import * as dotenv from 'dotenv';
  dotenv.config();

const apiKey = process.env.COINGECKO_API_KEY;

if (!apiKey) {
    console.error("❌ Error: COINGECKO_API_KEY is missing from your .env file.");
    process.exit(1);
}

async function fetchBTCPrice() {
    
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin&x_cg_demo_api_key=${apiKey}`)

    if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json()
    console.log(`BTC price: ${data.bitcoin.usd}`);

    } catch (error) {
        console.error(`❌ Something went wrong: ${error}`);
        
    }


}

fetchBTCPrice();
