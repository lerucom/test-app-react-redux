const initialState = [
        'My home playlist',
        'My work playlist'
    ];

export default function playlist(state = initialState, action) { // playlist это reducer, чистая ф-ция - которая берет предыдущее состояние и экшен и возвращает новое состояние
    if (action.type === 'ADD_PLAYLIST') {
        return state;
    } else if (action.type === 'DELETE_PLAYLIST') {
        return state;
    }
    return state;
}