/// <reference path="EnvironmentParams.ts" />

namespace S9 {
    export class GameEnvironment implements EnvironmentParams {
        name: string;
        imgUrl: string;
        isSprite: boolean;  //default false
        height: number;
        width: number;
        x: number;
        y: number;
        autoMove: EnvironmentAutoMove;
        htmlContainerID: string;

        constructor (env_params: EnvironmentParams) {
            this.name = env_params.name;
            this.imgUrl = env_params.imgUrl;
            this.isSprite = env_params.isSprite || false;
            this.height = env_params.height;
            this.width = env_params.width;
            this.x = env_params.x;
            this.y = env_params.y;
            this.htmlContainerID = env_params.htmlContainerID;
        }
    }
}
