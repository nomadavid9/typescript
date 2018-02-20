//Planet Class with constructor and draw method
var Planet = /** @class */ (function () {
    function Planet(planetRad, isElliptical) {
        if (isElliptical === void 0) { isElliptical = false; }
        this.radius = planetRad;
        this.elliptical = isElliptical;
    }
    ;
    return Planet;
}());
;
var earth = new Planet(20);
console.log(earth);
