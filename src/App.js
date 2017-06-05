import React, {Component} from 'react';
import PGTV_SUMMARY from './Components/Summary.jsx';
import Header from './Components/Header.jsx';
import Form from './Components/Form.jsx';
import Podsumowanie from './Components/Podsumowanie.jsx';

class App extends Component {
  render() {
    return (
      <div>
        {/*   <PGTV_SUMMARY></PGTV_SUMMARY>*/}
        <div>
          <div className="container">
            <Header></Header>
            <div className="row">
              <Form></Form>
              <div className="col-md-3 paddingZero"></div>
            </div>
          </div>
        </div>
        <Podsumowanie></Podsumowanie>
      </div>
      
    );

  }
}

export default App;
