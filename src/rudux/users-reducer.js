const LOG_IN = 'LOG-IN';


let initialState = {
    authorized: false,
    authorizedPerson: '',
    users: [
        {name: 'Daniil', login: '5345435gdgr', password: '4324fs54g'},
        {name: 'Test1', login: '12345', password: '0000'},
        {name: 'Test2', login: '54321', password: '0000'}
    ],
};

const flatCollectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN: {

            let successFlag = false;
            let authorizedPerson = '';

            state.users.forEach((el, ind) => {
                if (el.login === action.credentials.login && el.password === action.credentials.password) {
                    successFlag = true;
                    authorizedPerson = state.users[ind].name;
                }
            });
            return {
                ...state,
                authorized: successFlag,
                authorizedPerson: authorizedPerson,
            };
        }
        default:
            return state;
    }
}

export const logInCreator = credentials => ({type: LOG_IN, credentials});

export default flatCollectionReducer;
