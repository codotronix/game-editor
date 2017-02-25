var $ = $;
var S9;
/************************************************************************
 *  GameWorld.js 
 * **********************************************************************/
(function (S9) {
    var GameWorld = (function () {
        function GameWorld(htmlGameWordID) {
        }
        GameWorld.init = function (htmlGameWordID) {
            GameWorld.gameWorldID = htmlGameWordID;
            GameWorld.calculateWorldDimensions();
            GameWorld.addWorldResizeListener(GameWorld.calculateWorldDimensions);
            GameWorld.startWorldResizeListener();
        };
        GameWorld.calculateWorldDimensions = function () {
            GameWorld.width = $('#' + GameWorld.gameWorldID).width();
            GameWorld.height = $('#' + GameWorld.gameWorldID).height();
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

//////////////////////////////////////////////////////////////////////////



/************************************************************************
 *  EnvironmentParams.js
 * **********************************************************************/
(function (S9) {
    /*
    * The direction in which game environment objects like, road, clouds etc should move towards automatically
    */
    var EnvironmentAutoMove;
    (function (EnvironmentAutoMove) {
        EnvironmentAutoMove[EnvironmentAutoMove["None"] = 0] = "None";
        EnvironmentAutoMove[EnvironmentAutoMove["Left"] = 1] = "Left";
        EnvironmentAutoMove[EnvironmentAutoMove["Right"] = 2] = "Right";
        EnvironmentAutoMove[EnvironmentAutoMove["Up"] = 3] = "Up";
        EnvironmentAutoMove[EnvironmentAutoMove["Down"] = 4] = "Down";
        EnvironmentAutoMove[EnvironmentAutoMove["Random"] = 5] = "Random";
    })(EnvironmentAutoMove = S9.EnvironmentAutoMove || (S9.EnvironmentAutoMove = {}));
})(S9 || (S9 = {}));
//////////////////////////////////////////////////////////////////////////



/************************************************************************
 *  GameEnvironment.js
 * **********************************************************************/
(function (S9) {
    var GameEnvironment = (function () {
        function GameEnvironment(env_params) {
            this.name = env_params.name;
            this.imgUrl = env_params.imgUrl;
            this.imgX = env_params.imgX || "0px";
            this.imgY = env_params.imgY || "0px";
            this.isSprite = env_params.isSprite || false;
            this.height = env_params.height;
            this.width = env_params.width;
            this.x = env_params.x;
            this.y = env_params.y;
            this.autoMove = env_params.autoMove;
            this.animationDuration = env_params.animationDuration;
            this.animationDelay = env_params.animationDelay || "0s";
            this.htmlContainerID = env_params.htmlContainerID;
            this.createHtmlObject();
            return this;
        }
        GameEnvironment.prototype.createHtmlObject = function () {
            this.id = this.name + "-" + (Math.random() * Math.random()).toString().replace(/[.]/g, "");
            var animationName = "Animation-" + this.id;
            var anim_x_displacement;
            var anim_y_displacement;
            var height;
            var width;
            if (this.autoMove === S9.EnvironmentAutoMove.Left) {
                anim_x_displacement = this.width + "px";
                anim_y_displacement = "0px";
                width = "100%";
                height = this.height + "px";
            }
            else if (this.autoMove === S9.EnvironmentAutoMove.Right) {
                anim_x_displacement = "-" + this.width + "px";
                anim_y_displacement = "0px";
                width = "100%";
                height = this.height + "px";
            }
            else if (this.autoMove === S9.EnvironmentAutoMove.Up) {
                anim_x_displacement = "0px";
                anim_y_displacement = this.height + "px";
                width = this.width + "px";
                height = "100%";
            }
            else if (this.autoMove === S9.EnvironmentAutoMove.Down) {
                anim_x_displacement = "-" + this.width + "px";
                anim_y_displacement = "-" + this.height + "px";
                width = this.width + "px";
                height = "100%";
            }
            var htmlObj = "\n                <div id=" + this.id + " class=\"S9-Game-Object\"></div>\n                \n                <style>\n                    #" + this.id + " {\n                        height: " + height + ";\n                        width: " + width + ";\n                        top: " + this.y + "px;\n                        left: " + this.x + "px;\n                        background: url(\"" + this.imgUrl + "\") 0px 0px repeat;\n                        -webkit-animation: " + animationName + " " + this.animationDuration + " linear " + this.animationDelay + " infinite normal;\n                        animation: " + animationName + " " + this.animationDuration + " linear " + this.animationDelay + " infinite normal;\n                    }\n\n                    @keyframes " + animationName + " {\n                        from { background-position: 0px 0px; }\n                        to { background-position: " + anim_x_displacement + " " + anim_y_displacement + "; }\n                    }\n                </style>\n            ";
            $('#' + this.htmlContainerID).append(htmlObj);
        };
        return GameEnvironment;
    }());
    S9.GameEnvironment = GameEnvironment;
})(S9 || (S9 = {}));
//////////////////////////////////////////////////////////////////////////