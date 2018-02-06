import { actionType } from '../utilities/shared-values';

export default function cameraType(state = "", action) {

    switch (action.type) {
        case actionType.SET_CAMERATYPE:
            return action.payload
        default:
            return state;
    }
}
