'use client'
import React from 'react';
import { Card } from '@nextui-org/react';
import { Grid, Typography as Text, Box as Row, Container as Col } from '@mui/material';
import Image from 'next/image';

const WhatIsSIH: React.FC = () => {
    return (

        
        <section style={{ padding: '2rem 1rem' }}>
             <style jsx global>{`
                /* Hide scrollbar */
                .scrollable-images::-webkit-scrollbar {
                    display: none; /* Hides the scrollbar */
                }

                /* Enable smooth scrolling */
                .scrollable-images {
                    -ms-overflow-style: none;  /* For Internet Explorer */
                    scrollbar-width: none;  /* For Firefox */
                    overflow-x: auto; /* Enables scrolling */
                    white-space: nowrap; /* Prevents wrapping to the next line */
                    WebkitOverflowScrolling: 'touch'; /* Smooth scrolling on touch devices */
                    padding-bottom: 1rem; /* Optional padding for visual effect */
                }
            `}</style>

            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <Card style={{ padding: '1.5rem', borderRadius: '12px', boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)', background: 'rgb(255, 246, 238)' }}>
                        <Text variant="h3" style={{ fontWeight: 'bold', marginBottom: '1rem', color: 'rgb(0, 36, 73)' }}>WHAT IS SIH?</Text>
                        <Text variant="body1" style={{ marginBottom: '1rem', color: 'rgb(0, 36, 73)' }}>
                            Smart India Hackathon (SIH) is a premier nationwide initiative designed to engage students in solving some of the most pressing challenges faced in everyday life. Launched to foster a culture of innovation and practical problem-solving, SIH provides a dynamic platform for students to develop and showcase their creative solutions to real-world problems.
                        </Text>
                        <Text variant="body1" style={{ marginBottom: '1.5rem', color: 'rgb(0, 36, 73)' }}>
                            Since its inception, SIH has garnered significant success in promoting out-of-the-box thinking among young minds, particularly engineering students from across India. Each edition has built on the previous one, refining its approach and expanding its impact. The hackathon not only offers students an opportunity to showcase their skills but also encourages collaboration with industry experts, government agencies, and other stakeholders.
                        </Text>
                    </Card>
                </Grid>

                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    <iframe
                        width="60%" // Adjust width to ensure the video takes up the required space
                        height="250"
                        src="https://www.youtube.com/embed/0ZYG_zz2aoI"
                        title="SIH 2024"
                        style={{ borderRadius: '8px' }}
                    />
                    <img
                        src="https://envs.sh/14a.png" // Replace with your image URL
                        alt="SIH Image"
                        style={{
                            marginLeft: '1rem', // Small gap between video and image
                            width: '500px', // Adjust image size as needed
                            height: 'auto', // Maintain image aspect ratio
                            borderRadius: '8px',
                        }}
                    />

                </Grid>

            </Grid >

            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Card
                    style={{
                        padding: '2rem', // Added more padding for a cleaner look
                        borderRadius: '12px',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        width: '80%', // Ensures it doesn't take full width
                        backgroundColor: 'transparent', // Transparent background
                    }}
                >
                    <Text variant="h4" style={{ fontWeight: 'bold', marginTop: '1rem', color: 'rgb(0, 36, 73)', marginBottom: '1rem' }}>
                        Timeline
                    </Text>
                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        overflowX: 'scroll', // Enables scrolling
                        whiteSpace: 'nowrap', // Prevents wrapping to the next line
                        paddingBottom: '1rem', // Optional padding for visual effect
                        WebkitOverflowScrolling: 'touch', // Smooth scrolling on touch devices
                    }}>
                        <img
                            src="https://envs.sh/1UZ.jpg" // Replace with your image URL
                            alt="SIH Image"
                            style={{
                                width: '500px', // Adjust image size as needed
                                height: 'auto', // Maintain image aspect ratio
                                borderRadius: '8px',
                                display: 'inline-block', // Keeps images in a horizontal line
                                flexShrink: 0, // Prevents images from shrinking
                            }}
                        />
                        <img
                            src="https://envs.sh/1U5.jpg" // Replace with your image URL
                            alt="SIH Image"
                            style={{
                                width: '500px', // Adjust image size as needed
                                height: 'auto', // Maintain image aspect ratio
                                borderRadius: '8px',
                                display: 'inline-block', // Keeps images in a horizontal line
                                flexShrink: 0, // Prevents images from shrinking
                            }}
                        />
                        {/* Add more images as needed */}
                    </div>
                </Card>
            </Grid>









        </section >
    );
};

export default WhatIsSIH;
