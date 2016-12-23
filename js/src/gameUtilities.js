var S9 = S9 || {};
S9.utilities = S9.utilities || {};

var go;

(function(){
    
    //EXPORTS
    S9.utilities.createHTMlObject = createHTMlObject; 
    S9.utilities.getObjectById = getObjectById; 
    S9.utilities.createNewID = createNewID; 
    S9.utilities.createNewName = createNewName; 
    
    go = getObjectByName;    
    
    function createHTMlObject (obj) {
        var objEl = document.createElement('div');        
        objEl.id = obj.id;
        objEl.style.height = obj.height + 'px';
        objEl.style.width = obj.width + 'px';
        objEl.style.top = obj.y + 'px';
        objEl.style.left = obj.x + 'px';
        objEl.style.backgroundImage = "url(" + obj.imgUrl + ")";
        objEl.className += " game-object ";
        
        $('#gameEditor').append(objEl);
        
        return (objEl);
    }
    
    function createNewID () {
        return ('goid' + (Math.random() * Math.random() / Math.random()).toString().replace('.','') + 'z');
    }
    
    function createNewName () {
        return ('N-' + Math.random().toString().replace('.',''));
    }
    
    function getObjectById (id) {
        for(var i in S9.objects) {
            if(S9.objects[i].id === id) {
                return S9.objects[i];
            }
        }
    }
    
    function getObjectByName (name) {
        for(var i in S9.objects) {
            if(S9.objects[i].name === name) {
                return S9.objects[i];
            }
        }
    }
})()