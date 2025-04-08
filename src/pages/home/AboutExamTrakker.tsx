import './AboutExamTrakker.css';

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <h2 className="about-us-title">
        <span>About ExamTrakker</span>
      </h2>
      
      <div className="about-us-content">
        <div className="about-us-text">
          <p>
            At <strong>ExamTrakker</strong>, we specialize in JEE and NEET preparation with a sharp focus on Physics. Our approach blends fun, creativity, and real-world application to make learning truly engaging.
          </p>
          
          <p>
            Designed for ambitious students, we go beyond rote memorization—teaching through simulations, deep conceptual clarity, and a passion for problem-solving. Whether through recorded videos or exclusive live sessions, ExamTrakker is where serious preparation meets joyful learning.
          </p>
          
          <div className="about-us-highlight">
            <p>
              Our future goal is simple yet revolutionary: to help every student realize that understanding Physics is not a skill reserved for a few—it's an innate ability of every human being. We're here to awaken that natural genius within.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;