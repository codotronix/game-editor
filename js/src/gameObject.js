function GameObject (name, height, width, imgUrl, x, y) {
    var _this = this;
    
    init();
    
    function init () {
        initVars ();
        createHTMlObject();
    }
    
    function initVars () {
        _this.id = 'goid' + (Math.random() * Math.random() / Math.random()).toString().replace('.','') + 'z';
        
        _this.name = name;
        _this.height = height;
        _this.width = width;
        _this.imgUrl = imgUrl;
        _this.x = x || 50;
        _this.y = y || 50;
        
        _this.setX = setX;
        _this.setY = setY;
    }
    
    function createHTMlObject () {
        var objEl = document.createElement('div');
        objEl.id = _this.id;
        objEl.style.height = _this.height + 'px';
        objEl.style.width = _this.width + 'px';
        objEl.style.position = 'absolute';
        objEl.style.top = _this.y + 'px';
        objEl.style.left = _this.x + 'px';
        objEl.style.backgroundImage = "url(" + _this.imgUrl + ")";
        
        $('#gameEditor').append(objEl);
    }
    
    function setX (newX) {
        _this.x = newX;
        $('#'+ _this.id).css('left', newX + 'px');
    }
    
    function setY (newY) {
        _this.y = newY;
        $('#'+ _this.id).css('top', newY + 'px');
    }
}