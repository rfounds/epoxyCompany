import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Roboto, Oswald } from 'next/font/google';
import { AnimatedButton, AnimatedSocialLink, AnimatedSubmitButton } from '../components/AnimatedButton';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
});
export const metadata = {
  title: "1st Gen Epoxy - Premium Epoxy Floors",
  description:
    "1st Gen Epoxy offers high-quality epoxy flooring solutions. Family-owned, built on pride and craftsmanship. Get a free quote!",
};

export default function HomePage() {
  const companyColors = {
    primary: "#b83d99",
    secondary: "#189ccd",
    background: "#000000", // Black background
  };

  return (
    <div className={`main-page-wrapper ${roboto.variable} ${oswald.variable}`} style={{ 
      backgroundColor: companyColors.background, 
      color: '#fff',
      fontFamily: 'var(--font-roboto), sans-serif'
    }}>
      <header className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
          <div className="container">
            <Link href="/" legacyBehavior>
              <a className="navbar-brand fw-bold fs-4" style={{ 
                fontFamily: 'var(--font-oswald), sans-serif', 
                letterSpacing: '1px', 
                color: '#fff' 
              }}>
                1st Gen Epoxy
              </a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link href="/" legacyBehavior><a className="nav-link active" aria-current="page" style={{color: '#fff', fontFamily: 'var(--font-oswald), sans-serif', transition: 'all 0.3s ease'}}>Home</a></Link>
                </li>
                <li className="nav-item">
                  <Link href="#about" legacyBehavior><a className="nav-link" style={{color: '#fff', fontFamily: 'var(--font-oswald), sans-serif', transition: 'all 0.3s ease'}}>About</a></Link>
                </li>
                <li className="nav-item">
                  <Link href="#services" legacyBehavior><a className="nav-link" style={{color: '#fff', fontFamily: 'var(--font-oswald), sans-serif', transition: 'all 0.3s ease'}}>Services</a></Link>
                </li>
                <li className="nav-item">
                  <Link href="#why-choose-us" legacyBehavior><a className="nav-link" style={{color: '#fff', fontFamily: 'var(--font-oswald), sans-serif', transition: 'all 0.3s ease'}}>Why Us</a></Link>
                </li>
                 <li className="nav-item">
                  <Link href="#testimonials" legacyBehavior><a className="nav-link" style={{color: '#fff', fontFamily: 'var(--font-oswald), sans-serif', transition: 'all 0.3s ease'}}>Testimonials</a></Link>
                </li>
                <li className="nav-item">
                  <AnimatedButton 
                    href="#contact" 
                    className="nav-link btn btn-primary ms-2" 
                    style={{
                      backgroundColor: companyColors.primary, 
                      borderColor: companyColors.primary,
                      color: '#fff',
                      fontFamily: 'var(--font-oswald), sans-serif',
                      fontWeight: '600',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}
                    variant="primary"
                    hoverEffect="scale"
                  >
                    Request a Quote
                  </AnimatedButton>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section 
          id="hero" 
          className="text-white text-center d-flex align-items-center justify-content-center" 
          style={{ 
            minHeight: 'calc(100vh - 70px)', // Adjust 70px based on actual navbar height
            background: `
              linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),
              radial-gradient(circle at top left, ${companyColors.primary} 0%, transparent 50%),
              radial-gradient(circle at bottom right, ${companyColors.secondary} 0%, transparent 50%),
              ${companyColors.background}
            `,
            backgroundBlendMode: 'normal, overlay, overlay, normal', // Blend modes for layers
            backgroundSize: 'cover, 60% 60%, 60% 60%, cover', // Sizes for layers
            backgroundPosition: 'center, top left, bottom right, center', // Positions for layers
            backgroundRepeat: 'no-repeat', // Ensure gradients don't tile unnecessarily
          }}
        >
          <div className="container py-5">
            <h1 className="display-3 fw-bold mb-4" style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
              color: '#fff',
              fontFamily: 'var(--font-oswald), sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              1st Gen Epoxy<br/>
              Premium Epoxy Floors
            </h1>
            <p className="lead col-lg-8 mx-auto mb-5" style={{fontSize: '1.5rem', textShadow: '1px 1px 3px rgba(0,0,0,0.5)'}}>
              Built from the Ground Up
            </p>
            <div>
              <AnimatedButton 
                href="#contact" 
                className="btn btn-lg mt-3 me-3" 
                style={{
                  backgroundColor: companyColors.primary, 
                  borderColor: companyColors.primary, 
                  color: '#fff', 
                  padding: '15px 30px', 
                  fontSize: '1.2rem',
                  fontFamily: 'var(--font-oswald), sans-serif',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
                variant="primary"
                hoverEffect="lift"
              >
                Get a Free Quote
              </AnimatedButton>
              <AnimatedButton 
                href="#contact" 
                className="btn btn-outline-light btn-lg mt-3" 
                style={{
                  borderColor: '#fff', 
                  color: '#fff', 
                  padding: '15px 30px', 
                  fontSize: '1.2rem',
                  fontFamily: 'var(--font-oswald), sans-serif',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
                variant="outline"
                hoverEffect="lift"
              >
                Book Now
              </AnimatedButton>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section id="about" className="py-5" style={{backgroundColor: 'rgba(255,255,255,0.05)'}}>
          <div className="container">
            <h2 className="text-center mb-5 display-5" style={{
              color: '#fff', 
              fontFamily: 'var(--font-oswald), sans-serif',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textShadow: '1px 1px 3px rgba(0,0,0,0.3)'
            }}>About 1st Gen Epoxy</h2>
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <p className="lead mb-4" style={{fontSize: '1.2rem'}}>
                  At 1st Gen Epoxy Floors, we’re more than just a flooring company — we’re a first-generation, family-owned business built on pride, craftsmanship, and a vision for generational success. We specialize in high-quality epoxy flooring solutions that transform ordinary concrete into durable, stunning surfaces that last.
                </p>
                <p style={{fontSize: '1.1rem'}}>
                  From residential garages to commercial spaces, every project we take on is treated like it’s our own. We value honesty, hard work, and exceeding expectations — because for us, this isn’t just a job, it’s a legacy in the making.
                </p>
                <p style={{fontSize: '1.1rem'}}>
                  Let us help you elevate your space with style, strength, and a finish you’ll love for years to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-5">
          <div className="container">
            <h2 className="text-center mb-5 display-5" style={{color: companyColors.secondary}}>Our Services</h2>
            <div className="row text-center">
              <div className="col-md-6 mb-4">
                <h4 style={{color: companyColors.primary}}>Applications</h4>
                <ul className="list-unstyled lead">
                  <li>Garage Floors</li>
                  <li>Basements</li>
                  <li>Bathrooms</li>
                  <li>Studio</li>
                  <li>Trailers</li>
                  <li>And more</li>
                </ul>
              </div>
              <div className="col-md-6 mb-4">
                <h4 style={{color: companyColors.primary}}>Finishes & Customization</h4>
                <ul className="list-unstyled lead">
                  <li>Decorative Flake Systems</li>
                  <li>Metallic/Marbled Epoxy</li>
                  <li>Solid Colors</li>
                  <li>Custom Designs</li>
                  <li>Company Logo/Engraving</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="py-5" style={{backgroundColor: 'rgba(255,255,255,0.05)'}}>
          <div className="container">
            <h2 className="text-center mb-5 display-5" style={{color: companyColors.primary}}>Why Choose Us?</h2>
            <div className="row">
              <div className="col-md-3 mb-4 text-center">
                <div className="p-4 rounded" style={{border: `2px solid ${companyColors.secondary}`}}>
                  <h5 className="fw-bold" style={{color: companyColors.secondary}}>Family-Owned & Operated</h5>
                </div>
              </div>
              <div className="col-md-3 mb-4 text-center">
                 <div className="p-4 rounded" style={{border: `2px solid ${companyColors.secondary}`}}>
                  <h5 className="fw-bold" style={{color: companyColors.secondary}}>Durable, Long-Lasting Floors</h5>
                </div>
              </div>
              <div className="col-md-3 mb-4 text-center">
                <div className="p-4 rounded" style={{border: `2px solid ${companyColors.secondary}`}}>
                  <h5 className="fw-bold" style={{color: companyColors.secondary}}>Stylish & Custom Designs</h5>
                </div>
              </div>
              <div className="col-md-3 mb-4 text-center">
                <div className="p-4 rounded" style={{border: `2px solid ${companyColors.secondary}`}}>
                  <h5 className="fw-bold" style={{color: companyColors.secondary}}>Free Quotes & Competitive Rates</h5>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section (Repeat) */}
        <section id="cta" className="py-5 text-center" style={{backgroundColor: companyColors.primary}}>
          <div className="container">
            <h2 className="display-5 fw-bold mb-4 text-white">Ready to Transform Your Space?</h2>
            <p className="lead text-white mb-4">Let's discuss your project and how we can bring your vision to life.</p>
            <AnimatedButton 
              href="#contact" 
              className="btn btn-light btn-lg me-3" 
              style={{
                padding: '15px 30px', 
                fontSize: '1.2rem', 
                color: companyColors.primary,
                backgroundColor: '#fff',
                fontFamily: 'var(--font-oswald), sans-serif',
                fontWeight: '600',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}
              variant="light"
              hoverEffect="lift"
            >
              Request a Quote
            </AnimatedButton>
            <AnimatedButton 
              href="tel:405-780-2438" 
              className="btn btn-outline-light btn-lg" 
              style={{
                padding: '15px 30px', 
                fontSize: '1.2rem', 
                borderColor: '#fff', 
                color: '#fff',
                fontFamily: 'var(--font-oswald), sans-serif',
                fontWeight: '600',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}
              variant="outline"
              hoverEffect="lift"
            >
              Call Us Now
            </AnimatedButton>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-5">
          <div className="container">
            <h2 className="text-center mb-5 display-5" style={{color: companyColors.secondary}}>Client Love</h2>
             <div className="text-center p-5 border rounded" style={{borderColor: companyColors.secondary, backgroundColor: 'rgba(255,255,255,0.03)'}}>
              <p className="lead"><em>Testimonials and Before/After Photos Coming Soon!</em></p>
            </div>
          </div>
        </section>

        {/* Contact Section (Request a Quote Form) */}
        <section id="contact" className="py-5" style={{backgroundColor: 'rgba(255,255,255,0.05)'}}>
          <div className="container">
            <h2 className="text-center mb-5 display-5" style={{color: companyColors.primary}}>Request a Quote</h2>
            <div className="row">
              <div className="col-md-8 mx-auto">
                <form id="contact-form" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST"> {/* Replace YOUR_FORMSPREE_ID */}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label" style={{color: companyColors.secondary}}>*Full Name</label>
                    <input type="text" className="form-control" id="name" name="name" required style={{backgroundColor: 'rgba(255,255,255,0.1)', color:'#fff', borderColor: companyColors.secondary}}/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label" style={{color: companyColors.secondary}}>*Phone Number</label>
                    <input type="tel" className="form-control" id="phone" name="phone" required style={{backgroundColor: 'rgba(255,255,255,0.1)', color:'#fff', borderColor: companyColors.secondary}}/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label" style={{color: companyColors.secondary}}>*Email Address</label>
                    <input type="email" className="form-control" id="email" name="email" required style={{backgroundColor: 'rgba(255,255,255,0.1)', color:'#fff', borderColor: companyColors.secondary}}/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label" style={{color: companyColors.secondary}}>*Project Address</label>
                    <input type="text" className="form-control" id="address" name="address" required style={{backgroundColor: 'rgba(255,255,255,0.1)', color:'#fff', borderColor: companyColors.secondary}}/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="floorType" className="form-label" style={{color: companyColors.secondary}}>*Type of Floor</label>
                    <select className="form-select" id="floorType" name="floorType" required style={{backgroundColor: 'rgba(255,255,255,0.1)', color:'#fff', borderColor: companyColors.secondary}}>
                      <option value="">-- Select Floor Type --</option>
                      <option value="garage">Garage</option>
                      <option value="basement">Basement</option>
                      <option value="bathroom">Bathroom</option>
                      <option value="studio">Studio</option>
                      <option value="trailer">Trailer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                   <div className="mb-3">
                    <label htmlFor="finish" className="form-label" style={{color: companyColors.secondary}}>*Finish Wanted</label>
                    <select className="form-select" id="finish" name="finish" required style={{backgroundColor: 'rgba(255,255,255,0.1)', color:'#fff', borderColor: companyColors.secondary}}>
                      <option value="">-- Select Finish --</option>
                      <option value="solid">Solid Color</option>
                      <option value="flake">Decorative Flake</option>
                      <option value="metallic-solid">Metallic Solid</option>
                      <option value="metallic-marbled">Metallic Marbled</option>
                      <option value="custom">Custom</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="engraving" className="form-label" style={{color: companyColors.secondary}}>Engraving or Logo?</label>
                    <select className="form-select" id="engraving" name="engraving" style={{backgroundColor: 'rgba(255,255,255,0.1)', color:'#fff', borderColor: companyColors.secondary}}>
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                  </div>
                   <div className="mb-3">
                    <label htmlFor="squareFootage" className="form-label" style={{color: companyColors.secondary}}>*Square Footage (approx.)</label>
                    <input type="text" className="form-control" id="squareFootage" name="squareFootage" required style={{backgroundColor: 'rgba(255,255,255,0.1)', color:'#fff', borderColor: companyColors.secondary}}/>
                  </div>
                   <div className="mb-3">
                    <label htmlFor="quotedPrice" className="form-label" style={{color: companyColors.secondary}}>Quoted Price (if any)</label>
                    <input type="text" className="form-control" id="quotedPrice" name="quotedPrice" style={{backgroundColor: 'rgba(255,255,255,0.1)', color:'#fff', borderColor: companyColors.secondary}}/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="notes" className="form-label" style={{color: companyColors.secondary}}>Additional Notes</label>
                    <textarea className="form-control" id="notes" name="notes" rows="3" style={{backgroundColor: 'rgba(255,255,255,0.1)', color:'#fff', borderColor: companyColors.secondary}}></textarea>
                  </div>
                  <div className="text-center">
                    <AnimatedSubmitButton 
                      className="btn btn-lg" 
                      style={{
                        backgroundColor: companyColors.primary, 
                        borderColor: companyColors.primary, 
                        color: '#fff', 
                        padding: '10px 40px',
                        fontFamily: 'var(--font-oswald), sans-serif',
                        fontWeight: '600',
                        letterSpacing: '1px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                      }}
                      variant="primary"
                    >
                      Submit Request
                    </AnimatedSubmitButton>
                  </div>
                </form>
                <p className="text-center mt-3"><small>* Required field</small></p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-white text-center py-5" style={{ backgroundColor: '#0a0a0a'}}>
        <div className="container">
          <div className="mb-3">
            <Link href="tel:405-780-2438" legacyBehavior>
              <a className="text-white me-3" style={{
                color: '#fff', 
                fontSize: '1.1rem',
                fontFamily: 'var(--font-oswald), sans-serif',
                transition: 'all 0.3s ease'
              }}>
                Phone: 405-780-2438
              </a>
            </Link>
            <Link href="mailto:1stgenepoxy@gmail.com" legacyBehavior>
              <a className="text-white" style={{
                color: '#fff', 
                fontSize: '1.1rem',
                fontFamily: 'var(--font-oswald), sans-serif',
                transition: 'all 0.3s ease'
              }}>
                Email: 1stgenepoxy@gmail.com
              </a>
            </Link>
          </div>
          <div className="mb-3">
            <AnimatedSocialLink 
              href="https://www.instagram.com/1stgenepoxy?igsh=eWc3NGo3dXNnY3A4&utm_source=qr" 
              className="text-white me-3"
              style={{
                hoverColor: companyColors.primary
              }}
            >
              <span style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Instagram</span>
            </AnimatedSocialLink>
            <AnimatedSocialLink 
              href="https://www.tiktok.com/@1stgenepoxy?_t=ZT-8w8VhdNOGaZ&_r=1" 
              className="text-white"
              style={{
                hoverColor: companyColors.secondary
              }}
            >
              <span style={{fontSize: '1.5rem', fontWeight: 'bold'}}>TikTok</span>
            </AnimatedSocialLink>
          </div>
          <p>&copy; {new Date().getFullYear()} 1st Gen Epoxy. All Rights Reserved.</p>
          <p>
            <span style={{color: 'rgba(255,255,255,0.7)'}}>Built with passion in Oklahoma.</span>
          </p>
          <p className="mb-0">Oklahoma's Choice for Premium Epoxy Floors.</p>
        </div>
      </footer>
    </div>
  );
}
