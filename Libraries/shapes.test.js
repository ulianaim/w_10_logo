const { Triangle, Circle, Square } = require('./shapes');

describe('Circle', () => {
        test('render correctly', () => {
            const shapes = new Circle();
            let color = ('red')
            shapes.setColor(color);
            expect(shapes.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="red"/>`);
        });
    });

    describe('Triangle', () => {
        test('render correctly', () => {
            const shapes = new Triangle();
            let color = ('blue')
            shapes.setColor(color);
            expect(shapes.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`);
        });
    });

    describe('Square', () => {
        test('render correctly', () => {
            const shapes = new Square();
            let color = ('white')
            shapes.setColor(color);
            expect(shapes.render()).toEqual(`<rect x="50" y="20" width="150" height="150" fill="white"/>`);
        });
    });
