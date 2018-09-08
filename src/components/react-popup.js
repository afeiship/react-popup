import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import ReactVisible from 'react-visible';

export default class extends ReactVisible {
  /*===properties start===*/
  /*===properties end===*/
  get visibleElementView() {
    const { className, destroyable, backdrop, value, backdropProps, ...props } = this.props;
    const { hidden } = this.state;
    return (
      <div
        hidden={hidden}
        data-visible={this.state.value}
        onAnimationEnd={this.onAnimationEnd}
        className={classNames('webkit-sassui-popup react-popup', className)}
        {...props}
      />
    )
  }
}

