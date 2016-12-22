var _9S = _9S || {};
_9S.utilities = _9S.utilities || {};

(function(){
    
    //EXPORTS
    _9S.utilities.getObjectById = getObjectById;    
    
    function getObjectById (id) {
        for(var i in _9S.objects) {
            if(_9S.objects[i].id === id) {
                return _9S.objects[i];
            }
        }
    }
})()