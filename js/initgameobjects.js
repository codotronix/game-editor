var _9S = _9S || {};

$(function(){
    
    init();
    
    function init () {
        initVariables();
        
        populateObjectsList();
        _9S.functions.populateProperties();
    }
    
    function initVariables(){
        _9S.objects = [];
        _9S.functions = {};
        
        

        _9S.utilities = {};
        
    }
    
    
    
    
})