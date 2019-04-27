let mockApiData = [
    {
        id: 1,
        name: 'Name 1'
    },
    {
        id: 2,
        name: 'Name 2'
    },
    {
        id: 3,
        name: 'Name 3'
    },
    {
        id: 4,
        name: 'Name 4'
    },
];

export const getTracks = () => dispatch => {
        setTimeout(() => { // у нас есть action внутри которого setTimeout
            console.log('Ive got tracks');
            dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData })
        }, 2000)
    };