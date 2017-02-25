namespace S9 {
    // An object of type CharacterParams is needed while creating a GameCharacter object
    export interface CharacterParams {
        name: string;
        imgUrl: string;
        imgX?: string;                   //image x position in spritesheet - default "0px"
        imgY?: string;                   //image y position in spritesheet - default "0px"
        isSprite ?: boolean;             //default true
        height: number;
        width: number;
        x: number;
        y: number;
        speed : number;
        jumpUpSpeed : number;
        gravityPull : number;
        animationDuration: string;
        animationDelay?: string;         //Default delay is 0s
        //interactable ?: boolean;      //default false, means animation will be done is css3, if true then jqeury/js
        htmlContainerID: string
    }
}
