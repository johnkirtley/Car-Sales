

export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};


export const carListReducer = (state = initialState, action) => {

    const itemTracker = state.car.features.map(item => {
        return item.id
    })
    console.log(itemTracker)

    switch (action.type) {
        case 'ADD_FEATURE':
            // console.log('add feature', state, action)
            if (itemTracker.includes(action.payload.id)) {
                alert('Already added')
                return { ...state }
            } else {
                return {
                    ...state,
                    car: { ...state.car, price: state.car.price + action.payload.price, features: [...state.car.features, action.payload] }
                };
            }
        case 'REMOVE_FEATURE':
            // console.log('remove feature', state, action)
            let itemIndex = state.car.features.indexOf(action.payload) + 1
            // console.log(index)
            let remove = state.car.features.splice(itemIndex, 1)
            // console.log(remove)
            let subtract = remove.map(i => i.price)
            console.log(subtract)
            // console.log(remove)
            // let filter = state.car.features.filter(feature => {
            //     return feature.id !== action.payload.id;
            // })
            return {
                ...state,
                car: { ...state.car, price: state.car.price - Number(subtract), features: [...state.car.features] }
            }
        default:
            return state;
    }
}