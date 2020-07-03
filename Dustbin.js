class Dustbin{
    constructor(x, y, width, height){
        // Options for the dustbin
        var options = {
            isStatic:true
        }

        // Body of dustbin
        this.body = Bodies.rectangle(x, y, width, height, options);

        // Width, height, x and y of dustbin is initialized
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;

        // Load the image
        this.image = loadImage("Sprites/dustbingreen.png");
        
        // Add class body to the world
        World.add(world, this.body); 
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        rectMode(CENTER);
        
        // Fill the bin outer layer with color green
        fill("green");

        // Draw the rectangle of outer layer
        rect(this.x, this.y, this.width, this.height);
        
        // Print the image
        image(this.image, 950,390,250, 300);
    }
};