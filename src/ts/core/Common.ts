namespace S9 {
    export class Common {

    }

    //Any object method that wants add itself as listener should follow this structure
    export interface I_CallbackFnSignature {
        callbackId: string,
        fn: Function,
        objectInstance: any
    }

    // An object of type CharacterParams is needed while creating a GameCharacter object
    export interface I_CharacterParams {
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

    // An object of type EnvironmentParams is needed while creating a GameEnviroment object
    export interface I_EnvironmentParams {
        name: string;
        imgUrl: string;
        imgX?: string;                   //image x position in spritesheet - default "0px"
        imgY?: string;                   //image y position in spritesheet - default "0px"
        isSprite ?: boolean;            //default false
        height: number;
        width: number;
        x: number;
        y: number;
        speed ?: number;
        jumpUpSpeed ?: number;
        gravityPull ?: number;
        autoMove: S9.E_EnvironmentAutoMove;
        animationDuration: string;
        animationDelay?: string;         //Default delay is 0s
        //interactable ?: boolean;      //default false, means animation will be done is css3, if true then jqeury/js
        htmlContainerID: string
    }

    export interface I_KeyListner {
        key: E_Key,
        listeners: Array<I_CallbackFnSignature>
    }

    export enum E_GameStatus {
        Running, Paused, End
    }

    /*
    * The direction in which game environment objects like, road, clouds etc should move towards automatically 
    */
    export enum E_EnvironmentAutoMove {
        None, Left, Right, Up, Down, Random
    }

    export enum E_Key {
        SPACE = 32,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90
    }
}