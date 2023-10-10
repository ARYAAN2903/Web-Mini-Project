import React from "react";
import { FaEnvelopeSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import './about.css';
import image1 from '../assets/Advay.webp'; // Import your WebP images
import image2 from '../assets/Dhruuv.webp';
import image3 from '../assets/Advay.webp';

function AboutUs() {
    const teamMembers = [
        {
            name: "Aryaan Sawant",
            role: "Web Developer",
            imageSrc: image2,
            socialLinks: {
                twitter: "#",
                github: "#",
                
            },
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quia vitae natus nihil deleniti ipsum voluptatum excepturi quibusdam eligendi nulla repudiandae voluptate enim doloribus asperiores esse rem, consectetur, corporis dolores."
        },
        {
            name: "Dhruuv Naik",
            role: "Web Developer",
            imageSrc: image2, // Replace with John's image URL
            socialLinks: {
                twitter: "#",
                github: "#",
                
            },
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quia vitae natus nihil deleniti ipsum voluptatum excepturi quibusdam eligendi nulla repudiandae voluptate enim doloribus asperiores esse rem, consectetur, corporis dolores."
        },
        {
            name: "Advay Gujar",
            role: "Designer",
            imageSrc: image3, // Replace with Jane's image URL
            socialLinks: {
                twitter: "#",
                github: "#",
                
            },
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quia vitae natus nihil deleniti ipsum voluptatum excepturi quibusdam eligendi nulla repudiandae voluptate enim doloribus asperiores esse rem, consectetur, corporis dolores."
        },
    ];

    return (
        <section className="section-white">
            <div className="container">
                <div className="row">

                    {teamMembers.map((member, index) => (
                        <div className="col-sm-4 col-md-4" key={index}>
                            <div className="team-item">
                                <img
                                    src={member.imageSrc}
                                    className="team-img"
                                    alt={member.name}
                                />
                                <h3>{member.name}</h3>
                                <div className="team-info">
                                    <p>{member.role}</p>
                                    <p>{member.description}</p>

                                    <ul className="team-icon">
                                        <li>
                                            <a href={member.socialLinks.twitter} className="twitter">
                                                <FaEnvelopeSquare/>{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a href={member.socialLinks.github} className="github">
                                                <FaGithubSquare />
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
