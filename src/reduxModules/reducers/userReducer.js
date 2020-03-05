const defaultState = {
    userData: {}
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case "RESET_MESSAGES":
            return {
                ...state,
                messageType: "",
                message: ""
            };
        case "ERROR":
            return {
                ...state,
                messageType: "error",
                message: action.message
            };
        case "USER_DATA":
            return {
                ...state,
                userData: action.data
            };
        default:
            return state;
    }
}