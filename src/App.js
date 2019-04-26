import React, {Component} from 'react';
import Dropdown from "./Dropdown";
import Header from "./Header";
import RegistrationForm from "./RegistrationForm";
import "./App.css";

const menu = [
    {
        link: '/articles',
        label: 'Articles'
    },
    {
        link: '/contacts',
        label: 'Contacts'
    },
    {
        link: '/posts',
        label: 'Posts'
    }
];

class App extends Component {
    submit() {
        console.log('submit btn pushed', this.testInput.value);
    }
    render() {
        return (
            <div className="container">
                <input type="text" placeholder="test" ref={(input) => this.testInput = input}/>
                <button onClick={this.submit.bind(this)}>Submit</button>
                <div>
                    <RegistrationForm />
                </div>
                <div>
                    <Header items={menu} />
                </div>
                <div>
                    <Dropdown />
                </div>
            </div>
        );
    }
}

export default App;

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
