import { RellaxWrapper } from 'react-rellax-wrapper'
import { bioContent, bioImage, resumeLink, gitHubLink } from '../../Content/variable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import aboutShape from '../../Images/aboutShape.png'
import './about.scss'

const AboutSection = () => {
    return (
        <section id='aboutme' className='aboutme_section'>
            <div className='content_col'>
                <RellaxWrapper speed={-1.8} xs={1.8} mobile={1.8}>
                    <div>
                        <h1 className='heading'>ABOUT ME</h1>
                        {bioContent.map((i, k) => <p key={k} className='para'>{i}</p>)}

                        <div className='btn_group'>
                            <a href={resumeLink} target="_blank" rel="noreferrer" className='resume_btn_link'>
                                <button className='resume_btn'>
                                    <span>Download Resume</span>
                                    <FontAwesomeIcon icon={faDownload} style={{ marginLeft: '10px' }} />
                                </button>
                            </a>
                            <a href={gitHubLink} target="_blank" rel="noreferrer" className='resume_btn_link'>
                                <button className='resume_btn' style={{ backgroundColor: '#24292e', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span>GitHub Profile</span>
                                    <FontAwesomeIcon icon={faGithub} size="lg" />
                                </button>
                            </a>
                        </div>
                    </div>
                </RellaxWrapper>
            </div>
            <div className='image_col'>
                <RellaxWrapper speed={2}>
                    <img className='img_shape img_shape_1' src={aboutShape} alt='about section shape' />
                </RellaxWrapper>
                <img className='img_main' src={bioImage} alt='my pic' />
            </div>
        </section>
    )
}

export default AboutSection