import { actionType } from '../utilities/shared-values';

export default function title(state = 'emptys', action) {

    //If action type is set header title then update store state to new payload
    //else default have header to be empty
    switch (action.type) {
        case actionType.SET_HEADER_TITLE:
            return action.payload
        default:
            return state;
    }
}
