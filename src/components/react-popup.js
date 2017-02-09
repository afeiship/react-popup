import './style.scss';
import classNames from 'classnames';
import {ReactBackdropCtrl} from 'react-backdrop';
import appendToDocument from 'react-append-to-document';

class ReactPopup extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    content:React.PropTypes.element,
  };

  static defaultProps = {
    visible:false
  };


  constructor(props){
    super(props);
    this.state = {
      visible:props.visible,
      animating:false,
      content:props.content
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

    setTimeout(function(){
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
      style:{
        opacity:0.6
      }
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
        data-visible={this.state.visible}
        onTransitionEnd={this._onTransitionEnd.bind(this)}
        hidden={!this.state.visible && !this.state.animating}
        className={classNames('react-popup',this.props.cssClass)}>
        {this.state.content}
      </div>
    );
  }
}


export default ReactPopup;
