import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">

      {/* HERO / MISSION */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto text-center">

          {/* IMAGE */}
          <div className="flex justify-center mb-10">
            <img
              src="/about.jpg"
              className="w-full max-w-[500px] rounded-3xl shadow-2xl hover:scale-105 transition"
              alt="About Prep2Career"
            />
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Prep2Career
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-lg md:text-xl leading-relaxed opacity-80 max-w-3xl mx-auto">
            Prep2Career is an all-in-one platform designed for developers and job seekers
            to prepare, grow, and succeed in their careers. From job opportunities to AI-powered
            interview preparation, resume analysis, and learning tools — everything is available
            in one place to help you achieve your dream career.
          </p>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Vision
          </h2>

          <p className="text-lg opacity-80 leading-relaxed">
            Our goal is to simplify the journey from learning to earning.
            We aim to bridge the gap between skills and opportunities by
            providing smart tools, real-world practice, and career guidance
            powered by modern technology and AI.
          </p>
        </div>
      </section>

      {/* ABOUT THE DEVELOPER */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl shadow-xl p-10">

          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">
              About the Developer
            </h2>

            <p className="text-lg opacity-80 leading-relaxed max-w-3xl mx-auto">
              I&apos;m a passionate Full Stack Developer building{" "}
              <strong>Prep2Career</strong> with the vision of helping students
              prepare for placements through AI-powered resume analysis, interview
              preparation, career guidance, and job opportunities — all in one
              platform.
            </p>

            <p className="mt-4 text-lg opacity-80">
              My goal is to build products that solve real-world problems while
              continuously learning modern technologies like Microservices, Docker,
              Kafka, PostgreSQL, Next.js, and AI.
            </p>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <a
              href="mailto:iamvaibhav1077@gmail.com"
              className="flex items-center gap-4 rounded-xl border p-4 hover:bg-primary/5 transition"
            >
              <Mail className="text-primary" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-muted-foreground">
                  iamvaibhav1077@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://github.com/Vaibhav1077"
              target="_blank"
              className="flex items-center gap-4 rounded-xl border p-4 hover:bg-primary/5 transition"
            >
              <Github className="text-primary" />
              <div>
                <p className="font-semibold">GitHub</p>
                <p className="text-muted-foreground">
                  github.com/Vaibhav1077
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/vaibhav1077/"
              target="_blank"
              className="flex items-center gap-4 rounded-xl border p-4 hover:bg-primary/5 transition"
            >
              <Linkedin className="text-primary" />
              <div>
                <p className="font-semibold">LinkedIn</p>
                <p className="text-muted-foreground">
                  linkedin.com/in/vaibhav1077
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-xl border p-4">
              <MapPin className="text-primary" />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-muted-foreground">
                  India
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/60 backdrop-blur-md">
        <div className="container mx-auto px-4 text-center space-y-6">

          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to start your journey?
          </h2>

          <p className="text-lg opacity-80">
            Explore jobs, improve your skills, and prepare for interviews — all in one place.
          </p>

          <Link href="/jobs">
            <Button
              size="lg"
              className="gap-2 h-12 px-8 text-base bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md"
            >
              Get Started
              <ArrowRight size={18} />
            </Button>
          </Link>

        </div>
      </section>
    </div>
  );
};

export default About;
