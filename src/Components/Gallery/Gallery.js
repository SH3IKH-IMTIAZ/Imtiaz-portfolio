import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import './gallery.scss';

import img1 from "../../Images/gallery/1.jpg"
import img2 from "../../Images/gallery/2.jpg"
import img3 from "../../Images/gallery/3.jpg"
import img4 from "../../Images/gallery/4.jpg"
import img5 from "../../Images/gallery/5.jpg"
import img6 from "../../Images/gallery/6.jpg"
import img7 from "../../Images/gallery/7.jpg"
import img8 from "../../Images/gallery/8.jpg"
import img10 from "../../Images/gallery/10.jpg"
import img11 from "../../Images/gallery/11.jpg"
import img12 from "../../Images/gallery/12.jpg"
import img13 from "../../Images/gallery/13.jpg"
import img14 from "../../Images/gallery/14.jpg"
import img15 from "../../Images/gallery/15.jpg"
import img16 from "../../Images/gallery/16.jpg"
import img17 from "../../Images/gallery/17.jpg"
import img18 from "../../Images/gallery/18.jpg"
import img19 from "../../Images/gallery/19.jpg"








const images = [
    {
        original: img17,
        thumbnail: img17,
        description: "Technical Mentorship: Mentoring juniors and Breaking down complex problems in the computer lab."
    },
    {
        original: img8,
        thumbnail: img8,
        description: "Humanitarian Leadership: Navigating floodwaters to deliver relief in Sylhet, 2024."
    },
    {
        original: img6, 
        thumbnail: img6,
        description: "Humanitarian Leadership: Delivering essential food and emergency supplies to isolated communities."
    },
    {
        original: img7,
        thumbnail: img7,
        description: "Humanitarian Leadership: Teamwork and commitment to service during the Sylhet floods."
    },
    {
        original: img10,
        thumbnail: img10,
        description: "Strategic Planning & Committee Leadership: Collaborating with the team to brainstorm initiatives and set the roadmap."
    },
    {
        original: img11,
        thumbnail: img11,
        description: "Strategic Planning & Committee Leadership: Collaborating with the team to brainstorm initiatives and set the roadmap."
    },
    {
        original: img1,
        thumbnail: img1,
        description: "Industry Engagement: Visit to 'Tech Earthy' software firm."
    },
    {
        original: img2,
        thumbnail: img2,
        description: "Industry Engagement: Observing real-world development cycles."
    },
    {
        original: img3,
        thumbnail: img3,
        description: "Industry Engagement: Visit to 'Tech Earthy' software firm."
    },
    {
        original: img18,
        thumbnail: img18,
        description: "Industry Engagement: Reciving a certificate for participant of workshop"
    },
    {
        original: img19,
        thumbnail: img19,
        description: "Industry Engagement:Proud moment after project showcasing with respected faculty members."
    },
    {
        original: img4,
        thumbnail: img4,
        description: "Event Management: Curating the Photography Contest and Exhibition."
    },
    {
        original: img5, 
        thumbnail: img5,
        description: "Event Management: Showcasing student talent in the auditorium."
    },
    {
        original: img13,
        thumbnail: img13,
        description: "Event Management: Overseeing the participant registration and event flow."
    },
    {
        original: img12,
        thumbnail: img12,
        description: "Public Speaking: Discussing Career Development principles and technical paths."
    },
    {
        original: img14,
        thumbnail: img14,
        description: "Farewell crest presented to the head of CSE dept- a token of gratitude and respect."
    },
    {
        original: img15,
        thumbnail: img15,
        description: "Presenting a bouquet to our honorable chairman ofthe university of Brahamanbaria."
    },
    {
        original: img16,
        thumbnail: img16,
        description: "An honor to share a framewith our Respected VC sir."
    }
];

const Gallery = () => {
    return (
        <section id="gallery" className='gallery_section'>

            <h1 className='heading'>GALLERY</h1>
            <ImageGallery items={images} autoPlay={false} showPlayButton={true} showFullscreenButton={false} showThumbnails={false} />
        </section>
    )
};

export default Gallery;

// 1.jpg: A group of seven students posing together in front of a "Techearty" office sign.
// 2.jpg: Students sitting in a circle engaging in a discussion or meeting at the Techearty office.
// 3.jpg: A larger group photograph of male and female students during their visit to the Techearty office.
// 4.jpg: Attendees viewing a photography contest and exhibition displayed on brightly colored fabric panels.
// 5.jpg: A large group posing together indoors at a decorated event with colorful backdrops.
// 6.jpg: Young men wading through waist-deep floodwaters while pushing a bamboo raft loaded with relief supplies.
// 7.jpg: Volunteers standing in deep floodwaters while preparing and loading relief bags onto a makeshift bamboo raft.
// 8.jpg: A team of volunteers navigating through flooded areas to deliver essential food and emergency supplies.
// 9.jpg: A group of friends taking a selfie while riding in the back of a pickup truck at night.
// 10.jpg: Students engaged in a collaborative discussion around a large wooden table in a library setting.
// 11.jpg: Another view of students studying and conversing around a conference table in the university library.
// 12.jpg: A large class of students posing with their instructors in a university computer lab.
// 13.jpg: A young woman in a blue hijab signing a document at a registration desk while others look on.
// 14.jpg: A formal presentation where students are handing a wooden farewell crest to an official.
// 15.jpg: Students presenting a bouquet of flowers and a printed mug to an older gentleman in his office.
// 16.jpg: Three individuals posing for a photo outdoors, likely outside a university building.
// 17.jpg: A fun group selfie taken by a student with his classmates in a computer lab.
// 18.jpg: A student receiving a certificate of excellence from an official during a formal ceremony.
// 19.jpg: A small group of students and instructors posing together behind a computer desk.
// IMG-20230321-WA0052.jpg: Three individuals talking outdoors during an industry visit in front of a large factory building.