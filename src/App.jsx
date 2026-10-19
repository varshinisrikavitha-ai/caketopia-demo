import React, { useState } from 'react';
import {
  ArrowRight, CakeSlice, Check, ChevronDown, Clock3, Heart, Instagram, MapPin,
  Menu, MessageCircle, Phone, Send, Sparkles, X
} from 'lucide-react';
import { business, whatsappMessages, whatsappUrl } from './config/business';
import { cakes } from './data/cakes';
import { categories } from './data/categories';

const navItems = [['Home', 'home'], ['Our Cakes', 'cakes'], ['Categories', 'categories'], ['About Us', 'about'], ['Delivery', 'delivery'], ['Contact', 'contact']];

function openWhatsApp(message) {
  const url = whatsappUrl(message);
  if (url) window.open(url, '_blank', 'noopener,noreferrer');
}

function Logo() {
  return <a className="logo" href="#home" aria-label="Caketopia home"><span className="logo-mark"><CakeSlice size={19} /></span><span><strong>Caketopia</strong><small>HOME BAKING</small></span></a>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="navbar"><div className="container nav-inner"><Logo /><button className="icon-button menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button><nav className={open ? 'nav-links open' : 'nav-links'}>{navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}<button className="button button-small" onClick={() => openWhatsApp(whatsappMessages.general)}><MessageCircle size={16} /> Order on WhatsApp</button></nav></div></header>;
}

function SectionIntro({ eyebrow, title, copy }) {
  return <div className="section-intro"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function Hero() {
  return <section className="hero" id="home"><div className="container hero-grid"><div className="hero-copy"><span className="eyebrow">A little sweetness for every moment</span><h1>Every celebration deserves a <em>beautiful</em> cake.</h1><p>Explore thoughtful cake ideas for birthdays, celebrations and all the special moments worth making memorable.</p><div className="hero-actions"><a href="#cakes" className="button">Explore our cakes <ArrowRight size={17} /></a><button className="button button-light" onClick={() => openWhatsApp(whatsappMessages.general)}><MessageCircle size={17} /> Enquire on WhatsApp</button></div><div className="hero-note"><span><Check size={15} /> Made for your moments</span><span><Check size={15} /> Enquire about availability</span></div></div><div className="hero-art"><div className="hero-image-wrap"><img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1100&q=90" alt="Decorated celebration cake" /></div><div className="hero-sticker"><Sparkles size={18} /><span>Sweet<br /><strong>moments</strong></span></div><div className="hero-scribble">est. with<br />love</div></div></div></section>;
}

function Categories({ onSelect }) {
  return <section className="section categories-section" id="categories"><div className="container"><SectionIntro eyebrow="Find your favourite" title="Something lovely for every occasion" copy="Browse a few illustrative ideas to help you discover the right kind of sweetness." /><div className="category-grid">{categories.map((category, index) => <button className="category-card" key={category.name} onClick={() => onSelect(category.name)}><div className="category-image"><img src={category.image} alt="" loading="lazy" /><span className="category-number">{String(index + 1).padStart(2, '0')}</span></div><div className="category-content"><h3>{category.name}</h3><p>{category.description}</p><ArrowRight size={17} /></div></button>)}</div></div></section>;
}

function CakeCard({ cake }) {
  return <article className="cake-card"><div className="cake-image"><img src={cake.image} alt={cake.name} loading="lazy" /><span>Illustrative sample</span></div><div className="cake-info"><small>{cake.category}</small><h3>{cake.name}</h3><p>{cake.description}</p><div className="cake-bottom"><strong>Price on enquiry</strong><button className="text-button" onClick={() => openWhatsApp(`Hi ${business.name}, I would like to enquire about ${cake.name}. Please share availability and pricing.`)}>Enquire <ArrowRight size={15} /></button></div></div></article>;
}

function CakeGallery({ selectedCategory, onClear }) {
  const visibleCakes = selectedCategory ? cakes.filter((cake) => cake.category === selectedCategory) : cakes;
  return <section className="section cakes-section" id="cakes"><div className="container"><div className="gallery-heading"><SectionIntro eyebrow="The cake edit" title="Made for the moment" copy="These sample catalogue ideas are here to inspire. Contact Caketopia to discuss availability, customisation and pricing." />{selectedCategory && <button className="filter-pill" onClick={onClear}>{selectedCategory} <X size={15} /></button>}</div><div className="cake-grid">{visibleCakes.map((cake) => <CakeCard cake={cake} key={cake.name} />)}</div>{visibleCakes.length === 0 && <p className="empty-state">More ideas in this category can be discussed directly with the bakery.</p>}<div className="center-action"><button className="button button-outline" onClick={() => openWhatsApp(whatsappMessages.general)}>Ask about a custom idea <ArrowRight size={16} /></button></div></div></section>;
}

function About() {
  return <section className="section about-section" id="about"><div className="container about-grid"><div className="about-image"><img src="https://images.unsplash.com/photo-1559620192-032c4d1e7f55?auto=format&fit=crop&w=1000&q=85" alt="A cake being prepared on a bakery table" loading="lazy" /><span className="about-badge"><Heart size={16} fill="currentColor" /> For moments that matter</span></div><div className="about-copy"><SectionIntro eyebrow="A little about us" title="Let’s make your celebration a little sweeter." copy="Discover cake ideas for birthdays, celebrations and special moments. Contact Caketopia Home Baking to discuss your requirements and check availability." /><p className="muted">This website is a proposed design concept. The story, menu and details can be personalised with the owner’s confirmed information.</p><button className="text-button" onClick={() => openWhatsApp(whatsappMessages.general)}>Start a conversation <ArrowRight size={16} /></button></div></div></section>;
}

function Delivery() {
  return <section className="section delivery-section" id="delivery"><div className="container delivery-card"><div><span className="eyebrow">The finishing touch</span><h2>Planning a celebration?</h2><p>Contact us to check delivery availability for your location and preferred date.</p><div className="delivery-points"><span><Check size={16} /> Home delivery can be enquired about</span><span><Check size={16} /> Same-day delivery may be available — please confirm</span><span><Check size={16} /> Areas, charges, deadlines and timing need confirmation</span></div></div><div className="delivery-actions"><button className="button" onClick={() => openWhatsApp(whatsappMessages.delivery)}><MessageCircle size={17} /> Check delivery on WhatsApp</button><a className="button button-cream" href={business.mapsUrl} target="_blank" rel="noreferrer"><MapPin size={17} /> View location</a></div></div></section>;
}

function EnquiryForm({ general = false }) {
  const [form, setForm] = useState({ name: '', occasion: '', date: '', size: '', message: '', phone: '' });
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const submit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || (!general && !form.occasion.trim()) || !form.message.trim()) {
      setError(general ? 'Please add your name and message.' : 'Please add your name, cake type or occasion, and requirements.');
      setSent(false);
      return;
    }
    setError('');
    const details = general
      ? `Hi ${business.name}, my name is ${form.name}. ${form.phone ? `My phone number is ${form.phone}. ` : ''}${form.message}`
      : `Hi ${business.name}, my name is ${form.name}. I would like to enquire about ${form.occasion}.${form.date ? ` Preferred date: ${form.date}.` : ''}${form.size ? ` Approximate size: ${form.size}.` : ''} Requirements: ${form.message}`;
    const url = whatsappUrl(details);
    if (!url) {
      setError(`WhatsApp is not configured. Please call ${business.phone}.`);
      return;
    }
    setSent(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  const update = (key) => (event) => setForm({ ...form, [key]: event.target.value });
  return <form className="enquiry-form" onSubmit={submit} noValidate><div className="form-row"><label>Name *<input value={form.name} onChange={update('name')} placeholder="Your name" /></label>{general ? <label>Phone <input value={form.phone} onChange={update('phone')} placeholder="Optional" /></label> : <label>Preferred date <input type="date" value={form.date} onChange={update('date')} /></label>}</div>{!general && <div className="form-row"><label>Cake type or occasion *<input value={form.occasion} onChange={update('occasion')} placeholder="e.g. birthday cake" /></label><label>Approximate size <input value={form.size} onChange={update('size')} placeholder="If known" /></label></div>}<label>{general ? 'Message *' : 'Message or special requirements *'}<textarea value={form.message} onChange={update('message')} placeholder={general ? 'How can we help?' : 'Tell us about your idea...'} rows="4" /></label>{error && <p className="form-feedback error" role="alert">{error}</p>}{sent && <p className="form-feedback success" role="status">Your enquiry is ready in WhatsApp. Please send it there to continue.</p>}<button className="button" type="submit"><Send size={16} /> Continue on WhatsApp</button><small className="form-note">This form does not store your information. Your enquiry will open in WhatsApp.</small></form>;
}

function Contact() {
  return <section className="section contact-section" id="contact"><div className="container contact-grid"><div className="contact-info"><SectionIntro eyebrow="Let’s talk cake" title="Your next sweet moment starts here." copy="Have a question, a date in mind or an idea you’d love to bring to life? We’d love to hear from you." /><div className="contact-details"><a href={business.phoneHref}><span><Phone size={18} /></span><div><small>Call us</small><strong>{business.phone}</strong></div></a><a href={business.mapsUrl} target="_blank" rel="noreferrer"><span><MapPin size={18} /></span><div><small>Find us at</small><strong>{business.address}</strong></div></a></div><div className="contact-links"><button className="button" onClick={() => openWhatsApp(whatsappMessages.general)}><MessageCircle size={17} /> WhatsApp us</button><a className="social-link" href="#home" aria-label="Instagram (demo link)"><Instagram size={18} /></a></div></div><div className="form-card"><span className="form-card-label"><Clock3 size={16} /> Usually the quickest way to enquire</span><h3>Send an enquiry</h3><EnquiryForm general /></div></div></section>;
}

function Footer() {
  return <footer><div className="container footer-grid"><div><Logo /><p>A proposed home-bakery experience for cakes, celebrations and sweet moments in Coimbatore.</p></div><div><h4>Explore</h4>{navItems.slice(0, 4).map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</div><div><h4>Get in touch</h4><a href={business.phoneHref}>{business.phone}</a><a href={business.mapsUrl} target="_blank" rel="noreferrer">Coimbatore, Tamil Nadu</a><button onClick={() => openWhatsApp(whatsappMessages.general)}>WhatsApp us <ArrowRight size={14} /></button></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Caketopia Home Baking</span><span>{business.disclaimer}</span></div></footer>;
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const selectCategory = (category) => {
    setSelectedCategory(category);
    document.getElementById('cakes')?.scrollIntoView({ behavior: 'smooth' });
  };
  return <><Navbar /><main><Hero /><Categories onSelect={selectCategory} /><CakeGallery selectedCategory={selectedCategory} onClear={() => setSelectedCategory('')} /><About /><Delivery /><Contact /></main><Footer /><button className="floating-whatsapp" onClick={() => openWhatsApp(whatsappMessages.general)} aria-label="Enquire on WhatsApp"><MessageCircle size={23} /><span>Chat with us</span></button></>;
}
