import './style.scss';
import {PropTypes} from 'react';
import classNames from 'classnames';
import {ReactBackdropCtrl} from 'react-backdrop';
import ReactVisible from 'react-visible';
import noop from 'noop';

export default class extends ReactVisible{
  static propTypes = {
    className:PropTypes.string,
    direction:PropTypes.string,
    backdropStyle:PropTypes.object
  };

  static defaultProps = {
    direction:'bottom',
    backdropStyle:{
      opacity:0.6
    }
  };

  constructor(props){
    super(props);
    this.state = {
      hidden:!props.visible,
      direction:props.direction
    };
  }

  show(inCallback){
    ReactBackdropCtrl.show();
    super.show(inCallback || noop);
  }

  hide(inCallback){
    ReactBackdropCtrl.hide();
    super.hide(inCallback || noop);
  }

  componentWillMount(){
    ReactBackdropCtrl.createInstance({
      onClick:()=>{
        this.hide();
      },
      style:this.props.backdropStyle
    });
  }

  render(){
    const {direction,children,className,backdropStyle,...props} = this.props;
    return (
      <div
        {...props}
        data-visible={this.state.visible}
        onTransitionEnd={this._onTransitionEnd}
        hidden={this.state.hidden}
        data-direction={direction}
        className={classNames('react-popup',className)}>
        {children}
      </div>
    );
  }
}
