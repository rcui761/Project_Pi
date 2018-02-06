import { actionType } from '../utilities/shared-values';

export const setCamera = (active) => {
    return {
        type: actionType.SET_CAMERA,
        payload: active
    }
}
