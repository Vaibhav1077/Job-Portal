"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Briefcase, Home, Info, LogOut, Menu, Settings, User, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ModeToggle } from "./mode-toggle";
import { useAppData } from "@/context/AppContext";
import Image from "next/image";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { isAuth, user, setIsAuth, setUser, loading, logoutUser } =
    useAppData();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logoutHandler = () => {
    logoutUser();
  };
  return (
    <nav className="z-50   sticky top-0 bg-background/80 border-b backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href={"/"} className="flex items-center gap-1 group">
              {/* <div className="text-2xl font-bold tracking-tight">
                <span className="bg-linear-to-r from bg-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Hire
                </span>
                <span className="text-red-500">Heaven</span>
              </div> */}
              <div className="flex items-center gap-2">
              <Image
                 src="/nprep2career.png"
                 alt="Prep2Career Logo"
                 width={120}
                 height={120}
                 className="object-contain bg-cover pt-2 "
               />
             </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1  ">
            <Link href={"/"}>
              <Button
                variant={"ghost"}
                className="flex items-center gap-2 font-medium cursor-pointer"
              >
                <Home size={16} /> Home
              </Button>
            </Link>

            <Link href={"/jobs"}>
              <Button
                variant={"ghost"}
                className="flex items-center gap-2 font-medium cursor-pointer"
              >
                <Briefcase size={16} /> Jobs
              </Button>
            </Link>

            <Link href={"/about"}>
              <Button
                variant={"ghost"}
                className="flex items-center gap-2 font-medium cursor-pointer"
              >
                <Info size={16} /> About
              </Button>
            </Link>

            <Link href={"/#services"}>
              <Button
                variant={"ghost"}
                className="flex items-center gap-2 font-medium cursor-pointer"
              >
                <Settings size={16} /> Services
              </Button>
            </Link>
          </div>
          

          {/* Right side Actions */}
          <div className="hidden md:flex items-center gap-3 cussor-pointer">
            <ModeToggle/>
            {loading ? (
              ""
            ) : (
              <>
                {isAuth ? (
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <Avatar className="h-9 w-9 ring-2 ring-offset-2 ring-offset-background ring-blue-500/20 cursor-pointer hover:ring-blue-500/40 transition-all">
                          <AvatarImage
                            src={user ? (user.profile_pic as string) : ""}
                            alt={user ? user.name : ""}
                          />
                          <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-600">
                            {user?.name?.charAt(0).toUpperCase() || "U"}
                          </AvatarFallback>
                        </Avatar>
                      </button>
                    </PopoverTrigger>

                    <PopoverContent className="w-56 p-2" align="end">
                      <div className="px-3 py-2 mb-2 border-b">
                        <p className="text-sm font-semibold">
                          {user && user.name}
                        </p>
                        <p className="text-xs opacity-60 truncate">
                          {user && user.email}
                        </p>
                      </div>

                      <Link href={"/account"}>
                        <Button
                          className="w-full justify-start gap-2"
                          variant={"ghost"}
                        >
                          <User size={16} /> My Profile
                        </Button>
                      </Link>

                      <Button
                        className="w-full justify-start gap-2 mt-1"
                        variant={"ghost"}
                        onClick={logoutHandler}
                      >
                        <LogOut size={16} />
                        Logout
                      </Button>
                    </PopoverContent>
                  </Popover>
                ) : (
                  <Link href={"/login"}>
                    <Button className="gap-2">
                      <User size={16} />
                      Sign In
                    </Button>
                  </Link>
                )}
              </>
            )}
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ModeToggle />

            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div
        className={`md:hidden border-t overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-3 py-3 space-y-1 bg-background/95 backdrop-blur-md">
          {/* isauth or user */}
          <Link href={"/"} onClick={toggleMenu}>
            <Button
              variant={"ghost"}
              className="w-full justify-start gap-3 h-11"
            >
              <Home size={18} /> Home
            </Button>
          </Link>

          <Link href={"/jobs"} onClick={toggleMenu}>
            <Button
              variant={"ghost"}
              className="w-full justify-start gap-3 h-11"
            >
              <Briefcase size={18} /> Jobs
            </Button>
          </Link>

          <Link href={"/about"} onClick={toggleMenu}>
            <Button
              variant={"ghost"}
              className="w-full justify-start gap-3 h-11"
            >
              <Info size={18} /> About
            </Button>
          </Link>

          {isAuth ? (
            <>
              <Link href={"/about"} onClick={toggleMenu}>
                <Button
                  variant={"ghost"}
                  className="w-full justify-start gap-3 h-11"
                >
                  <User size={18} /> My Profile
                </Button>
              </Link>
              <Button
                variant={"destructive"}
                className="w-full justify-start gap-3 h-11"
                onClick={() => {
                  logoutHandler();
                  toggleMenu();
                }}
              >
                <LogOut size={18} /> Logout
              </Button>
            </>
          ) : (
            <Link href={"/login"} onClick={toggleMenu}>
              <Button className="w-full justify-start gap-3 h-11 mt-2">
                <User size={18} /> SignIn
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;


