//CSV export
import fs from "fs";
import { PortfolioItem} from "../types";

const portfolioCSV: string = 'portfolio.csv';
const portfolioJSON: string = 'portfolio.json';

const portfolioData = fs.readFileSync(portfolioJSON, 'utf-8');
const portfolioItems: PortfolioItem[] = JSON.parse(portfolioData);

const header = "tokenSymbol,chain,decimals,holdingAmount,currentPrice";

const rows = portfolioItems.map((item: PortfolioItem ) => 
     `${item.token.symbol},${item.token.chain},${item.token.decimals},${item.holdingAmount},${item.currentPrice}`
)


fs.writeFileSync(portfolioCSV, header + "\n" + rows.join("\n"));