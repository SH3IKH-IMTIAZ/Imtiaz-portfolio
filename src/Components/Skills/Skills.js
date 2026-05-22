import { RellaxWrapper } from 'react-rellax-wrapper'
import { allSkills } from '../../Content/variable'
import shape4 from '../../Images/shape4.png'
import './skills.scss'


import jsIcon from '../../Images/skills/javascript.svg'
import reactIcon from '../../Images/skills/react.svg'
import nodeIcon from '../../Images/skills/nodejs.svg'
import expressIcon from '../../Images/skills/express.svg'
import mongoIcon from '../../Images/skills/mongodb.svg'
import htmlIcon from '../../Images/skills/html.svg'
import pythonIcon from '../../Images/skills/python.svg'
import cppIcon from '../../Images/skills/cpp.svg'
import firebaseIcon from '../../Images/skills/firebase.svg'
import wordpressIcon from '../../Images/skills/wordpress.svg'
import gitIcon from '../../Images/skills/git.svg'
import githubIcon from '../../Images/skills/github.svg'
import reduxIcon from '../../Images/skills/redux.svg'
import nextIcon from '../../Images/skills/nextjs.svg'
import tailwindIcon from '../../Images/skills/tailwind.svg'
import bashIcon from '../../Images/skills/bash.svg'
import sqlIcon from '../../Images/skills/mysql.svg' // Using MySQL logo for SQL
import javaIcon from '../../Images/skills/java.svg'


const getLogos = (skillName) => {
    switch (skillName) {
        case 'JavaScript (ES6+)': return jsIcon;
        case 'React': return reactIcon;
        case 'Node.js': return nodeIcon;
        case 'Express.js': return expressIcon;
        case 'MongoDB': return mongoIcon;
        case 'HTML/CSS': return htmlIcon;
        case 'Python': return pythonIcon;
        case 'C/C++': return cppIcon;
        case 'Firebase': return firebaseIcon;
        case 'WordPress': return wordpressIcon;
        case 'Git': return gitIcon;
        case 'Github': return githubIcon;
        case 'Redux': return reduxIcon;
        case 'Next.js': return nextIcon;
        case 'Tailwind': return tailwindIcon;
       case 'Bash': return bashIcon;
        case 'SQL': return sqlIcon;
        case 'Java': return javaIcon;
        
        default: return jsIcon;
    }
}


const getBrandColor = (skillName) => {
    const colors = {
        'JavaScript (ES6+)': '#F7DF1E',
        'React': '#61DAFB',       
        'Node.js': '#339933',     
        'Express.js': '#fff',
        'MongoDB': '#47A248',     
        'HTML/CSS': '#E34F26',    
        'Python': '#3776AB',      
        'C/C++': '#00599C',          
        'Firebase': '#FFCA28',    
        'WordPress': '#21759B',   
        'Git': '#F05032',         
        'Github': '#181717',      
        'Redux': '#764ABC',       
        'Next.js': '#000000',     
        'Tailwind': '#06B6D4',
        'Bash': '#4EAA25',      // Green (Bash/Terminal standard)
        'SQL': '#4479A1',       // MySQL Blue
        'Java': '#ED8B00'  
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