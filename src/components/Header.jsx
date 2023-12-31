import React from 'react';
import { Link } from 'react-router-dom';
import './styles/header.css';

const Header = () => {
  return (
    <header className="sticky-top box-border">
      <nav className="flex-col gap-4 md:flex-row py-4 px-[28.8px]">
        <div className="logo">
          <img src="/image/logo.png" alt="Logo" className="logo-image" />
          <span>JadwalPlus</span>
        </div>
        <ul className="flex items-center justify-evenly gap-4 text-sm sm:text-base">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Tentang</Link></li>
          <li><Link to="/login" className="bg-white border border-solid border-black py-1.5 px-2 rounded">Masuk</Link></li>
          <li><Link to="/register" className="bg-black text-white border border-solid border-black py-1.5 px-2 rounded">Daftar</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
