import './style.scss';

import PropTypes from 'prop-types';
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
    onCloseClick:PropTypes.func,
    onDropClick:PropTypes.func,
  };

  static defaultProps = {
    direction:'bottom',
    closeable:false,
    fullscreen:false,
    onDropClick: noop,
    onCloseClick: noop,
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

  _onClose = (inEvent) => {
    const {onCloseClick} = this.props;
    this.hide(onCloseClick);
  };

  _onDropClick = (inEvent) => {
    const {onDropClick} = this.props;
    this.hide(onDropClick);
  };

  render(){
    const {direction,children,className,visible,closeable,fullscreen,onCloseClick,onDropClick,...props} = this.props;
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
        <ReactBackdrop style={{position:'fixed'}} onClick={this._onDropClick} visible={this.state.visible} />
      </div>
    );
  }
}
