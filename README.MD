# react-popup
> Popup component for react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    destroyable: PropTypes.bool,
    backdrop: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ])
  };

  static defaultProps = {
    className: '',
    value: false,
    onChange: noop,
    backdrop: true,
    destroyable: false
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-popup --registry=https://registry.npm.taobao.org
```

```js
import ReactPopup from 'react-popup';
```

```scss
// customize your styles:
$react-popup-options:(
);

@import 'node_modules/react-popup/dist/style.scss';
```


## usage:
```jsx

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
          <p className="tc" onClick={this._onDropClick}>
            <img width="40" src="https://i.stack.imgur.com/mo4WJ.png" alt="" />
          </p>
          <div className="blank"/>
          <div className="p20 bg-f">
            <p>POPUP CONTENT</p>
            <p>POPUP CONTENT</p>
            <p>POPUP CONTENT</p>
            <p>POPUP CONTENT</p>
            <button className="button" onClick={this._onDropClick}>Hide</button>
          </div>
        </ReactPopup>
      </div>
    );
  }
}

```
