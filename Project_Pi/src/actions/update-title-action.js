import { actionType } from '../utilities/shared-values';

export const updateTitle = (title) => {
    return {
        type: actionType.SET_HEADER_TITLE,
        payload: title
    }
}
