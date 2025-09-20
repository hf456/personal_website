import React from 'react';
import './Contact.css';

// Define TypeScript interface
interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link?: string;
}

// Contact section component
const Contact: React.FC = () => {
  const contactInfo: ContactInfo[] = [
    {
      icon: 'src/assets/email.jpg',
      title: 'Email',
      value: 'kwokkimhonghk@gmail.com',
    },
    {
      icon: 'src/assets/phone.jpg',
      title: 'Phone',
      value: '+852 5225 5778',
    },
    {
      icon: 'src/assets/location.webp',
      title: 'Location',
      value: 'Tung Chung, Hong Kong'
    },
    {
      icon: 'src/assets/Linkedin.png',
      title: 'LinkedIn',
      value: 'in/Kim-Hong-KWOK',
      link: 'www.linkedin.com/in/kim-hong-kwok-317b082bb'
    },
    {
      icon: 'src/assets/github.png',
      title: 'GitHub',
      value: '@KHKWOKAH',
      link: 'https://github.com/hf456'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2>Let's Connect</h2>
          <p className="section-subtitle">Feel free to reach out through any of these channels</p>
        </div>
        
        <div className="contact-cards">
          {contactInfo.map((item, index) => (
            <div key={index} className="contact-card">
              <div className="card-icon">
                <img src={item.icon} className="contact-icon-img"
/>
              </div>
              <h3>{item.title}</h3>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="contact-link">
                  {item.value}
                </a>
              ) : (
                <span className="contact-info">{item.value}</span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;