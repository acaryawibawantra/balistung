import HeroSection from '@/components/home/hero';
import Container from '@/components/layout/container';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Container>
        <div className="py-20 text-center text-gray-400">
          <p>More sections coming soon...</p>
        </div>
      </Container>
    </>
  );
}
