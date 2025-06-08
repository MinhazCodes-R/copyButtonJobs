'use client'

export default function Home() {
  return (
    <div>
      <div>Contacts</div>

      <div style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '5px' }}>
        <button style={{ height: '30px' }} onClick={async () => {
          await navigator.clipboard.writeText("https://www.linkedin.com/in/minhazur-rakin/");
        }}>LinkedIn</button>

        <button style={{ height: '30px' }} onClick={async () => {
          await navigator.clipboard.writeText("https://www.minhazcodes.com/");
        }}>Website</button>

        <button style={{ height: '30px' }} onClick={async () => {
          await navigator.clipboard.writeText("https://github.com/MinhazCodes-R");
        }}>GitHub</button>
      </div>

      <h2>Experience</h2>

      {/* Embedded Systems Intern */}
      <div style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '5px' }}>
        <button style={{ height: '30px' }} onClick={async () => await navigator.clipboard.writeText("Embedded Systems Intern")}>
          Embedded Systems Intern
        </button>
        <button style={{ height: '30px' }} onClick={async () => await navigator.clipboard.writeText("Heather Glen Village")}>
          Heather Glen Village
        </button>
        <button style={{ height: '25px' }} onClick={async () => await navigator.clipboard.writeText("Mississauga, Ontario")}>
          Mississauga, Ontario
        </button>
        <button style={{ height: '30px' }} onClick={async () => await navigator.clipboard.writeText("May. 2025 -- Aug. 2025")}>
          May. 2025 -- Aug. 2025
        </button>
        <button style={{ height: '30px' }} onClick={async () => await navigator.clipboard.writeText(
`- Built firmware to control 12+ industrial devices via Modbus RTU over RS-485, extending communication range to 1.2 km and reducing packet loss by 40%
- Wrote I²C and UART drivers for ESP32 microcontrollers to stream sensor data with latency under 50 ms
- Optimized Heating Ventilation and Air Condition HVAC control routines, cutting temperature stabilization lag by 30% in prototype residential units
- Scripted a deployment pipeline that automated 90% of flashing and validation, reducing technician setup time from 45 minutes to under 5 minutes`
        )}>
          Embedded Systems Intern Details
        </button>
      </div>

      <div style={{ height: '30px' }}></div>

      {/* Web Developer */}
      <div style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '5px' }}>
        <button style={{ height: '30px' }} onClick={async () => await navigator.clipboard.writeText("Web Developer")}>
          Web Developer
        </button>
        <button style={{ height: '30px' }} onClick={async () => await navigator.clipboard.writeText("IEEE McMaster Student Branch")}>
          IEEE McMaster Student Branch
        </button>
        <button style={{ height: '25px' }} onClick={async () => await navigator.clipboard.writeText("Hamilton, Ontario")}>
          Hamilton, Ontario
        </button>
        <button style={{ height: '30px' }} onClick={async () => await navigator.clipboard.writeText("Dec. 2024 -- Present")}>
          Dec. 2024 -- Present
        </button>
        <button style={{ height: '30px' }} onClick={async () => await navigator.clipboard.writeText(
`- Built dynamic interface with Next.JS, increasing usability and achieving a 90% satisfaction rate in surveys
- Deployed full-stack application on local Raspberry Pi cluster using Docker and Kubernetes, eliminating monthly hosting costs by a 100% reduction
- Engineered secure authentication with Prisma, Postgres, OAuth, and Bcrypt—streamlining logins and reducing password reset volume`
        )}>
          Web Developer Details
        </button>
      </div>

      <div style={{ height: '30px' }}></div>

      {/* Software Team Lead */}
      <div style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '5px' }}>
        <button style={{ height: '30px' }} onClick={async () => await navigator.clipboard.writeText("Software Team Lead")}>
          Software Team Lead
        </button>
        <button style={{ height: '30px' }} onClick={async () => await navigator.clipboard.writeText("McMaster Aerial Robotics Team")}>
          McMaster Aerial Robotics Team
        </button>
        <button style={{ height: '25px' }} onClick={async () => await navigator.clipboard.writeText("Hamilton, Ontario")}>
          Hamilton, Ontario
        </button>
        <button style={{ height: '30px' }} onClick={async () => await navigator.clipboard.writeText("Jan. 2025 -- Present")}>
          Jan. 2025 -- Present
        </button>
        <button style={{ height: '30px' }} onClick={async () => await navigator.clipboard.writeText(
`- Built object detection system using OpenCV and TensorFlow to enable autonomous drone navigation
- Led PCB design workshops in Altium, improving team hardware debugging speed and reducing integration errors
- Developed and maintained team website with Next.JS and facilitated the migration to AWS`
        )}>
          Software Team Lead Details
        </button>
      </div>

      <div style={{ height: '30px' }}></div>

      {/* Frontend Developer */}
      <div style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '5px' }}>
        <button style={{ height: '30px' }} onClick={async () => await navigator.clipboard.writeText("Frontend Developer")}>
          Frontend Developer
        </button>
        <button style={{ height: '30px' }} onClick={async () => await navigator.clipboard.writeText("Baitul Jannah Islamic Center (BJIC)")}>
          BJIC
        </button>
        <button style={{ height: '25px' }} onClick={async () => await navigator.clipboard.writeText("Scarborough, Ontario")}>
          Scarborough, Ontario
        </button>
        <button style={{ height: '30px' }} onClick={async () => await navigator.clipboard.writeText("Jun. 2024 -- Sept. 2024")}>
          Jun. 2024 -- Sept. 2024
        </button>
        <button style={{ height: '30px' }} onClick={async () => await navigator.clipboard.writeText(
`- Built and launched a responsive community website for BJIC with vanilla JavaScript and modular CSS, improving accessibility on mobile devices and increasing engagement by 40%`
        )}>
          Frontend Developer Details
        </button>
      </div>

      {/* Password */}
      <div style={{ height: '20px' }}></div>
      <button style={{ height: '30px' }} onClick={async () => {
        await navigator.clipboard.writeText("Iamsosocool_101");
      }}>
        password
      </button>
    </div>
  );
}
