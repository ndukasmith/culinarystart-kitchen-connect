
import { Button } from "@/components/ui/button";

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Cook up your next big idea!
          </h1>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Discover professional kitchen spaces available for rent. From commercial-grade equipment to flexible booking options, find the perfect space to bring your culinary vision to life.
          </p>
          
          <Button 
            size="lg" 
            onClick={onGetStarted}
            className="bg-foreground text-background hover:bg-foreground/90 px-8 py-3 text-lg"
          >
            Start Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
