var _9S = {};

$(function(){
    
    init();
    
    function init () {
        initVariables();
        createPredefinedObjects();
        populateObjectsList();
        populateProperties();        
    }
    
    function initVariables(){
        _9S.objects = [];
        _9S.functions = {};
        _9S.functions.populateObjectsList = populateObjectsList;
        _9S.functions.populateProperties = populateProperties;

        _9S.utilities = {};
        _9S.utilities.getObject = getObject;
    }
    
    function createPredefinedObjects () {
        var obj_1 = {
            "id": "object_1",
            "name": "Goltu",
            "x": 200,
            "y": 50,
            "width": 60,
            "height": 83,
            "imageUrl": "img/goltu_run.png"
        };

        var obj_2 = {
            "id": "object_2",
            "name": "Box",
            "x": 300,
            "y": 90,
            "width": 70,
            "height": 70,
            "imageUrl": "img/box.png"
        };       
        
        _9S.objects.push(obj_1);
        _9S.objects.push(obj_2);
        
        for(var i in _9S.objects) {
            createHTMLObject(_9S.objects[i]);
        }
    }
    
    function createHTMLObject (obj) {
        var objEl = document.createElement('div');
        objEl.style.height = obj.height + 'px';
        objEl.style.width = obj.width + 'px';
        objEl.style.position = 'absolute';
        objEl.style.top = obj.y + 'px';
        objEl.style.left = obj.x + 'px';
        objEl.style.backgroundImage = "url(" + obj.imageUrl + ")";
        
        $('#gameEditor').append(objEl);
    }
    
    function populateObjectsList () {
        _9S.selectedObject = _9S.selectedObject || _9S.objects[0];
        var objectsListHTML = '';
        for(var i in _9S.objects) {
            if(_9S.objects[i].id === _9S.selectedObject.id) {
                objectsListHTML += '<li data-objectid="' +_9S.objects[i].id+ '">' + _9S.objects[i].name + '<i class="fa fa-check-circle"></i></li>';
            }
            else {
                objectsListHTML += '<li data-objectid="' +_9S.objects[i].id+ '">' + _9S.objects[i].name + '<i class="fa fa-circle"></i></li>';
            }
        }
        
        $('#objectList').html(objectsListHTML);       
         
    }
    
    function populateProperties () {
        for (var key in _9S.selectedObject) {
            $('#propertiesTable [data-property="' + key + '"]').val(_9S.selectedObject[key]);
        }
    }
    
    function getObject (id) {
        for(var i in _9S.objects) {
            if(_9S.objects[i].id === id) {
                return _9S.objects[i];
            }
        }
    }
})