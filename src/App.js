import React, { useState, useEffect, useCallback } from 'react';

// Helper function to generate placeholder image URLs
const getPlaceholderImage = (width, height, text) =>
    `https://placehold.co/${width}x${height}/a8a8a8/ffffff?text=${encodeURIComponent(text)}`;

// Navbar Component
const Navbar = ({ currentPage, setCurrentPage }) => {
    const navItems = [
        { name: 'Home', page: 'home' },
        { name: 'About', page: 'about' },
        { name: 'Indian Stone', page: 'indian-stone' },
        { name: 'Luxury Stone', page: 'luxury-stone' },
        { name: 'Contact', page: 'contact' },
    ];

    return (
        <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Mayurastonex</h1>
                <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg">
                    {navItems.map((item) => (
                        <li key={item.page}>
                            <button
                                onClick={() => setCurrentPage(item.page)}
                                className={`px-4 py-2 rounded-lg transition-colors duration-300
                                    ${currentPage === item.page
                                        ? 'bg-indigo-600 text-white shadow-lg'
                                        : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600'
                                    }`}
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

// Home Component
const Home = ({ setCurrentPage }) => {
    return (
        <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Placeholder for premises photo */}
            <img
                src={getPlaceholderImage(1920, 1080, 'Your Premises Photo Here')}
                alt="Company Premises"
                className="absolute inset-0 w-full h-full object-cover filter brightness-75"
                onError={(e) => { e.target.src = getPlaceholderImage(1920, 1080, 'Image Not Found'); }}
            />
            <div className="relative z-10 text-center p-6 bg-black bg-opacity-40 rounded-xl shadow-2xl">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                    Discover the Elegance of Stone
                </h2>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button
                        onClick={() => setCurrentPage('indian-stone')}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                        Discover Indian Stone
                    </button>
                    <button
                        onClick={() => setCurrentPage('luxury-stone')}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50"
                    >
                        Explore Luxury Stone
                    </button>
                </div>
            </div>
        </div>
    );
};

// About Component
const About = () => {
    return (
        <div className="container mx-auto p-8 my-8 bg-white rounded-xl shadow-lg">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Mayurastonex</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Welcome to Mayurastonex, your premier destination for exquisite natural stones. With years of expertise in sourcing and supplying the finest Indian and international stones, we are committed to delivering unparalleled quality and beauty for your projects.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Our passion for stone is reflected in our diverse collection, ranging from the vibrant hues of Indian granites and marbles to the sophisticated elegance of luxury imported stones. We cater to a wide array of applications, including flooring, countertops, wall cladding, and bespoke architectural elements.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
                At Mayurastonex, we pride ourselves on our meticulous selection process, ethical sourcing practices, and unwavering dedication to customer satisfaction. Let us help you transform your vision into reality with the timeless allure of natural stone.
            </p>
        </div>
    );
};

// Contact Component
const Contact = () => {
    return (
        <div className="container mx-auto p-8 my-8 bg-white rounded-xl shadow-lg">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-700">
                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
                    <p className="mb-2"><i className="fas fa-map-marker-alt mr-3 text-indigo-600"></i>123 Stone Street, Marble City, India</p>
                    <p className="mb-2"><i className="fas fa-phone mr-3 text-indigo-600"></i>+91 98765 43210</p>
                    <p className="mb-2"><i className="fas fa-envelope mr-3 text-indigo-600"></i>info@mayurastonex.com</p>
                    <p className="mb-2"><i className="fas fa-clock mr-3 text-indigo-600"></i>Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send us a Message</h3>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                            <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500" placeholder="Your Name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500" placeholder="your@example.com" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                            <textarea id="message" name="message" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500" placeholder="Your message..."></textarea>
                        </div>
                        <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

// Product Card Component
const ProductCard = ({ product, onEnquire }) => {
    const [description, setDescription] = useState(product.description || 'Loading description...');
    const [isLoading, setIsLoading] = useState(!product.description);
    const [error, setError] = useState(null);

    // Function to fetch AI-generated description
    const fetchDescription = useCallback(async () => {
        if (product.description && product.description !== 'Loading description...') {
            setIsLoading(false);
            return; // Already has a description
        }

        setIsLoading(true);
        setError(null);
        const prompt = `Generate a concise, appealing description for ${product.name} known for its use in construction, flooring, or decorative purposes. Focus on its appearance, durability, and unique characteristics. Keep it under 50 words.`;
        let chatHistory = [];
        chatHistory.push({ role: "user", parts: [{ text: prompt }] });
        const payload = { contents: chatHistory };
        const apiKey = ""; // Canvas will automatically provide this in runtime

        try {
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const text = result.candidates[0].content.parts[0].text;
                setDescription(text);
            } else {
                setDescription('Description not available.');
                console.error('Unexpected API response structure:', result);
            }
        } catch (err) {
            console.error('Error fetching description:', err);
            setError('Failed to load description. Please try again later.');
            setDescription('Description loading failed.');
        } finally {
            setIsLoading(false);
        }
    }, [product.name, product.description]);

    useEffect(() => {
        fetchDescription();
    }, [fetchDescription]);

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col h-full">
            <img
                src={product.image || getPlaceholderImage(400, 300, product.name)}
                alt={product.name}
                className="w-full h-48 object-cover"
                onError={(e) => { e.target.src = getPlaceholderImage(400, 300, product.name); }}
            />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{product.name}</h3>
                {isLoading ? (
                    <p className="text-gray-600 italic animate-pulse">Loading description...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <p className="text-gray-700 text-base mb-4 flex-grow">{description}</p>
                )}
                <div className="mt-auto"> {/* Pushes button to the bottom */}
                    <button
                        onClick={() => onEnquire(product)}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                        Enquire Now
                    </button>
                </div>
            </div>
        </div>
    );
};

// Stone Category Page Component (reusable for Indian & Luxury)
const StoneCategory = ({ categoryName, products, onEnquire }) => {
    return (
        <div className="container mx-auto p-8 my-8 bg-white rounded-xl shadow-lg">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">{categoryName}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.name} product={product} onEnquire={onEnquire} />
                ))}
            </div>
        </div>
    );
};

// Enquiry Form Modal Component
const EnquiryFormModal = ({ product, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        companyName: '',
        thickness: '',
        application: '',
    });
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate email sending: log data to console
        console.log(`Enquiry for ${product.name}:`, formData);
        setSubmitMessage('Your enquiry has been sent successfully! We will get back to you soon.');
        // In a real application, you would send this data to your backend here
        // e.g., fetch('/api/send-email', { method: 'POST', body: JSON.stringify(formData) });

        // Optionally clear form or close modal after a delay
        setTimeout(() => {
            setFormData({
                email: '',
                phone: '',
                companyName: '',
                thickness: '',
                application: '',
            });
            setSubmitMessage('');
            onClose(); // Close the modal
        }, 3000);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-lg relative transform transition-all duration-300 scale-100 opacity-100">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
                >
                    <i className="fas fa-times"></i>
                </button>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Enquire About {product.name}</h2>
                {submitMessage && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                        {submitMessage}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500"
                            placeholder="your@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone No.</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500"
                            placeholder="e.g., +91 9876543210"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="companyName" className="block text-gray-700 text-sm font-bold mb-2">Company Name</label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500"
                            placeholder="Your Company Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="thickness" className="block text-gray-700 text-sm font-bold mb-2">Thickness (e.g., in mm)</label>
                        <input
                            type="text"
                            id="thickness"
                            name="thickness"
                            value={formData.thickness}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500"
                            placeholder="e.g., 18mm, 20mm"
                        />
                    </div>
                    <div>
                        <label htmlFor="application" className="block text-gray-700 text-sm font-bold mb-2">Application</label>
                        <textarea
                            id="application"
                            name="application"
                            value={formData.application}
                            onChange={handleChange}
                            rows="3"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500"
                            placeholder="e.g., Kitchen Countertops, Flooring, Wall Cladding"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                        Send Enquiry
                    </button>
                </form>
            </div>
        </div>
    );
};


// Main App Component
const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [showEnquiryModal, setShowEnquiryModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Define product data
    const indianStoneProducts = [
        { name: 'Indian Green Marble', image: getPlaceholderImage(400, 300, 'Indian Green Marble') },
        { name: 'Bswada White (Wonder White)', image: getPlaceholderImage(400, 300, 'Bswada White') },
        { name: 'Alaska White Granite', image: getPlaceholderImage(400, 300, 'Alaska White Granite') },
        { name: 'Alaska Gold Granite', image: getPlaceholderImage(400, 300, 'Alaska Gold Granite') },
        { name: 'Black Galaxy Granite', image: getPlaceholderImage(400, 300, 'Black Galaxy Granite') },
        { name: 'Cat Eye Granite', image: getPlaceholderImage(400, 300, 'Cat Eye Granite') },
        { name: 'Chima Pink Granite', image: getPlaceholderImage(400, 300, 'Chima Pink Granite') },
        { name: 'Imperial Red Granite', image: getPlaceholderImage(400, 300, 'Imperial Red Granite') },
        { name: 'Lakha Red Granite', image: getPlaceholderImage(400, 300, 'Lakha Red Granite') },
        { name: 'Black Majestic Granite', image: getPlaceholderImage(400, 300, 'Black Majestic Granite') },
        { name: 'Rosy Pink Granite', image: getPlaceholderImage(400, 300, 'Rosy Pink Granite') },
        { name: 'P White', image: getPlaceholderImage(400, 300, 'P White') },
        { name: 'Tigerskin Granite', image: getPlaceholderImage(400, 300, 'Tigerskin Granite') },
        { name: 'Paradiso Brown Granite', image: getPlaceholderImage(400, 300, 'Paradiso Brown Granite') },
        { name: 'Kashmir White Granite', image: getPlaceholderImage(400, 300, 'Kashmir White Granite') },
    ];

    const luxuryStoneProducts = [
        { name: 'Arabescato Marble', image: getPlaceholderImage(400, 300, 'Arabescato Marble') },
        { name: 'The Armani Beige Marble', image: getPlaceholderImage(400, 300, 'Armani Beige Marble') },
        { name: 'Armani Black Marble', image: getPlaceholderImage(400, 300, 'Armani Black Marble') },
        { name: 'Armani Grey Marble', image: getPlaceholderImage(400, 300, 'Armani Grey Marble') },
        { name: 'Black Marquina Marble', image: getPlaceholderImage(400, 300, 'Black Marquina Marble') },
        { name: 'Bianco Lasa Marble', image: getPlaceholderImage(400, 300, 'Bianco Lasa Marble') },
        { name: 'Calacatta Borghini Marble', image: getPlaceholderImage(400, 300, 'Calacatta Borghini Marble') },
        { name: 'Calacatta Gold Marble', image: getPlaceholderImage(400, 300, 'Calacatta Gold Marble') },
        { name: 'Calacatta Marble', image: getPlaceholderImage(400, 300, 'Calacatta Marble') },
        { name: 'Carrara Marble', image: getPlaceholderImage(400, 300, 'Carrara Marble') },
        { name: 'Italian Statuario Marble', image: getPlaceholderImage(400, 300, 'Italian Statuario Marble') },
        { name: 'Panda White Marble', image: getPlaceholderImage(400, 300, 'Panda White Marble') },
        { name: 'Statuario Venetino Marble', image: getPlaceholderImage(400, 300, 'Statuario Venetino Marble') },
    ];

    const handleEnquireClick = (product) => {
        setSelectedProduct(product);
        setShowEnquiryModal(true);
    };

    const handleCloseEnquiryModal = () => {
        setShowEnquiryModal(false);
        setSelectedProduct(null);
    };

    const handleEnquirySubmit = (formData) => {
        // This function would typically send data to a backend
        console.log('Enquiry submitted:', formData);
        handleCloseEnquiryModal();
    };

    // Render content based on currentPage state
    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home setCurrentPage={setCurrentPage} />;
            case 'about':
                return <About />;
            case 'indian-stone':
                return <StoneCategory categoryName="Indian Stone Collection" products={indianStoneProducts} onEnquire={handleEnquireClick} />;
            case 'luxury-stone':
                return <StoneCategory categoryName="Luxury Stone Collection" products={luxuryStoneProducts} onEnquire={handleEnquireClick} />;
            case 'contact':
                return <Contact />;
            default:
                return <Home setCurrentPage={setCurrentPage} />;
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main className="flex-grow">
                {renderPage()}
            </main>
            {showEnquiryModal && selectedProduct && (
                <EnquiryFormModal
                    product={selectedProduct}
                    onClose={handleCloseEnquiryModal}
                    onSubmit={handleEnquirySubmit}
                />
            )}
        </div>
    );
};

export default App;