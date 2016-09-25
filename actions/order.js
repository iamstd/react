import {
    ORDER_REQUEST,
    ORDER_SUCCESS
} from '../constants/order';





// 订单请求信息
export function orderfetch(info) {
    return {
        type: ORDER_REQUEST,
        info
    }
}

