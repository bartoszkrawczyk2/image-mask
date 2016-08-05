# image-mask
Dynamically add transparent mask to image.

## Install

`npm install image-mask --save`

## API

* `new ImageMask(source, pixels: bool)` - create new masked image (returns canvas element).
  * `source`: Img element, image object or canvas.
  * `pixels`: Use pixel coordinates instead of percentage. Default: **false**
* `.mask(array)` - apply mask.
* `.getImg(callback)` - returns img element.

## Usage
Example usage:
```js
import ImageMask from 'image-mask';
let maskImage = new ImageMask(document.getElementById('example-image'));
document.body.appendChild(maskImage);

maskImage.mask([
    [0, .95],           // start point
    [.8, .95, 1, .7],   // quadratic curve
    [1, 1],             // line
    [0, 1],             // line
]);

// 2 points = line
// 4 points = quadratic curve
// 6 points = bezier curve
```
Result will be:

![output](http://projects.bartoszkrawczyk.com/im1.png)

`.mask` also returns canvas, so you can append it like this:

```js
element.appendChild(maskImage.mask([
    [.2, .5],
    [.43, .5],
    [.5, .3],
    [.57, .5],
    [.8, .5],
    [.6, .6],
    [.7, .8],
    [.5, .68],
    [.3, .8],
    [.4, .6]
]));
```

Result will be:

![output](http://projects.bartoszkrawczyk.com/im2.png)

## License

MIT