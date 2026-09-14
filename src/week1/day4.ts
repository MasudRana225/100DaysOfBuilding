const rawAmount: number = 1000000000000000000;

function rawToHuman(rawAmount: number, decimals: number = 18) {
    return rawAmount / 10**decimals;
}
console.log(rawToHuman(5000000, 6));

const humanAmount: number = 1;
function humanToRaw(humanAmount: number, decimals: number = 18) {
  return humanAmount * 10**decimals;
}
console.log(humanToRaw(humanAmount, 18));