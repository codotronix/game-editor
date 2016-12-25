$(function(){
    
    //create 2 predefined objects
    S9.objects.push(new GameObject("Goltu", 83, 60, "img/goltu_run.png", 200, 50));
    S9.objects.push(new GameObject("Box", 70, 70, "img/box.png", 300, 90));
    
    //Populate Objects List in Objects Panel
    S9.functions.populateObjectsList();
    
    //Populate Properties Panel
    S9.functions.populateProperties();
    
    //Populate Code Editor from URL Code
    S9.utilities.extractCodeFromUrl();
    
    gameLoop();
    
    function gameLoop () {
        if (S9.tickRunning) {
           for (var i=0; i < S9.tickCallbacks.length; i++) {
               S9.tickCallbacks[i]();
           } 
        }
        setTimeout(gameLoop, 1000/30);
    }
})