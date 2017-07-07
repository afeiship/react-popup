import './style.scss';

import PropTypes from 'prop-types';
import {ReactBackdrop} from 'react-backdrop';
import classNames from 'classnames';
import closeImg from './close.png';
import noop from 'noop';

export default class extends ReactBackdrop{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    direction: PropTypes.string,
    closeable: PropTypes.bool,
    fullscreen: PropTypes.bool,
    onShown: PropTypes.func,
    onHidden: PropTypes.func,
    onCloseClick: PropTypes.func,
    onDropClick: PropTypes.func,
    backdropStyle: PropTypes.object
  };

  static defaultProps = {
    direction:'bottom',
    closeable:false,
    fullscreen:false,
    onShown: noop,
    onHidden: noop,
    onDropClick: noop,
    onCloseClick: noop,
    backdropStyle:{
      position:'fixed'
    }
  };
  /*===properties end===*/

  constructor(props){
    super(props);
    this.state = {
      direction:props.direction,
      backdropStyle: props.backdropStyle,
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
    return direction === 'bottom' ? childList : childList.reverse();
  }

  show(){
    const { onShown } = this.props;
    return new Promise((resolve,reject)=>{
      super.show().then(()=>{
        resolve();
        onShown();
      });
    });
  }

  hide(){
    const { onHidden } = this.props;
    return new Promise((resolve,reject)=>{
      super.hide().then(()=>{
        resolve();
        onHidden();
      });
    });
  }

  _onClose = (inEvent) => {
    const { onCloseClick } = this.props;
    return this.hide().then(()=>{
      onCloseClick(inEvent);
    });
  };

  _onDropClick = (inEvent) => {
    const { onDropClick } = this.props;
    return this.hide().then(()=>{
      onDropClick(inEvent);
    });
  };

  render(){
    const {
      direction,children,className,visible,
      closeable,fullscreen,
      onShown,onHidden,onCloseClick,onDropClick,
      backdropStyle,
      ...props
    } = this.props;

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
        <ReactBackdrop style={backdropStyle} onClick={this._onDropClick} visible={this.state.visible} />
      </div>
    );
  }
}
