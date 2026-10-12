  import * as dotenv from 'dotenv';
  dotenv.config();

  const apiKey = process.env.COINGECKO_API_KEY;

if (!apiKey) {
    console.error("❌ Error: COINGECKO_API_KEY is missing from your .env file.");
    process.exit(1);
}
console.log(`Your API key's last four characters are: ${apiKey.slice(-4)}`);

