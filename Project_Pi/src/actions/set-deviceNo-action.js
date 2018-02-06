import { actionType } from '../utilities/shared-values';

export const setDeviceNo = (deviceNo) => {
    return {
        type: actionType.SET_DEVICENO,
        payload: deviceNo
    }
}
