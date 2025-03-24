'use client';

import { Badge } from "@/components/ui/badge";
import { User, Code, Briefcase, Heart, Calendar, MapPin } from "lucide-react";
import { VideoBox } from "@/components/ui/video-box";

interface AboutMeProps {
  title?: string;
  subtitle?: string;
  description?: string;
  skills?: string[];
  videoSrc?: string;
  videoPoster?: string;
  image?: string;
  personalInfo?: {
    name?: string;
    location?: string;
    experience?: string;
    specialties?: string[];
  };
}

function AboutMe({
  title = "About Me",
  subtitle = "Sexual Wellness Coach",
  description = "I'm a certified sexual wellness coach dedicated to helping individuals and couples embrace their authentic selves. With a compassionate approach and extensive training, I create a safe space for exploration and growth in all aspects of sexual wellbeing and personal freedom.",
  skills = ["Intimacy Coaching", "Relationship Counseling", "Sexual Education", "Mindfulness Practices", "Trauma-Informed Care"],
  videoSrc = "https://static.videezy.com/system/resources/previews/000/005/529/original/Reaviling_Sjusj%C3%B8en_smaller.mp4",
  videoPoster = "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2574&auto=format&fit=crop",
  image,
  personalInfo = {
    name: "Dr. Jordan Taylor",
    location: "New York, NY",
    experience: "10+ years",
    specialties: ["LGBTQ+ Affirming", "Trauma-Informed", "Sex-Positive Approach"]
  }
}: AboutMeProps) {
  return (
    <div className="w-full py-20 lg:py-32 bg-background relative overflow-hidden" data-component-name="Home">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)] -z-10"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
          <div className="flex-1 order-2 lg:order-1">
            <div className="relative group">
              {videoSrc ? (
                <VideoBox 
                  src={videoSrc}
                  poster={videoPoster}
                  title={personalInfo?.name || "Profile"}
                  subtitle={subtitle}
                  aspectRatio="square"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                />
              ) : image ? (
                <div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="relative rounded-xl overflow-hidden aspect-square">
                    <img 
                      src={image} 
                      alt={personalInfo?.name || "Profile"} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                      <h3 className="text-xl font-semibold">{personalInfo?.name}</h3>
                      <p className="text-sm opacity-90">{subtitle}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-muted rounded-xl w-full aspect-square flex items-center justify-center">
                  <User className="h-24 w-24 text-muted-foreground/50" />
                </div>
              )}
            </div>
          </div>
          
          <div className="flex gap-6 flex-col flex-1 order-1 lg:order-2">
            <div>
              <Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-none">
                <Heart className="h-3 w-3 mr-1" />
                {subtitle}
              </Badge>
            </div>
            
            <div className="flex gap-4 flex-col">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-left">
                {title}
              </h2>
              
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground text-left">
                {description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{personalInfo?.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-medium">{personalInfo?.experience}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Specialties</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {personalInfo?.specialties?.map((specialty, index) => (
                        <span key={index} className="text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Skills</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {skills.map((skill, index) => (
                        <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AboutMe };
