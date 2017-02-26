var S9;
(function (S9) {
    var Events = (function () {
        function Events() {
        }
        Events.addKeyListener = function (k, a) {
            Events.keyListeners[k] = Events.keyListeners[k] || [];
            Events.keyListeners[k].push(a);
            //This will ensure that binding is called only once
            if (!Events.keyPressBindingDone) {
                Events.bindKeyPress();
                Events.keyPressBindingDone = true;
            }
        };
        Events.bindKeyPress = function () {
            $(document).on('keyup', function (e) {
                if (S9.GameWorld.gameStatus !== S9.E_GameStatus.Running) {
                    return;
                }
                for (var key in Events.keyListeners) {
                    //if pressed keyCode matches one for which we have some listeners
                    if (parseInt(key) === e.keyCode) {
                        //Call each listener with their proper context
                        for (var i in Events.keyListeners[key]) {
                            Events.keyListeners[key][i].fn.apply(Events.keyListeners[key][i].objectInstance);
                        }
                        return;
                    }
                }
            });
        };
        return Events;
    }());
    Events.keyListeners = {}; // A json with keyCode: listenersArray structure
    Events.keyPressBindingDone = false;
    S9.Events = Events;
})(S9 || (S9 = {}));
//# sourceMappingURL=Events.js.map