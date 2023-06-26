class Shapes {
    constructor() {
      this.color = ""
    }
  
    setColor(color) {
        this.color = color;
    }
  }
 
  class Triangle extends Shapes {
     render() {
        `<polygon points="250,60 100,400 400,400" fill="${this.color}"/>`
     }
    
  }
  class Circle extends Shapes {
    render() {
       `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}
class Square extends Shapes {
    render() {
       `<rect x="50" y="20" width="150" height="150" fill="${this.color}"/>`
    }
}

module.exports = {Triangle, Circle, Square}