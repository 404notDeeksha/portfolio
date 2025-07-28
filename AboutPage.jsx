import React, { useEffect } from "react";
import Squares from "../utils/Squares";
import { trackEvent } from "../lib/tracking";
import { images } from "../assets/images";

export const AboutPage = () => {
  useEffect(() => {
    trackEvent("About page viewed", {
      page: window.location.pathname,
      timestamp: new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      }),
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#1a1b26] via-[#1d1e2c] to-[#16172a] overflow-x-hidden">
      <Squares
        speed={0.3}
        squareSize={40}
        direction="diagonal"
        borderColor="#2a2b3d"
        hoverFillColor="#02a9f7"
        className="absolute inset-0 w-full h-full z-0 opacity-30"
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 lg:px-8">
        
        {/* Story Header */}
        <header className="mb-16 text-center">
          <div className="flex flex-col items-center gap-6 mb-8">
            <div className="flex items-center gap-4">
              <img src={images.logo} className="w-12 h-12" alt="GAiget Logo" />
              <h1 className="font-serif text-3xl md:text-4xl text-[#02a9f7] tracking-wide">
                GAiget
              </h1>
            </div>
            
            {/* Floating Robot Character */}
            <div className="relative">
              <div className="w-24 h-24 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#02a9f7] to-[#b084f7] rounded-full transform animate-pulse opacity-20"></div>
                <div className="relative bg-[#1d1e2c] rounded-full p-3 h-full flex flex-col items-center justify-center">
                  {/* Simple Robot Face */}
                  <div className="w-12 h-8 bg-[#02a9f7] rounded-lg mb-1 relative">
                    <div className="absolute top-1 left-2 w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
                    <div className="absolute top-1 right-2 w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b border-white rounded-full"></div>
                  </div>
                  <div className="w-8 h-6 bg-[#b084f7] rounded-md">
                    <div className="w-1 h-1 bg-[#02a9f7] rounded-full mx-auto mt-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#02a9f7] mb-6 leading-tight">
            Once Upon a Time... 📖
          </h2>
          <p className="font-serif text-xl md:text-2xl text-[#b084f7] italic max-w-3xl mx-auto leading-relaxed">
            In a digital world where complexity reigned supreme, a small team dared to dream of simplicity...
          </p>
        </header>

        {/* Story Content */}
        <main className="space-y-16 font-serif text-lg md:text-xl leading-relaxed text-gray-300">
          
          {/* Chapter 1 */}
          <section className="prose prose-lg max-w-none">
            <h3 className="font-serif text-3xl md:text-4xl text-[#02a9f7] mb-8 text-center">
              Chapter 1: The Beginning 🚀
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-gray-300 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-[#02a9f7] first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                  There was a time when digital tools felt like puzzles meant only for the tech-savvy. 
                  Our founders, tired of watching friends struggle with overly complex software, 
                  decided to change the narrative.
                </p>
                <p className="text-gray-300 mb-6">
                  GAiget was born from a simple belief: technology should enhance your life, 
                  not complicate it. We started in a small coffee shop, sketching ideas on napkins, 
                  dreaming of a platform that would feel as natural as having a conversation with a friend.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-block p-6 bg-gradient-to-br from-[#02a9f7]/10 to-[#b084f7]/10 rounded-3xl">
                  <span className="text-6xl">☕</span>
                  <p className="text-sm text-gray-400 mt-2 italic">"Great ideas brew in unexpected places"</p>
                </div>
              </div>
            </div>
          </section>

          {/* Chapter 2 */}
          <section className="prose prose-lg max-w-none">
            <h3 className="font-serif text-3xl md:text-4xl text-[#b084f7] mb-8 text-center">
              Chapter 2: Our Quest 🎯
            </h3>
            <div className="text-center mb-12">
              <p className="text-gray-300 mb-6 text-xl md:text-2xl italic">
                "To democratize access to powerful tools and make technology work for everyone."
              </p>
              <p className="text-gray-300 mb-8">
                This became our north star. We believe that great software should be intuitive, 
                accessible, and genuinely helpful in your daily workflow. Every line of code we write, 
                every feature we build, serves this greater purpose.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center space-y-4">
                <div className="text-4xl">✨</div>
                <h4 className="font-serif text-xl text-[#b084f7]">User-Centric Design</h4>
                <p className="text-gray-400 text-sm">Every pixel crafted with you in mind</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl">🔒</div>
                <h4 className="font-serif text-xl text-[#02a9f7]">Secure & Reliable</h4>
                <p className="text-gray-400 text-sm">Your digital sanctuary, always protected</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl">🚀</div>
                <h4 className="font-serif text-xl text-[#b084f7]">Lightning Fast</h4>
                <p className="text-gray-400 text-sm">Speed that matches your thoughts</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl">💡</div>
                <h4 className="font-serif text-xl text-[#02a9f7]">Innovative Solutions</h4>
                <p className="text-gray-400 text-sm">Tomorrow's technology, today's simplicity</p>
              </div>
            </div>
          </section>

          {/* Chapter 3 */}
          <section className="prose prose-lg max-w-none">
            <h3 className="font-serif text-3xl md:text-4xl text-[#02a9f7] mb-8 text-center">
              Chapter 3: Why Our Story Matters ⭐
            </h3>
            <div className="bg-gradient-to-r from-[#02a9f7]/5 to-[#b084f7]/5 rounded-3xl p-8 md:p-12">
              <p className="text-gray-300 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-[#b084f7] first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                In a world saturated with digital noise, we chose to be the quiet revolution. 
                We don't just build software; we craft experiences that feel like extensions of your own thoughts.
              </p>
              <p className="text-gray-300 mb-6">
                Our users aren't just customers—they're co-authors in this story. Every feedback, 
                every suggestion, every moment of delight they share with us becomes a new chapter 
                in our ongoing narrative of making technology more human.
              </p>
              <blockquote className="text-center py-8">
                <p className="text-xl md:text-2xl text-[#02a9f7] italic font-serif">
                  "Great software doesn't announce itself—it simply works, beautifully and intuitively, 
                  like it was always meant to be there."
                </p>
                <footer className="text-gray-400 text-sm mt-4">— The GAiget Philosophy</footer>
              </blockquote>
            </div>
          </section>

          {/* Chapter 4 - The Invitation */}
          <section className="prose prose-lg max-w-none text-center">
            <h3 className="font-serif text-3xl md:text-4xl text-[#b084f7] mb-8">
              Chapter 4: Your Story Begins 🎉
            </h3>
            <div className="bg-gradient-to-br from-[#02a9f7]/10 to-[#b084f7]/10 rounded-3xl p-8 md:p-12 space-y-8">
              <p className="text-gray-300 text-xl md:text-2xl mb-8 leading-relaxed">
                Thousands of users have already discovered what makes GAiget special. 
                They've written their own chapters of productivity, creativity, and success. 
                <br /><br />
                <span className="text-[#02a9f7] font-serif italic">Now it's your turn to pick up the pen.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="px-8 py-4 bg-[#02a9f7] text-white rounded-full hover:bg-[#0291d8] transition-all duration-300 font-serif text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Begin Your Story
                </button>
                <button className="px-8 py-4 text-[#b084f7] rounded-full hover:bg-[#b084f7]/10 transition-all duration-300 font-serif text-lg">
                  Read More Chapters
                </button>
              </div>
            </div>
          </section>
        </main>

        {/* Story Ending */}
        <footer className="mt-20 pt-12 text-center">
          <div className="space-y-4">
            <p className="text-gray-400 font-serif italic text-lg">
              "Every great story is better when shared..."
            </p>
            <p className="text-gray-500 text-sm">
              Crafted with ❤️ by storytellers who believe in the power of simple, beautiful technology
            </p>
            <p className="text-gray-600 text-xs">
              © 2025 GAiget. All stories reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};