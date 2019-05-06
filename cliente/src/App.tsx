import * as React from 'react';
import './App.css';
import ListarUsuarios from './components/ListarUsuarios';
import UsuarioDetalle from './components/UsuarioDetalle';
import logo from './logo.svg';

const names = [
  "Adolfo",
  "Andrei",
  "Mary",
];


class App extends React.Component<any, any> {

  constructor(props: any){
    super(props);
    this.state = { name: null }
  }

  public handleUsuarioSeleccionado = (name: any) => {
    this.setState({ name });
  }
  public render() {
    const { name } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">App Andrei Ladino</h1>
        </header>

        <div className="listCont">
          <ListarUsuarios names={names}
            onUsuarioSeleccionado={this.handleUsuarioSeleccionado} />
        </div>
        
        <div className="detalleCont">
          { name === null ? <h1 className='detalle-title'>No ha seleccionado usuario</h1> :     
            <UsuarioDetalle name={name} />
          }
        </div>
      </div>
    );
  }
}

export default App;
