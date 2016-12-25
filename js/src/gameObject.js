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
        this.x = newX;
        this.elem.style.left = newX + 'px';
        return this;
    }
    
    function setY (newY) {
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
        this.setX(parseInt(this.x) - this.speed);
    }
    
    function moveRight () {
        this.setX(parseInt(this.x) + this.speed);
    }
    
    function moveUp () {
        this.setY(parseInt(this.y) - this.speed);
    }
    
    function moveDown () {
        this.setY(parseInt(this.y) + this.speed);
    }
    
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
            var rand = Math.ceil(Math.random() * 3);
            
            //1=left, 2=right, 3=none
            if (rand === 1) { this.moveLeft(); }
            else if (rand === 2) { this.moveRight(); }
            
            rand = Math.ceil(Math.random() * 3);
            
            //1=up, 2=down, 3=none
            if (rand === 1) { this.moveUp(); }
            else if (rand === 2) { this.moveDown(); }
        }
    }
    
    function addProperty (propName, propVal) {
        this[propName] = propVal;
        //force refresh the properties panel
        S9.functions.populateProperties();
        return this;
    }
    
    function updateProperty (propName, newVal) {
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
        return this;
    }
    
    function hideObject (time) {
        if(isNaN(time)) {
            $('#'+ this.id).hide();
        } else {
            $('#'+ this.id).hide(time);
        }
        return this;
    }
}