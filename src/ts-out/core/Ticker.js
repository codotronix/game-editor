var S9;
(function (S9) {
    //The Ticker Class
    var Ticker = (function () {
        function Ticker() {
        }
        Ticker.addToTick = function (a) {
            if (Ticker.indexOfListener(a.callbackId, Ticker.tickerListers) === -1) {
                Ticker.tickerListers.push(a);
            }
        };
        Ticker.removeFromTick = function (id) {
            var index = Ticker.indexOfListener(id, Ticker.tickerListers);
            if (index !== -1) {
                Ticker.tickerListers.splice(index, 1);
                return index;
            }
            return -1;
        };
        Ticker.indexOfListener = function (id, listeners) {
            for (var i = 0; i < listeners.length; i++) {
                if (listeners[i].callbackId === id) {
                    return i;
                }
            }
            return -1;
        };
        Ticker.runTikcerLoop = function () {
            //Call all the listeners
            for (var i in Ticker.tickerListers) {
                Ticker.tickerListers[i].fn.apply(Ticker.tickerListers[i].objectInstance);
            }
            //If ticker is running, call the loop again
            if (Ticker.tickerRunning) {
                setTimeout(Ticker.runTikcerLoop, 1000 / 60);
            }
        };
        Ticker.startTicker = function () {
            Ticker.tickerRunning = true;
        };
        Ticker.stopTicker = function () {
            Ticker.tickerRunning = false;
        };
        return Ticker;
    }());
    Ticker.tickerListers = [];
    Ticker.tickerRunning = false;
    S9.Ticker = Ticker;
})(S9 || (S9 = {}));
//# sourceMappingURL=Ticker.js.map