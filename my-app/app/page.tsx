'use client'
import React, { useState } from 'react';

export default function Home() {
  const [copySuccess, setCopySuccess] = useState('');

  const textToCopy = "Hello, world!";

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess('Copied successfully!');
    } catch (error) {
      setCopySuccess('Failed to copy!');
      console.error('Error copying text: ', error);
    }
  };

  return (
    <div>
      <div>Contacts</div>

      <div style={{display:'flex', flexDirection:'column', width:'200px', gap:'5px'}}>


      <button style={{height:'30px'}} onClick={async()=>{
        try {
          await navigator.clipboard.writeText("https://www.linkedin.com/in/minhazur-rakin/");
          console.log('success in copy')
        } catch (error) {
          console.log('failed to copy')
        }

      }}>LinkedIn</button>
      <button style={{height:'30px'}} onClick={async()=>{
        try {
          await navigator.clipboard.writeText("https://minhazcodes.com/");
          console.log('success in copy')
        } catch (error) {
          console.log('failed to copy')
        }

      }}
      >Website</button>

      <button style={{height:'30px'}} onClick={async()=>{
        try {
          await navigator.clipboard.writeText("https://github.com/MinhazCodes-R");
          console.log('success in copy')
        } catch (error) {
          console.log('failed to copy')
        }

      }}>GitHub</button>



      </div>


      <h2>Experience</h2>

      <div style={{display:'flex', flexDirection:'column', width:'200px', gap:'5px'}}>


      <button style={{height:'30px'}} onClick={async()=>{
        try {
          await navigator.clipboard.writeText("Webmaster");
          console.log('success in copy')
        } catch (error) {
          console.log('failed to copy')
        }

      }}>Webmaster</button>
      <button style={{height:'30px'}} onClick={async()=>{
        try {
          await navigator.clipboard.writeText("IEEE McMaster Student Branch");
          console.log('success in copy')
        } catch (error) {
          console.log('failed to copy')
        }

      }}>Company</button>
      <button onClick={async()=>{
        try {
          await navigator.clipboard.writeText("n/a");
          console.log('success in copy')
        } catch (error) {
          console.log('failed to copy')
        }

      }}>Date</button>
      <button style={{height:'30px'}} onClick={async()=>{
        try {
          await navigator.clipboard.writeText("- Built dynamic frontend user interface using Next.js, Tailwind, and related libraries enhancing user experience demonstrated through a satisfaction rate of 90% in a survey\n- Implemented Linux-based personal servers for hosting and deployment, reducing monthly cost by 100% and ensuring reliable site performance \n- Designed and implemented a secure login and database system using PostgreSQL and integrated Bcrypt for password hashing to protect user credentials");
          console.log('success in copy')
        } catch (error) {
          console.log('failed to copy')
        }

      }}>Description</button>

      </div>

      <div className="" style={{height:'30px'}}></div>

      <div style={{display:'flex', flexDirection:'column', width:'200px', gap:'5px'}}>




      <button onClick={async()=>{
        try {
          await navigator.clipboard.writeText("Frontend Developer");
          console.log('success in copy')
        } catch (error) {
          console.log('failed to copy')
        }

      }}>Frontend Developer</button>
      <button style={{height:'30px'}} onClick={async()=>{
        try {
          await navigator.clipboard.writeText("Baitul Jannah Islamic Center");
          console.log('success in copy')
        } catch (error) {
          console.log('failed to copy')
        }

      }}>Company</button>
      <button>Date</button>
      <button style={{height:'30px'}} onClick={async()=>{
        try {
          await navigator.clipboard.writeText("- Developed and launched a responsive web application utilizing modern frameworks, boosting monthly traffic by 40% \n- Delivered a user-friendly, fully functional website within two months, meeting all requirements and deadlines on time");
          console.log('success in copy')
        } catch (error) {
          console.log('failed to copy')
        }

      }}>Description</button>

      </div>

      <div className="" style={{height:'30px'}}></div>

      <div style={{display:'flex', flexDirection:'column', width:'200px', gap:'5px'}}>


      <button onClick={async()=>{
        try {
          await navigator.clipboard.writeText("Software Tean Lead");
          console.log('success in copy')
        } catch (error) {
          console.log('failed to copy')
        }

      }}>Software Team Lead</button>
      <button style={{height:'30px'}} onClick={async()=>{
        try {
          await navigator.clipboard.writeText("McMaster Aerial Robotics Team");
          console.log('success in copy')
        } catch (error) {
          console.log('failed to copy')
        }

      }}>Company</button>
      <button>Date</button>
      <button style={{height:'30px'}} onClick={async()=>{
        try {
          await navigator.clipboard.writeText("- Interviewed over 30 candidates and onboarded 10 suitable team members, improving project efficiency \n- Coordinated cross-functional collaboration with other sub-teams to ensure seamless integration of software systems onto all hardware components\n - Lead weekly team meetings to coordinate tasks, produce status reports, and ensure deadlines are met");
          console.log('success in copy')
        } catch (error) {
          console.log('failed to copy')
        }

      }}>Description</button>

      </div>

      <div className="" style={{height:'30px'}}></div>

    <div style={{display:'flex', flexDirection:'column', width:'200px', gap:'5px'}}>


    <button style={{height:'30px'}} onClick={async()=>{
        try {
          await navigator.clipboard.writeText("Math Tutor");
          console.log('success in copy')
        } catch (error) {
          console.log('failed to copy')
        }

      }}>Math Tutor</button>
    <button style={{height:'30px'}} onClick={async()=>{
        try {
          await navigator.clipboard.writeText("A+ Academy");
          console.log('success in copy')
        } catch (error) {
          console.log('failed to copy')
        }

      }}>Company</button>
    <button>Date</button>
    <button style={{height:'30px'}} onClick={async()=>{
        try {
          await navigator.clipboard.writeText("- Customized math and English tutoring for elementary to high school students, collaborating with teachers to adjust learning plans and resulting in a 20% average improvement in student grades");
          console.log('success in copy')
        } catch (error) {
          console.log('failed to copy')
        }

      }}>Description</button>

    </div>



      {copySuccess && <p>{copySuccess}</p>}
    </div>
  );
}
