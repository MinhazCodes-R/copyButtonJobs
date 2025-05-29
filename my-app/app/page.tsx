'use client'

export default function Home() {

  return (
    <div>
      <div>Contacts</div>

      <div style={{display:'flex', flexDirection:'column', width:'200px', gap:'5px'}}>

        <button style={{height:'30px'}} onClick={async()=>{
            await navigator.clipboard.writeText("https://www.linkedin.com/in/minhazur-rakin/");
            console.log('success in copy');
        }}>LinkedIn</button>

        <button style={{height:'30px'}} onClick={async()=>{
            await navigator.clipboard.writeText("https://minhazcodes.com/");
            console.log('success in copy');
        }}>Website</button>

        <button style={{height:'30px'}} onClick={async()=>{
            await navigator.clipboard.writeText("https://github.com/MinhazCodes-R");
            console.log('success in copy');
        }}>GitHub</button>

      </div>

      <h2>Experience</h2>

      <div style={{display:'flex', flexDirection:'column', width:'200px', gap:'5px'}}>

        <button style={{height:'30px'}} onClick={async()=>{
            await navigator.clipboard.writeText("Embedded Systems Intern");
            console.log('success in copy');
        }}>Embedded Systems Intern</button>
        <button style={{height:'30px'}} onClick={async()=>{
            await navigator.clipboard.writeText("Heather Glen Village");
            console.log('success in copy');
        }}>Company</button>
        <button style={{height:'30px'}} onClick={async()=>{
            await navigator.clipboard.writeText("May 2025 – Aug 2025");
            console.log('success in copy');
        }}>Date</button>
        <button style={{height:'30px'}} onClick={async()=>{
            await navigator.clipboard.writeText(
`- Engineered embedded software for 12+ industrial devices using Modbus RTU over RS-485, increasing communication range to 1.2 km and reducing data loss by 40%
- Implemented I²C and UART drivers on ESP32/Arduino boards, enabling real-time data collection from 20+ sensors with latency under 50 ms
- Contributed to debugging and validating HVAC control logic, achieving 30% faster response time for temperature adjustment in prototype residential units
- Developed internal tooling that automated 90% of firmware deployment tasks, cutting technician setup time from 45 minutes to under 5 minutes`
            );
            console.log('success in copy');
        }}>Description</button>

      </div>

      <div style={{height:'30px'}}></div>

      <div style={{display:'flex', flexDirection:'column', width:'200px', gap:'5px'}}>

        <button style={{height:'30px'}} onClick={async()=>{
            await navigator.clipboard.writeText("Web Developer");
            console.log('success in copy');
        }}>Web Developer</button>
        <button style={{height:'30px'}} onClick={async()=>{
            await navigator.clipboard.writeText("IEEE McMaster Student Branch");
            console.log('success in copy');
        }}>Company</button>
        <button style={{height:'30px'}} onClick={async()=>{
            await navigator.clipboard.writeText("Dec 2024 – Present");
            console.log('success in copy');
        }}>Date</button>
        <button style={{height:'30px'}} onClick={async()=>{
            await navigator.clipboard.writeText(
`- Built dynamic frontend UI using Next.js and Tailwind, achieving a 90% satisfaction rate in user surveys
- Deployed applications with Docker and Kubernetes on a local Raspberry Pi cluster, reducing hosting costs to zero
- Implemented a secure authentication system with Prisma, PostgreSQL, OAuth, and Bcrypt, streamlining login and reducing password reset requests`
            );
            console.log('success in copy');
        }}>Description</button>

      </div>

      <div style={{height:'30px'}}></div>

      <div style={{display:'flex', flexDirection:'column', width:'200px', gap:'5px'}}>

        <button style={{height:'30px'}} onClick={async()=>{
            await navigator.clipboard.writeText("Software Team Lead");
            console.log('success in copy');
        }}>Software Team Lead</button>
        <button style={{height:'30px'}} onClick={async()=>{
            await navigator.clipboard.writeText("McMaster Aerial Robotics Team");
            console.log('success in copy');
        }}>Company</button>
        <button style={{height:'30px'}} onClick={async()=>{
            await navigator.clipboard.writeText("Jan 2025 – Present");
            console.log('success in copy');
        }}>Date</button>
        <button style={{height:'30px'}} onClick={async()=>{
            await navigator.clipboard.writeText(
`- Interviewed over 100 candidates and onboarded 10 suitable team members, improving project efficiency
- Developed object-detection algorithms with OpenCV and TensorFlow for autonomous navigation
- Conducted PCB design workshops using Altium for seamless hardware-software integration
- Led website development with Next.js, planning Dockerization and AWS EC2 deployment to improve team accessibility and funding`
            );
            console.log('success in copy');
        }}>Description</button>

      </div>

      <div style={{height:'30px'}}></div>

      <div style={{display:'flex', flexDirection:'column', width:'200px', gap:'5px'}}>

        <button style={{height:'30px'}} onClick={async()=>{
            await navigator.clipboard.writeText("Frontend Developer");
            console.log('success in copy');
        }}>Frontend Developer</button>
        <button style={{height:'30px'}} onClick={async()=>{
            await navigator.clipboard.writeText("Baitul Jannah Islamic Center (BJIC)");
            console.log('success in copy');
        }}>Company</button>
        <button style={{height:'30px'}} onClick={async()=>{
            await navigator.clipboard.writeText("Jun 2024 – Sep 2024");
            console.log('success in copy');
        }}>Date</button>
        <button style={{height:'30px'}} onClick={async()=>{
            await navigator.clipboard.writeText("- Built and launched a responsive community website with vanilla JavaScript and modular CSS, improving mobile engagement by 40%");
            console.log('success in copy');
        }}>Description</button>

      </div>

    </div>
  );
}
