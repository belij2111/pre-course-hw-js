const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

let searchForAnItem = function (array) {
    if (array.indexOf("апельсин") !== -1) {
        console.log("Уpa!нашел");
    } else {
        console.log("Придется поискать в другом магазине…")
    }
}

searchForAnItem(words);