const initState = {
    themeId: 1,
}

export type InitialStateType = {
    themeId: number
}


type ThemeActionType = {
    type: 'SET_THEME_ID'
    id: number
}


export const themeReducer = (state: InitialStateType = initState, action: ThemeActionType): InitialStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {
                ...state,
                themeId: action.id
            }
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ThemeActionType => ({ type: 'SET_THEME_ID', id }) // fix any
