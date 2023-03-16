// Pimp My Ride 

let tripToParse = "Perdita 8 10 8"
var listTrip = {}

function parseTrip(trip) {
	// TODO
    let eachElement = trip.split(" ")
    // let name = eachElement[0]
    // let departure = eachElement[1]
    // let duration = eachElement[2]
    // let price = eachElement[3]
    // // voir pour transformer le price en un nombre 
    // return {name, departure, duration, price}
}
console.log(parseTrip(tripToParse))

let tripsToParse = [
	"Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7"
]

function parseTrips(trips) {
    let newTrips = []
    for (let i=0; i<trips.length; i++){
        newTrips.push(parseTrip(trips[i]))
    }   
    return newTrips
}

console.log(parseTrips(tripsToParse))

function getTripsPrice (voyage){
    let getPrice = voyage.filter(function(element) { 
        return typeof element == 'number'
    })
    return getPrice
}

console.log(getTripsPrice(tripsToParse))
