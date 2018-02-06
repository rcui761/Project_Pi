import { actionType } from '../utilities/shared-values';

export const setCameraType = (cameraType) => {
    return {
        type: actionType.SET_CAMERATYPE,
        payload: cameraType
    }
}
