import Player from "../player";
import Sprite from "../sprite";

export interface IGameConfig {
    id: string
    height: number;
    width: number;
}

export interface IPosition {
    x: number;
    y: number;
}

export interface ISpriteConfig {
    position: IPosition;
    color: string;
}

export interface IPlayerConfig extends ISpriteConfig {
    velocity: IPosition;
}

export interface IGameRenderConfig {
    players: Player[],
    assets: Sprite[]
}

export interface IAttackBox {
    position: IPosition;
    width: number;
    height: number;
}