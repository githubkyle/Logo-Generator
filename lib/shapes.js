const SvgBuilder = require('svg-builder');


class Triangle {
  constructor(){}
  render()

  const svg = new SvgBuilder({
    viewBox: '0 0 100 100',
  });

  const path = svg.createPath()
  .moveTo(50, 0)
  .lineTo(100, 100)
  .lineTo(0, 100)
  .closePath();
}
class Circle {
  constructor(){}
  render()
  svg.createShape('circle', {
    cx: 50,
    cy: 50,
    r: 40,
    fill: Scolor,
  });
}
class Square {
  constructor(){}
  render()
  svg.createShape('rect', {
    x: 10,
    y: 10,
    width: 80,
    height: 80,
    fill: Scolor,
  });
}

module.exports = { Triangle, Circle, Square};