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
import img9 from "../../Images/gallery/9.jpg"
import img10 from "../../Images/gallery/10.jpg"
import img11 from "../../Images/gallery/11.jpg"
import img12 from "../../Images/gallery/12.jpg"
import img13 from "../../Images/gallery/13.jpg"
import img14 from "../../Images/gallery/14.jpg"
import img15 from "../../Images/gallery/15.jpg"
import img16 from "../../Images/gallery/16.jpg"
import img17 from "../../Images/gallery/17.jpg"







const images = [
    {
        original: img8,
        thumbnail: img8,
        description: "Technical Mentorship: Mentoring juniors and Breaking down complex problems in the computer lab."
    },
    {
        original: img9,
        thumbnail: img9,
        description: "Technical Mentorship: Mentoring juniors and Breaking down complex problems in the computer lab."
    },
    {
        original: img10,
        thumbnail: img10,
        description: "Technical Mentorship: Providing hands-on guidance to bridge theory and practice."
    },
    {
        original: img11,
        thumbnail: img11,
        description: "Industry Engagement: Visit to 'Tech Earthy' software firm."
    },
    {
        original: img12,
        thumbnail: img12,
        description: "Industry Engagement: Observing real-world development cycles."
    },
    {
        original: img1,
        thumbnail: img1,
        description: "Strategic Planning & Committee Leadership: Collaborating with the team to brainstorm initiatives and set the roadmap."
    },
    {
        original: img13,
        thumbnail: img13,
        description: "Public Speaking: Leading the 'Career in CSE' workshop."
    },
    {
        original: img14,
        thumbnail: img14,
        description: "Public Speaking: Discussing Career Development principles and technical paths."
    },
    {
        original: img16,
        thumbnail: img16,
        description: "Public Speaking: Guiding peers toward professional goals."
    },
    {
        original: img15,
        thumbnail: img15,
        description: "Academic Competitions: Facilitating the University Quiz Contest."
    },
    {
        original: img17,
        thumbnail: img17,
        description: "Tech Shake - Organized by UoB"
    },
     {
        original: img6, 
        thumbnail: img6,
        description: "Event Management: Curating the Photography Contest and Exhibition."
    },
    {
        original: img5, 
        thumbnail: img5,
        description: "Event Management: Ensuring the event ran smoothly from gallery setup to reception."
    },
    {
        original: img7,
        thumbnail: img7,
        description: "Event Management: Showcasing student talent in the auditorium."
    },
    {
        original: img2,
        thumbnail: img2,
        description: "Humanitarian Leadership: Navigating floodwaters to deliver relief in Sylhet, 2024."
    },
    {
        original: img3,
        thumbnail: img3,
        description: "Humanitarian Leadership: Delivering essential food and emergency supplies to isolated communities."
    },
    {
        original: img4,
        thumbnail: img4,
        description: "Humanitarian Leadership: Teamwork and commitment to service during the Sylhet floods."
    },

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