var g = {
    get: S9.utilities.getObjectByName,
    create: S9.functions.createNewObject,
    clone: S9.functions.cloneObject,
    delete: S9.functions.deleteObject
}



/*

    http://127.0.0.1:50015/index.html#src=IHZhciBib3ggPSBnLmdldCgnQm94Jyk7IGZ1bmN0aW9uIG1vdmVCb3ggKCkgeyBib3guc2V0WChib3gueCArIDEwKTsgc2V0VGltZW91dChtb3ZlQm94LCA1MDApIH0gbW92ZUJveCgpOw==
    
    
    
    
    var box = g.get('Box');
    function moveBox () {
        box.setX(box.x + 10);
        setTimeout(moveBox, 500)
    }    
    moveBox();
    
   
   
   
http://127.0.0.1:50015/index.html#src=dmFyIGJveGVzID0gZy5jbG9uZShnLmdldCgnQm94JyksIDUpOyAKdmFyIG07IAptb3ZlUmFuZG9tKCk7CmZ1bmN0aW9uIG1vdmVSYW5kb20oKSB7IAogIGZvcih2YXIgaSBpbiBib3hlcykgeyAKICAgIG0gPSAoLTEpKipNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDIpOwogICAgYm94ZXNbaV0uc2V0WChib3hlc1tpXS54ICsgKE1hdGgucmFuZG9tKCkgKiAzMCAqIG0pKTsKICAgIGJveGVzW2ldLnNldFkoYm94ZXNbaV0ueSArIChNYXRoLnJhbmRvbSgpICogMzAgKiBtKSk7CiAgfSAKICBzZXRUaW1lb3V0KG1vdmVSYW5kb20sIDUwMCk7Cn0=   
    
    
    var boxes = g.clone(g.get('Box'), 5); 
var m; 
moveRandom();
function moveRandom() { 
  for(var i in boxes) { 
    m = (-1)**Math.ceil(Math.random() * 2);
    boxes[i].setX(boxes[i].x + (Math.random() * 30 * m));
    boxes[i].setY(boxes[i].y + (Math.random() * 30 * m));
  } 
  setTimeout(moveRandom, 500);
}




*/