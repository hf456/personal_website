import './Skill.css'

function Skill(){
    return(
      <section id="skill" className="page-section">
        <div className="section-content-skill">

          <div className="skill-card">
            <h1>Programming Languages</h1>
            <ul className="skill-list">
                <li>C/C++</li>
                <li>Java</li>
                <li>Python</li>
                <li>Kotlin</li>
                <li>SQL</li>
                <li>JavaScript</li>
            </ul>
          </div>

          <div className="skill-card">
            <h1>Frameworks </h1>
            <ul className="skill-list">
                <li>Spring Boot</li>
                <li>ReactJS</li>
                <li>Jetpack Compose</li>
            </ul>
          </div>

          <div className="skill-card">
            <h1>Tools & DBs</h1>
            <ul className="skill-list">
                <li>Firebase</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>MS Office</li>
                <li>MySQL</li>
                <li>Hibernate</li>
            </ul>
          </div>
        </div>
      </section>
    )
}

export default Skill