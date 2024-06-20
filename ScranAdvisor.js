
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


module.exports = ScranAdvisor;