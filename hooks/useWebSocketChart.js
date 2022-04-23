const useWebSocketChart = (wsInstance = null, lastData = []) => {
    if (wsInstance !== null && lastData.length > 0) {
        const { timestamp: wsTimestamp, trade_price: wsTrade_price } = wsInstance;
        const [timestamp, opening_price, high_price, low_price, trade_price] = lastData;
        console.log("wsInstance", wsInstance, lastData)
        console.log("wsInstance", [
            wsTimestamp,
            opening_price,
            Math.max(high_price, wsTrade_price),
            Math.min(low_price, wsTrade_price),
            wsTrade_price
        ])
        return [
            wsTimestamp,
            opening_price,
            Math.max(high_price, wsTrade_price),
            Math.min(low_price, wsTrade_price),
            wsTrade_price
        ]
    }
    else {
        return [];
    }
}
export default useWebSocketChart;
