import { IInitLayoutPayLoad, ILayoutList } from "store/layout";
import { ITimeShareData } from "store/lineStore";
export interface IKlineOptions {
    data: ITimeShareData;
    layoutConfig: IInitLayoutPayLoad;
}
export declare function main(canvas: HTMLCanvasElement, options: Partial<Record<ILayoutList, IKlineOptions>>): void;
export declare const enum Tdj {
    "a" = 0,
    "b" = 1
}
export declare function testDj(p: Tdj): void;
