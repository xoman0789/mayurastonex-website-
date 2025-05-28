import React, { useState } from 'react';
import { Home, Info, Phone, Gem, Mountain, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'; // Icons for navigation and carousel

// --- Component: AlertDialog (Replaces browser alert()) ---
const AlertDialog = ({ title, message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-2xl max-w-sm w-full relative text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-teal-600 text-white py-2 px-6 rounded-md hover:bg-teal-700 transition-colors duration-300 font-semibold"
        >
          OK
        </button>
      </div>
    </div>
  );
};

// --- Component: Header ---
const Header = ({ setCurrentPage }) => {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 shadow-lg rounded-b-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold text-teal-400 mb-2 md:mb-0">
          Mayurastonex
        </h1>
        <nav className="flex flex-wrap justify-center space-x-4">
          <NavItem icon={<Home className="w-5 h-5 mr-1" />} text="Home" page="home" setCurrentPage={setCurrentPage} />
          <NavItem icon={<Mountain className="w-5 h-5 mr-1" />} text="Indian Stone" page="indian-stone" setCurrentPage={setCurrentPage} />
          <NavItem icon={<Gem className="w-5 h-5 mr-1" />} text="Luxury Stone" page="luxury-stone" setCurrentPage={setCurrentPage} />
          <NavItem icon={<Info className="w-5 h-5 mr-1" />} text="About Us" page="about-us" setCurrentPage={setCurrentPage} />
          <NavItem icon={<Phone className="w-5 h-5 mr-1" />} text="Contact" page="contact" setCurrentPage={setCurrentPage} />
        </nav>
      </div>
    </header>
  );
};

// --- Component: NavItem (for Header) ---
const NavItem = ({ icon, text, page, setCurrentPage }) => (
  <button
    onClick={() => setCurrentPage(page)}
    className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm md:text-base mb-1 md:mb-0"
  >
    {icon}
    {text}
  </button>
);

// --- Component: Footer ---
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 p-6 mt-10 rounded-t-lg">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Mayurastonex. All rights reserved.</p>
        <p className="mt-2">Connecting the world with premium natural stone.</p>
      </div>
    </footer>
  );
};

// --- Component: EnquiryModal ---
const EnquiryModal = ({ stoneName, onClose, onShowAlert }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    size: '', // New field
    thickness: '', // New field
    application: '', // New field
    message: `I am interested in ${stoneName}. Please provide more details.`,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enquiry Submitted:', formData);
    // In a real application, you would send this data to a backend
    onShowAlert('Enquiry Sent!', 'Thank you for your enquiry! We will get back to you shortly.');
    onClose();
  };

  const handleClose = () => {
    console.log('EnquiryModal: Closing modal...'); // Debugging log
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-2xl max-w-md w-full relative flex flex-col max-h-[90vh]"> {/* Added flex-col and max-h */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex-shrink-0">Enquire About {stoneName}</h2>
        <form onSubmit={handleSubmit} className="flex-grow overflow-y-auto pr-2 -mr-2"> {/* Added flex-grow, overflow-y-auto, and padding for scrollbar */}
          <div className="space-y-4 pb-4"> {/* Added padding-bottom to ensure content doesn't get hidden by scrollbar */}
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">Phone (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
              />
            </div>
            {/* New fields: Size, Thickness, Application */}
            <div>
              <label htmlFor="size" className="block text-gray-700 text-sm font-medium mb-1">Size (e.g., 60x60 cm, 2x3 ft)</label>
              <input
                type="text"
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="thickness" className="block text-gray-700 text-sm font-medium mb-1">Thickness (e.g., 2cm, 30mm)</label>
              <input
                type="text"
                id="thickness"
                name="thickness"
                value={formData.thickness}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="application" className="block text-gray-700 text-sm font-medium mb-1">Application (e.g., Flooring, Countertop, Wall Cladding)</label>
              <input
                type="text"
                id="application"
                name="application"
                value={formData.application}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-1">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                required
              ></textarea>
            </div>
          </div>
        </form>
        <div className="flex justify-end space-x-4 mt-6 flex-shrink-0 pt-4 border-t border-gray-200"> {/* Added flex-shrink-0, pt-4, border-t */}
          <button
            type="button"
            onClick={handleClose}
            className="bg-gray-300 text-gray-800 py-2 px-6 rounded-md hover:bg-gray-400 transition-colors duration-300 font-semibold"
          >
            Back
          </button>
          <button
            type="submit"
            onClick={handleSubmit} // Added onClick to the button
            className="bg-teal-600 text-white py-2 px-6 rounded-md hover:bg-teal-700 transition-colors duration-300 font-semibold"
          >
            Send Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Component: StoneDetailsModal (LLM Powered) ---
const StoneDetailsModal = ({ stone, onClose }) => {
  const [generatedDescription, setGeneratedDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateDetails = async () => {
    setIsLoading(true);
    setError(null);
    setGeneratedDescription(''); // Clear previous generation

    try {
      const prompt = `Generate a detailed and inspiring description for ${stone.name} (${stone.description}). Include its unique characteristics, ideal applications (e.g., flooring, countertops, accent walls), and design styles it complements. Make it sound appealing to potential buyers.`;

      let chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });
      const payload = { contents: chatHistory };
      const apiKey = ""; // If you want to use models other than gemini-2.0-flash or imagen-3.0-generate-002, provide an API key here. Otherwise, leave this as-is.
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
        setGeneratedDescription(text);
      } else {
        setError('Failed to generate description: No content in response.');
        console.error('Gemini API response structure unexpected:', result);
      }
    } catch (err) {
      setError(`Failed to generate description: ${err.message}`);
      console.error('Error calling Gemini API:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-2xl max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Details for {stone.name}</h2>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Original Description:</h3>
          <p className="text-gray-600 text-base">{stone.description}</p>
        </div>

        <button
          onClick={generateDetails}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium flex items-center justify-center mb-4"
          disabled={isLoading}
        >
          {isLoading ? (
            <svg className="animate-spin h-5 w-5 text-white mr-3" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <>
              <Sparkles className="w-5 h-5 mr-2" /> Generate More Details
            </>
          )}
        </button>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        )}

        {generatedDescription && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Generated Description:</h3>
            <p className="text-gray-800 text-base leading-relaxed">{generatedDescription}</p>
          </div>
        )}
      </div>
    </div>
  );
};


// --- Component: StoneCard ---
const StoneCard = ({ stone, onEnquire }) => { // Removed onShowDetails prop
  // Only display the first image if imageUrls array exists, otherwise use imageUrl
  const imageUrlToDisplay = (stone.imageUrls && stone.imageUrls.length > 0)
    ? stone.imageUrls[0]
    : stone.imageUrl;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative w-full h-48">
        <img
          src={imageUrlToDisplay}
          alt={stone.name}
          className="w-full h-full object-cover object-center"
          onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x200/cccccc/333333?text=${stone.name.replace(/\s/g, '+')}`; }}
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{stone.name}</h3>
        {/* Render description with markdown for table */}
        <div className="text-gray-600 text-sm mb-4 h-20 overflow-hidden"> {/* Added fixed height and overflow for consistent card size */}
          {stone.description.split('\n').map((line, index) => (
            <p key={index} className={line.startsWith('|') ? 'font-mono whitespace-pre' : ''}>{line}</p>
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          <button
            onClick={() => onEnquire(stone.name)}
            className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors duration-300 font-medium"
          >
            Enquire Now
          </button>
          {/* Removed the "Generate Details" button */}
        </div>
      </div>
    </div>
  );
};

// --- Page: Home ---
const HomePage = ({ setCurrentPage }) => { // Receive setCurrentPage as prop
  return (
    <main className="container mx-auto p-6">
      <section className="text-center py-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-inner mb-10">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Your Global Partner for <span className="text-teal-600">Exquisite Natural Stone</span>
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          Connecting the world with the finest Indian and Italian Marble & Granite. We operate as a manufacturer and supplier, ensuring seamless sourcing and export of premium quality stones directly to your projects, anywhere in the world.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setCurrentPage('indian-stone')} // Added onClick for navigation
            className="bg-teal-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Indian Stone
          </button>
          <button
            onClick={() => setCurrentPage('luxury-stone')} // Added onClick for navigation
            className="bg-gray-800 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Discover Luxury Stone
          </button>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
          <Mountain className="w-16 h-16 text-teal-600 mb-4" />
          <h3 className="text-3xl font-bold text-gray-800 mb-3">Indian Stone Heritage</h3>
          <p className="text-gray-600 leading-relaxed">
            From the vibrant hues of Rajasthan to the deep blacks of South India, we bring you an unparalleled selection of Indian marble and granite, renowned for its durability, unique patterns, and timeless beauty. Perfect for large-scale projects and classic designs.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
          <Gem className="w-16 h-16 text-gray-800 mb-4" />
          <h3 className="text-3xl font-bold text-gray-800 mb-3">Italian Luxury & Elegance</h3>
          <p className="text-gray-600 leading-relaxed">
            Indulge in the world's most coveted Italian marble and granite. Our luxury collection features exquisite Carrara, Calacatta, Statuario, and more, offering unmatched sophistication and prestige for high-end residential and commercial spaces.
          </p>
        </div>
      </section>

      <section className="text-center py-12 bg-teal-50 rounded-xl shadow-inner">
        <h3 className="text-4xl font-bold text-teal-800 mb-4">Why Choose Mayurastonex?</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Global Reach</h4>
            <p className="text-gray-600 text-sm">Seamless export to any corner of the world.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Quality Assurance</h4>
            <p className="text-gray-600 text-sm">Rigorous selection process for superior stone.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Expert Sourcing</h4>
            <p className="text-gray-600 text-sm">Leveraging deep industry connections for best materials.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

// --- Page: Indian Stone ---
const IndianStonePage = () => {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [selectedStoneForEnquiry, setSelectedStoneForEnquiry] = useState('');
  // Removed showDetailsModal and selectedStoneForDetails states
  const [alertInfo, setAlertInfo] = useState(null); // State for custom alert

  const indianStones = [
    {
      id: 1,
      name: 'Indian Green Marble',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZHmnEesxAGqZKs5NWKMm0posMKorSj7wcg&s',
      description: 'A vibrant green marble with subtle white veins, known for its striking appearance and durability. Ideal for flooring, wall cladding, and countertops, adding a touch of nature to any space.',
    },
    {
      id: 2,
      name: 'Absolute Black Granite',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw8jyC94WfMA6pGk93jrbJEGQehIB-HrNioQ&s',
      description: 'A classic, uniform black granite with a consistent texture, offering a sleek and sophisticated look. Highly sought after for kitchen countertops, flooring, and exterior applications due to its hardness and resistance to wear.',
    },
    {
      id: 3,
      name: 'Tan Brown Granite',
      imageUrl: 'https://www.marblewale.in/wp-content/uploads/2021/02/g31.jpg',
      description: 'Characterized by its dark brown background with reddish-brown and black speckles, Tan Brown Granite is a popular choice for its earthy tones and robust nature. Excellent for kitchen surfaces and high-traffic areas.',
    },
    {
      id: 4,
      name: 'P White Granite',
      imageUrl: 'https://dukaan.b-cdn.net/700x700/webp/projecteagle/images/6d372efd-d4d1-4a23-9d42-9ee41cc32330.jpg',
      description: 'A popular Indian granite known for its consistent white base with small black and grey speckles. P White Granite offers a clean and bright aesthetic, making it versatile for both modern and traditional designs in flooring, countertops, and wall cladding.',
    },
    {
      id: 5,
      name: 'Imperial Red Granite',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCQrdDWV5PGuD9VVDihSFLhhh0dwllt4gkHw&s',
      description: 'A bold, deep red granite with black and grey specks, offering a dramatic and luxurious statement. Its vibrant color makes it a favorite for feature walls, flooring, and decorative elements.',
    },
    {
      id: 6,
      name: 'White Marble (Makrana)',
      imageUrl: 'https://images.jdmagicbox.com/quickquotes/images_main/white-marble-2219522070-9wkl463i.jpg',
      description: 'The legendary white marble from Makrana, Rajasthan, famous for its pure white color and smooth texture. Used in iconic structures like the Taj Mahal, it is perfect for luxurious flooring, statues, and intricate carvings.',
    },
    // Existing Majestic Black Granite
    {
      id: 7,
      name: 'Majestic Black Granite',
      imageUrl: 'https://krishnamarblegroup.com/wp-content/uploads/2020/03/Majestic-Black-Granite.jpg',
      description: 'A deep, consistent black granite known for its elegance and durability. Ideal for sophisticated countertops, flooring, and exterior cladding, providing a striking contrast in any design.',
    },
    // Corrected Product: Banswara White Marble
    {
      id: 16, // ID remains the same
      name: 'Banswara White Marble', // Corrected spelling
      imageUrl: 'https://img3.exportersindia.com/product_images/bc-full/dir_21/612147/banswara-white-marble-1512370361-3494538.jpg',
      description: 'A pristine white marble from Banswara, Rajasthan, characterized by its pure white base and subtle grey patterns. It is highly valued for its elegant appearance and is commonly used for flooring, wall cladding, and decorative purposes in both residential and commercial projects.',
    },
    {
      id: 8,
      name: 'Alaska Gold Granite', // Fixed: Removed newline character
      imageUrl: 'https://i.pinimg.com/474x/39/24/e2/3924e24e925c8fd5c3023ce02358e04f.jpg',
      description: 'Features a creamy white background with golden, brown, and black specks, creating a warm and inviting look. Popular for kitchen and bathroom surfaces, adding a touch of rustic luxury.',
    },
    {
      id: 9,
      name: 'Alaska Red Granite',
      imageUrl: 'https://tripurastones.in/wp-content/uploads/2020/09/Alaska-red-north.jpg',
      description: 'A vibrant red granite with black and white patterns, offering a dramatic and lively appearance. Excellent for feature walls, flooring, and decorative elements where a bold statement is desired.',
    },
    {
      id: 10,
      name: 'Alaska White Granite',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGUQLwmwuTXG0IEMEYu52RJFklaSsGcIj7w&s',
      description: 'Known for its icy white background with subtle grey and black mineral deposits, creating a serene and elegant look. A versatile choice for contemporary and minimalist designs in various applications.',
    },
    {
      id: 11,
      name: 'Black Galaxy Granite',
      imageUrl: 'https://stonegalleria.in/wp-content/uploads/2023/07/Black-galaxy-granite-500x500-1-1200x1200.webp',
      description: 'A stunning black granite embedded with small, glittering gold or white flecks, resembling a starry night sky. Highly popular for countertops and flooring, adding a touch of cosmic luxury.',
    },
    {
      id: 12,
      name: 'Chima Pink Granite',
      imageUrl: 'https://5.imimg.com/data5/YH/PO/MY-539107/chima-pink-granite-500x500.jpg',
      description: 'A charming pink granite with fine-grained texture and subtle grey and black specks. It brings a soft, warm ambiance to interiors, often used for flooring, wall cladding, and monuments.',
    },
    {
      id: 13,
      name: 'Paradiso Brown Granite',
      imageUrl: 'https://web.mport.in/csn/images/17e0e-1.jpg',
      description: 'Features swirling patterns of brown, red, and black, creating a dynamic and artistic look. Ideal for unique countertops, accent walls, and flooring, providing a rich, natural aesthetic.',
    },
    {
      id: 14,
      name: 'Rosy Pink Granite',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHbp5wAmhOOAn5paws9fcgUL4T5oXr44adWw&s',
      description: 'A delicate pink granite with fine to medium grains and subtle grey and white variations. It offers a soft, inviting feel, perfect for both traditional and modern residential applications.',
    },
    {
      id: 15,
      name: 'Tigerskin Granite',
      imageUrl: 'https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Catalogue/20220812065637-3c40c5dd-4ab4-4312-86eb-980158356946.jpg',
      description: 'Characterized by its distinctive wavy patterns of orange, brown, and black, resembling tiger stripes. A bold choice for countertops, flooring, and exterior features, adding a unique, exotic touch.',
    },
  ];

  const handleEnquire = (stoneName) => {
    setSelectedStoneForEnquiry(stoneName);
    setShowEnquiryModal(true);
  };

  // Removed handleShowDetails function
  const handleCloseAlert = () => {
    setAlertInfo(null);
  };

  return (
    <main className="container mx-auto p-6">
      <section className="text-center py-12 bg-teal-50 rounded-xl shadow-inner mb-10">
        <h2 className="text-4xl font-bold text-teal-800 mb-4">Discover the Richness of Indian Natural Stone</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Explore our exquisite collection of Indian marble and granite, renowned for their vibrant colors, unique patterns, and exceptional durability. Each stone tells a story of geological artistry, perfect for adding character and strength to any project.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {indianStones.map((stone) => (
          <StoneCard
            key={stone.id}
            stone={stone}
            onEnquire={handleEnquire}
            // Removed onShowDetails prop from StoneCard
          />
        ))}
      </div>

      {showEnquiryModal && (
        <EnquiryModal
          stoneName={selectedStoneForEnquiry}
          onClose={() => setShowEnquiryModal(false)}
          onShowAlert={setAlertInfo}
        />
      )}

      {/* Removed StoneDetailsModal rendering */}
      {alertInfo && (
        <AlertDialog
          title={alertInfo.title}
          message={alertInfo.message}
          onClose={handleCloseAlert}
        />
      )}
    </main>
  );
};

// --- Page: Luxury Stone ---
const LuxuryStonePage = () => {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [selectedStoneForEnquiry, setSelectedStoneForEnquiry] = useState('');
  // Removed showDetailsModal and selectedStoneForDetails states
  const [alertInfo, setAlertInfo] = useState(null); // State for custom alert

  const luxuryStones = [
    {
      id: 1,
      name: 'Carrara White Marble',
      imageUrl: 'https://siamtak.b-cdn.net/hero-product/6555d8730cf7064f1027edaf_WCR.jpg?width=600&quality=80&format=webp', // Keeping only the first image
      description: 'The quintessential Italian marble with a soft white background and delicate grey veining. Timeless for elegant countertops, vanities, and classical sculptures.',
    },
    {
      id: 2,
      name: 'Arabescato Marble',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpBhybkcfPwvQ9foNT0laIi57LJW9Y-_rcg&s', // Keeping only the first image
      description: 'Exquisite Italian marble with striking dark grey veins on a pristine white background. Prized for its artistic look, ideal for luxurious countertops, flooring, and feature walls.',
    },
    {
      id: 3,
      name: 'Statuario Marble',
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/4/301502556/OQ/JK/GP/4740964/polished-statuario-marble-slab.png', // Keeping only the first image
      description: 'Brilliant white Italian marble with bold, prominent grey veining. Synonymous with opulence, chosen for grand interiors, feature walls, and luxurious flooring.',
    },
    {
      id: 4,
      name: 'Armani Beige Marble',
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2020/11/CD/WD/MB/4299603/armani-beige-marble.JPG', // Keeping only the first image
      description: 'Sophisticated Italian marble with a warm beige background and subtle brown/white veins. Offers a luxurious, contemporary aesthetic for elegant interiors, flooring, and wall cladding.',
    },
    {
      id: 5,
      name: 'Travertine',
      imageUrl: 'https://img.freepik.com/free-photo/background-marble-texture_23-2147625803.jpg?semt=ais_hybrid&w=740', // Keeping only the first image
      description: 'Porous limestone with earthy tones (beige to brown). Provides a rustic yet refined look, commonly used for flooring, wall cladding, and outdoor paving.',
    },
    {
      id: 6,
      name: 'Armani Black Marble',
      imageUrl: 'https://5.imimg.com/data5/ZR/AA/VI/SELLER-39655618/armani-black.png',
      description: 'Striking Italian marble with a deep black background and subtle white/gold veins. Exudes sophistication and drama, making it an ideal choice for luxurious flooring, accent walls, and high-end furniture tops.',
    },
    {
      id: 7,
      name: 'Black Marquina Marble',
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/8/339518680/UX/RT/XJ/74937444/black-marquina-marble-500x500.jpg',
      description: 'High-quality, fine-grained black marble with distinctive, irregular white veining. Popular for modern and classic designs, adding elegance to flooring, countertops, and wall applications.',
    },
    {
      id: 8,
      name: 'Bianco Lasa Marble',
      imageUrl: 'https://www.marmomac.com/wp-content/uploads/2024/08/bianco-lasa.jpg',
      description: 'A highly prized Italian marble known for its pure white crystalline background and subtle, fine grey veining. Bianco Lasa is synonymous with purity and elegance, frequently used in prestigious projects for flooring, countertops, and artistic applications.',
    },
    {
      id: 9,
      name: 'Panda White Marble',
      imageUrl: 'https://rmsmarbles.com/wp-content/uploads/2024/08/panda-white-marble-1200x900.png',
      description: 'A distinctive Chinese marble featuring a bold contrast of black veins and swirls against a pure white background, reminiscent of panda markings. Ideal for creating eye-catching feature walls, flooring, and countertops.',
    },
    {
      id: 10,
      name: 'Calacatta Borghini Marble',
      imageUrl: 'https://thestonecollection.com/wp-content/uploads/2020/12/Borghini-Marble-1024x366.jpg',
      description: 'A luxurious and rare Italian marble with a pristine white background and dramatic, thick grey and gold veins. Calacatta Borghini is highly sought after for its opulent appearance, making it a statement choice for high-end residential and commercial projects, including countertops, backsplashes, and grand flooring.',
    },
    {
      id: 11,
      name: 'Statuario Venetino Marble',
      imageUrl: 'https://5.imimg.com/data5/VQ/DE/MY-23195496/statuario-venetino-3-1024x576-500x500.jpg',
      description: 'An exquisite Italian marble with a bright white background and elegant, flowing grey veins, often with subtle greenish or brownish tones. Statuario Venetino offers a sophisticated and classic look, perfect for luxurious interiors, including bathrooms, kitchens, and feature walls.',
    },
  ];

  const handleEnquire = (stoneName) => {
    setSelectedStoneForEnquiry(stoneName);
    setShowEnquiryModal(true);
  };

  // Removed handleShowDetails function
  const handleCloseAlert = () => {
    setAlertInfo(null);
  };

  return (
    <main className="container mx-auto p-6">
      <section className="text-center py-12 bg-gray-50 rounded-xl shadow-inner mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience the Elegance of Luxury Italian Stone</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Step into a world of unparalleled luxury with our curated selection of Italian marble and granite. Renowned globally for their exquisite beauty, unique patterns, and superior quality, these stones are the epitome of sophistication for discerning tastes.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {luxuryStones.map((stone) => (
          <StoneCard
            key={stone.id}
            stone={stone}
            onEnquire={handleEnquire}
            // Removed onShowDetails prop from StoneCard
          />
        ))}
      </div>

      {showEnquiryModal && (
        <EnquiryModal
          stoneName={selectedStoneForEnquiry}
          onClose={() => setShowEnquiryModal(false)}
          onShowAlert={setAlertInfo}
        />
      )}

      {/* Removed StoneDetailsModal rendering */}
      {alertInfo && (
        <AlertDialog
          title={alertInfo.title}
          message={alertInfo.message}
          onClose={handleCloseAlert}
        />
      )}
    </main>
  );
};

// --- Page: About Us ---
const AboutUsPage = () => {
  return (
    <main className="container mx-auto p-6">
      <section className="text-center py-12 bg-teal-50 rounded-xl shadow-inner mb-10">
        <h2 className="text-4xl font-bold text-teal-800 mb-4">Our Journey: Crafting Connections in Natural Stone</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          At Mayurastonex, we believe in the timeless beauty and enduring strength of natural stone. Our story is one of dedication, expertise, and a global vision to bring the Earth's finest treasures directly to your projects.
        </p>
      </section>

      <section className="bg-white p-8 rounded-xl shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Who We Are: Your Trusted Stone Partner</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Mayurastonex operates as a specialized commission-based business, bridging the gap between world-class quarries and discerning clients across the globe. We are not just suppliers; we are curators of quality, leveraging extensive industry relationships and deep market knowledge to source the most exquisite Indian and Italian marble and granite. Our role is to simplify your procurement process, ensuring transparency, reliability, and access to a diverse portfolio of premium stones.
        </p>
        <p className="text-gray-700 leading-relaxed">
          From the vibrant, earthy tones of Indian granite to the classic elegance of Italian marble, we understand the nuances of each stone and its ideal application. Our team is committed to understanding your unique project needs and delivering materials that exceed expectations in both aesthetics and performance.
        </p>
      </section>

      <section className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Commitment: Quality, Integrity, Global Reach</h3>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h4 className="text-xl font-semibold text-teal-600 mb-2">Unwavering Quality</h4>
            <p className="text-gray-700">
              Every slab and tile we source undergoes rigorous quality checks. We partner only with quarries and manufacturers who share our commitment to excellence, ensuring that each piece of stone reflects superior craftsmanship and natural beauty.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-teal-600 mb-2">Transparent Partnerships</h4>
            <p className="text-gray-700">
              Integrity is at the core of our operations. We believe in building long-term relationships based on trust, clear communication, and fair practices. Your satisfaction is our highest priority.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-teal-600 mb-2">Global Accessibility</h4>
            <p className="text-gray-700">
              Our extensive logistics network ensures that your chosen stone reaches your project site, anywhere in the world, efficiently and securely. We handle the complexities of international trade, so you can focus on your vision.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-teal-600 mb-2">Expert Guidance</h4>
            <p className="text-gray-700">
              With years of experience in the natural stone industry, our team provides expert advice on stone selection, finishes, and applications, helping you make informed decisions for your designs.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center py-12 bg-gray-50 rounded-xl shadow-inner mt-10">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Join Us in Creating Masterpieces</h3>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Whether you are an architect, designer, builder, or a homeowner with a grand vision, Mayurastonex is here to turn your stone aspirations into reality. Explore our collections and let us connect you with the perfect natural stone.
        </p>
      </section>
    </main>
  );
};

// --- Page: Contact ---
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [alertInfo, setAlertInfo] = useState(null); // State for custom alert

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Submitted:', formData);
    // In a real application, you would send this data to a backend
    setAlertInfo({ title: 'Message Sent!', message: 'Thank you for your message! We will get back to you shortly.' });
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    });
  };

  const handleCloseAlert = () => {
    setAlertInfo(null);
  };

  return (
    <main className="container mx-auto p-6">
      <section className="text-center py-12 bg-gray-50 rounded-xl shadow-inner mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch: Your Stone Sourcing Partner</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Have a question, a project in mind, or need a specific stone? Reach out to us. We're here to help you find the perfect natural stone solution.
        </p>
      </section>

      <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">Phone (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-gray-700 text-sm font-medium mb-1">Company Name (Optional)</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-1">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 transition-colors duration-300 font-semibold text-lg"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="text-center mt-8 text-gray-600">
        <p className="mb-2">You can also reach us directly:</p>
        <p className="font-semibold">Email: info@mayurastonex.com</p>
        <p className="font-semibold">Phone: +91 9829071974</p>
        <p className="text-sm mt-1">Mayurastonex, Kishangarh, Rajasthan, India, 305801</p>
      </div>

      {alertInfo && (
        <AlertDialog
          title={alertInfo.title}
          message={alertInfo.message}
          onClose={handleCloseAlert}
        />
      )}
    </main>
  );
};


// --- Main App Component ---
export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // State to manage current page

  // Function to render the correct page component based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />; // Pass setCurrentPage to HomePage
      case 'indian-stone':
        return <IndianStonePage />;
      case 'luxury-stone':
        return <LuxuryStonePage />;
      case 'about-us':
        return <AboutUsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      {/* Load Inter font from Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      <style>
        {`
          body {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>
      <Header setCurrentPage={setCurrentPage} />
      <div className="flex-grow">
        {renderPage()} {/* Render the current page */}
      </div>
      <Footer />
    </div>
  );
}
