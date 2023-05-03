class Triangle {
  
  render(Scolor, Tcolor, text) {
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="150, 18 244, 182 56, 182" fill=`${Scolor}`/> <text x="150" y="125" font-size="60" text-anchor="middle" fill= `${Tcolor}`>`${text}`</text>`
  }
}

class Circle {

  render(Scolor, Tcolor, text) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill=`${Scolor}` />
    
    <text x="150" y="125" font-size="60" text-anchor="middle" fill=`${Tcolor}`>`${text}`</text>
    
    </svg>`;
  }




}
class Square  {
  render(Scolor, Tcolor, text) {
    return
   `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>
    <rect x="50" y="50" width="200" height="200" fill=`${Scolor}` />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill=`${Tcolor}`>`${text}`</text>
    </svg>`
      }
    ;

  }

function ShapeShifter() {
    switch(shape) {
      case Triangle: 
      return Triangle.render();
      break;
      case Circle:
      return Circle.render();
      break;
      case Square:
      return Square.render();
      default: console.log("Please choose again");
    }
    }
module.exports = { Triangle, Circle, Square, ShapeShifter };
