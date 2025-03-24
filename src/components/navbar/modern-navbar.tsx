'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Heart, Sparkles, Flower } from "lucide-react";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface ModernNavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  contactButton?: {
    text: string;
    url: string;
  };
}

// Define the menu items for DreamNest
const defaultMenu: MenuItem[] = [
  { title: "Home", url: "/" },
  { title: "About", url: "/#about" },
  { title: "Mission", url: "/#mission" },
  {
    title: "Services",
    url: "/#services",
    items: [
      {
        title: "1:1 Coaching",
        description: "Personalized guidance tailored to your unique journey",
        icon: <Heart className="size-5 shrink-0 text-pink-400" />,
        url: "/#coaching",
      },
      {
        title: "Breathwork Sessions",
        description: "Harness the power of your breath to release emotional blockages",
        icon: <Sparkles className="size-5 shrink-0 text-pink-400" />,
        url: "/#breathwork",
      },
      {
        title: "Group Workshops",
        description: "Join a supportive community for transformative experiences",
        icon: <Flower className="size-5 shrink-0 text-pink-400" />,
        url: "/#workshops",
      },
    ],
  },
  { title: "Testimonials", url: "/#testimonials" },
  { title: "FAQ", url: "/#faq" },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-pink-50 dark:hover:bg-pink-950/20 hover:text-pink-600 dark:hover:text-pink-300 focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon && <span>{icon}</span>}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export const ModernNavbar: React.FC<ModernNavbarProps> = ({
  logo = {
    url: "/",
    src: "/logo.svg",
    alt: "DreamNest",
    title: "DreamNest",
  },
  menu = defaultMenu,
  mobileExtraLinks = [],
  contactButton = {
    text: "Book a Session",
    url: "/#contact",
  },
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-4"
      )}
      style={{ transform: "translate3d(0, 0, 0)" }} // Hardware acceleration
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={logo.url} className="flex items-center gap-2">
            {logo.src && (
              <div className="relative h-10 w-10">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            )}
            <span className="text-xl font-semibold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              {logo.title}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item, index) => 
                  item.items ? (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-pink-50 dark:hover:bg-pink-950/20 hover:text-pink-600 dark:hover:text-pink-300">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.items.map((subItem, subIndex) => (
                            <ListItem
                              key={subIndex}
                              title={subItem.title}
                              href={subItem.url}
                              icon={subItem.icon}
                            >
                              {subItem.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={index}>
                      <Link
                        href={item.url}
                        className={cn(
                          "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-pink-50 dark:hover:bg-pink-950/20 hover:text-pink-600 dark:hover:text-pink-300 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                          pathname === item.url && "text-pink-600 dark:text-pink-300"
                        )}
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Contact Button */}
            <Button
              asChild
              className="ml-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 hover:opacity-90"
            >
              <Link href={contactButton.url}>
                {contactButton.text}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                      {logo.title}
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <div className="py-6">
                  <Accordion type="single" collapsible className="w-full">
                    {menu.map((item, index) => 
                      item.items ? (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-base">
                            {item.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col space-y-2 pl-4">
                              {item.items.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subItem.url}
                                  className="flex items-center gap-2 py-2 text-sm hover:text-pink-600 dark:hover:text-pink-300"
                                >
                                  {subItem.icon}
                                  <span>{subItem.title}</span>
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <div key={index} className="py-3 border-b">
                          <Link
                            href={item.url}
                            className="flex items-center text-base hover:text-pink-600 dark:hover:text-pink-300"
                          >
                            {item.title}
                          </Link>
                        </div>
                      )
                    )}
                  </Accordion>

                  {mobileExtraLinks.length > 0 && (
                    <div className="mt-6 space-y-3">
                      {mobileExtraLinks.map((link, index) => (
                        <Link
                          key={index}
                          href={link.url}
                          className="block text-sm text-muted-foreground hover:text-pink-600 dark:hover:text-pink-300"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}

                  <div className="mt-6">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 hover:opacity-90"
                    >
                      <Link href={contactButton.url}>
                        {contactButton.text}
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
