
const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype:

//countRestaurants.  - Count the number of restaurants that we have stored
ScranAdvisor.prototype.countRestaurants = function() {
    return this.restaurants.length;
};

ScranAdvisor.prototype.findRestaurantByName = function(name) {
    return this.restaurants.find(restaurant => restaurant.name === name)
};

ScranAdvisor.prototype.getAllRestaurantNames = function () {
    return this.restaurants.map(restaurant => restaurant.name);
};

ScranAdvisor.prototype.findRestaurantByCity = function (city) {
    return this.restaurants.filter(restaurant => restaurant.location.town === city)
};


ScranAdvisor.prototype.mostCommonCuisine = function(){
    //loop through each restaurant
    //then loop through cuisines for each restaurant
    //counting instacnes of cuisines as i go
    //store values...object/dictionary 
     const cuisineCounter = {}; 
     this.restaurants.forEach(restaurant => {
        restaurant.cuisines.forEach(cuisine => {
            //if the cuisine exists in the object already, add 1 to the tally
            if (cuisineCounter[cuisine]){
                cuisineCounter[cuisine]++;
            }else {
                cuisineCounter[cuisine] = 1;
            }

        })
     }
     //return the cuisine with the most tallies
     //x is the accumilator

     const mostCommonCuisine = Object.keys(cuisineCounter).reduce((trackingCuisine, nextCuisine) =>
    cuisineCounter[trackingCuisine] > cuisineCounter[nextCuisine] ? trackingCuisine : nextCuisine);

    return mostCommonCuisine;


}   


module.exports = ScranAdvisor;



//scranAdvisor.findRestaurantByName
//[grab object] [.= run method] [to return]