var dairy = function(shed, litres) {
    console.log("shed" + "=" + shed);
    console.log("litres" + "=" + litres);
};
dairy(a, 510);
dairy(b, 308);
dairy(c, 486);
dairy(d, 576);



var production = function(month, production){
    console.log("Time of the year" + "=" + month);
    console.log("production at that year" + "=" + production + "litres");
}
production( january, 2617020);
production( february, 2448180);
production( march, 2617020);
production( april, 2617020);
production( may, 2617020);
production( june, 2532600);
production( july, 2617020);
production( august, 2617020);
production( september, 2532600);
production( november, 2532600);
production( december, 2617020);



var totalProduction = function(figure){
    console.log("total milk production is" + figure + "litres")
}
totalProduction(1876);


var incomeOverTime = function(selling_price, time){
    console.log("selling price" + "=" + "kshs" + selling_price);
    console.log("duration" + "=" + "time");
};
incomeOverTime(590940, weekly);
incomeOverTime(30813300, yearly);