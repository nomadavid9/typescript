//Planet Class with constructor and draw method
class Planet {
    radius: number;
    elliptical: boolean;
    
    constructor (planetRad, isElliptical = false){
        this.radius = planetRad;
        this.elliptical = isElliptical;
    };
    
};

let earth = new Planet(20)
console.log(earth)