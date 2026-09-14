//Day 3: Wallet address validatior
const walletAddress = "0x1234567890abcdef1234568790abcdeF12345678";

function isValidWalletAddress(address: string): boolean {
  if (!address.startsWith("0x") || address.length !== 42) {
    return false;
  }

  for (const char of address.slice(2).toLowerCase()) {
    if(char < '0' || char > '9' && char < 'a' || char > 'f') {
      return false;
    }
  }
  return true;

}
console.log(isValidWalletAddress(walletAddress));
