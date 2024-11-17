import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/ui/header').then(mod => mod.Header), { 
  ssr: false,
  loading: () => <div className="h-16 bg-white/80 backdrop-blur-sm" />
});
const Hero = dynamic(() => import('@/components/ui/hero').then(mod => mod.Hero), { 
  ssr: false,
  loading: () => <div className="min-h-[600px] bg-gray-100" />
});
const ProductSection = dynamic(() => import('@/components/ui/product-section').then(mod => mod.ProductSection), { ssr: false });
const LocationsSection = dynamic(() => import('@/components/ui/locations-section').then(mod => mod.LocationsSection), { ssr: false });
const TestimonialsSection = dynamic(() => import('@/components/ui/testimonials-section').then(mod => mod.TestimonialsSection), { ssr: false });
const InstagramFeed = dynamic(() => import('@/components/ui/instagram-feed').then(mod => mod.InstagramFeed), { ssr: false });
const Footer = dynamic(() => import('@/components/ui/footer').then(mod => mod.Footer), { ssr: false });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProductSection />
      <LocationsSection />
      <TestimonialsSection />
      <InstagramFeed />
      <Footer />
    </>
  );
}
