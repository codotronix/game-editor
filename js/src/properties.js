var S9 = S9 || {};
S9.objects = S9.objects || [];
S9.functions = S9.functions || {};

(function(){
    //Export these functionss
    S9.functions.populateProperties = populateProperties;
    
    //This function will populate the properties of S9.selectedObject
    function populateProperties () {
        var tableHTML = '';
        for (var key in S9.selectedObject) {
            
            if (typeof S9.selectedObject[key] === 'function') {continue;}
            
            tableHTML += '<tr>'
                        +   '<td><b>' + key + '</b></td>'
                        +   '<td><input data-property=' + key + ' type="text" value=' + S9.selectedObject[key] + '></td>'
                        +'</tr>';
        }
        
        $('#propertiesTable').html(tableHTML);
        $('#propertiesTable input[data-property="id"]').prop('disabled', 'disabled');
    }
})()