/**
 * 水滴形状
 */

import Path, { PathOption } from '../Path';

class DropletShape {
    cx = 0
    cy = 0
    width = 0
    height = 0
}

interface DropletOption extends PathOption {
    shape?: Partial<DropletShape>
}
export default class Droplet extends Path<DropletOption> {

    type = 'droplet'

    shape: DropletShape

    constructor(opts?: DropletOption) {
        super(opts, null, new DropletShape())
    }

    buildPath(ctx: CanvasRenderingContext2D, shape: DropletShape) {
        const x = shape.cx;
        const y = shape.cy;
        const a = shape.width;
        const b = shape.height;

        ctx.moveTo(x, y + a);
        ctx.bezierCurveTo(
            x + a,
            y + a,
            x + a * 3 / 2,
            y - a / 3,
            x,
            y - b
        );
        ctx.bezierCurveTo(
            x - a * 3 / 2,
            y - a / 3,
            x - a,
            y + a,
            x,
            y + a
        );
        ctx.closePath();
    }
}