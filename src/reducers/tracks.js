const initialState = [];

export default function playlist(state = initialState, action) { // playlist это reducer, чистая ф-ция - которая берет предыдущее состояние и экшен и возвращает новое состояние
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'DELETE_TRACK') {
        return state;
    }
    return state;
}