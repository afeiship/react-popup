import './dev.scss';
import ReactPopup from './main';

/*===example start===*/

// install: npm install afeiship/react-popup --save
// import : import ReactPopup from 'react-popup'

class App extends React.Component {
  state = {
    value: false
  };

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onClick1 = () => {
    this.rc.present();
  };
  _onClick2 = () => { };

  _onDropClick = () => {
    this.rc.dismiss();
  };

  _onChange = inEvent => {
    console.log(inEvent.target.value);
  };

  render() {
    return (
      <div className="hello-react-popup">
        <button onClick={this._onClick1} className="button">SHOW</button>
        <ReactPopup onChange={this._onChange} ref={rc => this.rc = rc} backdrop={{ onClick: this._onDropClick }} >
          <p>POPUP CONTENT</p>
          <p>POPUP CONTENT</p>
          <p>POPUP CONTENT</p>
          <p>POPUP CONTENT</p>
        </ReactPopup>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
