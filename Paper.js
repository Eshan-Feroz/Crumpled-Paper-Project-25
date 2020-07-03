// This class inherits the properties of the BaseClass to make the crumpled paper
class Paper extends BaseClass {
    constructor(x, y,radius){
        super(x, y, radius);
        this.image = loadImage("Sprites/paper.png");
        
    }
    
    display(){

        super.display();
    }
    
  };
