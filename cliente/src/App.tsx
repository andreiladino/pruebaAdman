import * as React from 'react';
import ListarUsuariosContainers from './containers/ListarUsuariosContainers';
import UsuarioDetalleContainer from './containers/UsuarioDetalleContainer';
import logo from './logo.svg';
import './App.css';

// const apiUrl = "http://localhost:8080/api/listar-usuarios";

const data = [
  {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
    id: "1",
    name: "George",
  },
  {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
    id: "2",
    name: "Janet",
  },
  {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg",
    id: "3",
    name: "Emma",
  }
];



class App extends React.Component<any, any> {

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">App Andrei Ladino</h1>
        </header>

        <div className="listCont">
          <ListarUsuariosContainers data={data} />
        </div>

        <div className="detalleCont">
            <UsuarioDetalleContainer />  
        </div>
      </div>
    );
  }
}

export default App;



