import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncGetAllSchedule } from '../states/schedules/action';
import ArsipList from '../components/ArsipList';
import Search from '../components/Search';
import useInput from '../hooks/useInput';
import './styles/about.css';

const ArsipPage = () => {
  const {
    schedules,
  } = useSelector((states) => states);

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const [searchKeyword, setSearchKeyword] = useInput(search || '');

  const changeSearchParams = (value) => {
    setSearchParams({ search: value });
  };

  const searchKeywordChangeHandler = (value) => {
    setSearchKeyword(value);
    changeSearchParams(value);
  };

  useEffect(() => {
    dispatch(asyncGetAllSchedule());
  }, [dispatch]);

  const filteredSchedules = schedules
    .filter((schedule) => schedule.schedule.toLowerCase().includes(searchKeyword.toLowerCase()));

  return (
    <div className="py-8 container-space">
      <Search searchKeyword={searchKeyword} onSearch={searchKeywordChangeHandler} />
      <ArsipList schedules={filteredSchedules} />
    </div>
  );
};

export default ArsipPage;
