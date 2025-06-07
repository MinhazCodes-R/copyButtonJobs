'use client'

export default function Home() {
  return (
    <div>
      <div>Contacts</div>

      <div style={{display:'flex', flexDirection:'column', width:'300px', gap:'5px'}}>
        <button style={{height:'30px'}} onClick={async()=>{
            await navigator.clipboard.writeText("https://www.linkedin.com/in/minhazur-rakin/");
        }}>Copy LinkedIn</button>

        <button style={{height:'30px'}} onClick={async()=>{
            await navigator.clipboard.writeText("https://www.minhazcodes.com/");
        }}>Copy Website</button>

        <button style={{height:'30px'}} onClick={async()=>{
            await navigator.clipboard.writeText("https://github.com/MinhazCodes-R");
        }}>Copy GitHub</button>
      </div>

      <h2>Experience</h2>

      {/* Embedded Systems Intern */}
      <div style={{display:'flex', flexDirection:'column', width:'300px', gap:'5px'}}>
        <button onClick={async()=>{await navigator.clipboard.writeText("Embedded Systems Intern");}}>Copy Embedded Systems Intern</button>
        <button onClick={async()=>{await navigator.clipboard.writeText("Heather Glen Village");}}>Copy Heather Glen Village</button>
        <button onClick={async()=>{await navigator.clipboard.writeText("May. 2025 -- Aug. 2025");}}>Copy May. 2025 -- Aug. 2025</button>
        <button onClick={async()=>{await navigator.clipboard.writeText(`Built firmware to control 12+ industrial devices via Modbus RTU over RS-485, extending communication range to 1.2 km and reducing packet loss by 40%
Wrote I²C and UART drivers for ESP32 microcontrollers to stream sensor data from 20+ nodes with latency under 50 ms
Optimized HVAC control routines, cutting temperature stabilization lag by 30% in prototype residential units
Scripted a deployment pipeline that automated 90% of flashing and validation, reducing technician setup time from 45 min to under 5 min`);}}>Copy Embedded Description</button>
      </div>

      <div style={{height:'30px'}}></div>

      {/* Web Developer */}
      <div style={{display:'flex', flexDirection:'column', width:'300px', gap:'5px'}}>
        <button onClick={async()=>{await navigator.clipboard.writeText("Web Developer");}}>Copy Web Developer</button>
        <button onClick={async()=>{await navigator.clipboard.writeText("IEEE McMaster Student Branch");}}>Copy IEEE McMaster Student Branch</button>
        <button onClick={async()=>{await navigator.clipboard.writeText("Dec. 2024 -- Present");}}>Copy Dec. 2024 -- Present</button>
        <button onClick={async()=>{await navigator.clipboard.writeText(`Built dynamic interface with Next.js, increasing usability and achieving a 90% satisfaction rate in surveys
Deployed full-stack application on local Raspberry Pi cluster using Docker and Kubernetes, eliminating monthly hosting costs by a 100% reduction
Engineered secure authentication with Prisma, Postgres, OAuth, and Bcrypt—streamlining logins and reducing password reset volume`);}}>Copy Web Dev Description</button>
      </div>

      <div style={{height:'30px'}}></div>

      {/* Software Team Lead */}
      <div style={{display:'flex', flexDirection:'column', width:'300px', gap:'5px'}}>
        <button onClick={async()=>{await navigator.clipboard.writeText("Software Team Lead");}}>Copy Software Team Lead</button>
        <button onClick={async()=>{await navigator.clipboard.writeText("McMaster Aerial Robotics Team");}}>Copy McMaster Aerial Robotics Team</button>
        <button onClick={async()=>{await navigator.clipboard.writeText("Jan. 2025 -- Present");}}>Copy Jan. 2025 -- Present</button>
        <button onClick={async()=>{await navigator.clipboard.writeText(`Built object detection system using OpenCV and TensorFlow to enable autonomous drone navigation in indoor environments
Led PCB design workshops in Altium, improving team hardware debugging speed and reducing integration errors
Developed and maintained team website with Next.js to support recruitment and sponsorship and facilitated the migration to AWS`);}}>Copy Software Lead Description</button>
      </div>

      <div style={{height:'30px'}}></div>

      {/* Frontend Developer */}
      <div style={{display:'flex', flexDirection:'column', width:'300px', gap:'5px'}}>
        <button onClick={async()=>{await navigator.clipboard.writeText("Frontend Developer");}}>Copy Frontend Developer</button>
        <button onClick={async()=>{await navigator.clipboard.writeText("Baitul Jannah Islamic Center (BJIC)");}}>Copy BJIC</button>
        <button onClick={async()=>{await navigator.clipboard.writeText("Jun. 2024 -- Sept. 2024");}}>Copy Jun. 2024 -- Sept. 2024</button>
        <button onClick={async()=>{await navigator.clipboard.writeText("Built and launched a responsive community website for BJIC with vanilla JavaScript and modular CSS, improving accessibility on mobile devices and increasing engagement by 40%");}}>Copy BJIC Description</button>
      </div>
    </div>
  );
}
