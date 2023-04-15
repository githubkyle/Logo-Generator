Circle = <circle cx="25" cy="75" r="20"/>;


Square = const sharp = require('sharp');

function generateLogo(input, size, color) {
  const image = sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: color.r, g: color.g, b: color.b, alpha: 1 }
    }
  });

  const text = {
    text: input,
    font: 'Helvetica-Bold',
    fontFeatures: [{ name: 'kern', value: 1.2 }]
  };

  return image
    .metadata()
    .then((metadata) => {
      const textWidth = metadata.width * 0.8;
      const textHeight = metadata.height * 0.8;
      const x = metadata.width / 2 - textWidth / 2;
      const y = metadata.height / 2 - textHeight / 2;

      return image
        .text(text, { left: x, top: y, width: textWidth, height: textHeight })
        .png()
        .toBuffer();
    });
}
const input = 'My Logo';
const size = 500;
const color = { r: 255, g: 255, b: 255 };
generateLogo(input, size, color)
  .then((imageBuffer) => {
    // Do something with the image buffer, like save it to a file or send it as a response
  });

Triangle =
const { createCanvas } = require('canvas');

const canvasWidth = 200;
const canvasHeight = 200;

const canvas = createCanvas(canvasWidth, canvasHeight);
const context = canvas.getContext('2d');

const triangleSize = 100;

context.beginPath();
context.moveTo(canvasWidth / 2, canvasHeight / 2 - triangleSize / 2);
context.lineTo(canvasWidth / 2 + triangleSize / 2, canvasHeight / 2 + triangleSize / 2);
context.lineTo(canvasWidth / 2 - triangleSize / 2, canvasHeight / 2 + triangleSize / 2);
context.closePath();

// Fill the triangle with a color:
context.fillStyle = '#FF0000';
context.fill();
const out = fs.createWriteStream('triangle.png');
const stream = canvas.createPNGStream();

stream.pipe(out);
out.on('finish', () => console.log('The PNG file was created.'));