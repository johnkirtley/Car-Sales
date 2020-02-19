

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
    switch (action.type) {
        case 'ADD_FEATURE':
            // console.log('add feature', state, action)
            return {
                ...state,
                car: { ...state.car, price: state.car.price + action.payload.price, features: [...state.car.features, action.payload] }
            };
        case 'REMOVE_FEATURE':
            console.log('remove feature', state, action)
            let index = state.car.features.indexOf(action.payload) + 1
            console.log(index)
            let remove = state.car.features.splice(index, 1)
            console.log(remove)
            // let filter = state.car.features.filter(feature => {
            //     return feature.id !== action.payload.id;
            // })
            return {
                ...state,
                car: { ...state.car, features: [...state.car.features] }
            }
        default:
            return state;
    }
}