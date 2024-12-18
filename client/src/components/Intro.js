// FIX IMAGE SIZING 

import logo from "../images/logo.jpeg"

function Intro() {
    let hw_skills = ["C", "C++", "RTOS", "Verilog/VHDL", "SystemVerilog", "FPGA Design/Verification"]
    let sw_skills = ["Python", "Java", "Golang", "React", "Express", "MongoDB", "Docker"];

    return (
      <div className="px-5 py-5">
        <div className="flex gap-10 py-10 sm:py-0 md:flex-col sm:flex-col sm:items-center">
            <img className="h-48 w-48 md:h-32 md:w-32" src={logo} alt="[Picture of me]"/>
            <div className="flex flex-col gap-5 py-5 sm:py-0">
                <p className="text-xl sm:text-base">
                    Welcome to my page! I'm Pranay, an ECE Master's student at Georgia Tech.
                    I'm currently a GRA at the GT Cyber-Physical Security Lab where I write firmware for MCUs and FPGAs for vehicle security.
                    I was previously a Software Engineer Intern at PayPal, where I built a full stack network topology application.
                </p>
                <p className="text-xl sm:text-base">
                    I'm very passionate about FPGA design/verification, firmware, and software development!
                </p>
            </div>
        </div>
        <div className='h-[4px] w-full bg-gray-300'></div>

        <div className="py-2">
            <h1 className="text-xl sm:text-base">Hardware/Embedded Skills</h1>
            <div className="flex flex-wrap gap-10 mt-5 justify-center sm:gap-4">
                {hw_skills.map((elem) => (
                    <div className="border border-primary px-5 py-3 hover:bg-primary group">
                        <h1 className="text-primary text-xl sm:text-base group-hover:text-white">{elem}</h1>
                    </div>
                ))}
            </div>
            
        </div>

        <div className="py-2">
            <h1 className="text-xl sm:text-base">Software Skills</h1>
            <div className="flex flex-wrap gap-10 mt-5 justify-center sm:gap-4">
                {sw_skills.map((elem) => (
                    <div className="border border-primary px-5 py-3 hover:bg-primary group">
                        <h1 className="text-primary text-xl sm:text-base group-hover:text-white">{elem}</h1>
                    </div>
                ))}
            </div>
        </div>
        

       
      </div>
    );
  }
  
  export default Intro;
  