import './style.scss';
import {PropTypes} from 'react';
import classNames from 'classnames';
import {ReactBackdrop} from 'react-backdrop';
import noop from 'noop';

export default class extends ReactBackdrop{
  static propTypes = {
    className:PropTypes.string,
    direction:PropTypes.string
  };

  static defaultProps = {
    direction:'bottom'
  };

  constructor(props){
    super(props);
    this.state = {
      direction:props.direction,
      visible:false,
      hidden:true,
      animating:false
    };
  }

  render(){
    const {direction,children,className,visible,...props} = this.props;
    return (
      <div className="react-popup-container">
        <div
          {...props}
          data-visible={this.state.visible}
          onTransitionEnd={this._onTransitionEnd}
          hidden={this.state.hidden}
          data-direction={direction}
          className={classNames('react-popup',className)}>
          {children}
        </div>
        <ReactBackdrop onClick={()=>{this.hide()}} visible={this.state.visible} />
      </div>
    );
  }
}
