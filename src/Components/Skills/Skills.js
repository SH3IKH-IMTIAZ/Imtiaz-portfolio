import { RellaxWrapper } from 'react-rellax-wrapper'
import { allSkills } from '../../Content/variable'
import shape4 from '../../Images/shape4.png'
import './skills.scss'


import jsIcon from '../../Images/skills/javascript.svg'
import nodeIcon from '../../Images/skills/nodejs.svg'
import htmlIcon from '../../Images/skills/html.svg'
import pythonIcon from '../../Images/skills/python.svg'
import firebaseIcon from '../../Images/skills/firebase.svg'
import wordpressIcon from '../../Images/skills/wordpress.svg'
import gitIcon from '../../Images/skills/git.svg'
import githubIcon from '../../Images/skills/github.svg'
import bashIcon from '../../Images/skills/bash.svg'
import sqlIcon from '../../Images/skills/mysql.svg' 
import eveIcon from '../../Images/tools/EVE.svg'
import gns3Icon from '../../Images/tools/gns3.svg'


const getLogos = (skillName) => {
    switch (skillName) {
        case 'JavaScript (ES6+)': return jsIcon;
        case 'Node.js': return nodeIcon;
        case 'HTML/CSS': return htmlIcon;
        case 'Python': return pythonIcon;
        case 'Firebase': return firebaseIcon;
        case 'WordPress': return wordpressIcon;
        case 'Git': return gitIcon;
        case 'Github': return githubIcon;
       case 'Bash': return bashIcon;
        case 'SQL': return sqlIcon;
        case 'EVE-NG': return eveIcon;
        case 'GNS3': return gns3Icon;
        
        default: return jsIcon;
    }
}


const getBrandColor = (skillName) => {
    const colors = {
        'JavaScript (ES6+)': '#F7DF1E',             
        'Node.js': '#339933',            
        'HTML/CSS': '#E34F26',    
        'Python': '#3776AB',             
        'Firebase': '#FFCA28',    
        'WordPress': '#21759B',   
        'Git': '#F05032',         
        'Github': '#181717',    
        'Bash': '#4EAA25',     
        'SQL': '#4479A1', 
        'EVE-NG': '#4479A1', 
        'GNS3': '#4479A1', 

    };
    return colors[skillName] || '#555';
}

const SkillsSection = () => {
    const radius = 50; 
    const circumference = 2 * Math.PI * radius; 

    return (
        <section id='skills' className="skills_section">
            <RellaxWrapper speed={1} percentage={0.5}>
                <img className='img_shape dimond_img_1' src={shape4} alt='decoration' />
            </RellaxWrapper>

            <h1 className='heading'>SKILLS</h1>

            <div className="skills_grid">
                {allSkills.map((skill, k) => {
                    const logo = getLogos(skill.name);
                    const color = getBrandColor(skill.name);

                   
                    const offset = circumference - (skill.percentage / 100) * circumference;

                    return (
                        <div key={k} className="skill_gauge_container">
                            <div className="gauge_wrapper">
                             
                                <svg className="progress_ring" width="140" height="140">
                      
                                    <circle
                                        className="progress_ring_circle_bg"
                                        stroke="#e6e6e6"
                                        strokeWidth="8"
                                        fill="transparent"
                                        r={radius}
                                        cx="70"
                                        cy="70"
                                    />
                                   
                                    <circle
                                        className="progress_ring_circle"
                                        stroke={color}
                                        strokeWidth="8"
                                        fill="transparent"
                                        r={radius}
                                        cx="70"
                                        cy="70"
                                        style={{
                                            strokeDasharray: `${circumference} ${circumference}`,
                                            strokeDashoffset: offset
                                        }}
                                    />
                                </svg>

            
                                <div className="gauge_content">
                                    <img src={logo} alt={skill.name} className="skill_logo" />
                                    <div className="skill_percent">{skill.percentage}%</div>
                                </div>
                            </div>

                      
                            <div className="skill_meta">
                                <h3>{skill.name}</h3>
                                <span>{skill.level}</span>
                            </div>
                        </div>
                    )
                })}
            </div>

            <RellaxWrapper speed={-1} percentage={0.5}>
                <img className='img_shape dimond_img_2' src={shape4} alt='decoration' />
            </RellaxWrapper>
        </section>
    )
}

export default SkillsSection