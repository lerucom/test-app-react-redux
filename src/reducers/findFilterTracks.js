const initialState = '';

export default function filterTracks(state = initialState, action) { // playlist это reducer, чистая ф-ция - которая берет предыдущее состояние и экшен и возвращает новое состояние
    if (action.type === 'FIND_TRACK') {
        return action.payload;
    }
    return state;
}