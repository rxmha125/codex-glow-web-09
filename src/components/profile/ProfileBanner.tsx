import profileBanner from '@/assets/profile-banner.jpg';

const ProfileBanner = () => {
  return (
    <div className="relative h-[200px] bg-muted">
      <img 
        src={profileBanner} 
        alt="Profile banner - Rx Codex AI branding"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProfileBanner;
