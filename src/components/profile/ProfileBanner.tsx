import profileBanner from '@/assets/profile-banner.jpg';

const ProfileBanner = () => {
  return (
    <div className="relative h-[200px] bg-muted overflow-hidden group">
      <img 
        src={profileBanner} 
        alt="Profile banner - Rx Codex AI branding"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
    </div>
  );
};

export default ProfileBanner;
