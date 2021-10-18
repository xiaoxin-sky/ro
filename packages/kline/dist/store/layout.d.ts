import { Reducers } from "canvasx";
export declare const enum ILayoutList {
    "Main" = "main",
    "Sub" = "sub"
}
export interface ILayoutStateBase {
    width: number;
    height: number;
    printRate: {
        rateY: number;
        rateX: number;
    };
}
export interface IInitLayoutPayLoad {
    width: number;
    height: number;
}
declare type ILayoutState = Record<ILayoutList, ILayoutStateBase>;
export declare const useLayoutStore: import("canvasx").IUseScopeStore<ILayoutState, Reducers<ILayoutState>>;
export {};
