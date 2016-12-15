import './dev.scss';
import {ReactPopupCtrl} from './main';

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

class App extends React.Component{

  componentDidMount(){
    ReactPopupCtrl.createInstance({
      content:<Content />
    });
  }

  _click1(){
    ReactPopupCtrl.show();
  }

  render(){
    return (
      <div className="hello-react-popup">
        <button onClick={this._click1.bind(this)}>Show Customized Popup</button>
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
