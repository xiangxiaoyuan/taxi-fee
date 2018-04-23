function printInventory(distance,time) {
    var inTwoKm;
    var overTwoInEightKm;
    var overEightKm;
    var timePrice;
    var inTwoKmPrice;
    var overTwoInEightKmPrice;
    var overEightKmPrice;
    var result;
    if(distance<=2){
        inTwoKmPrice = 6;
        inTwoKm = distance;
        overTwoInEightKm = 0;
        overTwoInEightKmPrice = 0;
        overEightKm = 0;
        overEightKmPrice = 0;
        timePrice = time*0.25;
        result = inTwoKmPrice + overTwoInEightKmPrice + overEightKmPrice + timePrice;
    }
    if(distance>2&&distance<=8){
        inTwoKmPrice = 6;
        inTwoKm = 2;
        overTwoInEightKm = distance-2;
        overTwoInEightKmPrice = 0.8*(distance-2);
        overEightKm = 0;
        overEightKmPrice = 0;
        timePrice = time*0.25;
        result = inTwoKmPrice + overTwoInEightKmPrice + overEightKmPrice + timePrice;
    }
    if(distance>8){
        inTwoKmPrice = 6;
        inTwoKm = 2;
        overTwoInEightKm = 6;
        overTwoInEightKmPrice = 0.8*6;
        overEightKm = distance-8;
        overEightKmPrice = 1.2*(distance-8);
        timePrice = time*0.25;
        result = inTwoKmPrice + overTwoInEightKmPrice + overEightKmPrice + timePrice;
    }
    return '***出租车行者记录表***\n'+
        '路程：'+distance.toFixed(2)+'公里，停车等待时间：'+time.toFixed(2)+'分钟，总计：'+Math.round(result)+'元\n'+
        '--------------------\n'+
        '行车路程价位表：\n'+
        '2公里以内起步价为6元\n'+
        '超过2公里小于8公里部分：0.8元/公里\n'+
        '超过8公里部分：1.2元/公里\n'+
        '停车等待时间：0.25元/分钟\n'+
        '--------------------\n'+
        '行车里程详细表单：\n'+
        '起步价公里：'+inTwoKm.toFixed(2)+'公里，价格：'+inTwoKmPrice.toFixed(2)+'元\n'+
        '超过2公里小于8公里：'+overTwoInEightKm.toFixed(2)+'公里，价格：'+overTwoInEightKmPrice.toFixed(2)+'元\n'+
        '超过8公里：'+overEightKm.toFixed(2)+'公里，价格：'+overEightKmPrice.toFixed(2)+'元\n'+
        '停车等待：'+time.toFixed(2)+'分钟，价格：'+timePrice.toFixed(2)+'元\n'+
        '--------------------\n'+
        '本出租车按四舍五入收取整钱\n'+
        '*********************\n';;
}
module.exports = function main(distance,time) {
    var output = printInventory(distance,time);
    console.log(output);
    return output;
};