import './style.scss';

import {PropTypes} from 'react';
import {ReactBackdrop} from 'react-backdrop';
import classNames from 'classnames';
import closeImg from './close.png';
import noop from 'noop';

export default class extends ReactBackdrop{
  /*===properties start===*/
  static propTypes = {
    className:PropTypes.string,
    direction:PropTypes.string,
    closeable:PropTypes.bool,
    fullscreen:PropTypes.bool,
  };

  static defaultProps = {
    direction:'bottom',
    closeable:false,
    fullscreen:false
  };
  /*===properties end===*/

  constructor(props){
    super(props);
    this.state = {
      direction:props.direction,
      visible:false,
      hidden:true,
    };
  }

  get children(){
    const {direction,children,closeable} = this.props;
    let childList = [
      closeable && <button key="btn" onClick={this._onClose} className="close"><img width="40" src={closeImg} /></button>,
      children
    ];
    return direction==='bottom' ? childList : childList.reverse();
  }

  _onClose =() =>{
    this.hide();
  };

  render(){
    const {direction,children,className,visible,closeable,fullscreen,...props} = this.props;
    return (
      <div className="react-popup-container">
        <div
          {...props}
          data-visible={this.state.visible}
          onTransitionEnd={this._onTransitionEnd}
          hidden={this.state.hidden}
          data-direction={direction}
          data-fullscreen={fullscreen}
          className={classNames('react-popup',className)}>
          {this.children}
        </div>
        <ReactBackdrop style={{position:'fixed'}} onClick={()=>{this.hide()}} visible={this.state.visible} />
      </div>
    );
  }
}
