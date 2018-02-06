import { actionType } from '../utilities/shared-values';

export default function meterNo(state = "", action) {

    switch (action.type) {
        case actionType.SET_METERNO:
            return action.payload
        default:
            return state;
    }
}
