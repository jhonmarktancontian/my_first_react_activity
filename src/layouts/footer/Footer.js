import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
        <div className="container">
          <div className="row gx-5 px-4 px-lg-3">
            <div className="col-lg-4 col-md-6 col-12 pe-5">
              <div>
                <div className="logo">
                  <Link classNameName="navbar-brand" to="/" alt="Company"><img src="" alt="Logo" className="img-fluid" width="200px" height="auto"/></Link>
                </div>
                <span className="mt-4">Lorem ipsum dolor sit amet, epicuri indoctum pri id, quod sale mea an. Prima partiendo intellegat ei.</span>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <ul className="list-unstyled d-inline-flex gap-5 my-0">
                    <li><Link to="/"><i className="fa-brands fa-square-twitter fa-2xl"></i></Link></li>
                    <li><Link to="/"><i className="fa-brands fa-square-facebook fa-2xl"></i></Link></li>
                    <li><Link to="/"><i className="fa-brands fa-youtube fa-2xl"></i></Link></li>
                  </ul>   
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <div>
                <div className="quick-links">
                  <h5>Quick Links</h5>
                  <ul className="list-unstyled mt-4">
                    <li className="mt-2"><Link to="/about" className="text-decoration-none">About Us</Link></li>
                    <li className="mt-2"><Link to="/" className="text-decoration-none">Our Services</Link></li>
                    <li className="mt-2"><Link to="/contact" className="text-decoration-none">Contatc Us</Link></li>
                    <li className="mt-2"><Link to="/blog" className="text-decoration-none">Latest Blog</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <div>
                <div className="company">
                  <h5>Company</h5>
                  <ul className="list-unstyled mt-4">
                    <li className="mt-2"><Link to="/" className="text-decoration-none">Terms & Conditions</Link></li>
                    <li className="mt-2"><Link to="/" className="text-decoration-none">Privacy & Policy</Link></li>
                    <li className="mt-2"><Link to="/" className="text-decoration-none">Support</Link></li>
                    <li className="mt-2"><Link to="/" className="text-decoration-none">FAQ</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div>
                <div className="subscribe">
                  <h5>Subscribe</h5>
                  <p className="mt-4">Subscribe to get latest news articles and resources.</p>
                  <form>
                    <input type="email" className="form-control mb-3 shadow-none" placeholder="Your Email Address"/>
                    <Link to="/" className="btn custom-btn-border">Subscribe</Link>
                  </form>
                </div>
              </div>
            </div>  
          </div>
        </div>
        <div className="container custom-border-top">
          <div className="row p-4 align-items-center">
            <div className="col-12 text-center">
              <div className="h-100 d-flex align-items-center justify-content-center">
                <p className="text-center m-0">&copy;All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;