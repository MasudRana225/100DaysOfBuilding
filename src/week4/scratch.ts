let timerId: NodeJS.Timeout | undefined;

function onEvent(name: string){
    console.log(`event arrived: ${name}`);
    clearTimeout(timerId);
    timerId = setTimeout(() => {
        console.log(`Reacting once (last event was ${name})`);
    }, 1000);
}
onEvent("A")
setTimeout(() => onEvent("B"), 2)
setTimeout(() => onEvent("c"), 2000)
