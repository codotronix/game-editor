namespace S9 {
    // An object of type EnvironmentParams is needed while creating a GameEnviroment object
    export interface EnvironmentParams {
        name: string;
        imgUrl: string;
        imgX?: string;                   //image x position in spritesheet - default "0px"
        imgY?: string;                   //image y position in spritesheet - default "0px"
        isSprite ?: boolean;            //default false
        height: number;
        width: number;
        x: number;
        y: number;
        autoMove: EnvironmentAutoMove;
        animationDuration: string;
        animationDelay?: string;         //Default delay is 0s
        //interactable ?: boolean;      //default false, means animation will be done is css3, if true then jqeury/js
        htmlContainerID: string
    }

    /*
    * The direction in which game environment objects like, road, clouds etc should move towards automatically 
    */
    export enum EnvironmentAutoMove {
        None, Left, Right, Up, Down, Random
    }
}
