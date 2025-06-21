import React from 'react';
import './App.css';
import logo from './images/log1.png'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Products />
      <Testimonials />
      <Contact />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logo1.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <section id="home" className="section home">
      <img src={logo} alt="Centered Logo" className="center-logo" />
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <h2>About</h2>
      <p>This is the About section of Project Zelion.</p>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="section">
      <h2>Products</h2>
      <p>Our products are cutting-edge and crafted with care.</p>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <h2>Testimonials</h2>
      <p>Our customers love us! Here's what they say.</p>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact Us</h2>
      <p>Feel free to reach out through our social media or contact form.</p>
    </section>
  );
}

export default App;
