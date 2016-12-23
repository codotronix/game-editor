var S9 = S9 || {};
S9.objects = S9.objects || [];
S9.functions = S9.functions || {};

(function(){
    
    //Export these functions
    S9.functions.populateObjectsList = populateObjectsList;
    S9.functions.addNewObject = addNewObject;
    
    function addNewObject (obj) {
        S9.objects.push(obj);
        S9.selectedObject = obj;
        //S9.selectedObjectID = obj.id;
    
        //Populate Objects List in Objects Panel
        S9.functions.populateObjectsList();

        //Populate Properties Panel
        S9.functions.populateProperties();
    }
    
    //This will populate the Objects List
    function populateObjectsList () {
        S9.selectedObject = S9.selectedObject || S9.objects[0];
        //S9.selectedObjectID = S9.selectedObjectID || S9.objects[0].id;
        var objectsListHTML = '';
        
        //console.log(S9.objects);
        
        for(var i in S9.objects) {
            if(S9.objects[i].id === S9.selectedObject.id) {
                objectsListHTML += '<li data-objectid="' +S9.objects[i].id+ '">' + S9.objects[i].name + '<i class="fa fa-clone clone-object" title="Clone this object"></i><i class="fa fa-check-circle select-obj"></i></li>';
            }
            else {
                objectsListHTML += '<li data-objectid="' +S9.objects[i].id+ '">' + S9.objects[i].name + '<i class="fa fa-clone clone-object" title="Clone this object"></i><i class="fa fa-circle select-obj" title="Select this object"></i></li>';
            }
        }
        //console.log(objectsListHTML);
        $('#objectList').html(objectsListHTML);       
         
    }
    
})()