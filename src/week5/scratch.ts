// function getSlowNumber(): Promise<number> {




//     return new Promise(resolve => setTimeout(() => resolve(42), 1000));
// }

// async function main() {
//     console.log("A: asking for the number....");
//     const value = await getSlowNumber();
//     console.log(`B: got ${value}`);
// }
// main();
// console.log("C: this line is after main");


// const arrayOfStrings = ["a", "b"].toString()

// console.log(arrayOfStrings);

//Loop version — a for loop with a counter:


//Simulates a flaky request: fails 60% of the time
async function flakyRequest(attemptLabel: string): Promise<string> {
    const willFail = Math.random() < 0.6;
    console.log(`${attemptLabel} -> trying....`);
    if(willFail) {
        throw new Error("simulated failure");
    }
    return "success";
}

async function retryWithLoop(maxRetries: number) {
    for(let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const result = await flakyRequest(`Attempt ${attempt}`);
            console.log(`✅ ${result}`); // success -exit the function            
        } catch (error) {
            console.log(`❌ failed: ${error}`);
            
            if(attempt === maxRetries) {
                console.log("Giving up, max retries reached.");
                throw error;
            }
            const waitMs = 1000 * 2 ** (attempt - 1); //1s, 2s, 4s
            console.log(`Waiting ${waitMs}ms before retry...`);
            await new Promise((resolve) => setTimeout(resolve, waitMs));
        }
    }
}

// retryWithLoop(3)

//Recursive version — the function calls itself:

async function retryRecursive(attempt: number, maxRetries: number): Promise<string>{
    try {
        const result = await flakyRequest(`Attempt ${attempt}`);
        console.log(`✅ ${result}`);
        return result;
    } catch (error) {
        console.log(`❌ failed: ${error}`);
        if(attempt === maxRetries) {
            console.log("giving up, max retries reached.");
            throw error;           
        }
        const waitMS = 1000 * 2 ** (attempt - 1);
        console.log(`Waiting ${waitMS}ms before retry`);
        await new Promise((resolve) => setTimeout(resolve, waitMS));
        return retryRecursive(attempt + 1, maxRetries); //calls itself
    }
}

retryRecursive(1, 3)
 