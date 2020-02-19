export const removeFeature = (item) => {
    return {
        type: 'REMOVE_FEATURE',
        payload: item
    }
}