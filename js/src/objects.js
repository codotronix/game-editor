var S9 = S9 || {};
S9.objects = S9.objects || [];
S9.functions = S9.functions || {};

(function(){
    
    //Export these functions
    S9.functions.populateObjectsList = populateObjectsList;
    
    //This will populate the Objects List
    function populateObjectsList () {
        S9.selectedObject = S9.selectedObject || S9.objects[0];
        var objectsListHTML = '';
        
        //console.log(S9.objects);
        
        for(var i in S9.objects) {
            if(S9.objects[i].id === S9.selectedObject.id) {
                objectsListHTML += '<li data-objectid="' +S9.objects[i].id+ '">' + S9.objects[i].name + '<i class="fa fa-check-circle"></i></li>';
            }
            else {
                objectsListHTML += '<li data-objectid="' +S9.objects[i].id+ '">' + S9.objects[i].name + '<i class="fa fa-circle"></i></li>';
            }
        }
        //console.log(objectsListHTML);
        $('#objectList').html(objectsListHTML);       
         
    }
})()