"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const impactItems = [
  {
    title: "Projects",
    href: "/impact/projects",
    description: "Explore our ongoing and completed projects across India."
  },
  {
    title: "NGO Partners",
    href: "/impact/ngo-partners",
    description: "Our network of NGO partners working together for change."
  },
  {
    title: "CSR Partners",
    href: "/impact/csr-partners",
    description: "Corporate partners supporting our mission through CSR initiatives."
  },
  {
    title: "Media",
    href: "/impact/media",
    description: "News, stories, and media coverage of our work."
  }
];

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden md:flex">
        <NavigationMenuItem>
          <NavigationMenuLink 
            className="px-3 py-2 hover:text-primary transition-colors" 
            href="#mission"
          >
            Mission
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Impact</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              {impactItems.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink 
            className="px-3 py-2 hover:text-primary transition-colors" 
            href="#donate"
          >
            Donate
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink 
            className="px-3 py-2 hover:text-primary transition-colors" 
            href="#contact"
          >
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem"; 