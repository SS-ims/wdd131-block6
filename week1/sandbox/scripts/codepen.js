// Select the HTML element to manipulate
const today1 = document.querySelector('#today1');
const today2 = document.querySelector('#today2');
const message = document.querySelector('aside');    // first <aside>
const tempInput = document.querySelector('#temp');    // input for temperature output
const outputDivs = document.querySelector('#divs');   // the div with id="divs"
const cityNamesDiv = document.querySelector('#c-names'); // the div for C-names
// Varibles for activity use
let citynames = ["New York","Sacramento","Cleveland","South Bend","Tampa Bay","Corpus Christi"];
let volume = 409;

function getCelsius(fahrenheit) {
	return (fahrenheit - 32) * (5/9);
}

// Set up the Date format object parameter for toLocaleDateString method.
const options = {
		
    month: "short",   // "Apr"
    day: "2-digit",   // "04"
    year: "numeric"   // "2026"

	};

// Question #1
today1.innerHTML = new Date().toLocaleDateString("en-US", options);

// Question #2
today2.innerHTML = `<strong>Volume</strong>: ${volume} liters`;

// Question #3
const quantity = document.querySelector('#q').nodeValue;

// Question #4
message.innerHTML = 'Welcome to <mark>our</mark> neighbourhood!'

// Question #5
// call getCelcius with 33 (F), round to one decimal place for redability, and set output value
const celsiusValue = getCelsius(33);
// use toFixed(1) to show one decimal; convert back to string for input.value
tempInput.value = Number.isFinite(celsiusValue)? celsiusValue.toFixed(1) : celsiusValue;
// Question #6
// the query selector with name divs
const divs = document.querySelectorAll('div');

// to build a readable summary (how many divs and a short list of identifiers/classes)
const divSummary = Array.from(divs).map(summary => {//prefer id if present otherwise show classes, otherwise tagName
    if (summary.id) return `#${summary.id}`;
    if (summary.className) return `.${summary.className.split(' ').join(', ')}`; 
    return summary.tagName.toLowerCase();
});

outputDivs.textContent = `Found ${divs.length} <div> elements: ${divSummary.join(', ')}`;

// Question #7
const filterC = citynames.filter(name => name.startsWith('C'));
cityNamesDiv.textContent = `City names starting with "C": ${filterC.join(', ')}`;

