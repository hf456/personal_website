import './section.css'

function Home(){
    return(
      <section id="home" className="page-section">


        <div className="section-content">
          <p>👋 Hello, my name is</p>
          <h1>KWOK Kim Hong</h1>
          <h2>BEng Computer Engineer Graduate</h2>
          <p>
            I am a recent graduate with a major in Computer Engineering, 
            eager to pursue a career as a full-stack web or software developer. 
            I enjoy exploring various tools for building applications. Currently, 
            I am learning Spring Boot and developing an online shopping platform. 
            Outside of work and academics, I enjoy running and snowboarding for fun.
          </p>
          
          <a
            href={"src/assets/KWOK Kim Hong_Resume.pdf"} 
            download 
            className="contact-link"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fas fa-download"></i> {"Download Resume 📄"}
          </a>

          
        </div>

        <div className="about-img">
          <img 
            src="src\assets\programming.png" 
            alt="programming image" 
            width="500" 
            height="300"
          />

          <img 
            src="src\assets\snowborading.png" 
            alt="programming image" 
            width="300" 
            height="300"
          />
        </div>

      </section>
    )
}

export default Home