import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom'; // Можно сделать перемещение между ссылками через NavLink

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers';
import About from './About';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk))); // store - хранилеще всех наших данных в приложении, любые данные мы тут храним

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route exact path="/" component={App} />
            <Route exact path="/about" component={About} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();


// function playlist(state = [], action) {
//     console.log(action);
//     if (action.type === 'ADD_TRACK') {
//         return [ // создаем копию данных и добавляем action.payload
//             ...state,
//             action.payload
//         ];
//     }
//     return state;
// }
//
// const store = createStore(playlist); // store - хранилеще всех наших данных в приложении, любые данные мы тут храним

// const addTrackBtn = document.querySelector('.addTrack');
// const list = document.querySelector('.list');
// const trackInput = document.querySelector('.trackInput');
//
// store.subscribe(() => {
//     console.log('subscribe', store.getState());
//     list.innerHTML = '';
//     trackInput.value = '';
//     store.getState().forEach(track => {
//         const li = document.createElement('li');
//         li.textContent = track;
//         list.appendChild(li);
//     })
// });
//
// store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like spirit' }); // type - обязательное поле, payload - это данные
// store.dispatch({ type: 'ADD_TRACK', payload: 'Enter Sandman' });
//
// addTrackBtn.addEventListener('click', () => {
//     const trackName = trackInput.value;
//     console.log('trackName, trackName');
//     store.dispatch({ type: 'ADD_TRACK', payload: trackName });
// });

// ReactDOM.render(<App/>, document.getElementById('root'));

// Создали новый store для нашего приложения
// Передали в него функцию, которая получает екшены и меняет store
// Подписались на изменения store с помощью функции subscribe
// Выстрелили action с данными
// Функция playlist меняет данные с store
// Теперь в callback функции subscribe мы всегда знаем, как выглядит наш стор и можем что-то перерисовать на странице.
//
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
