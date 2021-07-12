const SET_ACTIVE_PAGE = 'SET-ACTIVE-PAGE';

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

        {
            id: 5,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 6,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 7,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 8,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 9,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 10,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id:11,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 12,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 13,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 14,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 15,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 16,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 17,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 18,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 19,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 20,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id:21,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 22,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 23,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 24,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 25,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 26,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 27,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 28,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 29,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 30,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 31,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 32,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 33,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 34,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 35,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 36,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 37,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 38,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 39,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 40,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 41,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 42,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 43,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 44,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 45,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 46,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 47,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 48,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 49,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 50,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300 грн.",
            location: "Харьков",
            description: {squareMeter: '45 м2', floor: '5', withFurnitures: false},
            images: ['id4.1.jpg']
        },
    ],
    activePage: 1,
    pageSize: 5,

};


const flatCollectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_PAGE: {
            if (action.newActivePage < 1 ) return {...state};
            else if (action.newActivePage > Math.ceil(state.flats.length / state.pageSize)) return {...state};
            return {
                ...state,
                activePage: action.newActivePage,
            };
        }
        default:
            return state;
    }
}

export const setActivePageCreator = newActivePage => ({type: SET_ACTIVE_PAGE, newActivePage});

export default flatCollectionReducer;
