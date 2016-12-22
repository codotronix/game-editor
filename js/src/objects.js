var _9S = _9S || {};
_9S.objects = _9S.objects || [];
_9S.functions = _9S.functions || {};

(function(){
    
    //Export these functions
    _9S.functions.populateObjectsList = populateObjectsList;
    
    //This will populate the Objects List
    function populateObjectsList () {
        _9S.selectedObject = _9S.selectedObject || _9S.objects[0];
        var objectsListHTML = '';
        
        //console.log(_9S.objects);
        
        for(var i in _9S.objects) {
            if(_9S.objects[i].id === _9S.selectedObject.id) {
                objectsListHTML += '<li data-objectid="' +_9S.objects[i].id+ '">' + _9S.objects[i].name + '<i class="fa fa-check-circle"></i></li>';
            }
            else {
                objectsListHTML += '<li data-objectid="' +_9S.objects[i].id+ '">' + _9S.objects[i].name + '<i class="fa fa-circle"></i></li>';
            }
        }
        //console.log(objectsListHTML);
        $('#objectList').html(objectsListHTML);       
         
    }
})()