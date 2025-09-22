// Method overriding - starter code
// TODO: Learn about method overriding in inheritance

// Base class:
// class Shape {
//     constructor(name) {
//         this.name = name;
//     }
    
//     getArea() {
//         return "Area calculation not implemented";
//     }
    
//     getPerimeter() {
//         return "Perimeter calculation not implemented";
//     }
    
//     describe() {
//         return `This is a ${this.name}`;
//     }
// }

// Derived class with method overriding:
// class Rectangle extends Shape {
//     constructor(width, height) {
//         super("Rectangle");
//         this.width = width;
//         this.height = height;
//     }
    
//     // Override the getArea method
//     getArea() {
//         return this.width * this.height;
//     }
    
//     // Override the getPerimeter method
//     getPerimeter() {
//         return 2 * (this.width + this.height);
//     }
// }

// Usage:
// const rect = new Rectangle(5, 3);
// console.log(rect.getArea()); // 15
// console.log(rect.getPerimeter()); // 16

// TODO: Add your method overriding examples here
