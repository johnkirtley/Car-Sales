

export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26000,
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

            // Array that holds the feature ID's for later comparisons
            const itemTracker = state.car.features.map(item => {
                return item.id
            })

            // If feature already added, you will not be allowed to add again until you remove that feature. Returns existing state.
            if (itemTracker.includes(action.payload.id)) {
                alert('Already added')
                return { ...state }
            } else {

                // If feature not yet added, it gets added to the features array and the total price adjusts accordingly.
                return {
                    ...state,
                    additionalPrice: state.additionalPrice + action.payload.price, car: { ...state.car, price: state.car.price, features: [...state.car.features, action.payload] }
                };
            }
        case 'REMOVE_FEATURE':

            // Gets index of payload + 1 to ensure accurate index position for removal.
            let itemIndex = state.car.features.indexOf(action.payload) + 1

            // Removes specific feature from array
            let remove = state.car.features.splice(itemIndex, 1)

            // Gets removed feature's price so that an accurate price will be subtracted from the total.
            let subtract = remove.map(i => i.price)

            //  Returns an updated state with adjusted features array and updated total price.
            return {
                ...state,
                additionalPrice: state.additionalPrice - Number(subtract), car: { ...state.car, features: [...state.car.features] }
            }
        default:
            return state;
    }
}