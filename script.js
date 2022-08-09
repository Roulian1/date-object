// Exercice 1

let now = new Date();

console.log("Time in Anchorage: " + now.toLocaleString("fr-FR", {timeZone: "America/Anchorage"}));
console.log("Time in Iceland: " + now.toLocaleString("fr-FR", {timeZone: "Iceland"}));
console.log("Time in Moscow: " + now.toLocaleString("fr-FR", {timeZone: "Europe/Moscow"}));
console.log("Time in Brussels: " + now.toLocaleString("fr-FR", {timeZone: "Europe/Brussels"}));


// Exercice 2

// Time since my birth
let birthDay = new Date(1986, 03, 17);
let ms = now - birthDay;
let days = Math.floor(ms/1000/60/60/24);
let hours = Math.floor(ms/1000/60/60);
let minutes = Math.floor((ms/1000/60/60 - hours)*60);
let secs = Math.floor(((ms/1000/60/60 - hours)*60 - minutes)*60);

console.log("I was born there's " + days + " days " + hours + " hours " + minutes + " minutes " + secs + " secondes.");

// Function find any date (since 1970)
Date.prototype.getElapsedTime = function() {
    let diffDate = new Date(new Date() - this);
    return "Elapsed Time: Years: " + (diffDate.getFullYear() - 1970) + ", Months: " + diffDate.getMonth() + ", Days: " + (diffDate.getDate() - 1) + ", Hours: " + diffDate.getHours() + ", Minutes: " + diffDate.getMinutes() + ", Seconds: " + diffDate.getSeconds();
  };
  
  let from = new Date("03/17/1986 00:45:00");
  document.getElementById("result").innerHTML = from.getElapsedTime();

// Exercice 3

// 80.000 hours more
let newTime = 1000*60*60*80000;

let hoursLater = new Date(
    now.getTime() + newTime
  )
  
  console.log(hoursLater.toString())

// Input time
let Val = document.getElementById('input').value;

console.log(Val);

Val.addEventListener("click", functionHeure);

function functionHeure() {
    document.getElementById("future hours").innerHTML = Val;
    functionHeure()
}