import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Certifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. — Computer Engineering</h4>
                <h5>S.N.D College of Engineering (SPPU)</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Current CGPA: 8.0/10. Coursework includes Data Structures & Algorithms,
              DBMS, OS, OOP, and Probability & Statistics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Certification</h4>
                <h5>D-Tech Point, Pune</h5>
              </div>
              <h3>Completed</h3>
            </div>
            <p>
              Core Topics: Python, SQL, Excel, Pandas, NumPy, Matplotlib,
              Data Preprocessing, Machine Learning, EDA.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>HSC (12th Grade)</h4>
                <h5>Indian College, Manmad</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed Higher Secondary Certificate with 67.83% from Maharashtra State Board.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
