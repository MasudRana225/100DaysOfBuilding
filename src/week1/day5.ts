
function getHeadTail() {
    const random = Math.random();
    return random <= 0.5 ? 'Head' : 'Tail';
}
console.log(getHeadTail());