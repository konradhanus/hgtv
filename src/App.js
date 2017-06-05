import React, {Component} from 'react';
import PGTV_SUMMARY from './Components/Summary.jsx';
import Header from './Components/Header.jsx';
import Form1 from './Components/Form1.jsx';

class App extends Component {
  render() {
    return (
      <div>
        {/*   <PGTV_SUMMARY></PGTV_SUMMARY>*/}
        <div>
          <div className="container">
            <Header></Header>
            <div className="row">
              <Form1></Form1>
              <div className="col-md-3 paddingZero"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
