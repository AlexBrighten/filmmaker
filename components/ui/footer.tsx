import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                  Find Talent
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                  Join a Project
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                  Crew Directory
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                  Location Scouting
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                  Casting Support
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                  Indie Tools
                </a>
              </li>
            </ul>
          </div>
          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Who We Are</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                  Our Journey
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                  Meet the Founders
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                  Collab With Us
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                  Careers (We’re Hiring!)
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                  Press & Media
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                  Help Center
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                  Report Abuse
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          {/* 4th block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Knowledge</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                  Filmmaking Guides
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                  Scriptwriting Tips
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                  Post-Production Tricks
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                  Industry News
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                  Community Events
                </a>
              </li>
            </ul>
          </div>
          {/* 5th block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-3 text-indigo-200/65">
                © 2025 CineConnect
                <span className="text-gray-700"> · </span>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                  Legal
                </a>
              </p>
              <ul className="inline-flex gap-1">
                <li>
                  <a className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400" href="#0" aria-label="Instagram">
                    📸
                  </a>
                </li>
                <li>
                  <a className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400" href="#0" aria-label="YouTube">
                    🎬
                  </a>
                </li>
                <li>
                  <a className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400" href="#0" aria-label="Discord">
                    💬
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
