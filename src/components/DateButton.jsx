import React, { useState } from 'react';
import { Button, Modal, Popover, TextField } from '@mui/material';

const DateButton = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue); // обработка введенного текста
    handleClose(); // закрытие модального окна
  };

  return (
    <div>
      <Button variant="contained" color="success" onClick={handleOpen} >
        Выбрать текущую дату дату
      </Button>
      <Popover
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      ></Popover>
      <Modal open={open} onClose={handleClose}>
        <div className="modal-container">
          <form onSubmit={handleSubmit}>
            <TextField
              label="Введите текст"
              value={inputValue}
              onChange={handleChange}/>
            <Button type="submit" variant="contained">
              Сохранить
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default DateButton;
