var S9 = S9 || {};
S9.objects = S9.objects || [];
S9.functions = S9.functions || {};

(function(){
    
    //Export these functions
    S9.functions.populateObjectsList = populateObjectsList;
    S9.functions.addNewObject = addNewObject;
    S9.functions.createNewObject = createNewObject;
    S9.functions.cloneObject = cloneObject;
    
    //Add new object by clicking add button
    function addNewObject (obj) {
        S9.objects.push(obj);
        S9.selectedObject = obj;
        //S9.selectedObjectID = obj.id;
    
        //Populate Objects List in Objects Panel
        S9.functions.populateObjectsList();

        //Populate Properties Panel
        S9.functions.populateProperties();
    }
    
    //Create a new object by Code
    function createNewObject (name, height, width, imgUrl, x, y, speed) {
        var obj = new GameObject(name, height, width, imgUrl, x, y, speed);
        S9.functions.addNewObject(obj);
        return(obj);
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
    
    
    //This will clone a given a object
    function cloneObject (targetObj) {
        //if obj name is passed get the object 1st
        if(typeof targetObj === 'string') {
            targetObj = S9.utilities.getObjectByName(targetObj);
        }
        
        var newObj = $.extend(true, (new GameObject()), targetObj);
        
        newObj.id = S9.utilities.createNewID();
        newObj.name = S9.utilities.createNewName();
        newObj.elem = S9.utilities.createHTMlObject(newObj);
        
        S9.functions.addNewObject(newObj);
        
        return newObj;
    }
    
})()