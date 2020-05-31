import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

import ANIMpng from './ANIM.png'
import Fpng from './F.png'
import Hpng from './H.png'
import KApng from './KA.png'
import MALpng from './MAL.png'
import Opng from './O.png'
import STANpng from './STAN.png'
import ZAKpng from './ZAK.png'

class App extends React.Component {
  render() {
    return (
      <div style={{ padding: '1rem 1.6rem'}}>
        <Draggable>
          <img style={{ marginLeft: '21%', marginTop: '15%' }} src={Hpng} alt="" draggable="false" />
        </Draggable>
        <Draggable>
          <img style={{ marginLeft: '5%', marginTop: '0%' }} src={Opng} alt="" draggable="false" />
        </Draggable>
        <Draggable>
          <img style={{ marginLeft: '5%', marginTop: '0%' }} src={MALpng} alt="" draggable="false" />
        </Draggable>
        <Draggable>
          <img style={{ marginLeft: '5%', marginTop: '0%' }} src={STANpng} alt="" draggable="false" />
        </Draggable>
        <Draggable>
          <img style={{ marginLeft: '0%', marginTop: '5%' }} src={Fpng} alt="" draggable="false" />
        </Draggable>
        <div style={{ marginTop: '-5px' }}>
          <Draggable>
            <img style={{ marginLeft: '5%', marginTop: '0%' }} src={KApng} alt="" draggable="false" />
          </Draggable>
          <Draggable>
            <img style={{ marginLeft: '0%', marginTop: '0%' }} src={ANIMpng} alt="" draggable="false" />
          </Draggable>
          <Draggable>
            <img style={{ marginLeft: '5%', marginTop: '0%' }} src={ZAKpng} alt="" draggable="false" />
          </Draggable>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
