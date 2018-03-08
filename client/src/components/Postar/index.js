import React, { Component } from 'react';
//import axios from 'axios';

class Postar extends Component {
  render() {
    return (
      <div className="postar">
        <form>
            <input type="text" name="titulo" placeholder="Título"/>
            <input type="text" name="titulo" placeholder="Subtítulo"/>
            <textarea type="text" name="mensagem" placeholder="Mensagem"></textarea>
            <button className="btn" type="submit" value="POSTAR">POSTAR</button>
        </form>
      </div>
    );
  }
}

export default Postar;
