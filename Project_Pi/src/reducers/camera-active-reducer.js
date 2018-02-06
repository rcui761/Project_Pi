import { actionType } from '../utilities/shared-values';

export default function cameraActive(state = true, action) {

    switch( action.type ) {
        case actionType.SET_CAMERA:
            return action.payload
        default:
            return state;
    }
}
  