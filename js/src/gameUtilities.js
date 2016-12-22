var S9 = S9 || {};
S9.utilities = S9.utilities || {};

var go;

(function(){
    
    //EXPORTS
    S9.utilities.getObjectById = getObjectById;    
    go = getObjectByName;
    
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