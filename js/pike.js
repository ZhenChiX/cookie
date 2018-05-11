'use strict'


//
// Min customers per hr
// Max customers per hour
// Average cookies per custome

// Customers Per hour
// Cookies per hour
// Total for day

// render(method)


//random number for pike//
//random customers per hours
//final = cookies per hour



// var pikePlace = {
//     name: 'Pike Place Market',
//     minCustomersPerHour: 23,
//     maxCustomersPerHour: 65,
//     avgCookiesPerCustomer: 6.3,
//     customersPerHour: [],
//     cookiesSoldPerHour: [],
//     totalDailyCookieSales: 0
// }
//////////table go in here///////////////////////////////

// var cookiesTable = document.getElementById('table');
var allLocations = [];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var tbEl = document.getElementById('piketable');

////////////EVENTS JS //////////////////////////

var inputData = document.getElementById('input-data');
var reset = document.getElementById('reset');

////////////////////////////////////////////////


function Locationinfo(avgCookiesPerCustomer, minCustomersPerHour, maxCustomersPerHour, name) {
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.minCustomersPerHour = minCustomersPerHour;
    this.maxCustomersPerHour = maxCustomersPerHour;
    this.name = name;

    this.customersPerHour = [];
    this.cookiesSoldPerHour = [];
    this.totalDailyCookieSales = 0;

    allLocations.push(this);
    // console.table(allLocations);
}



/////////table go in here ///////////////////////////////////



Locationinfo.prototype.calcCustomersPerHour = function () {
    for (var i = 0; i < hours.length; i++) {
        //inside this function ctx this is the object its called from
        var newRandom = random(this.minCustomersPerHour, this.maxCustomersPerHour);
        this.customersPerHour.push(newRandom);
        // console.table(this.customersPerHour);
    }
}


Locationinfo.prototype.calcCookiesSoldPerHour = function () {
    this.calcCustomersPerHour();
    // multiply our random customers by the average cookies per
    for (var i = 0; i < hours.length; i++) {
        this.cookiesSoldPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerCustomer));

        // this.cookiesSoldPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerCustomer));

        this.totalDailyCookieSales = this.totalDailyCookieSales + this.cookiesSoldPerHour[i];

        // console.table(this.totalDailyCookieSales);
    }
}

Locationinfo.prototype.render = function () {
    this.calcCookiesSoldPerHour();
    // grab the parent from the DOM

    // var tbEl = document.getElementById('piketable');
    var newTrEl = document.createElement('tr');
    var newTdEl = document.createElement('th');

    newTdEl.textContent = this.name;
    newTrEl.append(newTdEl);

    for (var i = 0; i < hours.length; i++) {
        // create an element
        newTdEl = document.createElement('td');
        // give the element content
        newTdEl.textContent = this.cookiesSoldPerHour[i];
        // append the child to the parent
        newTrEl.append(newTdEl);
    }
    newTdEl = document.createElement('td');
    newTdEl.textContent = this.totalDailyCookieSales;
    newTrEl.append(newTdEl);
    tbEl.append(newTrEl);
}


function renderAlllocations() {

    // var tbEl = document.getElementById('piketable');
    var newTrEl = document.createElement('tr');

    var locationTdEl = document.createElement('th');
    locationTdEl.textContent = 'Store Location';
    newTrEl.append(locationTdEl);

    for (var i in hours) {
        var newTdEl = document.createElement('th');
        newTdEl.textContent = hours[i];

        newTrEl.append(newTdEl);
    }
    var locationTotalTdEl = document.createElement('td');
    locationTotalTdEl.textContent = ' Total Cookies ';
    newTrEl.append(locationTotalTdEl);

    tbEl.append(newTrEl);

    for (var i in allLocations) {
        allLocations[i].render();
    }
}
// Location	Min / Cust	Max / Cust	Avg Cookie / Sale
// 1st and Pike	23	65	6.3
// SeaTac Airport	3	24	1.2
// Seattle Center	11	38	3.7
// Capitol Hill	20	38	2.3
// Alki	2	16	4.6 //

var pike = new Locationinfo(6.3, 23, 65, 'Pike Place');
var seaTac = new Locationinfo(1.2, 3, 24, 'SeaTac Airport');
var seaCenter = new Locationinfo(3.7, 11, 38, 'Seattle Center');
var capitol = new Locationinfo(2.3, 20, 38, 'Capitol Hill');
var alki = new Locationinfo(4.6, 2, 16, 'Alki');

/////////////////////////////////////////////////


// var a = 50;
// var b = 20;
// var c = 80;
var ela = document.getElementById('AvgPerCustomer');
var elb = document.getElementById('MinCustPerHour');
var elc = document.getElementById('MaxCustPerHour');
var eld = document.getElementById('LocationName');




renderAlllocations();
// makeHeaderRow();



//via MDN


//start sumbit event//
inputData.addEventListener('sumbit', function () {

    event.preventDefault();
    //  event.target.who.value = null;//

    var inputFile = new Locationinfo(ela, elb, elc, eld);
    renderAlllocations();
});

///////////////////MATH RANDOM///////////////

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}