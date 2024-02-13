import React, { useEffect } from 'react';
import p5 from 'p5';

const Sketch = () => {
    useEffect(() => {
        new p5((sketch) => {
            sketch.setup = () => {
                sketch.createCanvas(400, 400);
                sketch.background(255);
            };

            sketch.draw = () => {
                sketch.stroke(0);
                sketch.strokeWeight(4);
                if (sketch.mouseIsPressed) {
                    sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
                }
            };
        }, document.getElementById('canvasContainer'));
    }, []);

    return <div id="canvasContainer"></div>;
};

export default Sketch;
