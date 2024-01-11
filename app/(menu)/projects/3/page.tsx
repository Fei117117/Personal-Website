"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Natour() {
  // Placeholder data for Project One
  const project = {
    title: "Natour",
    details: [
      {
        title: "Introduction",
      },
      {
        title: "Features",
      },
    ],
  };

  interface Detail {
    title: string;
  }

  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const [showSidebar, setShowSidebar] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // useEffect for scroll events
  useEffect(() => {
    let timeoutId: number;

    const handleScroll = () => {
      const targetSection = document.getElementById("features");
      // Determine the current section based on scroll position
      const sections = ["introduction", "features"];

      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
      });

      setCurrentSection(current || null);

      if (targetSection) {
        const position = targetSection.getBoundingClientRect();
        setShowSidebar(position.top <= window.innerHeight);
      }
      // Clear any existing timeout to hide the sidebar
      clearTimeout(timeoutId);
      // Set a timeout to hide the sidebar after 2 seconds of no scrolling
      timeoutId = window.setTimeout(() => {
        if (!isHovering) {
          setShowSidebar(false);
        }
      }, 1500); // Adjust the timeout duration as needed
    };

    window.addEventListener("scroll", handleScroll);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId); // Clear the timeout when the component unmounts
    };
  }, [isHovering]);

  const Sidebar = ({
    details,
    show,
    currentSection,
  }: {
    details: Detail[];
    show: boolean;
    currentSection: string | null;
  }) => {
    return (
      <div
        className="sidebar"
        style={{
          display: show ? "block" : "none",
          position: "fixed",
          top: "20%",
          left: "0",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          width: "150px",
          padding: "2px",
          borderRadius: "10px",
          fontSize: "20px",
        }}
      >
        <ul style={{ listStyleType: "none", padding: "15px" }}>
          {details.map((detail: Detail, index: number) => {
            const isActive =
              detail.title.replace(/\s+/g, "-").toLowerCase() ===
              currentSection;
            return (
              <li
                key={index}
                style={{
                  marginBottom: "2px",
                  opacity: isActive ? "1" : "0.5",
                }}
              >
                <a href={`#${detail.title.replace(/\s+/g, "-").toLowerCase()}`}>
                  {detail.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <section className="bg-white py-12">
      <Sidebar
        details={project.details}
        show={showSidebar}
        currentSection={currentSection}
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center" data-aos="zoom-y-out">
          <h1 className="text-5xl font-bold text-gray-800">Natour</h1>
          <p className="mt-4 text-xl text-gray-600">
            Natours is a visually engaging, interactive website designed for a
            fictional outdoor tour company.
          </p>
        </div>

        <div id="introduction" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">INTRODUCTION</h2>
          <div className="mt-4">
            <p className="mt-2 text-gray-600 text-lg">Placeholder</p>
          </div>
        </div>

        <div id="features" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">FEATURES</h2>
          <div className="mt-4">
            <h3 className="text-2xl text-gray-700 font-medium">Placeholder</h3>
            <p className="mt-2 text-gray-600 text-lg">Placeholder</p>
          </div>
        </div>
        {/* Repeat the same structure for other sections... */}

        <div className="text-center mt-12">
          <Link href="/projects">
            <div className="text-blue-600 hover:underline text-lg">
              ← Back to Projects
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
