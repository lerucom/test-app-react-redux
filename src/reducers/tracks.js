const initialState = [];

export default function tracks(state = initialState, action) { // playlist это reducer, чистая ф-ция - которая берет предыдущее состояние и экшен и возвращает новое состояние
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'FETCH_TRACKS_SUCCESS') {
        return action.payload;
    }
    return state;
}