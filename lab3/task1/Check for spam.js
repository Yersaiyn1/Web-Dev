function checkSpam(str) {
    return str.toLowerCase().includes("viagra") || str.toUpperCase().includes("XXX");
}
alert( checkSpam("buy ViAgRA now") );