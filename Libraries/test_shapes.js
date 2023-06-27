const { Shapes, Triangle, Circle, Square } = require('./shapes');

describe('Shapes', () => {
    it('set the color of the shape', () => {
        const shapes = new Shapes();
        shapes.setColor('pink');
        expect(shapes.color).toEqual('pink');
    });
});

describe('Triangle', () => {
    it('shows triangle in green color', () => {
        const shapes = new Triangle();
        shapes.setColor('green');
        const expected = `<polygon points="150, 18 244, 182 56, 182" style="fill:green"/>`
        expect(shapes.render()).toEqual('expected');
    });
});

describe('Circle', () => {
    it('shows circle in red color', () => {
        const shapes = new Circle();
        shapes.setColor('red');
        const expected = `<circle cx="150" cy="100" r="80" style="fill:red"/>`
        expect(shapes.render()).toEqual('expected');
    });
});

describe('Square', () => {
    it('shows square in blue color', () => {
        const shapes = new Square();
        shapes.setColor('blue');
        const expected = `<rect x="50" y="20" width="150" height="150" style="fill:blue"/>`
        expect(shapes.render()).toEqual('expected');
    });
});