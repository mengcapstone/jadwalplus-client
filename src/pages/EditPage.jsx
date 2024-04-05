import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { updateDetailScheduleActionCreator } from '../states/detailSchedule/action';
import { asyncUpdateSchedule } from '../states/schedules/action';
import './styles/addSchedule.css';

const EditSchedulePage = () => {
  const {
    detailSchedule = null,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  const handleInputChangeSchedule = (value) => {
    dispatch(updateDetailScheduleActionCreator({ schedule: value }));
  };

  const handleInputChangeDateTime = (value) => {
    dispatch(updateDetailScheduleActionCreator({ dateTime: value }));
  };

  const navigate = useNavigate();
  const dateTimeFormated = moment(detailSchedule?.dateTime).format('YYYY-MM-DD');

  const submitHandler = (event) => {
    event.preventDefault();

    const formatDateTime = new Date(detailSchedule.dateTime).toISOString();

    dispatch(asyncUpdateSchedule({
      id: detailSchedule.id, schedule: detailSchedule.schedule, dateTime: formatDateTime,
    }));

    if (detailSchedule.finished) {
      navigate('/schedules/arsip');
    } else {
      navigate('/');
    }
  };

  const minToday = () => {
    return new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }).split(',')[0].split('/').reverse().map((item, index) => (index === 0 ? item : `${item.length !== 2 ? (`0${item}`) : item}`)).join('-');
  };

  if (!detailSchedule) {
    return null;
  }

  return (
    <form
      className="user-info-container pt-8"
      onSubmit={submitHandler}
    >
      <div className="site-name pb-5">Edit Jadwal Baru</div>
      <div className="red-box  w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] p-4">
        <div className="input-container">
          <input
            type="text"
            id="schedule"
            name="schedule"
            placeholder="Judul Jadwal"
            value={detailSchedule?.schedule}
            onChange={(e) => handleInputChangeSchedule(e.target.value)}
          />
        </div>
        <div className="input-container mt-4">
          <input
            type="date"
            id="dateTime"
            name="dateTime"
            min={minToday()}
            value={dateTimeFormated}
            onChange={(e) => handleInputChangeDateTime(e.target.value)}
          />
        </div>
        <button id="simpanButton" className="mt-8 bg-black text-white w-[100%] py-3 rounded" type="submit">SIMPAN</button>
      </div>
    </form>
  );
};

export default EditSchedulePage;
