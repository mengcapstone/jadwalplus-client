import React from 'react';
import { Link } from 'react-router-dom';
import './styles/header.css';

const Header = () => {
  return (
    <header className="sticky-top">
      <nav className="flex-col gap-4 lg:flex-row">
        <div className="logo">
          <img src="/image/logo.png" alt="Logo" className="logo-image" />
          <span>JadwalPlus</span>
        </div>
        <ul>
          <li className="nav-item"><Link to="/home" className="active">Home</Link></li>
          <li className="nav-item"><Link to="/about">Tentang Kami</Link></li>
          <li className="auth-box login-box"><Link to="/" className="auth-aja">Masuk</Link></li>
          <li className="auth-box"><Link to="/register" className="auth-link">Daftar</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
