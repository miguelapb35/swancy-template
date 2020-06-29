import React from 'react';
import logo from '../images/logo.png';
import smalllogo from '../images/logo-symbol.png';

export default function Navbar() {
  return (
  <header role="navigation">
    <a href="/">
      <img class="small" src={smalllogo} alt="Swancy"/>
      <img class="large" src={logo} alt="Swancy"/>
    </a>
    <nav>
      <ul class="nav menu nav-pills mod-list">
          <li class="item-101 default current active"><a href="/">Home</a></li>
          <li class="item-108"><a href="/about">About</a></li>
          <li class="item-116"><a href="/blog">Blog</a></li>
          <li class="item-119"><a href="/contact-us">Contact</a></li>
          <li class="item-120"><a href="/profile">Visit a Profile in the Swancy app</a></li>
        </ul>
    </nav>
  </header>
  )
}
