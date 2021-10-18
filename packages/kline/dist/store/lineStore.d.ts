import { IKlineDateType, ValidTimeType } from "store/@types/kChart";
export interface ITimeShareData {
    standardPrice: number;
    chartData: IKlineDateType[];
    validTime: ValidTimeType[];
}
export declare const useLineStore: import("canvasx").IUseScopeStore<{
    axisY: {
        maxVal: number;
        minVal: number;
    };
    axisX: {
        maxVal: number;
        minVal: number;
    };
    standardPrice: number;
    timeData: {
        date: string;
        region: IKlineDateType[];
        regionEtime: number;
        regionStime: number;
        validTime: ValidTimeType[];
    };
}, {
    updateAxisY(state: {
        axisY: {
            maxVal: number;
            minVal: number;
        };
        axisX: {
            maxVal: number;
            minVal: number;
        };
        standardPrice: number;
        timeData: {
            date: string;
            region: IKlineDateType[];
            regionEtime: number;
            regionStime: number;
            validTime: ValidTimeType[];
        };
    }): void;
    updateAxisX(state: {
        axisY: {
            maxVal: number;
            minVal: number;
        };
        axisX: {
            maxVal: number;
            minVal: number;
        };
        standardPrice: number;
        timeData: {
            date: string;
            region: IKlineDateType[];
            regionEtime: number;
            regionStime: number;
            validTime: ValidTimeType[];
        };
    }, payload: {
        x: number;
    }): void;
    initLine(state: {
        axisY: {
            maxVal: number;
            minVal: number;
        };
        axisX: {
            maxVal: number;
            minVal: number;
        };
        standardPrice: number;
        timeData: {
            date: string;
            region: IKlineDateType[];
            regionEtime: number;
            regionStime: number;
            validTime: ValidTimeType[];
        };
    }, timeShareData: ITimeShareData): void;
}>;
