function GameObject (name, height, width, imgUrl, x, y, speed) {
    //var this = this;
    
    this.id = S9.utilities.createNewID();        
    this.name = name || S9.utilities.createNewName();
    this.height = height || "";
    this.width = width || "";
    this.imgUrl = imgUrl || "";
    this.x = x || 50;
    this.y = y || 50;
    this.speed = speed || 0;
    this.hidden = false;
    this.elem = S9.utilities.createHTMlObject(this);
    
    //directionSense can be either 4 or 8
    //directionSense = 4, means it can go [E,W,N,S]
    //directionSense = 8, means it can go [E,W,N,S,NE,NW,SE,SW]
    this.directionSense = 4; 
    this.direction = 'E';   //East=Right, West=Left, North=Up, South=Down
    
    
    
    GameObject.prototype.addProperty = addProperty;
    GameObject.prototype.updateProperty = updateProperty;
    GameObject.prototype.setX = setX;
    GameObject.prototype.setY = setY;
    GameObject.prototype.setHeight = setHeight;
    GameObject.prototype.setWidth = setWidth;
    GameObject.prototype.setImage = setImage;
    GameObject.prototype.show = showObject;
    GameObject.prototype.hide = hideObject;
    GameObject.prototype.move = move;
    GameObject.prototype.moveLeft = moveLeft;
    GameObject.prototype.moveRight = moveRight;
    GameObject.prototype.moveUp = moveUp;
    GameObject.prototype.moveDown = moveDown;
    
    
    //init();
    
//    function init () {
//        initVars ();
//        this.elem = S9.utilities.createHTMlObject(this);
//    }
//    
//    function initVars () {
//        this.id = S9.utilities.createNewID();
//        
//        this.name = name || S9.utilities.createNewName();
//        this.height = height || "";
//        this.width = width || "";
//        this.imgUrl = imgUrl || "";
//        this.x = x || 50;
//        this.y = y || 50;
//        this.speed = speed || 0;
//        this.hidden = false;
//        
//        GameObject.prototype.addProperty = addProperty;
//        GameObject.prototype.updateProperty = updateProperty;
//        GameObject.prototype.setX = setX;
//        GameObject.prototype.setY = setY;
//    }
    
    function setX (newX) {
        if (newX < 0 || (newX+this.width) > S9.world.width) {return;}
        this.x = newX;
        this.elem.style.left = newX + 'px';
        return this;
    }
    
    function setY (newY) {
        if(newY < 0 || (newY+this.height) > S9.world.height) {return;}
        this.y = newY;
        this.elem.style.top = newY + 'px';
        return this;
    }
    
    function setHeight (newVal) {
        this.height = newVal;
        this.elem.style.height = newVal + 'px';
        return this;
    }
    
    function setWidth (newVal) {
        this.width = newVal;
        this.elem.style.width = newVal + 'px';
        return this;
    }
    
    function setImage (imgUrl) {
        this.imgUrl = imgUrl;
        this.elem.style.backgroundImage = "url(" + imgUrl + ")";
        return this;
    }
    
    function moveLeft () {
        this.setX(this.x - this.speed);
    }
    
    function moveRight () {
        this.setX(this.x + this.speed);
    }
    
    function moveUp () {
        this.setY(this.y - this.speed);
    }
    
    function moveDown () {
        this.setY(this.y + this.speed);
    }
    
    var prevDirection = 'E';
    function move (direction) {
        if (direction === 'left') {
            this.moveLeft();
        }
        else if (direction === 'right') {
            this.moveRight();
        }
        else if (direction === 'up') {
            this.moveUp();
        }
        else if (direction === 'down') {
            this.moveDown();
        }
        else if (direction === 'random' || direction === undefined) {
            if (this.directionSense === 4) {
                
                //to stop shaking behavior, restrict movement direction
                if (prevDirection === 'N') {
                  this.direction = ['N','E','W'][Math.floor(Math.random() * 3)];  
                }
                else if (prevDirection === 'E') {
                  this.direction = ['N','E','S'][Math.floor(Math.random() * 3)];  
                }
                else if (prevDirection === 'S') {
                  this.direction = ['E','S','W'][Math.floor(Math.random() * 3)];  
                }
                else if (prevDirection === 'W') {
                  this.direction = ['N','S','W'][Math.floor(Math.random() * 3)];  
                }
                
                
                if (this.direction === 'N') { this.moveUp(); }
                else if (this.direction === 'E') { this.moveRight(); }
                else if (this.direction === 'S') { this.moveDown(); }
                else if (this.direction === 'W') { this.moveLeft(); }
                
                prevDirection = this.direction;
            }
            else if (this.directionSense === 8) {
                //TODO: implement movement for 8 directional things
            }
            
            
        }
    }
    
    function addProperty (propName, propVal) {
        this[propName] = propVal;
        //force refresh the properties panel
        S9.functions.populateProperties();
        return this;
    }
    
    function updateProperty (propName, newVal) {
        
        //Convert Numbers to numbers
        if(!isNaN(newVal)) {newVal = parseInt(newVal);}
        //console.log('this=');console.log(this);
        if (propName === 'x') {
            this.setX(newVal);
        }
        else if (propName === 'y') {
            this.setY(newVal);
        }
        else if (propName === 'height') {
            this.setHeight(newVal);
        }
        else if (propName === 'width') {
            this.setWidth(newVal);
        }
        else if (propName === 'imgUrl') {
            this.setImage(newVal);
        }
        else if (propName === 'hidden') {
            if(newVal === true || newVal === 'true') { this.hide(); }
            else if(newVal == false || newVal == 'false') { this.show(); }
        }
        else {
            //console.log('this=');console.log(this);            
            this[propName] = newVal;
        }
    }
    
    function showObject (time) {
        if(isNaN(time)) {
            $('#'+ this.id).show();            
        } else {
            $('#'+ this.id).show(time);
        }
        this.hidden = false;
        return this;
    }
    
    function hideObject (time) {
        if(isNaN(time)) {
            $('#'+ this.id).hide();
        } else {
            $('#'+ this.id).hide(time);
        }
        this.hidden = true;
        return this;
    }
}