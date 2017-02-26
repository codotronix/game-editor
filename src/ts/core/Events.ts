namespace S9 {
    export class Events {
        static keyListeners = {};   // A json with keyCode: listenersArray structure
        private static keyPressBindingDone:boolean = false;

        private constructor () {}

        static addKeyListener (k:E_Key, a:I_CallbackFnSignature) {            
            Events.keyListeners[k] = Events.keyListeners[k] || [];
            Events.keyListeners[k].push(a);

            //This will ensure that binding is called only once
            if(!Events.keyPressBindingDone) {
                Events.bindKeyPress();
                Events.keyPressBindingDone = true;
            }
        }

        static bindKeyPress () {
            $(document).on('keyup', function(e){
                if(GameWorld.gameStatus !== E_GameStatus.Running) {
                    return;
                }
                for(var key in Events.keyListeners) {
                    //if pressed keyCode matches one for which we have some listeners
                    if (parseInt(key) === e.keyCode) {
                        //Call each listener with their proper context
                        for (var i in Events.keyListeners[key]) {
                            Events.keyListeners[key][i].fn.apply(Events.keyListeners[key][i].objectInstance);
                        }
                        return;
                    }
                }
            })
        }


    }
}