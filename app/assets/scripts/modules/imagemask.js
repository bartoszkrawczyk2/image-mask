import 'blueimp-canvas-to-blob';

export default (sourceImage = new Image(), pixels = false) => {
    let canvas = document.createElement('canvas'),
        ctx    = canvas.getContext('2d');

    canvas.width = sourceImage.width;
    canvas.height = sourceImage.height;
    ctx.drawImage(sourceImage, 0, 0);
    ctx.fillStyle = '#000';

    canvas.mask = function(points = []) {
        ctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(sourceImage, 0, 0);
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.moveTo(
            pixels ? points[0][0] : points[0][0] * this.width,
            pixels ? points[0][1] : points[0][1] * this.height
        );

        for (let i = 1; i < points.length; i++) {
            if (points[i].length === 6) {
                ctx.bezierCurveTo(
                    pixels ? points[i][0] : points[i][0] * this.width,
                    pixels ? points[i][1] : points[i][1] * this.height,
                    pixels ? points[i][2] : points[i][2] * this.width,
                    pixels ? points[i][3] : points[i][3] * this.height,
                    pixels ? points[i][4] : points[i][2] * this.width,
                    pixels ? points[i][5] : points[i][3] * this.height
                )
            } else if (points[i].length === 4) {
                ctx.quadraticCurveTo(
                    pixels ? points[i][0] : points[i][0] * this.width,
                    pixels ? points[i][1] : points[i][1] * this.height,
                    pixels ? points[i][2] : points[i][2] * this.width,
                    pixels ? points[i][3] : points[i][3] * this.height
                );
            } else {
                ctx.lineTo(
                    pixels ? points[i][0] : points[i][0] * this.width,
                    pixels ? points[i][1] : points[i][1] * this.height
                );
            }
        }

        ctx.closePath();
        ctx.fill();

        return this;
    }

    canvas.getImg = function(cb = () => {}) {
        canvas.toBlob((blob) => {
            let img = new Image();
            img.src = URL.createObjectURL(blob);
            cb.call(this, img);
        });
    }

    return canvas;
}