import { actionType } from '../utilities/shared-values';

export default function deviceNo(state = "", action) {

    switch (action.type) {
        case actionType.SET_DEVICENO:
            return action.payload
        default:
            return state;
    }
}
 