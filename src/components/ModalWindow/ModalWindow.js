import { createPortal } from 'react-dom';
import React from 'react';
import PropTypes from 'prop-types';
import './ModalWindow.scss';

export const ModalWindow = ({ isOpened, onClose }) => isOpened && createPortal(
  <div className="modal-window">
    <div
      className="modal-window__bg"
      onClick={onClose}
    />
    <div
      className="modal-window__container"
    />
  </div>, document.getElementById('modal')
);

ModalWindow.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
