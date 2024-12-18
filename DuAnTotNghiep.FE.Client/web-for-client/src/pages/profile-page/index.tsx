import "../../assets/css/info.prefixed.css";
import React, { useState } from 'react';
import SideBarInfo from '../../components/profile/sideBarInfo';
import ProfileSectionForm from '../../components/profile/sectionProfile';

const ProfilePage: React.FC = () => {
  const [section, setSection] = useState<string>('profile');

  const handleNavigate = (sectionName: string) => {
    setSection(sectionName);
  };

  return (
    <div className="info">
      <main className="container ">
      <div className="row">
        <SideBarInfo onNavigate={handleNavigate} />
        <ProfileSectionForm section={section} />
      </div>
    </main>
    </div>
  );
};

export default ProfilePage;
