const returnFirstTwoDrivers = function (drivers) {  
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers);

const createFareMultiplier = function(integer) {
        return function multiple (fare) {
        return fare * integer;
    };
}

const fareDoubler = (fare) => {
    return createFareMultiplier (2) (fare);
};

const fareTripler = (fare) => {
    return createFareMultiplier (3) (fare);
}

const selectDifferentDrivers = (arrayOfDrivers, driverFunction) => {
    return driverFunction(arrayOfDrivers);
  };
  