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