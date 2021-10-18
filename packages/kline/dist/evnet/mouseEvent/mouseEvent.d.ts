declare const enum IMouseEvent {
    click = "click"
}
export declare const initEventEngin: (canvas: HTMLCanvasElement) => void;
export declare const subscribeEvent: (eventType: IMouseEvent) => void;
export {};
