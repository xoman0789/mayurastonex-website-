import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assuming you want to use the images directly from public/images
const images = [
  '/images/img1.webp',
  '/images/img2.webp',
  '/images/img3.webp',
  '/images/img4.webp',
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStone, setSelectedStone] = useState(null);
  const enquiryFormRef = useRef(null);
  const contactFormRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const sections = ['home', 'about', 'products', 'gallery', 'contact'];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
        setActiveSection(section);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]); // FIX: Added handleScroll to dependency array


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu on navigation
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };


  const stones = [
    { id: 1, name: 'Carrara Marble', type: 'Italian Marble', image: '/images/marble1.webp', description: 'Classic white marble with delicate grey veining.' },
    { id: 2, name: 'Calacatta Marble', type: 'Italian Marble', image: '/images/marble2.webp', description: 'Rare and luxurious white marble with dramatic veining.' },
    { id: 3, name: 'Indian Green Marble', type: 'Indian Marble', image: '/images/marble3.webp', description: 'Vibrant green marble with a distinctive pattern.' },
    { id: 4, name: 'Absolute Black Granite', type: 'Indian Granite', image: '/images/granite1.webp', description: 'Solid black granite, perfect for contemporary designs.' },
    { id: 5, name: 'Tan Brown Granite', type: 'Indian Granite', image: '/images/granite2.webp', description: 'Dark brown granite with reddish-brown and black specks.' },
    { id: 6, name: 'Rainforest Green Marble', type: 'Indian Marble', image: '/images/marble4.webp', description: 'Exotic green marble with tree-like veining.' },
  ];

  const openModal = (stone) => {
    setSelectedStone(stone);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStone(null);
  };

  // StoneDetailsModal component (defined inline as it's simple or could be moved to its own file)
  const StoneDetailsModal = ({ stone, onClose }) => {
    if (!stone) return null;

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-button" onClick={onClose}>
            &times;
          </button>
          <h2>{stone.name}</h2>
          <img src={stone.image} alt={stone.name} className="modal-image" />
          <p><strong>Type:</strong> {stone.type}</p>
          <p>{stone.description}</p>
        </div>
      </div>
    );
  };

  // End of StoneDetailsModal component

  const handleSubmit = async (e, formType) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // const formName = form.getAttribute('name'); // FIX: Removed as it was assigned but never used

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        alert(`${formType} submitted successfully! We will get back to you soon.`);
        form.reset(); // Clear the form
      } else {
        alert(`Failed to submit ${formType}. Please try again.`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert(`An error occurred during ${formType} submission.`);
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1 className="logo" onClick={() => scrollToSection('home')}>Mayurastonex</h1>
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            {sections.map(section => (
              <a
                key={section}
                href={`#${section}`}
                className={activeSection === section ? 'active' : ''}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>
          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section">
          <Slider {...carouselSettings}>
            {images.map((image, index) => (
              <div key={index} className="hero-slide">
                <img src={image} alt={`Mayurastonex ${index + 1}`} />
                <div className="hero-overlay">
                  <h2>Connecting the world with exquisite Indian and Italian natural stone.</h2>
                  <p>Your trusted partner for premium quality marble and granite export.</p>
                  <button onClick={() => scrollToSection('products')} className="hero-button">Explore Products</button>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        <section id="about" className="about-section">
          <div className="container">
            <h2>About Mayurastonex</h2>
            <p>Mayurastonex is a leading manufacturer and exporter of premium Indian and Italian natural stone. With years of experience and a commitment to quality, we bring the finest marble and granite from quarries directly to your projects worldwide. Our state-of-the-art processing units ensure superior finish and precise dimensions, meeting international standards.</p>
            <p>We pride ourselves on our ethical sourcing, sustainable practices, and unwavering dedication to customer satisfaction. Partner with us for unparalleled quality and reliability in natural stone supply.</p>
          </div>
        </section>

        <section id="products" className="products-section">
          <div className="container">
            <h2>Our Products</h2>
            <p className="section-description">Discover our wide range of exquisite Indian and Italian marble and granite.</p>
            <div className="product-grid">
              {stones.map(stone => (
                <div key={stone.id} className="product-card" onClick={() => openModal(stone)}>
                  <img src={stone.image} alt={stone.name} className="product-image" />
                  <h3>{stone.name}</h3>
                  <p>{stone.type}</p>
                  <button className="view-details-button">View Details</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {isModalOpen && (
          <StoneDetailsModal stone={selectedStone} onClose={closeModal} />
        )}

        <section id="gallery" className="gallery-section">
          <div className="container">
            <h2>Gallery</h2>
            <div className="gallery-grid">
              <img src="/images/gallery1.webp" alt="Gallery 1" />
              <img src="/images/gallery2.webp" alt="Gallery 2" />
              <img src="/images/gallery3.webp" alt="Gallery 3" />
              <img src="/images/gallery4.webp" alt="Gallery 4" />
              <img src="/images/gallery5.webp" alt="Gallery 5" />
              <img src="/images/gallery6.webp" alt="Gallery 6" />
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <h2>Contact Us</h2>
            <p>Have questions or need a quote? Reach out to us!</p>
            <div className="contact-flex">
              <div className="contact-info">
                <h3>Get in Touch</h3>
                <p><Phone size={20} /> +91-9928178120</p>
                <p><Mail size={20} /> rishabhjainca0789@gmail.com</p>
                <p><MapPin size={20} /> Kishangarh, Rajasthan, India</p>
                <p>We are available to assist you during business hours.</p>
                <p>Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
              </div>

              <div className="contact-forms">
                <div className="form-card">
                  <h3>General Enquiry</h3>
                  <form name="enquiry" method="POST" data-netlify="true" onSubmit={(e) => handleSubmit(e, 'Enquiry')} ref={enquiryFormRef}>
                    <input type="hidden" name="form-name" value="enquiry" />
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <input type="tel" name="phone" placeholder="Your Phone (Optional)" />
                    <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
                    <button type="submit">Send Enquiry</button>
                  </form>
                </div>

                <div className="form-card">
                  <h3>Direct Contact</h3>
                  <form name="contact" method="POST" data-netlify="true" onSubmit={(e) => handleSubmit(e, 'Contact')} ref={contactFormRef}>
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your specific query or message" rows="4" required></textarea>
                    <button type="submit">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Mayurastonex. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy" onClick={() => alert('Privacy Policy under development')}>Privacy Policy</a>
            <a href="#terms" onClick={() => alert('Terms of Service under development')}>Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

