import { Github, Linkedin, Mail, BookOpen } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/sajit21",
    icon: Github,
    username: "@sajitmaharjan",
  },
  {
    name: "LinkedIn",
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/sajit-maharjan-8a6041261",
    icon: Linkedin,
    username: "sajitmaharjan",
  },
  {
    name: "Medium",
    href: process.env.NEXT_PUBLIC_MEDIUM_URL || "https://medium.com/@sajitmaharjan",
    icon: BookOpen,
    username: "@sajitmaharjan",
  },
  {
    name: "Email",
    href: `mailto:${process.env.NEXT_PUBLIC_EMAIL || "sajitmhr13@gmail.com"}`,
    icon: Mail,
    username: process.env.NEXT_PUBLIC_EMAIL || "sajitmhr13@gmail.com",
  },
];

export default socialLinks;
