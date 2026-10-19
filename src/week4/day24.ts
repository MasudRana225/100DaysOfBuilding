// File Watcher
import fs from "fs";

const targetFile = 'portfolio.json';

let fsWait = false;

console.log(`Watching for changes on ${targetFile}`);

fs.watch(targetFile, (eventType, filename) => {
    if(filename) {

        if(fsWait) return;

        fsWait = true;

        setTimeout(() => {
            fsWait = false;
        },100)
        console.log(`File ${targetFile} changed! Event type: ${eventType}`);
    }
    
})