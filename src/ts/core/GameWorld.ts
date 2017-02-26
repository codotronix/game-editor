var $: any = $;
namespace S9 {
    export class GameWorld  {
        static id: string;
        static worldResizeListeners: Array<Function> = [];
        static gameStatus: E_GameStatus;
        public static width: number;
        public static height: number;

        private constructor (htmlGameWordID: string) {}

        public static init (htmlGameWordID: string) {
            GameWorld.id = htmlGameWordID;
            GameWorld.gameStatus = E_GameStatus.End;
            GameWorld.calculateWorldDimensions();
            GameWorld.addWorldResizeListener(GameWorld.calculateWorldDimensions);

            GameWorld.startWorldResizeListener();
        }

        static calculateWorldDimensions () {
            GameWorld.width = $('#' + GameWorld.id).width();
            GameWorld.height = $('#' + GameWorld.id).height();
            console.log("height = " + S9.GameWorld.height);
            console.log("width = " + S9.GameWorld.width);
        }

        static addWorldResizeListener (fn: Function) {
            GameWorld.worldResizeListeners.push(fn);
        }

        static startWorldResizeListener () {
            $(window).on('resize', function () {
                for (var i in GameWorld.worldResizeListeners) {
                    GameWorld.worldResizeListeners[i]();
                }
            })
        }

    }    
}