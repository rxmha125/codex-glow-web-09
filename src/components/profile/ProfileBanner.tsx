import profileBanner from '@/assets/profile-banner.jpg';

const ProfileBanner = () => {
  return (
    <div className="relative h-[200px] bg-muted overflow-hidden">
      <img 
        src={profileBanner} 
        alt="Profile banner - Rx Codex AI branding"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
    </div>
  );
};

export default ProfileBanner;
