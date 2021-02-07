export const capitalizeFirstLetter = (phrase) => {

    const capitalize = (string) => {
        string = string[0].toUpperCase() + string.slice(1).toLowerCase();
        return string;
    }
    
    let wordArray = phrase.split(" ");
    console.log("Test: "+wordArray);
    
    let newPhrase = wordArray.map(capitalize).join(" ");
    return newPhrase;
}