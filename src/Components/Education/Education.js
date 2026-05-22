import { RellaxWrapper } from 'react-rellax-wrapper'
import { educationData } from '../../Content/variable'
import shape3 from '../../Images/shape3.png'
import './education.scss'
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


const EducationSection = () => {
    return (
        <section id='education' className='education_section'>
            <RellaxWrapper speed={2.2}><img className='img_shape img_shape_2' src={shape3} alt='shape' /></RellaxWrapper>

            <div className="items-container">
                <h1 className='heading'>EDUCATION</h1>
                <VerticalTimeline>
                    {educationData.map((item, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--education"
                            date={item.date}
                            iconStyle={{ background: "#666", color: "rgb(39, 40, 34)" }}
                            icon={<FontAwesomeIcon icon={faGraduationCap} />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {item.title}
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                {item.subtitle}
                            </h4>
                            <p>{item.desc}</p>
                                {item.r_course && <p>Relevant Coursework: {item.r_course}</p>}
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>

        </section>
    )
}

export default EducationSection
