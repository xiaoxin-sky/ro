/**
 * K线数据格式
 */
export declare const enum KlineDataKey {
    /** 收盘价 */
    "ClosingPrice" = "c",
    /** 最高价 */
    "HighestPrice" = "h",
    /** 最低价 */
    "LowerPrice" = "l",
    /** 开盘价 */
    "OpeningPrice" = "o",
    /** 时间戳 */
    "Timestamp" = "t",
    /** 成交量 */
    "Volume" = "v",
    /** 成交额 */
    "Amount" = "a"
}
export declare type IKlineDateType = Record<KlineDataKey, number>;
export declare type ValidTimeType = Omit<quotesDetail["region"][number], "quotes">;
export declare type quotesDetail = {
    date: string;
    region: Array<{
        start: number;
        end: number;
        quotes: IKlineDateType[];
    }>;
    regionEtime: number;
    regionStime: number;
};
