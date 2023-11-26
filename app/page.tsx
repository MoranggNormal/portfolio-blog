"use client"
import Formations from '@/components/portfolio/Formations';
import Header from '@/components/portfolio/Header';
import LatestBlogPosts from '@/components/portfolio/LatestBlogPosts';
import MainProjects from '@/components/portfolio/MainProjects';
import HardAndSoftSkills from '@/components/portfolio/HardAndSoftSkills';
import Presentation from '@/components/portfolio/Presentation';
import ProfessionalProfile from '@/components/portfolio/ProfessionalProfile';
import Skillset from '@/components/portfolio/Skillset';
import BottomNavigation from '@/components/portfolio/BottomNavigation';
import useSimpleLoading from '@/components/hooks/useSimpleLoading';

export default function Home() {

  const loading = useSimpleLoading();

  return (
    <div>
      <Header loading={loading}/>

      <Presentation loading={loading} />

      <Skillset loading={loading} />

      <ProfessionalProfile loading={loading} />

      {/* <MainProjects /> */}

      <Formations loading={loading} />

      <HardAndSoftSkills />

      <LatestBlogPosts />

      <BottomNavigation loading={loading} />
    </div>
  );
}
