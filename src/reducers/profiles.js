function profiles (state = [], action){
    switch (action.type){
        case 'LOAD_PROFILES':
            return [
                ...state,
                {
                    name: action.name
                }
            ]
            default:
                return state
    }
}

export default profiles;