import { ILayoutStateBase } from "store/layout";
interface IInitLayoutOption extends ILayoutStateBase {
    el: HTMLCanvasElement;
}
export declare const initLayout: (options: IInitLayoutOption) => void;
export {};
