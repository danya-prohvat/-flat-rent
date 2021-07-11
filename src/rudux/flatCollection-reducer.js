// const ADD_NEW_ITEM = 'ADD-NEW-ITEM';
// const DELETE_ITEM = 'DELETE-ITEM-ITEM';
// const TOGGLE_DONE_ITEM = 'TOGGLE-DONE-ITEM';
// const CLEAR_COMPLETED_ITEMS = 'CLEAR-COMPLETED-ITEMS';
// const CHANGE_SHOW_WHAT = 'CHANGE-SHOW-WHAT';

let initialState = {
    flats: [
        {
            id: 1,
            title: "Сдам квартиру 173 квартал",
            price: "20 550 грн.",
            location: "Кривой Рог",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: true},
            images: ['id1.1.jpg']
        },
        {
            id: 2,
            title: "Сдается 2к студия ЖК «Дом Крейнина».",
            price: "3 500 грн.",
            location: "Киев",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id2.1.jpg']
        },
        {
            id: 3,
            title: "Сдам 2-х ком.кв.в Центре с автономным отоплением.",
            price: "1 800 грн.",
            location: "Днепр",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: true},
            images: ['id3.1.jpg']
        },
        {
            id: 4,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
    ]
};


const flatCollectionReducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_NEW_ITEM: {
        //     if (action.newItemText.trim() == '') return {...state};
        //     let newItem = {
        //         id: !!state.matter.length ? state.matter[state.matter.length - 1].id + 1 : 1,
        //         description: action.newItemText.trim(),
        //         done: false
        //     };
        //     return {
        //         ...state,
        //         matter: [...state.matter, newItem]
        //     };
        // }
        default:
            return state;
    }
}

// export const addNewItemCreator = newItemText => ({type: ADD_NEW_ITEM, newItemText});
// export const deleteNewItemCreator = itemId => ({type: DELETE_ITEM, itemId});
// export const toggleDoneCreator = itemId => ({type: TOGGLE_DONE_ITEM, itemId});
// export const clearCompletedCreator = () => ({type: CLEAR_COMPLETED_ITEMS});
// export const changeShowWhatCreator = showWhatValue => ({type: CHANGE_SHOW_WHAT, showWhatValue});

export default flatCollectionReducer;
