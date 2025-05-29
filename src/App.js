import React, { useState, useEffect } from "react";

const App = () => {
  const [currentPage, setCurrentPage] = useState(window.location.hash.slice(1) || "home");
  const [formVisible, setFormVisible] = useState(false);
  const [enquiryProduct, setEnquiryProduct] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    company: "",
    thickness: "",
    application: "",
  });

  // Track expanded descriptions per product
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  // Update page based on hash change
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(window.location.hash.slice(1) || "home");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:rishabhjainca0789@gmail.com?subject=Enquiry%20for%20${encodeURIComponent(
      enquiryProduct
    )}&body=Email:%20${encodeURIComponent(formData.email)}%0DPhone:%20${encodeURIComponent(
      formData.phone
    )}%0DCompany%20Name:%20${encodeURIComponent(formData.company)}%0DThickness:%20${encodeURIComponent(
      formData.thickness
    )}%0DApplication:%20${encodeURIComponent(formData.application)}`;
    window.location.href = mailtoLink;
    setFormVisible(false);
  };

  const toggleDescription = (productName) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [productName]: !prev[productName],
    }));
  };

  // Indian Stones with custom descriptions
  const productsIndian = [
    {
      name: "Indian Green Marble",
      description:
        "Indian Green Marble is a rich, deep green natural stone known for its elegant veining and polished finish. Quarried in Rajasthan, it is highly durable, stain-resistant, and ideal for flooring, countertops, and wall cladding in both residential and commercial spaces."
    },
    {
      name: "Bawada White (Wonder White)",
      description:
        "Bawada White, also known as Wonder White, is a premium white marble sourced from Rajasthan. With its clean, snowy base and smooth polish, it reflects light beautifully and adds a luxurious charm to any space — ideal for flooring, walls, and decorative accents."
    },
    {
      name: "Alaska White Granite",
      description:
        "Alaska White Granite is a sophisticated stone with a frosty white background and contrasting dark mineral patterns. Its subtle sparkle and durability make it a popular choice for kitchen countertops and modern interiors."
    },
    {
      name: "Alaska Gold Granite",
      description:
        "This granite features a rich blend of golden and beige hues with scattered dark veins. Alaska Gold adds warmth and character to any space and is often used for vanity tops, flooring, and wall cladding."
    },
    {
      name: "Black Galaxy Granite",
      description:
        "Black Galaxy Granite is a striking black stone filled with golden or silver specks, resembling a starry night sky. Durable and stylish, it’s perfect for kitchen countertops, tabletops, and facades."
    },
    {
      name: "Cat Eye Granite",
      description:
        "Cat Eye Granite gets its name from the unique circular patterns that resemble a cat’s eye. With reddish-black hues and a polished surface, it’s ideal for bold interior and exterior designs."
    },
    {
      name: "Chima Pink Granite",
      description:
        "Chima Pink is a light pink granite with fine black and white mineral patterns. Known for its consistency and polish, it is a widely used stone for flooring, cladding, and kitchen counters."
    },
    {
      name: "Imperial Red Granite",
      description:
        "A majestic granite with intense red color and contrasting black and white grains. Imperial Red is a favorite for creating powerful, standout features in both interior and exterior settings."
    },
    {
      name: "Lakha Red Granite",
      description:
        "Lakha Red Granite boasts a rich crimson background with fine black specks. Its bold appearance and weather resistance make it a popular choice for monuments and high-traffic flooring."
    },
    {
      name: "Black Majestic Granite",
      description:
        "This elegant granite offers a deep black base with subtle mineral flecks. With its luxurious sheen and timeless look, it’s perfect for creating a sleek and modern atmosphere."
    },
    {
      name: "Rosy Pink Granite",
      description:
        "Rosy Pink Granite features a light pink tone with black and grey grains, adding a soft and charming touch to interiors. It is commonly used in residential flooring, countertops, and exterior paving."
    },
    {
      name: "P White Granite",
      description:
        "P White Granite is a clean, pale white stone with evenly distributed grey and black speckles. It’s known for its simplicity, making it suitable for minimalist and contemporary spaces."
    },
    {
      name: "Tiger Skin Granite",
      description:
        "With bold patterns of brown, yellow, and black resembling tiger stripes, Tiger Skin Granite makes a dramatic statement. It’s a great choice for feature walls and rustic interiors."
    },
    {
      name: "Paradiso Brown Granite",
      description:
        "Paradiso Brown is a beautiful mix of earthy browns, greys, and purples in swirling patterns. Its exotic appearance makes it a popular option for luxury flooring and countertops."
    },
    {
      name: "Kashmir White Granite",
      description:
        "Kashmir White features a creamy white background with grey veins and occasional burgundy specks. It provides a soft and elegant appearance, ideal for sophisticated interior spaces."
    }
  ];

  // Luxury Stones with custom descriptions
  const productsLuxury = [
    {
      name: "Arabescato Marble",
      description:
        "Arabescato is an Italian marble with dramatic swirling grey veins over a soft white background. It combines the beauty of Calacatta and Carrara, making it ideal for luxury kitchens and designer accents."
    },
    {
      name: "The Armani Beige Marble",
      description:
        "This beige marble presents a soothing neutral tone with delicate veining, offering a luxurious but calming presence. It’s commonly used in upscale bathrooms, floors, and spa areas."
    },
    {
      name: "Armani Black Marble",
      description:
        "With a rich black tone and fine white lines, Armani Black Marble exudes elegance and power. It is ideal for high-end countertops, fireplace surrounds, and feature walls."
    },
    {
      name: "Armani Grey Marble",
      description:
        "Armani Grey is a refined marble with warm grey tones and subtle white veining. Its understated luxury makes it suitable for wall panels, bathroom surfaces, and contemporary interiors."
    },
    {
      name: "Black Marquina Marble",
      description:
        "This deep black Spanish marble is adorned with brilliant white veining, offering a bold, luxurious look. Perfect for sleek modern interiors, feature walls, and sophisticated flooring."
    },
    {
      name: "Bianco Lasa Marble",
      description:
        "Bianco Lasa, also known as Lasa White, is an elegant marble with fine grey veins flowing across a pure white canvas. It’s admired for its clean, minimal appearance and premium quality."
    },
    {
      name: "Calacatta Borghini Marble",
      description:
        "Calacatta Borghini is a high-end Italian marble with a bright white background and fluid grey veins, sometimes tinged with gold. It’s a designer favorite for high-contrast luxury interiors."
    },
    {
      name: "Calacatta Gold Marble",
      description:
        "A premium version of Calacatta, this marble is known for its golden and grey veins over a crisp white base. It exudes warmth and sophistication, making it a top choice for luxury living spaces."
    },
    {
      name: "Calacatta Marble",
      description:
        "Calacatta Marble features a white background with bold, dramatic veining in grey or gold. This rare and luxurious marble is perfect for upscale interiors, especially kitchen islands and bathroom spaces."
    },
    {
      name: "Carrara Marble",
      description:
        "Carrara Marble is a classic white marble with soft grey veining, sourced from the Carrara region of Italy. Elegant and timeless, it is ideal for countertops, backsplashes, and elegant flooring."
    },
    {
      name: "Italian Statuario Marble",
      description:
        "One of the most prestigious white marbles, Italian Statuario combines a bright background with rich grey veining. It’s often used in premium interiors, luxury bathrooms, and artistic applications."
    },
    {
      name: "Panda White Marble",
      description:
        "Panda White Marble features a striking contrast of bold black streaks across a crisp white base. Its contemporary look makes it a favorite for accent walls, bathroom vanities, and stylish tabletops."
    },
    {
      name: "Statuario Venetino Marble",
      description:
        "Statuario Venetino is an exquisite Italian marble known for its pure white background and dramatic grey veining. This luxurious stone is perfect for statement walls, high-end bathrooms, and designer flooring."
    }
  ];

  const renderNavbar = () => (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center">
      {/* Logo Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-wide">
          <span className="text-amber-600">Mayura</span> StoneX
        </h1>
        <p className="text-sm text-gray-600 mt-1">Trusted by architects and builders all across the world</p>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-lg font-medium">
        <a href="#home" className="hover:text-amber-600 transition">Home</a>
        <a href="#about" className="hover:text-amber-600 transition">About</a>
        <a href="#indianstone" className="hover:text-amber-600 transition">Indian Stone</a>
        <a href="#luxurystone" className="hover:text-amber-600 transition">Luxury Stone</a>
        <a href="#contact" className="hover:text-amber-600 transition">Contact</a>
      </div>
    </nav>
  );

  const renderHero = () => (
    <section className="pt-40 h-screen bg-gray-100 relative overflow-hidden">
      {renderNavbar()}
      <div className="absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: "https://placehold.co/1600x900"  }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center px-6">
          <div className="text-center max-w-xl">
            <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">Premium Indian & Luxury Stones</h1>
            <p className="text-white text-lg mb-8">Sourced for excellence. Exported globally to Africa, Europe, Asia & the Middle East.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#indianstone" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full transition">
                Discover Indian Stone
              </a>
              <a href="#luxurystone" className="bg-white hover:bg-gray-100 text-amber-600 px-6 py-3 rounded-full border border-white shadow transition">
                Explore Luxury Stone
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderProducts = (products, title) => (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300">
              <img src={`https://placehold.co/300x200?text=${encodeURIComponent(product.name)}`} alt={product.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p
                  className={`text-sm text-gray-600 mt-2 overflow-hidden ${
                    expandedDescriptions[product.name] ? "" : "line-clamp-3"
                  }`}
                >
                  {product.description}
                </p>
                <button
                  onClick={() => toggleDescription(product.name)}
                  className="text-xs text-amber-600 mt-1 hover:underline"
                >
                  {expandedDescriptions[product.name] ? "Show less" : "Read more"}
                </button>
                <button
                  onClick={() => { setEnquiryProduct(product.name); setFormVisible(true); }}
                  className="mt-4 bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition w-full"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderAbout = () => (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">About Mayura StoneX</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
          Mayura StoneX is a global leader in the export of premium marble and granite sourced from India and around the world. Our commitment to quality, precision, and customer satisfaction has made us a trusted name across Africa, Europe, Asia, and beyond. With decades of expertise, we deliver exquisite natural stones tailored to luxury homes, commercial buildings, and architectural masterpieces.
        </p>
      </div>
    </section>
  );

  const renderContact = () => (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const mailtoLink = `mailto:rishabhjainca0789@gmail.com?subject=New%20Inquiry&body=Email:%20${encodeURIComponent(formData.email)}%0DPhone:%20${encodeURIComponent(formData.phone)}%0DCompany%20Name:%20${encodeURIComponent(formData.company)}%0DMessage:%20${encodeURIComponent(formData.application)}`;
          window.location.href = mailtoLink;
        }} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input type="email" name="email" required onChange={handleChange} value={formData.email}
                   className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-200" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phone No.</label>
            <input type="tel" name="phone" required onChange={handleChange} value={formData.phone}
                   className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-200" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Company Name</label>
            <input type="text" name="company" required onChange={handleChange} value={formData.company}
                   className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-200" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea name="application" required onChange={handleChange} value={formData.application}
                      className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-200"></textarea>
          </div>
          <button type="submit" className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700 transition w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );

  const renderModal = () => (
    formVisible && (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h3 className="text-xl font-semibold mb-4">Enquire for: {enquiryProduct}</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input type="email" name="email" required onChange={handleChange} value={formData.email}
                     className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-200" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Phone No.</label>
              <input type="tel" name="phone" required onChange={handleChange} value={formData.phone}
                     className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-200" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Company Name</label>
              <input type="text" name="company" required onChange={handleChange} value={formData.company}
                     className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-200" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Thickness</label>
              <input type="text" name="thickness" required onChange={handleChange} value={formData.thickness}
                     className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-200" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Application</label>
              <input type="text" name="application" required onChange={handleChange} value={formData.application}
                     className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-200" />
            </div>
            <div className="flex justify-end space-x-3">
              <button type="button" onClick={() => setFormVisible(false)}
                      className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-300 transition">
                Cancel
              </button>
              <button type="submit" className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition">
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );

  return (
    <div className="min-h-screen bg-white">
      {currentPage === "home" && renderHero()}
      {currentPage !== "home" && (
        <>
          {renderNavbar()}
        </>
      )}
      <main>
        {currentPage === "about" && renderAbout()}
        {currentPage === "indianstone" && renderProducts(productsIndian, "Indian Stones")}
        {currentPage === "luxurystone" && renderProducts(productsLuxury, "Luxury Stones")}
        {currentPage === "contact" && renderContact()}
      </main>
      {renderModal()}
    </div>
  );
};

export default App;