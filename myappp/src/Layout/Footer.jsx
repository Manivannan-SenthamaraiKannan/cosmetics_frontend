import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <footer>
        <div className="row">
          <div className="col-6 col-md-3 mb-3">
            <h5>Cosmetics</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/whoarewe" className="nav-link p-0 text-muted">
                  Who are we?
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/careers" className="nav-link p-0 text-muted">
                  Careers
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/authenticity" className="nav-link p-0 text-muted">
                  Authenticity
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/social" className="nav-link p-0 text-muted">
                  Social Media
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/disclosure" className="nav-link p-0 text-muted">
                  Responsible Disclosure
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/investorrelation" className="nav-link p-0 text-muted">
                  Investor Relation
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/testimonial" className="nav-link p-0 text-muted">
                  Testimonial
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <h5>Help</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/contactus" className="nav-link p-0 text-muted">
                  Contact Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/faq" className="nav-link p-0 text-muted">
                  FAQ's
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/storelocator" className="nav-link p-0 text-muted">
                  Store Locator
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/cancellation" className="nav-link p-0 text-muted">
                  Cancellation and Return
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/shipping" className="nav-link p-0 text-muted">
                  Shipping and Delivery
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/sellonnykaa" className="nav-link p-0 text-muted">
                  Sell
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <h5>Inspire Me</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/beautybook" className="nav-link p-0 text-muted">
                  Beautybook
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/cosmeticstv" className="nav-link p-0 text-muted">
                  Cosmetics TV
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/network" className="nav-link p-0 text-muted">
                  Cosmetics Network
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/buyingguide" className="nav-link p-0 text-muted">
                  Buying Guide
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <h5>Quick Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/offerzone" className="nav-link p-0 text-muted">
                  Offer Zone
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/newlaunches" className="nav-link p-0 text-muted">
                  New Launches
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/cosmeticsmen" className="nav-link p-0 text-muted">
                  Cosmetics Men
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/fashion" className="nav-link p-0 text-muted">
                  Cosmetics Fashion
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/pro" className="nav-link p-0 text-muted">
                  Cosmetics Pro
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/sitemap" className="nav-link p-0 text-muted">
                  Site Map
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <h5>Top Categories</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/makeup" className="nav-link p-0 text-muted">
                  Makeup
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/skin" className="nav-link p-0 text-muted">
                  Skin
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/Hair" className="nav-link p-0 text-muted">
                  Hair
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/bath&body" className="nav-link p-0 text-muted">
                  Bath & Body
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/appliances" className="nav-link p-0 text-muted">
                  Appliances
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/mom&baby" className="nav-link p-0 text-muted">
                  Mom & Baby
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/fragrance" className="nav-link p-0 text-muted">
                  Fragrances
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/luxe" className="nav-link p-0 text-muted">
                  Luxe
                </a>
              </li>
            </ul>
          </div>

          <div className="col-4 offset-1">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div className="d-flex w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2024 Cosmetics ERetail Limited. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-dark" href="#/">
                <i className="bi bi-twitter-x"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#/">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#/">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
