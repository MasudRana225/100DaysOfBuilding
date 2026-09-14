//ETH gas Formatter(mock)

const gasPrice = 100 ; // 100 gwei
const gasUsed = 21000; // Typical gas used for a simple ETH transfer

function calculateGas(gasPrice: number, gasUsed: number): { gasInGwei: number; gasInETH: number } {
    const totalCostInGwei = gasPrice * gasUsed;
    const totalCostInETH = totalCostInGwei / 1e9; 
    return { gasInGwei: totalCostInGwei, gasInETH: totalCostInETH };
}

const gasCosts = calculateGas(gasPrice, gasUsed);
console.log(`Gas Cost in Gwei: ${gasCosts.gasInGwei}`);
console.log(`Gas Cost in ETH: ${gasCosts.gasInETH}`);