const SET_ACTIVE_PAGE = 'SET-ACTIVE-PAGE';
const FILTER_FLATS = 'FILTER-FLATS';

let server = {
    startSetFlats: [
        {
            id: 1,
            title: "Сдам квартиру 173 квартал",
            price: "20 550",
            location: "Кривой Рог",
            description: {squareMeter: '45', rooms: '5', withFurnitures: true},
            images: ['id1.1.jpg']
        },
        {
            id: 2,
            title: "Сдается 2к студия ЖК «Дом Крейнина».",
            price: "3 500",
            location: "Киев",
            description: {squareMeter: '37', rooms: '2', withFurnitures: false},
            images: ['id2.1.jpg']
        },
        {
            id: 3,
            title: "Сдам 2-х ком.кв.в Центре с автономным отоплением.",
            price: "1 800",
            location: "Днепр",
            description: {squareMeter: '67', rooms: '2', withFurnitures: true},
            images: ['id3.1.jpg']
        },
        {
            id: 4,
            title: "Сдам квартиру на Соцгороде",
            price: "4 300",
            location: "Харьков",
            description: {squareMeter: '112', rooms: '3', withFurnitures: false},
            images: ['id4.1.jpg']
        },
        {
            id: 5,
            title: "Сдаем 2к квартиру ЮТЗ",
            price: "4 000",
            location: "Николаев",
            description: {squareMeter: '50', rooms: '2', withFurnitures: true},
            images: ['id5.1.jpg']
        },
        {
            id: 6,
            title: "Сдам долгосрочно 1-к квартиру Киев, Днепровский",
            price: "10 200",
            location: "Киев",
            description: {squareMeter: '52', rooms: '1', withFurnitures: true},
            images: ['id6.1.jpg']
        },
        {
            id: 7,
            title: "Сдаётся новая квартира от хозяйки",
            price: "6 900",
            location: "Львов",
            description: {squareMeter: '73', rooms: '3', withFurnitures: true},
            images: ['id7.1.jpg']
        },
        {
            id: 8,
            title: "Сдам однокомнатную квартиру",
            price: "7 500",
            location: "Херсон",
            description: {squareMeter: '40', rooms: '1', withFurnitures: false},
            images: ['id8.1.jpg']
        },
        {
            id: 9,
            title: "Классная квартира возле Аркадии",
            price: "3 200",
            location: "Одесса",
            description: {squareMeter: '105', rooms: '4', withFurnitures: true},
            images: ['id9.1.jpg']
        },
        {
            id: 10,
            title: "Квартира в Харькове",
            price: "17 000",
            location: "Харьков",
            description: {squareMeter: '32', rooms: '1', withFurnitures: false},
            images: ['id10.1.jpg']
        },
        {
            id: 11,
            title: "2к студия 72м в ЖК Comfort City. Первая сдача. Секция Lux",
            price: "13 500",
            location: "Львов",
            description: {squareMeter: '92', rooms: '2', withFurnitures: false},
            images: ['id11.1.jpg']
        },
        {
            id: 12,
            title: "VIP апартаменты ЖК Садовый",
            price: "22 000",
            location: "Житомир",
            description: {squareMeter: '78', rooms: '4', withFurnitures: true},
            images: ['id12.1.jpg']
        },
        {
            id: 13,
            title: "2-х комнатная квартира на Парковой,26",
            price: "7 000",
            location: "Кривой Рог",
            description: {squareMeter: '50', rooms: '2', withFurnitures: true},
            images: ['id13.1.jpg']
        },
        {
            id: 14,
            title: "Сдаётся аренда хорошей квартиры",
            price: "4 700",
            location: "Черновцы",
            description: {squareMeter: '34', rooms: '1', withFurnitures: true},
            images: ['id14.1.jpg']
        },
        {
            id: 15,
            title: "Аренда 2 ком квартиры в новом доме с ремонтом.Институт Химии.Мега Сити",
            price: "8 000",
            location: "Ровно",
            description: {squareMeter: '70', rooms: '2', withFurnitures: false},
            images: ['id15.1.jpg']
        },
        {
            id: 16,
            title: "Оренда квартири",
            price: "5 000",
            location: "Житомир",
            description: {squareMeter: '45', rooms: '1', withFurnitures: false},
            images: ['id16.1.jpg']
        },
        {
            id: 17,
            title: "Стильная студия с видом на море от хозяина Аркадия Бол. Фонтан Мирный",
            price: " 9 800",
            location: "Запорожье",
            description: {squareMeter: '89', rooms: '3', withFurnitures: true},
            images: ['id17.1.jpg']
        },
        {
            id: 18,
            title: "Сдам 2-к кв. 5 район Ковалевка.",
            price: "3 400",
            location: "Суммы",
            description: {squareMeter: '47', rooms: '2', withFurnitures: false},
            images: ['id18.1.jpg']
        },
        {
            id: 19,
            title: "Двухуровневая квартира в Днепре - Центр - Набережная Днепра. Реальная!",
            price: "7 900",
            location: "Харьков",
            description: {squareMeter: '65', rooms: '2', withFurnitures: true},
            images: ['id19.1.jpg']
        },
        {
            id: 20,
            title: "Сдается 3.к. студия ЖК Loft в р-не Cascade Plaza",
            price: "5 900",
            location: "Харьков",
            description: {squareMeter: '87', rooms: '3', withFurnitures: false},
            images: ['id20.1.jpg']
        },
        {
            id: 21,
            title: "р-н Алексеевка, метро Алексеевская, ул. Ахсарова 7",
            price: "8 000",
            location: "Харьков",
            description: {squareMeter: '80', rooms: '3', withFurnitures: true},
            images: ['id21.1.jpg']
        },
        {
            id: 22,
            title: "р-н Новые Дома, ул. Героев Сталинграда пр.",
            price: "6 700",
            location: "Киев",
            description: {squareMeter: '67', rooms: '2', withFurnitures: false},
            images: ['id22.1.jpg']
        },
        {
            id: 23,
            title: "р-н Салтовка, метро Героев труда, ул. Бучмы 28/6",
            price: "10 000",
            location: "Харьков",
            description: {squareMeter: '88', rooms: '3', withFurnitures: false},
            images: ['id23.1.jpg']
        },
        {
            id: 24,
            title: "сдам",
            price: "4 300",
            location: "Николаев",
            description: {squareMeter: '66', rooms: '2', withFurnitures: false},
            images: ['id24.1.jpg']
        },
        {
            id: 25,
            title: "оренда 1к квартира вул. Хвильового",
            price: "1 400",
            location: "Николаев",
            description: {squareMeter: '22', rooms: '1', withFurnitures: false},
            images: ['id25.1.jpg']
        },
        {
            id: 26,
            title: "Сдам 1-комнатный флигель ж/м Северный, недорого",
            price: "3 900",
            location: "Львов",
            description: {squareMeter: '34', rooms: '1', withFurnitures: false},
            images: ['id26.1.jpg']
        },
        {
            id: 27,
            title: "Сдам квартиру студия в Аркадии. Пер.Педагогический 3/4.",
            price: "10 400",
            location: "Одесса",
            description: {squareMeter: '97', rooms: '4', withFurnitures: true},
            images: ['id27.1.jpg']
        },
        {
            id: 28,
            title: "Сдается 1 комн.квартира на шуменском, 1/5, с мебелью",
            price: "7 000",
            location: "Ужгород",
            description: {squareMeter: '39', rooms: '1', withFurnitures: true},
            images: ['id28.1.jpg']
        },
        {
            id: 29,
            title: "Аренда 2 комнатной в новом доме на Харьковском шоссе 19, 105 метров",
            price: "3 900",
            location: "Киев",
            description: {squareMeter: '46', rooms: '4', withFurnitures: true},
            images: ['id29.1.jpg']
        },
        {
            id: 30,
            title: "Аренда квартиры в ЖК “Париж”.",
            price: "7 600",
            location: "Киев",
            description: {squareMeter: '75', rooms: '3', withFurnitures: true},
            images: ['id30.1.jpg']
        },
        {
            id: 31,
            title: "Здам подобово однокімнатну квартиру в центрі Бердянська",
            price: "4 300",
            location: "Бердянск",
            description: {squareMeter: '34', rooms: '1', withFurnitures: true},
            images: ['id31.1.jpg']
        },
        {
            id: 32,
            title: "Сдам 1 к кв Одесская",
            price: "6 700",
            location: "Одесса",
            description: {squareMeter: '55', rooms: '1', withFurnitures: true},
            images: ['id32.1.jpg']
        },
        {
            id: 33,
            title: "Сдам долгосрочно 1-к квартиру Киев, Деснянский",
            price: "5 100",
            location: "Киев",
            description: {squareMeter: '66', rooms: '1', withFurnitures: true},
            images: ['id33.1.jpg']
        },
        {
            id: 34,
            title: "Сдам посуточно 1-к квартиру Винница, Ленинский",
            price: "3 800",
            location: "Винница",
            description: {squareMeter: '31', rooms: '1', withFurnitures: false},
            images: ['id34.1.jpg']
        },
        {
            id: 35,
            title: "Сдам долгосрочно 1-к квартиру Киев, Подольский",
            price: "6 500",
            location: "Киев",
            description: {squareMeter: '49', rooms: '1', withFurnitures: true},
            images: ['id35.1.jpg']
        },
        {
            id: 36,
            title: "Сдам посуточно 1-к квартиру Днепропетровск, Соборный",
            price: "4 900",
            location: "Днепр",
            description: {squareMeter: '46', rooms: '1', withFurnitures: true},
            images: ['id36.1.jpg']
        },
        {
            id: 37,
            title: "Сдам 2 ком. Шикарную кв. в Центре.Можно иностранцы.",
            price: "12 400",
            location: "Киев",
            description: {squareMeter: '54', rooms: '2', withFurnitures: false},
            images: ['id37.1.jpg']
        },
        {
            id: 38,
            title: "Сдам 2-х. ком. кв.Гагарина пр. /Абхазская ул.",
            price: "9 000",
            location: "Харьков",
            description: {squareMeter: '43', rooms: '2', withFurnitures: false},
            images: ['id38.1.jpg']
        },
        {
            id: 39,
            title: "Оренда апартаментів в Рівному",
            price: "3 400",
            location: "Ровно",
            description: {squareMeter: '54', rooms: '3', withFurnitures: true},
            images: ['id39.1.jpg']
        },
        {
            id: 40,
            title: "Сдам в аренду 4 комнатную квартиру на длительный срок",
            price: "16 000",
            location: "Харьков",
            description: {squareMeter: '108', rooms: '4', withFurnitures: true},
            images: ['id40.1.jpg']
        },
        {
            id: 41,
            title: "Сдается 3к квартира на Октябрьской площади, парк Шевченко",
            price: "14 000",
            location: "Львов",
            description: {squareMeter: '87', rooms: '3', withFurnitures: true},
            images: ['id41.1.jpg']
        },
        {
            id: 42,
            title: "Сдам долгосрочно 1-к квартиру Киев, Дарницкий",
            price: "4 500",
            location: "Киев",
            description: {squareMeter: '41', rooms: '1', withFurnitures: false},
            images: ['id42.1.jpg']
        },
        {
            id: 43,
            title: "1-комнатная квартира по ул. Комкова. Жилпосёлок.",
            price: "6 800",
            location: "Киев",
            description: {squareMeter: '34', rooms: '1', withFurnitures: false},
            images: ['id43.1.jpg']
        },
        {
            id: 44,
            title: "Сдаётся 2-х ком кв-ра Русановка,метро Левобережная",
            price: "8 800",
            location: "Киев",
            description: {squareMeter: '59', rooms: '2', withFurnitures: false},
            images: ['id44.1.jpg']
        },
        {
            id: 45,
            title: "Собственник, Море--Центр,отчетные 3 группа, Вид на море",
            price: "11 300",
            location: "Херсон",
            description: {squareMeter: '124', rooms: '5', withFurnitures: true},
            images: ['id45.1.jpg']
        },
        {
            id: 46,
            title: "Сдам 2-х. комн. жм Победа-4 , ул. Набережная Победы",
            price: "5 600",
            location: "Львов",
            description: {squareMeter: '57', rooms: '2', withFurnitures: true},
            images: ['id46.1.jpg']
        },
        {
            id: 47,
            title: "Сдам 1к.кв. посуточно ЛЕВЫЙ берег. Центр",
            price: "5 900",
            location: "Киев",
            description: {squareMeter: '34', rooms: '1', withFurnitures: true},
            images: ['id47.1.jpg']
        },
        {
            id: 48,
            title: "Сдам долгосрочно 1-к квартиру Киев, Шевченковский",
            price: "4 200",
            location: "Киев",
            description: {squareMeter: '33', rooms: '1', withFurnitures: false},
            images: ['id48.1.jpg']
        },
        {
            id: 49,
            title: "Сдам в аренду 3ком квартиру 1й этаж можно под офис Центр ,ул.Бажанова",
            price: "13 300",
            location: "Киев",
            description: {squareMeter: '95', rooms: '1', withFurnitures: false},
            images: ['id49.1.jpg']
        },
        {
            id: 50,
            title: "Сдам 2-х. комн. кв. жм. Победа-4, Набережная Победы ул.",
            price: "5 100",
            location: "Харьков",
            description: {squareMeter: '55', rooms: '2', withFurnitures: true},
            images: ['id50.1.jpg']
        },
    ],
};

let initialState = {
    flats: server.startSetFlats,
    activePage: 1,
    pageSize: 5,
    citiesSet: new Map([['kyiv', 'Киев'], ['kharkiv', 'Харьков'], ['zaporizhzhia', 'Запорожье'], ['chernivtsi', 'Черновцы'], ['uzhgorod', 'Ужгород'], ['berdyansk', 'Бердянск'], ['zhytomyr', 'Житомир'], ['krivoyRog', 'Кривой Рог'], ['symmy', 'Суммы'], ['mikolaiv', 'Николаев'], ['odessa', 'Одесса'], ['lviv', 'Львов'], ['kherson', 'Херсон'], ['rivno', 'Ровно'], ['dnepr', 'Днепр'], ['vinnitsa', 'Винница']]),
};

const flatCollectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_PAGE: {
            if (action.newActivePage < 1) return {...state};
            else if (action.newActivePage > Math.ceil(state.flats.length / state.pageSize)) return {...state};
            return {
                ...state,
                activePage: action.newActivePage,
            };
        }
        case FILTER_FLATS: {
            let filteredFlats = [
                ...server.startSetFlats
            ];

            if (action.filterData.minArea)
                filteredFlats = flatsFiltel(true, 'squareMeter', +action.filterData.minArea, '>=');
            if (action.filterData.maxArea)
                filteredFlats = flatsFiltel(true, 'squareMeter', +action.filterData.maxArea, '<=');

            if (action.filterData.minPrice)
                filteredFlats = flatsFiltel(null, 'price', +action.filterData.minPrice, '>=');
            if (action.filterData.maxPrice)
                filteredFlats = flatsFiltel(null, 'price', +action.filterData.maxPrice, '<=');

            if (action.filterData.rooms)
                filteredFlats = flatsFiltel(true, 'rooms', action.filterData.rooms);

            if (action.filterData.withFurnitures)
                filteredFlats = flatsFiltel(true, 'withFurnitures', action.filterData.withFurnitures);

            if (action.filterData.location)
                filteredFlats = flatsFiltel(null, 'location', state.citiesSet.get(action.filterData.location));


            function flatsFiltel(desc, flatsObjProperty, formDataProperty, operator) {
                if (desc) {
                    if (operator === '>=') return filteredFlats.filter(el => el.description[flatsObjProperty].replace(" ", "") >= formDataProperty);
                    if (operator === '<=') return filteredFlats.filter(el => el.description[flatsObjProperty].replace(" ", "") <= formDataProperty);
                    return filteredFlats.filter(el => el.description[flatsObjProperty] == formDataProperty)
                }
                if (operator === '>=') return filteredFlats.filter(el => el[flatsObjProperty].replace(" ", "") >= formDataProperty);
                if (operator === '<=') return filteredFlats.filter(el => el[flatsObjProperty].replace(" ", "") <= formDataProperty);
                return filteredFlats.filter(el => el[flatsObjProperty] == formDataProperty);
            }

            return {
                ...state,
                activePage: 1,
                flats: [...filteredFlats]
            };
        }
        default:
            return state;
    }
}

export const setActivePageCreator = newActivePage => ({type: SET_ACTIVE_PAGE, newActivePage});
export const filterCreator = filterData => ({type: FILTER_FLATS, filterData});

export default flatCollectionReducer;
