// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict'

// https://opendata.paris.fr/explore/dataset/lieux-de-tournage-a-paris/information
const filmingLocations = require('./lieux-de-tournage-a-paris.json')

console.log('🚀 It Works!');

/**
 * 💅 Try to produce the most readable code, use meaningful variable names
 * Your intentions should be clear by just reading the code
 * Good luck, have fun !
 */

// 📝 TODO: Number of filming locations
// 1. Make the function return the number of filming locations
function getFilmingLocationsNumber () {
	return filmingLocations.length
}
console.log(`There is ${getFilmingLocationsNumber()} filming locations in Paris`)

// 📝 TODO: Filming locations sorted by start date, from most recent to oldest.
// 1. Implement the function
// 2. Log the first and last item in array
function sortFilmingLocationsByStartDate () {
	const tab = filmingLocations.sort((a,b) => (a.fields.date_debut>b.fields.date_debut) ? 1:-1);
	return tab;

}
console.log(sortFilmingLocationsByStartDate())

// 📝 TODO: Number of filming locations in 2020 only
// 1. Make the function return the number of filming locations in 2020 only
// 2. Log the result
function getFilmingLocationsNumber2020 () {
	const tab = filmingLocations.filter((player) => player.fields.annee_tournage == 2020);
	return tab.length;

}
console.log(getFilmingLocationsNumber2020())

// 📝 TODO: Number of filming locations per year
// 1. Implement the function, the expected result is an object with years as
// keys and filming locations number as value, e.g:
//    const filmingLocationsPerYear = {
//      '2020': 1234,
//      '2021': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerYear () {
	let counter = {}

	filmingLocations.forEach(function(obj) {
		var key = obj.fields.annee_tournage
		counter[key] = (counter[key] || 0) + 1
	})
	return counter
}
console.log(getFilmingLocationsNumberPerYear())

// 📝 TODO: Number of filming locations by district (arrondissement)
// 1. Implement the function, the expected result is an object with
// district as keys and filming locations number as value, e.g:
//    const filmingLocationsPerDistrict = {
//      '75013': 1234,
//      '75014': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerDistrict () {
	let counter = {}

	filmingLocations.forEach(function(obj) {
		var key = obj.fields.ardt_lieu
		counter[key] = (counter[key] || 0) + 1
	})
	return counter
}
console.log(getFilmingLocationsNumberPerDistrict())

// 📝 TODO: Number of locations per film, sorted in descending order
// 1. Implement the function, result expected as an array of object like:
//    const result = [{film: 'LRDM - Patriot season 2', locations: 12}, {...}]
// 2. Log the first and last item of the array
function getFilmLocationsByFilm () {
	let counter = {}
	for(var i = 0; i<filmingLocations.length;i++)
	{
		var key = filmingLocations[i];
		if(!counter[key.fields.nom_tournage]){
			counter[key.fields.nom_tournage]=0;
		}
		counter[key.fields.nom_tournage]+=1;
	}
	return [counter]
}
console.log(getFilmLocationsByFilm())

// 📝 TODO: Number of different films
// 1. Implement the function
// 2. Log the result
function getNumberOfFilms() {
	let counter = {}
	var compteur=0
	for(var i = 0; i<filmingLocations.length;i++)
	{
		var key = filmingLocations[i];
		if(!counter[key.fields.nom_tournage])
		{
			compteur+=1;
		}
		counter[key.fields.nom_tournage]=2319;
	}
	return compteur;
}
console.log(getNumberOfFilms())
// 📝 TODO: All the filming locations of `LRDM - Patriot season 2`
// 1. Return an array with all filming locations of LRDM - Patriot season 2
// 2. Log the result
function getArseneFilmingLocations () {
	let counter=[]
	for(var i = 0; i<filmingLocations.length;i++)
	{
		var key = filmingLocations[i];
		if(key.fields.nom_tournage==`LRDM - Patriot season 2`)
		{
			counter.push(key.fields.adresse_lieu)
		}

	}

	return [counter]
}
console.log(getArseneFilmingLocations())

// 📝 TODO: Tous les arrondissement des lieux de tournage de nos films favoris
//  (favoriteFilms)
// 1. Return an array of all the districts of each favorite films given as a
//    parameter. e.g. :
//    const films = { 'LRDM - Patriot season 2': ['75013'] }
// 2. Log the result
function getFavoriteFilmsLocations (favoriteFilmsNames) {
	const films = {}
	for (let i of filmingLocations) {
		let key = i.fields;
		if (favoriteFilmsNames.includes(key.nom_tournage))
		{
			if (!films[key.nom_tournage]){
				films[key.nom_tournage]=[];
			}
			films[key.nom_tournage].push(key.ardt_lieu);
		}
	}
	return [films];
}
const favoriteFilmsNames =
	[
		'LRDM - Patriot season 2',
		'Alice NEVERS',
		'Emily in Paris',
	]
console.log(getFavoriteFilmsLocations(favoriteFilmsNames))
// 📝 TODO: All filming locations for each film
//     e.g. :
//     const films = {
//        'LRDM - Patriot season 2': [{...}],
//        'Une jeune fille qui va bien': [{...}]
//     }
function getFilmingLocationsPerFilm () {
	let counter = {}
	for (var i=0; i<filmingLocations.length; i++) {
		var key = filmingLocations[i];
		if (!counter[key.fields.nom_tournage]){
			counter[key.fields.nom_tournage]=[]
		}
		counter[key.fields.nom_tournage].push(key.fields.adresse_lieu);

	}
	return counter
}
console.log(getFilmingLocationsPerFilm())

// 📝 TODO: Count each type of film (Long métrage, Série TV, etc...)
// 1. Implement the function
// 2. Log the result
function countFilmingTypes () {
	return {}
}

// 📝 TODO: Sort each type of filming by count, from highest to lowest
// 1. Implement the function. It should return a sorted array of objects like:
//    [{type: 'Long métrage', count: 1234}, {...}]
// 2. Log the result
function sortedCountFilmingTypes () {
	return []
}

/**
 * This arrow functions takes a duration in milliseconds and returns a
 * human-readable string of the duration
 * @param ms
 * @returns string
 */
const duration = (ms) => `${(ms/(1000*60*60*24)).toFixed(0)} days, ${((ms/(1000*60*60))%24).toFixed(0)} hours and ${((ms/(1000*60))%60).toFixed(0)} minutes`

// 📝 TODO: Find the filming location with the longest duration
function filmingLocationLongestDuration() {
	let ans = 0, nomTournage = "";
	for (let i of filmingLocations) {
		let key = i.fields;
		let d1 = new Date(key.date_fin);
		let d2 = new Date(key.date_debut);
		let d3 = d1.getTime()-d2.getTime()
		if (ans<d3){
			ans=d3;
			nomTournage=key.nom_tournage;
		}
	}
	console.log(nomTournage,duration(ans));
}
filmingLocationLongestDuration();
// 📝 TODO: Compute the average filming duration
// 1. Implement the function
// 2. Log the result
function averageFilmingLocation() {
	let total = 0;
	for (let i of filmingLocations) {
		let key = i.fields
		let d1 = new Date(key.date_fin);
		let d2 = new Date(key.date_debut);
		let d3 = d1.getTime()-d2.getTime()
		total+=d3;
	}
	return duration(total/filmingLocations.length);
}