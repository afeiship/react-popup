import './dev.scss';

import ReactPopup from './main';

/*===example start===*/
class Content extends React.Component{
  render(){
    return (
      <div className="content" style={{padding:'20px'}}>
        <h1>关于百度</h1>
        <div className="bd">
          <div className="img">
            <img src="//www.baidu.com/img/bd_logo1.png" />
          </div>
          <p>搜索工具百度为您找到相关结果约100,000,000个</p>
          <p>百度一下,你就知道官网</p>
          <cite>全球最大的中文搜索引擎、致力于让网民更便捷地获取信息，找到所求。百度超过千亿的中文网页数据库，可以瞬间找到相关的搜索结果。</cite>
          <p>www.baidu.com/  - 百度快照 - 7036条评价</p>
        </div>
      </div>
    );
  }
}


class Content2 extends React.Component{
  render(){
    return (
      <div className="content" style={{padding:'20px'}}>
        <h1>关于Google</h1>
        <div className="bd">
          <div className="img">
            <img src="https://www.google.co.jp/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
          </div>
          <p>搜索工具百度为您找到相关结果约100,000,000个</p>
          <p>百度一下,你就知道官网</p>
          <cite>全球最大的中文搜索引擎、致力于让网民更便捷地获取信息，找到所求。百度超过千亿的中文网页数据库，可以瞬间找到相关的搜索结果。</cite>
          <p>www.baidu.com/  - 百度快照 - 7036条评价</p>
        </div>
      </div>
    );
  }
}

class App extends React.Component{
  state = {
    direction:'top'
  };

  componentDidMount(){
  }

  _click2 = (direction,e) =>{
    this.setState({direction})
  };

  _click1(){
    // ReactPopupCtrl.show();
    // console.log(this.refs.cont);
    this.refs.rnp.show(()=>{
      console.log('after show..')
    });
  }

  _rp_click(){
    console.log('rp click!');
  }

  render(){
    return (
      <div className="hello-react-popup">
        <button style={{backgroundColor:'#f60'}} onClick={this._click1.bind(this)}>【 Show Customized Popup 】</button>
        <button onClick={this._click2.bind(this,'top')}>direction:-> : top </button>
        <button onClick={this._click2.bind(this,'bottom')}>direction:-> : bottom </button>
        <button onClick={this._click2.bind(this,'left')}>direction:-> : left </button>
        <button onClick={this._click2.bind(this,'right')}>direction:-> : right </button>

        <ReactPopup onClick={this._rp_click} direction={this.state.direction} ref='rnp'>
            <Content2  />
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
