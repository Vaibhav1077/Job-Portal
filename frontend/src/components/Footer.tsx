import Link from "next/link";
import {
  BriefcaseBusiness,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-primary p-2">
                <BriefcaseBusiness className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Prep2Career</h2>
            </div>

            <p className="mt-4 text-sm text-muted-foreground leading-6">
              A modern AI-powered Job Portal connecting talented professionals
              with top companies. Build your career with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

            <div className="flex flex-col gap-3 text-sm">
              <Link href="/" className="hover:text-primary transition">
                Home
              </Link>

              <Link href="/jobs" className="hover:text-primary transition">
                Browse Jobs
              </Link>

              <Link href="/about" className="hover:text-primary transition">
                About
              </Link>

              <Link href="/contact" className="hover:text-primary transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>

            <div className="flex flex-col gap-3 text-sm">
              <p>Job Search</p>
              <p>Resume Upload</p>
              <p>ATS Resume Analysis</p>
              <p>Career Guidance</p>
              <p>Premium Membership</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>iamvaibhav1077@gmail.com</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>India</span>
              </div>

              <div className="flex gap-4 pt-2">
                <Link
                  href="https://github.com/Vaibhav1077"
                  target="_blank"
                >
                  <Github className="h-5 w-5 hover:text-primary transition" />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/vaibhav1077/"
                  target="_blank"
                >
                  <Linkedin className="h-5 w-5 hover:text-primary transition" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t pt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Prep2Career. All rights reserved.
          </p>

          <p className="text-sm text-muted-foreground">
            Built with Next.js, TypeScript & Microservices
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
