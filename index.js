class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Getter method for diameter
    get diameter() {
      return this.radius * 2;
    }
  
    // Setter method for diameter
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
  
    // Getter method for circumference
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    // Setter method for circumference
    set circumference(circumference) {
      this.radius = circumference / (Math.PI * 2);
    }
  
    // Getter method for area
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    // Setter method for area
    set area(area) {
      this.radius = Math.sqrt(area / Math.PI);
    }
  }

  const circle1 = new Circle(5);
console.log(circle1.diameter); // Output: 10
console.log(circle1.circumference); // Output: 31.41592653589793
console.log(circle1.area); // Output: 78.53981633974483

circle1.diameter = 12;
console.log(circle1.radius); // Output: 6
console.log(circle1.circumference); // Output: 37.69911184307752
console.log(circle1.area); // Output: 113.09733552923255

circle1.area = 50;
console.log(circle1.radius); // Output: 3.989422804014327
console.log(circle1.diameter); // Output: 7.978845608028654
console.log(circle1.circumference); // Output: 25.07937419817256