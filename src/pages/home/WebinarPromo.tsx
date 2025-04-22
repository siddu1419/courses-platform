import './WebinarPromo.css';

const WebinarPromo = () => {
  const tallyFormLink = "https://tally.so/r/w8MlvP";

  return (
    <section className="webinar-promo-section">
      <div className="container">
        <div className="section-header">
          <h2 className="webinar-promo-title">
            <span className="emoji-left">🎯</span>
            Test Your Knowledge, Earn a Free Webinar!
            <span className="emoji-right">🎯</span>
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="promo-content">
          <div className="promo-header">
            <div className="promo-avatar">👋</div>
            <div>
              <p className="promo-greeting">Hey students! I'm Dileep from ExamTrakker.</p>
              <p className="promo-subtext">Here's a special opportunity for you...</p>
            </div>
          </div>
          
          <div className="promo-text">
            <p>Take this quick assessment test and score 75% or higher to unlock access to an exclusive webinar absolutely FREE!</p>
            <p>Our webinars cover the most important exam strategies, time management techniques, and subject-specific tips that top rankers use.</p>
            <p>Don't miss this chance to learn from the best - prove your knowledge and we'll reward your effort!</p>
          </div>
          
          <div className="btn-container">
            <a 
              href={tallyFormLink} 
              className="test-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Take Assessment Now ➔
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarPromo;