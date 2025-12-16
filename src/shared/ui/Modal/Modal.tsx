import React from 'react';

type ModalProps = {
  onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>

        <h3>Связаться с нами</h3>
        <input type="text" placeholder="Ваше имя" />
        <input type="tel" placeholder="Телефон" />
        <textarea placeholder="Комментарий"></textarea>
        <button className="btn-primary">Отправить</button>
      </div>
    </div>
  );
};
