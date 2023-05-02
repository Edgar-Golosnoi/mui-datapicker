import React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ArrowRight from '@mui/icons-material/ArrowRight';
import ArrowLeft from '@mui/icons-material/ArrowRight';

import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';


const slots = {
    leftArrowIcon: ArrowLeft,
    rightArrowIcon: ArrowRight,
  };
  

const QuantityDays = () => {
const [selectedDateRange, setSelectedDateRange] = React.useState([null, null]);

  /// функция для отображения выдранного интервала времени
  const dateDifferenceInDays = () => {
    if (!selectedDateRange[0] || !selectedDateRange[1]) {
      return '';
    }
    const diffTime = Math.abs(selectedDateRange[1] - selectedDateRange[0]);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return `Количество дней: ${diffDays}`;
  };

  /// функция для смены состояния счётчика дней
  const handleDateRangeChange = (newValue) => {
    setSelectedDateRange(newValue);
  };


 

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={2} sx={{ width: '100%' }} alignItems="center">
        <Box>{dateDifferenceInDays()}</Box>
        <DateRangeCalendar
          defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
          slots={slots}
          onChange={(newValue) => handleDateRangeChange(newValue)}
          />
         </Stack>
        </LocalizationProvider>
      );
    }
    

export default QuantityDays;






