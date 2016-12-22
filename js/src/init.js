$(function(){
    
    //create 2 predefined objects
    _9S.objects.push(new GameObject("Goltu", 83, 60, "img/goltu_run.png", 200, 50));
    _9S.objects.push(new GameObject("Box", 70, 70, "img/box.png", 300, 90));
    
    //Populate Objects List in Objects Panel
    _9S.functions.populateObjectsList();
    
    //Populate Properties Panel
    _9S.functions.populateProperties();
})