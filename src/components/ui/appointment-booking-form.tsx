"use client";

import { useState } from "react";
import { CalendarIcon, Clock, User, Mail, Phone, MessageSquare } from "lucide-react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const timeSlots = [
  { time: "09:00", available: true },
  { time: "09:30", available: true },
  { time: "10:00", available: true },
  { time: "10:30", available: true },
  { time: "11:00", available: true },
  { time: "11:30", available: true },
  { time: "12:00", available: false },
  { time: "12:30", available: true },
  { time: "13:00", available: true },
  { time: "13:30", available: true },
  { time: "14:00", available: true },
  { time: "14:30", available: false },
  { time: "15:00", available: false },
  { time: "15:30", available: true },
  { time: "16:00", available: true },
  { time: "16:30", available: true },
  { time: "17:00", available: true },
  { time: "17:30", available: true },
];

export function AppointmentBookingForm() {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>("");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      // Reset form after success
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-card/60 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left side - Form info */}
          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Book Your Consultation</h3>
            <p className="text-muted-foreground mb-8">
              Take the first step toward personal growth and sexual wellness by scheduling a private consultation session.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mt-1 shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Session Duration</h4>
                  <p className="text-sm text-muted-foreground">Initial consultations are 60 minutes</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mt-1 shrink-0">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Private & Confidential</h4>
                  <p className="text-sm text-muted-foreground">All sessions are completely private and confidential</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mt-1 shrink-0">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Personalized Approach</h4>
                  <p className="text-sm text-muted-foreground">Each session is tailored to your specific needs and goals</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Form */}
          <div className="p-8 md:p-10">
            {formStatus === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Booking Confirmed!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for scheduling a consultation. We've sent the details to your email.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setFormStatus("idle")}
                >
                  Book Another Appointment
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Your Full Name"
                      className="pl-10"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="pl-10"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Select Date
                    </label>
                    <div className="relative">
                      <CalendarIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="date"
                        className="pl-10"
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => {
                          if (e.target.value) {
                            setDate(new Date(e.target.value));
                          }
                        }}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Select Time
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !time && "text-muted-foreground"
                          )}
                          disabled={!date}
                        >
                          <Clock className="mr-2 h-4 w-4" />
                          {time ? time : "Select time"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <div className="p-2">
                          <ScrollArea className="h-72 w-48">
                            <div className="grid grid-cols-1 gap-1 p-1">
                              {timeSlots.map((slot) => (
                                <Button
                                  key={slot.time}
                                  variant="ghost"
                                  className={cn(
                                    "justify-start font-normal",
                                    time === slot.time && "bg-primary/10 text-primary",
                                    !slot.available && "line-through opacity-50"
                                  )}
                                  disabled={!slot.available}
                                  onClick={() => {
                                    setTime(slot.time);
                                  }}
                                >
                                  <Clock className="mr-2 h-3 w-3" />
                                  {slot.time}
                                </Button>
                              ))}
                            </div>
                          </ScrollArea>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Additional Information
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Textarea 
                      className="pl-10 min-h-[100px]" 
                      placeholder="Please share any specific topics or concerns you'd like to discuss during your consultation..."
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={!date || !time || formStatus === "submitting"}
                >
                  {formStatus === "submitting" ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Book Consultation"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
