// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
    function findMatching(drivers, string){
        function callDrivers(drivers){
            
            return drivers.toUpperCase() === string.toUpperCase()
        }
        const driversArray = drivers.filter(callDrivers)
        if (driversArray){
            return driversArray;
        }
    }

    function fuzzyMatch(drivers, string){
        const matchDriver = drivers.filter(function(drivers){
              if(string === drivers.slice(0, 2)){
                return (drivers);
            }
            else {
                return drivers === string
            }
        })
            return matchDriver;

    }

    function matchName(drivers, string){
        const driverName = drivers.filter(function(string){
            for(let object in drivers){
                if (string === drivers[0]){
                    return drivers
                } else {
                    return string === drivers[4]
                }
            }
        });
        return driverName;
    }

    matchName (drivers,"Bobby");
