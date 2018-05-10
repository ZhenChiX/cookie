'user strict'

//Global variables//

// function Locationinfo(avgCookiesPerCustomer, minCustomersPerHour, maxCustomersPerHour, name) {
//     this.avgCookiesPerCustomer = avgCookiesPerCustomer;
//     this.minCustomersPerHour = minCustomersPerHour;
//     this.maxCustomersPerHour = maxCustomersPerHour;
//     this.name = name;

//     this.customersPerHour = [];
//     this.cookiesSoldPerHour = [];
//     this.totalDailyCookieSales = 0;//


// var addavgCookiesPerCustome = document.getElementById('add-avg');
var inputData = document.getElementById('input-data');
var reset = document.getElementById('reset');


function Locationinfo(avgCookiesPerCustomer, minCustomersPerHour, maxCustomersPerHour, name) {
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.minCustomersPerHour = minCustomersPerHour;
    this.maxCustomersPerHour = maxCustomersPerHour;
    this.name = name;

    this.customersPerHour = [];
    this.cookiesSoldPerHour = [];
    this.totalDailyCookieSales = 0;

    allLocations.push(this);

}
Locationinfo.prototype.formData = function(){
    


}
l