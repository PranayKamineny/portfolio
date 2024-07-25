import paypal_proj_img from "../images/paypal_project_img.jpg"
import mips_img from "../images/mips_img.jpg"
import pcb_img from "../images/pcb_img.jpg"

export const projects = [
    {
        id: 1,
        title: "PCB Defect Localization",
        image: pcb_img,
        description: "Used a U-Net architecture to detect and localize defects on printed circuit boards (PCBs).",
        skills: ["Python", "Neural Networks", "Image Processing"],
        link: "https://colab.research.google.com/drive/19sTM_hrFNS-npI94X92kqXAJDTzbrmZv?usp=sharing"
    },
    {
        id: 2,
        title: "Network Topology",
        image: paypal_proj_img,
        description: "Developed full stack network topology application to optimize detection of network faults.",
        skills: ["React", "Node.js", "JavaScript", "Golang", "Docker", "Kubernetes"],
        link: "https://docs.google.com/presentation/d/1RddJgRRvGUc54Kv_BadJW7B29HLIJOiZm1tRyuuigcU/edit?usp=sharing"
    },
    {
        id: 3,
        title: "Dual-Core MIPS CPU",
        image: mips_img,
        description: "Designed a dual-core CPU in Verilog capable of executing MIPS instructions. Consisted of datapath, controller, ALU, etc.",
        skills: ["Verilog, SystemVerilog, Computer Architecture"],
        link: "https://github.com/PranayKamineny/dual-core-mips"
    },
]