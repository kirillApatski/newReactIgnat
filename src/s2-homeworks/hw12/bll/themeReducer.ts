const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionType): {themeId: number} => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

type ActionType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id } as const) // fix any
