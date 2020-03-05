export const userLogin = data => {
    return async dispatch => {
        console.log("data", data)
        dispatch({
            type: "USER_DATA",
            data: data
        })
    };
};