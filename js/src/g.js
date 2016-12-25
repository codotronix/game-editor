var g = {
    get: S9.utilities.getObjectByName,
    getAll: S9.utilities.getAllObjects,
    callOnAll: S9.functions.callOnAll,
    create: S9.functions.createNewObject,
    clone: S9.functions.cloneObject,
    delete: S9.functions.deleteObject,
    tick: S9.utilities.addCallbackFunctionToTick,
    tick_start: S9.utilities.tick_start,
    tick_stop: S9.utilities.tick_stop
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


//box will move randomly
http://127.0.0.1:49484/index.html#src=dmFyIGIgPSBnLmdldCgnQm94Jyk7CmIuc3BlZWQgPSAzMDsKYm94TW92ZSgpOwpmdW5jdGlvbiBib3hNb3ZlICgpIHsgYi5tb3ZlKCdyYW5kb20nKTsgc2V0VGltZW91dChib3hNb3ZlLCA1MDApCn0=

var b = g.get('Box');
b.speed = 30;
boxMove();
function boxMove () { b.move('random'); setTimeout(boxMove, 500)
}




http://127.0.0.1:51344/index.html#src=dmFyIGIgPSBnLmdldCgnQm94Jyk7CmIuc3BlZWQgPSAzOwpnLnRpY2soZnVuY3Rpb24oKXsgYi5tb3ZlKCk7IH0pOwpnLnRpY2tfc3RhcnQoKTs=

var b = g.get('Box');
b.speed = 3;
g.tick(function(){ b.move(); });
g.tick_start();



http://127.0.0.1:49370/index.html#src=Zy5jbG9uZSgnQm94JywgMTApOwp2YXIgYm94TGlzdCA9IGcuZ2V0QWxsKCdCb3gnKTsKZy50aWNrKCBmdW5jdGlvbiAoKSB7IGcuY2FsbE9uQWxsKGJveExpc3QsICdtb3ZlJyk7Cn0pOwpnLnRpY2tfc3RhcnQoKTs=

g.clone('Box', 10);
var boxList = g.getAll('Box');
g.tick( function () { 
  g.callOnAll(boxList, 'move');
});
g.tick_start();

*/