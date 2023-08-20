import Formations from '@/components/portfolio/Formations';
import Header from '@/components/portfolio/Header';
import LatestBlogPosts from '@/components/portfolio/LatestBlogPosts';
import MainProjects from '@/components/portfolio/MainProjects';
import MainSkills from '@/components/portfolio/MainSkills';
import Presentation from '@/components/portfolio/Presentation';
import ProfessionalProfile from '@/components/portfolio/ProfessionalProfile';
import Skillset from '@/components/portfolio/Skillset';

export default function Home() {
  return (
    <div>
      <Header />

      <Presentation />

      <Skillset />

      <ProfessionalProfile />

      <MainProjects />

      <Formations />

      <MainSkills />

      <LatestBlogPosts />
    </div>
  );
}
