import React from "react";
import ReactDOM from 'react-dom/client';

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);

const App = () => {
    return <div>Selamat datang di tutror1</div>;
};

const App2 = () => {
    const nonJSX = React.createElement("h1",{},"Ini componen non JSX");
    const JSX = <div><h1>With JSX</h1></div>;
    return JSX;
}

const App3 = () => {
    const name = "Daud";
    const age = 17;
    return <div>
        <p>Perkenalkan Saya {name} umur saya {age}</p>
        </div>
}

root.render(<App3/>);