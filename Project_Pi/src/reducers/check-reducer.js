import { actionType } from '../utilities/shared-values';

export default function check(state= true, action) {

    switch (action.type) {
        case actionType.SET_CHECK:
            return action.payload
        default:
            return state;
    }
}
