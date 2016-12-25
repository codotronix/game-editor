var S9 = S9 || {};
S9.objects = S9.objects || [];
S9.functions = S9.functions || {};

(function(){
    
    //Export these functions
    S9.functions.populateObjectsList = populateObjectsList;
    S9.functions.addNewObject = addNewObject;
    S9.functions.createNewObject = createNewObject;
    S9.functions.cloneObject = cloneObject;
    S9.functions.deleteObject = deleteObject;
    S9.functions.callOnAll = callOnAll;
    
    //Add new object by clicking add button
    function addNewObject (objArr) {
        for (var i in objArr) {
            S9.objects.push(objArr[i]);
            S9.selectedObject = objArr[i];
        }
        
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
                objectsListHTML += '<li data-objectid="' +S9.objects[i].id+ '">' + S9.objects[i].name + '<i class="fa fa-clone clone-object" title="Clone this object"></i><i class="fa fa-check-circle select-obj"></i><i class="fa fa-times delete-obj"></i></li>';
            }
            else {
                objectsListHTML += '<li data-objectid="' +S9.objects[i].id+ '">' + S9.objects[i].name + '<i class="fa fa-clone clone-object" title="Clone this object"></i><i class="fa fa-circle select-obj" title="Select this object"></i><i class="fa fa-times delete-obj"></i></li>';
            }
        }
        //console.log(objectsListHTML);
        $('#objectList').html(objectsListHTML);       
         
    }
    
    
    //This will clone a given a object
    function cloneObject (targetObj, howManyClones) {
        //if obj name is passed get the object 1st
        if(typeof targetObj === 'string') {
            targetObj = S9.utilities.getObjectByName(targetObj);
        }
        
        var cloneCount = howManyClones || 1;
        
        var objArr = [];
        var newObj;
        for (var i=0; i< cloneCount; i++) {
            newObj = $.extend(true, (new GameObject()), targetObj);
            newObj.id = S9.utilities.createNewID();
            newObj.name = S9.utilities.createNewName(targetObj.name);
            newObj.elem = S9.utilities.createHTMlObject(newObj);
            objArr.push(newObj);
        }
        
        S9.functions.addNewObject(objArr);
        
        return ((cloneCount > 1) ? objArr : objArr[0]);
    }
    
    
    //Delete an Object
    function deleteObject (objName) {
        var objIndexToBeDeleted = -1;
        var idToBeDeleted;
        for (var i=0; i < S9.objects.length; i++) {
            if(S9.objects[i].name === objName) {
                objIndexToBeDeleted = i;
                idToBeDeleted = S9.objects[i].id;                
                break;
            }
        }
        
        //if object found, delete it
        //make neccessary visual updates
        if (objIndexToBeDeleted !== -1) {
            //delete the object from objects array
            S9.objects.splice(objIndexToBeDeleted, 1);
            
            //delete the html object
            $('#'+idToBeDeleted).remove();
            
            //change seleted object if required
            if(S9.selectedObject.id === idToBeDeleted) {
                if(S9.objects.length > 0) {
                    S9.selectedObject = S9.objects[0]
                }
                else {
                    S9.selectedObject = null;
                }
            }
            
            S9.functions.populateObjectsList();
            S9.functions.populateProperties();
        }
        
    }
    
    function callOnAll(objArr, fnToCall) {
        for(var i=0; i<objArr.length; i++) {
            objArr[i][fnToCall]();
        }
    }
    
})()