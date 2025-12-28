import React, { useState, useEffect } from 'react';
import { 
  Dog, Menu, X, Star, Scissors, Bath, Home, Phone, 
  MapPin, Clock, MessageCircle, Heart, Shield, ThumbsUp, 
  Calendar, Map, Instagram, Sparkles, Stethoscope, Truck,
  ShoppingBag, Store, Coffee, Utensils, Syringe, Pill, Cat, Crown
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle Scroll Effect for Navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const getSectionId = (label) => {
    const map = {
      'Home': 'home',
      'Tentang': 'about',
      'Layanan': 'services',
      'Ulasan': 'testimonials'
    };
    return map[label] || label.toLowerCase();
  };

  const scrollToSection = (label) => {
    const id = getSectionId(label);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = ['Home', 'Tentang', 'Layanan', 'Ulasan'];
  const phoneNumber = '6285659666666';

  // Warna Base: Gold & Navy (Royal Luxury Theme)

  return (
    <div className="font-sans text-slate-800 antialiased selection:bg-amber-500 selection:text-white bg-slate-50">
      {/* Navbar */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollToSection('Home')}>
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform shadow-lg shadow-amber-200">
                <Crown size={20} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 leading-none tracking-tight">ROYAL</span>
                <span className="text-[10px] text-amber-600 font-bold tracking-[0.3em] uppercase">Luxury Pet Hotel</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 font-medium">
              {navItems.map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="hover:text-amber-600 transition-colors text-sm uppercase tracking-wide text-slate-600 font-bold"
                >
                  {item}
                </button>
              ))}
              <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                <button 
                    onClick={() => scrollToSection('contact')} 
                    className="px-6 py-2.5 bg-slate-900 text-white rounded-full hover:bg-amber-500 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm font-bold flex items-center gap-2"
                >
                    <Calendar size={16} /> Booking
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-900 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 bg-white rounded-xl shadow-2xl border border-slate-100 absolute left-4 right-4 top-16 p-2 animate-in slide-in-from-top-2">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="p-3 hover:bg-amber-50 rounded-lg text-left font-medium text-slate-800"
                  >
                    {item}
                  </button>
                ))}
                <div className="flex gap-2 mt-2 px-3">
                    <button 
                    onClick={() => scrollToSection('contact')} 
                    className="flex-1 p-3 bg-slate-900 text-white rounded-lg text-center font-bold"
                    >
                    Booking Sekarang
                    </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 bg-white overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 fade-up opacity-0 translate-y-10 transition-all duration-1000 ease-out">
              {/* Highlight Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-full text-amber-400 font-bold text-xs md:text-sm shadow-md mb-6 transform hover:scale-105 transition-transform cursor-default">
                <Crown size={16} /> 
                First Class Pet Experience
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full text-amber-700 font-bold text-xs md:text-sm shadow-sm mb-6 border border-amber-100 ml-3">
                <Star size={16} className="text-amber-500 fill-amber-500" /> 
                5.0/5.0 (8 Ulasan)
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Royal Luxury<br />
                <span className="text-amber-500">Pet Hotel & Spa</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Manjakan anabul Anda dengan kemewahan di Ruko Cordoba PIK. Hotel, Spa, dan Salon premium dengan fasilitas bintang lima.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="px-8 py-4 bg-amber-500 text-white rounded-full font-bold hover:bg-amber-600 transition-all shadow-lg hover:shadow-amber-500/30 flex justify-center items-center gap-2"
                >
                  Reservasi Suite
                </button>
                <button 
                  onClick={() => scrollToSection('Layanan')}
                  className="px-8 py-4 bg-white text-slate-800 border-2 border-slate-200 rounded-full font-bold hover:border-amber-500 hover:text-amber-600 transition-all flex justify-center items-center gap-2"
                >
                  Lihat Fasilitas
                </button>
              </div>
              
              <div className="mt-10 flex items-center gap-4 text-sm text-slate-500 font-medium">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop",
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop"
                  ].map((src, i) => (
                    <img key={i} src={src} className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="User" />
                  ))}
                </div>
                <p>The Most Luxurious Pet Hotel in PIK</p>
              </div>
            </div>
            
            <div className="md:w-1/2 relative fade-up opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-200">
              <div className="absolute inset-0 bg-amber-100 rounded-full blur-3xl opacity-50 transform translate-y-10 animate-pulse"></div>
              {/* Image from Unsplash (High Quality) */}
              <img 
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1000&auto=format&fit=crop" 
                alt="Luxury Pet Spa" 
                className="relative z-10 w-full h-[500px] object-cover rounded-[3rem] shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 border-8 border-amber-50"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce border border-slate-100">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-amber-400">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Buka Hari Ini</p>
                  <p className="text-xs text-slate-500">Mulai Pukul 09.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 fade-up opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-amber-600 font-bold uppercase tracking-wide text-sm mb-3">Layanan Kami</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Royal Services</h3>
            <p className="text-slate-600">Pelayanan kelas atas untuk kenyamanan dan kebahagiaan anabul Anda.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <ServiceCard 
              icon={<Home size={28} />}
              title="Luxury Hotel"
              desc="Kamar pribadi ber-AC, CCTV 24 jam, dan update harian."
              price="Book Now"
              color="gold"
              featured={true}
              onAction={() => scrollToSection('contact')}
            />
             <ServiceCard 
              icon={<Sparkles size={28} />}
              title="Premium Spa"
              desc="Microbubble bath, pijat relaksasi, dan perawatan bulu."
              price="Reservasi"
              color="navy"
              onAction={() => scrollToSection('contact')}
            />
            <ServiceCard 
              icon={<Scissors size={28} />}
              title="Styling Salon"
              desc="Potongan model terkini oleh stylist berpengalaman."
              price="Info"
              color="white"
              onAction={() => scrollToSection('contact')}
            />
            <ServiceCard 
              icon={<Truck size={28} />}
              title="Pet Taxi"
              desc="Antar jemput anabul dengan kendaraan nyaman."
              price="Hubungi"
              color="gray"
              onAction={() => scrollToSection('contact')}
            />
          </div>

          {/* CTA Box */}
          <div className="mt-16 bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 fade-up opacity-0 translate-y-10 transition-all duration-700 border border-amber-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-amber-400">
                <MessageCircle size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Reservasi VIP?</h4>
                <p className="text-sm text-slate-600">Hubungi kami via WhatsApp untuk booking slot prioritas.</p>
              </div>
            </div>
            <a 
              href={`https://wa.me/${phoneNumber}`} 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 bg-amber-500 border border-amber-500 text-white font-bold rounded-full hover:bg-amber-600 transition-all shadow-sm flex items-center gap-2"
            >
              Chat 0856-5966-6666
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        {/* Decoration Icons */}
        <div className="absolute top-10 left-10 text-amber-100 opacity-50 transform -rotate-12">
            <Crown size={80} />
        </div>
        <div className="absolute bottom-10 right-10 text-amber-100 opacity-50 transform rotate-45">
            <Star size={80} />
        </div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 grid grid-cols-2 gap-4 fade-up opacity-0 translate-y-10 transition-all duration-700">
              {/* Reliable New Images */}
              <img src="https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=500&q=80" className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300" alt="Pet Hotel" />
              <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500&q=80" className="rounded-2xl shadow-lg w-full h-48 object-cover translate-y-8 hover:scale-105 transition-transform duration-300" alt="Spa" />
              <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&q=80" className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300" alt="Grooming" />
              <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500&q=80" className="rounded-2xl shadow-lg w-full h-48 object-cover translate-y-8 hover:scale-105 transition-transform duration-300" alt="Happy Pet" />
            </div>
            <div className="md:w-1/2 fade-up opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <h2 className="text-amber-600 font-bold uppercase tracking-wide text-sm mb-3">Tentang Kami</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Royal Luxury Pet Hotel & Spa</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Berlokasi strategis di Ruko Cordoba PIK, kami menghadirkan standar baru dalam perawatan hewan peliharaan. Dengan rating sempurna 5.0, Royal Luxury Pet Hotel & Spa adalah pilihan utama bagi pemilik yang menginginkan kenyamanan dan kemewahan terbaik untuk anabul tercinta.
              </p>
              
              <div className="space-y-6">
                <FeatureItem icon={<Star size={20} />} title="Pelayanan Bintang Lima" desc="Staff terlatih dengan standar hospitality tinggi." />
                <FeatureItem icon={<MapPin size={20} />} title="Lokasi Premium" desc="Mudah diakses di kawasan elite Pantai Indah Kapuk." />
                <FeatureItem icon={<Clock size={20} />} title="Buka Pagi" desc="Siap melayani kebutuhan grooming & penitipan mulai pukul 09.00." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4 fade-up opacity-0 translate-y-10 transition-all duration-700">Review Pelanggan VIP</h2>
          <div className="flex justify-center items-center gap-2 mb-16 fade-up opacity-0 translate-y-10 transition-all duration-700">
               <Star size={24} className="text-amber-500 fill-amber-500" />
               <span className="font-bold text-xl">5.0</span>
               <span className="text-slate-500">(8 Ulasan di Google Maps)</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
                text="Benar-benar luxury! Tempatnya bersih, wangi, dan pelayanannya sangat ramah. Anjingku happy banget di sini."
                name="Tiffany Chen"
                pet="Pemilik Bichon"
                img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
                delay="0"
            />
            <TestimonialCard 
                text="Hotelnya nyaman banget, setiap hari dikirimin video update. Jadi tenang ninggalin anabul pas liburan."
                name="David Susanto"
                pet="Pemilik Golden"
                img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
                delay="100"
            />
            <TestimonialCard 
                text="Spa treatment-nya juara. Bulu kucingku jadi halus dan rontok berkurang banyak. Recommended!"
                name="Sarah Wijaya"
                pet="Pemilik Persia"
                img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                delay="200"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Form */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>
              <p className="text-slate-400 mb-8">Silakan isi form di bawah untuk reservasi suite hotel atau appointment spa. Concierge kami akan segera menghubungi Anda.</p>
              
              <ContactForm phoneNumber={phoneNumber} />
            </div>

            {/* Info & Map */}
            <div className="md:w-1/2">
              <div className="bg-slate-800 p-8 rounded-2xl h-full border border-slate-700">
                <h3 className="text-xl font-bold mb-6">Lokasi & Kontak</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-bold">Alamat</p>
                      <p className="text-slate-300 text-sm">Ruko Cordoba PIK, Jl. Marina Raya No.8,<br/>Kamal Muara, Penjaringan, Jakarta Utara 14470</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="font-bold">Jam Operasional</p>
                      <p className="text-slate-300 text-sm">
                        Buka Kembali Pukul 09.00 WIB
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-bold">Telepon / WA</p>
                      <p className="text-slate-300 text-sm font-mono text-lg">0856-5966-6666</p>
                    </div>
                  </div>
                </div>
                
                {/* Socials */}
                <div className="mt-10 pt-8 border-t border-slate-700 flex gap-4">
                   <SocialButton icon={<MessageCircle size={20} />} href={`https://wa.me/${phoneNumber}`} />
                   <SocialButton icon={<Map size={20} />} href="#" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16 pt-8 border-t border-slate-800 text-slate-500 text-sm">
            &copy; 2025 Royal Luxury Pet Hotel & Spa. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
};

// Sub-Components

const ServiceCard = ({ icon, title, desc, price, color, featured, onAction }) => {
  // Royal palette logic
  const bgColors = {
    navy: 'bg-slate-900 text-white',
    gray: 'bg-slate-100 text-slate-800',
    gold: 'bg-amber-50 text-amber-700 border-amber-200',
    white: 'bg-white text-slate-800 border border-slate-200',
  };

  return (
    <div className={`rounded-3xl p-8 transition-all duration-300 group fade-up opacity-0 translate-y-10 transition-all duration-700
      ${featured 
        ? 'bg-white shadow-2xl relative transform md:-translate-y-4 border-2 border-amber-500' 
        : 'bg-white hover:shadow-xl border border-slate-100'}`}
    >
      {featured && (
        <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-2xl">
          BEST SELLER
        </div>
      )}
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform ${bgColors[color] || 'bg-slate-100 text-slate-800'}`}>
        {icon}
      </div>
      <h4 className="text-xl font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-600 text-sm mb-4">{desc}</p>
      <div className="flex items-end gap-1 mb-6">
          <span className="text-lg text-slate-400"></span>
          <span className={`text-xl font-bold ${featured ? 'text-amber-600' : 'text-slate-800'}`}>{price}</span>
      </div>
      <button 
        onClick={onAction}
        className={`block w-full py-3 font-bold text-center rounded-xl transition-colors
        ${featured 
            ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-lg' 
            : 'bg-white border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'}`}
      >
        {featured ? 'Hubungi Kami' : 'Info Lebih Lanjut'}
      </button>
    </div>
  );
};

const FeatureItem = ({ icon, title, desc }) => (
  <div className="flex gap-4">
    <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 shadow-sm shrink-0 border border-amber-100">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-slate-900 text-lg">{title}</h4>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  </div>
);

const TestimonialCard = ({ text, name, pet, img, delay }) => (
  <div 
    className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative flex flex-col justify-between h-full hover:-translate-y-2 transition-transform duration-300 fade-up opacity-0 translate-y-10 transition-all duration-700"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div>
      <div className="flex gap-1 text-amber-500 mb-4">
          {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-current" />)}
      </div>
      <p className="text-slate-600 mb-6 italic text-sm leading-relaxed">"{text}"</p>
    </div>
    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
      <img src={img} className="w-12 h-12 rounded-full object-cover border-2 border-amber-100" alt="Reviewer" />
      <div>
        <p className="font-bold text-slate-900 text-sm">{name}</p>
        <p className="text-xs text-slate-500">{pet}</p>
      </div>
    </div>
  </div>
);

const ContactForm = ({ phoneNumber }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Pet Hotel',
    date: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Format tanggal ke format Indonesia (DD-MM-YYYY)
    const dateObj = new Date(formData.date);
    const formattedDate = dateObj.toLocaleDateString('id-ID', {
        day: 'numeric', month: 'long', year: 'numeric'
    });

    const message = `Halo Royal Luxury Pet Hotel, saya ingin booking/tanya tentang *${formData.service}* untuk tanggal *${formattedDate}*.\n\nNama: ${formData.name}\nNo WA: ${formData.phone}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
        setStatus('success');
        setTimeout(() => {
            window.open(url, "_blank");
            setStatus('');
        }, 1500);
    }, 1000);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-300 mb-1 font-bold">Nama Pemilik</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required 
            className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors text-white" 
            placeholder="Nama Anda" 
          />
        </div>
        <div>
          <label className="block text-sm text-slate-300 mb-1 font-bold">No. WhatsApp</label>
          <input 
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required 
            className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors text-white" 
            placeholder="08..." 
          />
        </div>
      </div>
      <div>
        <label className="block text-sm text-slate-300 mb-1 font-bold">Pilih Tanggal Booking/Kunjungan</label>
        <input 
            type="date" 
            name="date"
            value={formData.date}
            onChange={handleChange}
            required 
            className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors text-white [color-scheme:dark]" 
        />
      </div>
      <div>
        <label className="block text-sm text-slate-300 mb-1 font-bold">Pesan / Layanan</label>
        <select 
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors text-slate-300"
        >
          <option>Pet Hotel</option>
          <option>Spa & Grooming</option>
          <option>Pet Taxi</option>
          <option>Lainnya</option>
        </select>
      </div>
      <button 
        type="submit" 
        disabled={status === 'sending' || status === 'success'}
        className={`w-full font-bold py-4 rounded-lg transition-all shadow-lg mt-4 flex justify-center items-center gap-2
          ${status === 'success' ? 'bg-green-600 text-white' : 'bg-amber-500 hover:bg-amber-600 text-white'}`}
      >
        <MessageCircle size={20} />
        {status === 'sending' ? 'Mengirim...' : status === 'success' ? 'Terkirim! Mengalihkan...' : 'Kirim Pesan WhatsApp'}
      </button>
    </form>
  );
};

const SocialButton = ({ icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-white hover:bg-amber-500 transition-colors"
  >
    {icon}
  </a>
);

export default App;