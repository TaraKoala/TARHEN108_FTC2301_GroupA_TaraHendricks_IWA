const nickname= "Timmy";
const firstname = "Timothy";

if (firstname == null && nickname == null) {
    console.log(`Good Morning!`)  
}
else {
    console.log(`Good Morning, ${nickname || firstname}!`)
}