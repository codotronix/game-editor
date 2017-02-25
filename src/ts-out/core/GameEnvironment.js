/// <reference path="EnvironmentParams.ts" />
var S9;
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
            this.autoMove = env_params.autoMove || S9.EnvironmentAutoMove.None;
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
            if (this.autoMove === S9.EnvironmentAutoMove.None) {
                width = this.width + "px";
                height = this.height + "px";
            }
            else if (this.autoMove === S9.EnvironmentAutoMove.Left) {
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
            var animationHtml = "";
            if (this.autoMove !== S9.EnvironmentAutoMove.None) {
                animationHtml = "\n                        -webkit-animation: " + animationName + " " + this.animationDuration + " linear " + this.animationDelay + " infinite normal;\n                        animation: " + animationName + " " + this.animationDuration + " linear " + this.animationDelay + " infinite normal;\n                    }\n\n                    @keyframes " + animationName + " {\n                        from { background-position: 0px 0px; }\n                        to { background-position: " + anim_x_displacement + " " + anim_y_displacement + "; }\n                    }\n                ";
            }
            else {
                animationHtml = "}";
            }
            var htmlObj = "\n                <div id=" + this.id + " class=\"S9-Game-Object\"></div>\n                \n                <style>\n                    #" + this.id + " {\n                        height: " + height + ";\n                        width: " + width + ";\n                        top: " + this.y + "px;\n                        left: " + this.x + "px;\n                        background: url(\"" + this.imgUrl + "\") 0px 0px repeat;\n                        " + animationHtml + "\n                </style>\n            ";
            $('#' + this.htmlContainerID).append(htmlObj);
        };
        return GameEnvironment;
    }());
    S9.GameEnvironment = GameEnvironment;
})(S9 || (S9 = {}));
//# sourceMappingURL=GameEnvironment.js.map