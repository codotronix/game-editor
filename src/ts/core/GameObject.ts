namespace S9 {
    export class GameObject implements I_EnvironmentParams {
        id: string;
        name: string;
        imgUrl: string;
        imgX?: string;                   //image x position in spritesheet - default "0px"
        imgY?: string;                   //image y position in spritesheet - default "0px"
        isSprite: boolean;  //default false
        height: number;
        width: number;
        x: number;
        y: number;
        autoMove: E_EnvironmentAutoMove;
        speed ?: number;
        jumpUpSpeed ?: number;
        gravityPull ?: number;
        animationDuration: string;
        animationDelay: string;
        htmlContainerID: string;

        constructor (env_params: I_EnvironmentParams) {
            this.name = env_params.name;
            this.imgUrl = env_params.imgUrl;
            this.imgX = env_params.imgX || "0px";
            this.imgY = env_params.imgY || "0px";
            this.isSprite = env_params.isSprite || false;
            this.height = env_params.height;
            this.width = env_params.width;
            this.x = env_params.x;
            this.y = env_params.y;
            this.autoMove = env_params.autoMove || E_EnvironmentAutoMove.None;
            this.animationDuration = env_params.animationDuration;
            this.animationDelay = env_params.animationDelay || "0s";
            this.htmlContainerID = env_params.htmlContainerID;

            this.createHtmlObject();

            return this;
        }

        createHtmlObject () {
            this.id = this.name + "-" + (Math.random() * Math.random()).toString().replace(/[.]/g, "");
            let animationName = "Animation-" + this.id;

            let anim_x_displacement: string;
            let anim_y_displacement: string;
            let height: string;
            let width: string;

            if (this.autoMove === E_EnvironmentAutoMove.None) {
                width = this.width + "px";
                height = this.height + "px";
            }
            else if (this.autoMove === E_EnvironmentAutoMove.Left) {
                anim_x_displacement = this.width + "px";
                anim_y_displacement = "0px";
                width = "100%";
                height = this.height + "px";
            }
            else if (this.autoMove === E_EnvironmentAutoMove.Right) {
                anim_x_displacement = "-" + this.width + "px";
                anim_y_displacement = "0px";
                width = "100%";
                height = this.height + "px";
            }
            else if (this.autoMove === E_EnvironmentAutoMove.Up) {
                anim_x_displacement = "0px";
                anim_y_displacement = this.height + "px";
                width = this.width + "px";
                height = "100%";
            }
            else if (this.autoMove === E_EnvironmentAutoMove.Down) {
                anim_x_displacement = "-" + this.width + "px";
                anim_y_displacement = "-" + this.height + "px";
                width = this.width + "px";
                height = "100%";
            }

            let animationHtml: string = "";

            if (this.autoMove !== E_EnvironmentAutoMove.None) {
                animationHtml = `
                        -webkit-animation: ${animationName} ${this.animationDuration} linear ${this.animationDelay} infinite normal;
                        animation: ${animationName} ${this.animationDuration} linear ${this.animationDelay} infinite normal;
                    }

                    @keyframes ${animationName} {
                        from { background-position: 0px 0px; }
                        to { background-position: ${anim_x_displacement} ${anim_y_displacement}; }
                    }
                `;
            }
            else {
                animationHtml = "}";
            }
            


            let htmlObj = `
                <div id=${this.id} class="S9-Game-Object"></div>
                
                <style>
                    #${this.id} {
                        height: ${height};
                        width: ${width};
                        top: ${this.y}px;
                        left: ${this.x}px;
                        background: url("${this.imgUrl}") 0px 0px repeat;
                        ${animationHtml}
                </style>
            `;

            $('#' + this.htmlContainerID).append(htmlObj);
        }

        jump () {
            console.log(this.name + " is jumping...");
            
        }
    }
}
