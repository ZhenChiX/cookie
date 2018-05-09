'use strict'


//


// Location	Min / Cust	Max / Cust	Avg Cookie / Sale
// 1st and Pike	23	65	6.3
// SeaTac Airport	3	24	1.2
// Seattle Center	11	38	3.7
// Capitol Hill	20	38	2.3
// Alki	2	16	4.6 //


// Min customers per hr
// Max customers per hour
// Average cookies per customer

// Customers each hour
// Cookies per hour
// Total for day

// render(method)


//random number for pike//
//random customers per hours
//final = cookies per hour

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var alki = {
    name: 'Alki',
    minCustomersPerHour: 2,
    maxCustomersPerHour: 16,
    avgCookiesPerCustomer: 4.6,
    customersEachHour: [],
    cookiesSoldEachHour: [],
    totalDailyCookieSales: 0
}
//////////table go in here///////////////////////////////

var allLocations = [];
var cookiesTable = document.getElementById('alkitable');

function Locationinfo(location, hours, locationTotal) {
    this.location = location;
    this.hours = hours;
    this.locationTotal = locationTotal;
    allLocations.push(this);

}

// new Locationinfo('Pike', hours, '100', );
// new Locationinfo('pike', '200', '300');
Locationinfo.prototype.render = function () {

    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    //locations
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);

    //hours

    tdEl = document.createElement('td');
    tdEl.textContent = this.hours;
    trEl.appendChild(tdEl);
    //dailysales

    tdEl = document.createElement('td');
    tdEl.textContent = this.locationTotal;
    trEl.appendChild(tdEl);

    cookiesTable.appendChild(trEl);


}



///////////////

console.table(allLocations);

//make header row

function makeHeaderRow() {

    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = 'location';
    trEl.appendChild(thEl);


    var thEl = document.createElement('th');
    thEl.textContent = 'hours';
    trEl.appendChild(thEl);


    var thEl = document.createElement('th');
    thEl.textContent = 'locationTotal';
    trEl.appendChild(thEl);

    cookiesTable.appendChild(trEl);

}








/////////table go in here ///////////////////////////////////


alki.calcCustomersEachHour = function () {
    for (var i = 0; i < hours.length; i++) {
        //calc a random number between min/max and put it into the array
        this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
}

alki.calcCookiesSoldEachHour = function () {
    alki.calcCustomersEachHour();
    // multiply our random customers by the average cookies per
    for (var i = 0; i < hours.length; i++) {
        this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer));
        this.totalDailyCookieSales = this.totalDailyCookieSales + this.cookiesSoldEachHour[i];
        // console.log(this.totalDailyCookieSales);
    }
}

alki.render = function () {
    alki.calcCookiesSoldEachHour();
    // grab the parent from the DOM
    var tbEl = document.getElementById('alkitable')
    for (var i = 0; i < hours.length; i++) {
        // create an element
        var tdEl = document.createElement('td');
        // give the element content
        tdEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies'
        // append the child to the parent
        tbEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
    tbEl.appendChild(tdEl);
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN
}

// alki.render();
// var ul = document.createElement('list');
// document.body.appendChild(ul);

// for (var i = 6; i < 21; i++) {
//     var li = document.createElement('li');
//     li.innerHTML = i;
//     ul.appendChild(li);
// }

// for (){
// var node = document.createElement("LI");
// var textnode = document.createTextNode("Water");
// node.appendChild(textnode);
// document.getElementById("myList").appendChild(node);

// }
function renderAlllocations() {
    for (var i in allLocations) {
        allLocations[i].render();

    }

}

makeHeaderRow();
renderAlllocations();


alki.render();