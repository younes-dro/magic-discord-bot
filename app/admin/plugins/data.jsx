import Image from 'next/image';

const data = [
  {
    id: 1,
    svg: <Image src="/assets/dashboard/images/menu/plugins/moderator.svg" alt="Moderator" width={50} height={50} />,
    title: "Moderator",
    text: "Enhance Server Security with Automated Moderation and Empower Your Moderators with Robust Moderation Tools",
    onEnable: () => alert("Plugin 1 enabled.")
  },
  {
    id:2,
    svg: <Image src="/assets/dashboard/images/menu/plugins/welcome.svg" alt="Your SVG 2" width={50} height={50} />,
    title: "Welcome",
    text: "Automate the process of sending messages, assigning roles to new members, and notifying when members leave your server.",
    onEnable: () => alert("Plugin 2 enabled.")
  },
  
];

export default data;
