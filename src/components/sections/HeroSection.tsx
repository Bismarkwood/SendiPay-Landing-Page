import heroImg from '../../assets/hero.png'
import '../../styles/HeroSection.css'

export function HeroSection() {
  return (
    <section id="home" className="hero-section">
      {/* Background decorative elements */}
      <div className="hero-bg-glow hero-bg-glow--blue" aria-hidden="true" />
      <div className="hero-bg-glow hero-bg-glow--purple" aria-hidden="true" />

      <div className="hero-inner">
        {/* Left Content Column */}
        <div className="hero-content">
          {/* Pill badge */}
          <div className="hero-badge">
            <span className="hero-badge__dot" aria-hidden="true" />
            <span>Trusted by 50,000+ users across Africa</span>
          </div>

          {/* Heading */}
          <h1 className="hero-heading">
            Send Money
            <br />
            <span className="hero-heading__accent">Across Africa</span>
            <br />
            Instantly.
          </h1>

          {/* Subheading */}
          <p className="hero-subheading">
            SendiPay makes cross-border payments fast, affordable, and secure.
            Pay bills, send remittances, and manage money with zero hassle.
          </p>

          {/* Stats row */}
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat__number">2M+</span>
              <span className="hero-stat__label">Transactions</span>
            </div>
            <div className="hero-stat-divider" aria-hidden="true" />
            <div className="hero-stat">
              <span className="hero-stat__number">15+</span>
              <span className="hero-stat__label">Countries</span>
            </div>
            <div className="hero-stat-divider" aria-hidden="true" />
            <div className="hero-stat">
              <span className="hero-stat__number">99.9%</span>
              <span className="hero-stat__label">Uptime</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#get-started" className="hero-cta hero-cta--primary">
              Get Started Free
              <svg
                className="hero-cta__arrow"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#how-it-works" className="hero-cta hero-cta--secondary">
              <svg
                className="hero-cta__play"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="8" cy="8" r="7.25" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="currentColor" />
              </svg>
              See How It Works
            </a>
          </div>

          {/* Trust indicators */}
          <div className="hero-trust">
            <svg className="hero-trust__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 1.5L2 4v4c0 3.3 2.7 6.4 6 7 3.3-.6 6-3.7 6-7V4L8 1.5z" stroke="#22c55e" strokeWidth="1.4" fill="none" />
              <path d="M5.5 8l2 2 3-3" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Bank-grade encryption &amp; regulation compliant</span>
          </div>
        </div>

        {/* Right Visual Column */}
        <div className="hero-visual">
          {/* Floating card mockup */}
          <div className="hero-card-stack">
            <div className="hero-card hero-card--back" aria-hidden="true" />

            <div className="hero-card hero-card--main">
              <div className="hero-card__header">
                <div className="hero-card__title">Quick Transfer</div>
                <div className="hero-card__badge">Live</div>
              </div>

              <div className="hero-card__amount">
                <span className="hero-card__currency">NGN</span>
                <span className="hero-card__value">50,000</span>
              </div>

              <div className="hero-card__exchange">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 5h10M9 2l3 3-3 3M12 9H2M5 6l-3 3 3 3" stroke="#6b7280" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>1 NGN = 0.00062 USD</span>
              </div>

              <div className="hero-card__to">
                <div className="hero-card__avatar" aria-hidden="true">AO</div>
                <div className="hero-card__recipient-info">
                  <span className="hero-card__recipient-name">Amaka Okafor</span>
                  <span className="hero-card__recipient-sub">Lagos, Nigeria → London, UK</span>
                </div>
              </div>

              <button className="hero-card__send-btn" type="button">
                Send Now
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Floating notification badge */}
            <div className="hero-notif" aria-label="Transaction success notification">
              <div className="hero-notif__icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="8" fill="#22c55e" />
                  <path d="M5 8l2.5 2.5L11 5.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="hero-notif__text">
                <span className="hero-notif__title">Transfer Successful!</span>
                <span className="hero-notif__sub">£31.20 received</span>
              </div>
            </div>

            {/* 3D hero asset */}
            <img
              src={heroImg}
              alt="SendiPay payment platform visual"
              className="hero-3d-asset"
              width="220"
              height="220"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
