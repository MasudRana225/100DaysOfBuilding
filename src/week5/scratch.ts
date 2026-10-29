function getSlowNumber(): Promise<number> {
    return new Promise(resolve => setTimeout(() => resolve(42), 1000));
}

async function main() {
    console.log("A: asking for the number....");
    const value = await getSlowNumber();
    console.log(`B: got ${value}`);
}
main();
console.log("C: this line is after main");
