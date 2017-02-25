/// <reference path="EnvironmentParams.ts" />
var S9;
(function (S9) {
    var GameEnvironment = (function () {
        function GameEnvironment(env_params) {
            this.name = env_params.name;
            this.imgUrl = env_params.imgUrl;
            this.isSprite = env_params.isSprite || false;
            this.height = env_params.height;
            this.width = env_params.width;
            this.x = env_params.x;
            this.y = env_params.y;
            this.htmlContainerID = env_params.htmlContainerID;
        }
        return GameEnvironment;
    }());
    S9.GameEnvironment = GameEnvironment;
})(S9 || (S9 = {}));
//# sourceMappingURL=GameEnvironment.js.map