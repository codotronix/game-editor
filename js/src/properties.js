var S9 = S9 || {};
S9.objects = S9.objects || [];
S9.functions = S9.functions || {};

(function(){
    //Export these functionss
    S9.functions.populateProperties = populateProperties;
    
    //This function will populate the properties of S9.selectedObject
    function populateProperties () {
        var tableHTML = '';
        var selectedObj = S9.selectedObject;
        //var selectedObj = S9.utilities.getObjectById(S9.selectedObjectID);
        for (var key in selectedObj) {
            
            if (typeof selectedObj[key] !== 'string' &&
               typeof selectedObj[key] !== 'number' &&
               typeof selectedObj[key] !== 'boolean') 
            {continue;}
            
            tableHTML += '<tr>'
                        +   '<td><b>' + key + '</b></td>'
                        +   '<td><input data-property="' + key + '" type="text" value="' + selectedObj[key] + '"></td>'
                        +'</tr>';
        }
        
        $('#propertiesTable').html(tableHTML);
        $('#propertiesTable input[data-property="id"]').prop('disabled', 'disabled');
    }
})()