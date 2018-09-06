import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

const OBJECT = 'object';
const EMPTY_OBJECT = {};

export default class extends React.Component {
  /*===properties start===*/
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
  /*===properties end===*/

  constructor(inProps) {
    const { value } = inProps;
    super(inProps);
    this.state = {
      value,
      hidden: !value,
      destroyValue: true
    };
  }

  present() {
    this.setState({ destroyValue: true, hidden: false, value: true })
  }

  dismiss() {
    this.setState({ value: false });
  }

  updateDestroyValue() {
    const { destroyable } = this.props;
    const { value } = this.state;
    this.setState({
      destroyValue: destroyable ? value : true
    });
  }

  _onAnimationEnd = () => {
    const { value } = this.state;
    if (!value) {
      this.setState({ hidden: true });
    }
    this.updateDestroyValue();
    this.props.onChange({ target: { value } });
  };

  render() {
    const { className, destroyable, value, backdrop, backdropProps, ...props } = this.props;
    const { hidden, destroyValue } = this.state;
    const _value = this.state.value;
    const bakcdropProps = typeof backdrop === OBJECT ? backdrop : EMPTY_OBJECT;

    return (
      destroyValue && <Fragment>
        <div
          hidden={hidden}
          data-visible={_value}
          onAnimationEnd={this._onAnimationEnd}
          className={classNames('webkit-sassui-popup react-popup', className)}
          {...props}
        />

        {
          !!backdrop && (
            <div
              hidden={hidden}
              data-visible={_value}
              className="webkit-sassui-backdrop react-popup-backdrop"
              {...bakcdropProps}
            />
          )
        }
      </Fragment>
    );
  }
}

