type LogLevel = "INFO" | "WARN" | "ERROR";

function log(level: LogLevel, message: string){
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] [${message}]`);
}

log("INFO", "Application started successfully.");
log("WARN", "Network is slow.");
log("ERROR", "API key is missing, check .env file and try again with valid API key.")
