import { actionType } from '../utilities/shared-values';

export default function register(state=[], action) {

    switch (action.type) {
        case actionType.SET_REGISTER:
            return action.payload
        default:
            return state;
    }
}
