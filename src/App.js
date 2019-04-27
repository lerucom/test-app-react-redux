import React from 'react';
import { connect } from 'react-redux'; // декоратор
import { getTracks } from './actions/tracks';
import Menu from './Menu';

const App = ({ tracks, onAddTrack, onFindTrack, onGetTracks }) => { // если передавать (props), то придется вытаскивать нужные данные, или используем деструктуризацию
    let trackInput = '';
    let searchInput = '';

    const addTrack = () => {
        console.log('addTrack', trackInput.value);
        onAddTrack(trackInput.value);
        trackInput.value = '';
    };

    const findTrack = () => {
        console.log('findTrack', searchInput.value);
        onFindTrack(searchInput.value);
        searchInput.value = '';
    };

        console.log(tracks);
        return (
            <div>
                <Menu/>
                <div>
                    <input type="text" placeholder="add track name" ref={(input) => { trackInput = input }} />
                    <button onClick={addTrack}>Add track</button>
                </div>
                <div>
                    <input type="text" placeholder="search track" ref={(input) => { searchInput = input }} />
                    <button onClick={findTrack}>Find track</button>
                </div>
                <div>
                    <button onClick={onGetTracks}>Get Tracks</button>
                </div>
                <ul>
                    {tracks.map((track, index) =>
                        <li key={index}>{track.name}</li>
                    )}
                </ul>
            </div>
        );
    };

export default connect(
    state => ({ // map state to props, легко подписываться на store и следить за изменениями
        tracks: state.tracks.filter((track) => track.name.includes(state.filterTracks)) // state глобальное состояние нашего store
    }),
    dispatch => ({
        onAddTrack: (name) => { // теперь этот метод доступен через this.props
            const payload = {
                id: Date.now().toString(),
                name
            };
            dispatch({ type: 'ADD_TRACK', payload: payload });
        },
        onFindTrack: (name) => { // метод onFindTrack будет диспатчить новый эвент type: 'FIND_TRACK' и передавать name, который на вход передали
            dispatch({ type: 'FIND_TRACK', payload: name});
        },
        onGetTracks: () => {
            dispatch(getTracks());
        }
    })
)(App);


// import Dropdown from "./Dropdown";
// import Header from "./Header";
// import RegistrationForm from "./RegistrationForm";
// import "./App.css";
//
// const menu = [
//     {
//         link: '/articles',
//         label: 'Articles'
//     },
//     {
//         link: '/contacts',
//         label: 'Contacts'
//     },
//     {
//         link: '/posts',
//         label: 'Posts'
//     }
// ];

// class App extends Component {
//     submit() {
//         console.log('submit btn pushed', this.testInput.value);
//     }
//     render() {
//         return (
//             <div className="container">
//                 <input type="text" placeholder="test" ref={(input) => this.testInput = input}/>
//                 <button onClick={this.submit.bind(this)}>Submit</button>
//                 <div>
//                     <RegistrationForm />
//                 </div>
//                 <div>
//                     <Header items={menu} />
//                 </div>
//                 <div>
//                     <Dropdown />
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit please <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
