import { actionType } from '../utilities/shared-values';

export const setMeterNo = (meterNo) => {
    return {
        type: actionType.SET_METERNO,
        payload: meterNo
    }
}
