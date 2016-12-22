var _9S = _9S || {};
_9S.objects = _9S.objects || [];
_9S.functions = _9S.functions || {};

(function(){
    //Export these functionss
    _9S.functions.populateProperties = populateProperties;
    
    //This function will populate the properties of _9S.selectedObject
    function populateProperties () {
        for (var key in _9S.selectedObject) {
            $('#propertiesTable [data-property="' + key + '"]').val(_9S.selectedObject[key]);
        }
    }
})()