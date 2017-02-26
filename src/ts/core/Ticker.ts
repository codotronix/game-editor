namespace S9 {
    

    //The Ticker Class
    export class Ticker {
        static tickerListers: Array<I_CallbackFnSignature> = [];
        static tickerRunning: boolean = false;

        static addToTick (a:I_CallbackFnSignature) {
            if (Ticker.indexOfListener(a.callbackId, Ticker.tickerListers) === -1) {
                Ticker.tickerListers.push(a);
            }            
        }

        static removeFromTick (id:string) {
            let index: number = Ticker.indexOfListener(id, Ticker.tickerListers);
            if (index !== -1) {
                Ticker.tickerListers.splice(index, 1);
                return index;
            }
            return -1;
        }

        static indexOfListener (id:string, listeners: Array<I_CallbackFnSignature>) {            
            for (var i=0; i<listeners.length; i++) {
                if(listeners[i].callbackId === id) {
                    return i;
                }
            }
            return -1;
        }

        static runTikcerLoop () {           
            //Call all the listeners
            for (var i in Ticker.tickerListers) {
                Ticker.tickerListers[i].fn.apply(Ticker.tickerListers[i].objectInstance);
            }

            //If ticker is running, call the loop again
            if (Ticker.tickerRunning) {
                setTimeout(Ticker.runTikcerLoop, 1000/60);
            }
        }

        static startTicker () {
            Ticker.tickerRunning = true;
        }

        static stopTicker () {
            Ticker.tickerRunning = false;
        }
    }
    
}