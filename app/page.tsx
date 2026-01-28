import HeroSection from '@/components/home/hero';
import TestimonialsSection from '@/components/home/testimonials';
import WhyChooseUs from '@/components/home/why-choose-us';
import GallerySection from '@/components/home/gallery';
import CTASection from '@/components/home/cta';
import BlogSection from '@/components/home/blog';
import FAQSection from '@/components/home/faq';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <GallerySection />
      <CTASection />
      <BlogSection />
      <FAQSection />
    </>
  );
}
