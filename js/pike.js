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
// Cookies each hour
// Total for day

// render(method)



var numbersGenerator;
numbersGenerator(23, 65);
function numbersGenerator(min, max) {
    var result = Math.floor(Math.random() * (max - min)) + min;
    console.log(result);
    document.getElementById('pike6').innerHTML = '6AM:'+result;
}




//     MinCustomerPerHr: 30,
//     MaxCustomerPerHr: 50,
//     AveragePerCustomer: 50,



// }










