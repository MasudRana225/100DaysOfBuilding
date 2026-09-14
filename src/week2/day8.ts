const rawTimeStamp = 1789280132;

function convertTimeStampToDate(timeStamp: number) : Date{
    const milliseconds = timeStamp * 1000;
    return new Date(milliseconds)
}

const date = convertTimeStampToDate(rawTimeStamp);
console.log(date.toLocaleString());
console.log(date.toISOString());
