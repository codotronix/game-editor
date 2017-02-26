var $ = $;
var S9;
(function (S9) {
    var GameWorld = (function () {
        function GameWorld(htmlGameWordID) {
        }
        GameWorld.init = function (htmlGameWordID) {
            GameWorld.id = htmlGameWordID;
            GameWorld.gameStatus = S9.E_GameStatus.End;
            GameWorld.calculateWorldDimensions();
            GameWorld.addWorldResizeListener(GameWorld.calculateWorldDimensions);
            GameWorld.startWorldResizeListener();
        };
        GameWorld.calculateWorldDimensions = function () {
            GameWorld.width = $('#' + GameWorld.id).width();
            GameWorld.height = $('#' + GameWorld.id).height();
            console.log("height = " + S9.GameWorld.height);
            console.log("width = " + S9.GameWorld.width);
        };
        GameWorld.addWorldResizeListener = function (fn) {
            GameWorld.worldResizeListeners.push(fn);
        };
        GameWorld.startWorldResizeListener = function () {
            $(window).on('resize', function () {
                for (var i in GameWorld.worldResizeListeners) {
                    GameWorld.worldResizeListeners[i]();
                }
            });
        };
        return GameWorld;
    }());
    GameWorld.worldResizeListeners = [];
    S9.GameWorld = GameWorld;
})(S9 || (S9 = {}));
//# sourceMappingURL=GameWorld.js.map