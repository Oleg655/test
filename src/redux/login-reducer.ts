

type initialStateType = typeof initialState

const initialState = {
    email: '',
}

const loginReducer = (state = initialState, action: any): initialStateType => {
    return state
}

export default loginReducer