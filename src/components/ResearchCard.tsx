import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ResearchCardProps {
  date: string;
  title: string;
  description: string;
  category: string;
  onReadMore: () => void;
  showFullContent?: boolean;
  image?: string;
}

const ResearchCard = ({ 
  date, 
  title, 
  description, 
  category, 
  onReadMore, 
  showFullContent = false,
  image 
}: ResearchCardProps) => {
  return (
    <>
      {/* Mobile Layout - Clean and minimal (phones only) */}
      <div className="block sm:hidden space-y-4">
        {/* Image */}
        <div className="relative">
          <div className="aspect-video rounded-xl overflow-hidden">
            {image ? (
              <img 
                src={image} 
                alt={`${title} - AI research paper thumbnail`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto bg-white/10 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/20 rounded" />
                  </div>
                  <p className="text-xs text-muted-foreground">Image Placeholder</p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Content */}
        <div className="space-y-3">
          {/* Date */}
          <div className="text-sm text-muted-foreground">
            {date}
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-foreground leading-tight">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-muted-foreground leading-relaxed text-sm">
            {description}
          </p>
          
          {/* Read button */}
          <div className="pt-2">
            <Button 
              onClick={onReadMore}
              variant="ghost" 
              className="bg-transparent border border-white/20 text-foreground hover:bg-white/10 hover:border-white/40 hover:text-foreground px-6 py-2 rounded-full transition-all duration-300 text-sm"
            >
              READ
            </Button>
          </div>
        </div>
      </div>

      {/* Tablet & Desktop Layout - Card design */}
      <Card className="hidden sm:block relative overflow-hidden bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl">
        {/* Background gradient glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-blue-500/20 opacity-30" />
        
        <CardContent className="relative p-6 md:p-8 lg:p-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Left content */}
            <div className="space-y-6">
              {/* Category and Date */}
              <div className="space-y-2">
                <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
                  {category}
                </div>
                <div className="text-sm text-muted-foreground">
                  {date}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                {title}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {description}
              </p>
              
              {/* Read button */}
              <div className="pt-4">
                <Button 
                  onClick={onReadMore}
                  variant="ghost" 
                  className="bg-transparent border border-white/20 text-foreground hover:bg-white/10 hover:border-white/40 hover:text-foreground px-8 py-2 rounded-full transition-all duration-300"
                >
                  READ
                </Button>
              </div>
            </div>
            
            {/* Right content - Image placeholder or actual image */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-white/10 overflow-hidden">
                {image ? (
                  <img 
                    src={image} 
                    alt={`${title} - Comprehensive research documentation`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 mx-auto bg-white/10 rounded-lg flex items-center justify-center">
                        <div className="w-8 h-8 bg-white/20 rounded" />
                      </div>
                      <p className="text-xs text-muted-foreground">Image Placeholder</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-50" />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ResearchCard;