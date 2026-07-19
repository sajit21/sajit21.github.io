import socialLinks from "@/config/social-links";
import SocialCard from "./social-card";

export default function ContactList() {
  return (
    <div className="space-y-3">
      {socialLinks.map((link) => (
        <SocialCard key={link.name} link={link} />
      ))}
    </div>
  );
}
