import ImageMask from './modules/imagemask';

let maskImage = new ImageMask(document.getElementById('img'));
img.remove();
// document.body.appendChild(maskImage.mask([
//     [.2, .5],
//     [.43, .5],
//     [.5, .3],
//     [.57, .5],
//     [.8, .5],
//     [.6, .6],
//     [.7, .8],
//     [.5, .68],
//     [.3, .8],
//     [.4, .6]
// ]));

document.body.appendChild(maskImage);

maskImage.mask([
    [0, .95],
    [.8, .95, 1, .7],
    [1, 1],
    [0, 1],
]);

maskImage.getImg((img) => {
    console.log(img);
});