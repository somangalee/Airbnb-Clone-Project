function filterByCity(targetCity, listingCityArray) {
  let ourCities = [];
  
  for (let i = 0; i < listingCityArray.length; i++) {
    if (targetCity === listingCityArray[i] || targetCity.toLowerCase() === listingCityArray[i].toLowerCase()) { 
      ourCities.push(i);
    }
  }
   return ourCities;
}
// so for this function, the for loop starts at 0 and continues until the end of the listingCityArray that has 3 values that are ["Lake Tahoe", San Diego", "Chicago"] and for every loop it adds 1 to the starter value of 0; therefore checking if the user input of targetcity matches the index of that of our listingcityarray. If it does match, it adds it to our empty array called ourcities and then returns the value. 


function filterByPrice(minPrice, maxPrice, listingPriceArray) {
    let ourPrices = [];
  
  for (let i = 0; i < listingPriceArray.length; i++) {
    if (listingPriceArray[i] <= maxPrice && listingPriceArray[i] >= minPrice) { 
      ourPrices.push(i);
    }
  }
  return ourPrices;
}


function filterByTypes(targetTypes, listingTypeArray) {
  let filteredType = [];

  for (let i = 0; i < listingTypeArray.length; i++) {
  for (let j = 0; j < targetTypes.length; j++) { 
      if (listingTypeArray[i] === targetTypes[j]) { 
      filteredType.push(i);
      }
    }
  }
  return filteredType;
}