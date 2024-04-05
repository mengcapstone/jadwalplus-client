import React from 'react';
import {
  FaHome, FaPlusCircle, FaArchive, FaSignOutAlt,
} from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../pages/styles/auth.css';

const NavigationBottom = ({ logout }) => {
  const navigate = useNavigate();
  const path = useLocation().pathname;

  const logoutHandler = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="navigation navigation-bottom">
      <div className="navigation-icons container-icon">
        <div className="navigation-icon" id="add-icon">
          <Link to="/" className="reset-link wrap-icon">
            <FaHome className={`icon-navigation-action hover:text-blue-500 ${path === '/' ? 'text-blue-800' : 'text-black'}`} />
            <span className={`icon-label hover:text-blue-500 ${path === '/' ? 'text-blue-800' : 'text-black'}`}>Home</span>
          </Link>
        </div>
        <div className="navigation-icon" id="add-book-icon">
          <Link to="/schedule/add" className="wrap-icon reset-link">
            <FaPlusCircle className={`icon-navigation-action hover:text-blue-500 ${path === '/schedule/add' ? 'text-blue-800' : 'text-black'}`} />
            <span className={`icon-label hover:text-blue-500 ${path === '/schedule/add' ? 'text-blue-800' : 'text-black'}`}>Add</span>
          </Link>
        </div>
        <div className="navigation-icon" id="add-book-icon">
          <Link to="/schedules/arsip" className="wrap-icon reset-link">
            <FaArchive className={`icon-navigation-action hover:text-blue-500 ${path === '/schedules/arsip' ? 'text-blue-800' : 'text-black'}`} />
            <span className={`icon-label hover:text-blue-500 ${path === '/schedules/arsip' ? 'text-blue-800' : 'text-black'}`}>Archive</span>
          </Link>
        </div>
        <div className="navigation-icon" id="logOut-icon">
          <button type="button" className="wrap-icon reset-button" onClick={logoutHandler}>
            <FaSignOutAlt className="icon-navigation-action" />
            <span className="icon-label">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

NavigationBottom.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default NavigationBottom;
