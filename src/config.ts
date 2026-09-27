export interface Config {
    appName: string;
    menuOptions: string[];
}

export const menuConfig: Config = {
    appName: "Crypto Portfolio Manager",
    menuOptions: [
        "1. View portfolio",
        "2. Exit"
    ],
};