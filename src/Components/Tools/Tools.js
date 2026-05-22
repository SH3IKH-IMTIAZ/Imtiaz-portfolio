import { toolsData } from '../../Content/variable'
import { RellaxWrapper } from 'react-rellax-wrapper'
import shape4 from '../../Images/shape4.png'
import './tools.scss'

// IMPORT LOCAL LOGOS
import clickupIcon from '../../Images/tools/clickup.svg'
import notionIcon from '../../Images/tools/notion.svg'
import docsIcon from '../../Images/tools/docs.svg'
import sheetsIcon from '../../Images/tools/sheets.svg'
import canvaIcon from '../../Images/tools/canva.svg'
import figmaIcon from '../../Images/tools/figma.svg'
import vscodeIcon from '../../Images/tools/vscode.svg'
import googleIcon from '../../Images/tools/google.svg'
import chromeIcon from '../../Images/tools/chrome.svg'
import kaliIcon from '../../Images/tools/kali.svg'
import linuxIcon from '../../Images/tools/linux.svg'
import owaspIcon from '../../Images/tools/owasp.svg'
import burpIcon from '../../Images/tools/burp.svg'
import zapIcon from '../../Images/tools/zap-new.svg'
import postmanIcon from '../../Images/tools/postman.svg'
import wiresharkIcon from '../../Images/tools/wireshark.svg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faStickyNote, faFileAlt, faFileExcel, faPalette, faCode, faRobot, faWrench, faShieldAlt, faTerminal, faBug } from '@fortawesome/free-solid-svg-icons';
import { faFigma, faLinux } from '@fortawesome/free-brands-svg-icons';

// Map tool names (from variable.js) to the imported local images
const localLogos = {
    "ClickUp": clickupIcon,
    "Notion": notionIcon,
    "Google Docs": docsIcon,
    "Google Sheets": sheetsIcon,
    "Canva": canvaIcon,
    "Figma": figmaIcon,
    "VS Code": vscodeIcon,
    "Google Antigravity": googleIcon,
    "Chrome DevTools": chromeIcon,
    "Kali Linux": kaliIcon,  
    "Linux": linuxIcon,      
    "OWASP Top 10": owaspIcon,
    "Burp Suite": burpIcon,
    "OWASP ZAP": zapIcon,
    "Postman": postmanIcon,
    "Wireshark": wiresharkIcon
}

// Fallback logic
const getLogo = (toolName) => {
    return localLogos[toolName] || null;
}

// Map string names to icon components
const iconMap = {
    "faTasks": faTasks,
    "faStickyNote": faStickyNote,
    "faFileAlt": faFileAlt,
    "faFileExcel": faFileExcel,
    "faPalette": faPalette,
    "faFigma": faFigma,
    "faCode": faCode,
    "faRobot": faRobot,
    "faWrench": faWrench,
    "faShieldAlt": faShieldAlt,
    "faLinux": faLinux,
    "faTerminal": faTerminal,
    "faBug": faBug
};

const ToolsSection = () => {
    return (
        <section id='tools' className="tools_section">
            <h1 className='heading'>MY ARSENAL</h1>

            <div className="tools_container">
                {toolsData.map((tool, index) => {
                    const logoSrc = getLogo(tool.name);
                    const FaIcon = iconMap[tool.icon];

                    return (
                        <div key={index} className="tool_pill">
                            <div className="icon_container">
                                {logoSrc ? (
                                    <img
                                        src={logoSrc}
                                        alt={`${tool.name} logo`}
                                        className="real_logo"
                                    />
                                ) : FaIcon ? (
                                    <FontAwesomeIcon icon={FaIcon} size="2x" color="#333" />
                                ) : (
                                    // Fallback text if image is missing/broken
                                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                                        {tool.name.charAt(0)}
                                    </span>
                                )}
                            </div>
                            <div className="text_container">
                                <span className="tool_name">{tool.name}</span>
                                <span className="tool_cat">{tool.category}</span>
                            </div>
                        </div>
                    )
                })}
            </div>

            <RellaxWrapper speed={-1} percentage={0.5} style={{ position: 'absolute', top: 0, right: 0, zIndex: -1 }}>
                <img className='img_shape tool_shape' src={shape4} alt='shape' />
            </RellaxWrapper>
        </section>
    )
}

export default ToolsSection