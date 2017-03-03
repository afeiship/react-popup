import './style.scss';
import classNames from 'classnames';
import {ReactBackdropCtrl} from 'react-backdrop';
import appendToDocument from 'react-append-to-document';

class ReactPopup extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    direction:React.PropTypes.string,
    backdropStyle:React.PropTypes.object
  };

  static defaultProps = {
    visible:false,
    direction:'bottom',
    backdropStyle:{
      opacity:0.6
    }
  };


  constructor(props){
    super(props);
    this.state = {
      visible:props.visible,
      animating:false,
      direction:props.direction
    };
  }

  static newInstance(inProps){
    return appendToDocument(ReactPopup,inProps,{
      className:'react-popup-wrapper'
    });
  }

  show(inOptions){
    this._setVisible(inOptions,true);
    ReactBackdropCtrl.show();
  }

  hide(){
    this._setVisible({},false);
    ReactBackdropCtrl.hide();
  }

  _setVisible(inOptions,inValue){
    var self=this;
    this.setState({
      animating:true
    });
    //todo:optimize?
    this._timer && clearTimeout(this._timer);
    this._timer=setTimeout(function(){
      self.setState({
        visible:inValue
      });
    });
  }


  componentWillMount(){
    var self = this;
    ReactBackdropCtrl.createInstance({
      onClick:function(){
        self.hide();
      },
      style:this.props.backdropStyle
    });
  }

  _onTransitionEnd(){
    this.setState({
      animating:false
    });
  }

  render(){
    return (
      <div
        data-direction={this.props.direction}
        data-visible={this.state.visible}
        onTransitionEnd={this._onTransitionEnd.bind(this)}
        hidden={!this.state.visible && !this.state.animating}
        className={classNames('react-popup',this.props.cssClass)}>
        {this.props.children}
      </div>
    );
  }
}


export default ReactPopup;
