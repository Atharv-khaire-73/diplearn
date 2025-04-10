import React from 'react';
import { Briefcase, GraduationCap, Users, Star, Mail, Phone, MapPin } from 'lucide-react';
import BannerAd from './BannerAd';

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Diplearn</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Empowering students with resources, projects, and solutions for MSBTE diplomas and beyond.
        </p>
      </div>

      {/* Mission and Vision */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At Diplearn, our mission is to provide accessible, high-quality educational resources to students pursuing technical education in Maharashtra. We aim to simplify complex concepts, offer practical learning materials, and support students throughout their academic journey.
            </p>
            <p className="text-gray-600">
              We believe in breaking down barriers to education and empowering the next generation of technical professionals with the tools they need to succeed.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-4">
              We envision a future where every student has equal access to quality educational resources, regardless of their background or location. Our platform aims to be the premier destination for MSBTE diploma students seeking academic support, practical projects, and career guidance.
            </p>
            <p className="text-gray-600">
              By fostering a community of learners and educators, we strive to contribute to the growth of technical education in Maharashtra and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* Ad Banner before "What We Offer" */}
      <div className="mb-10 flex justify-center">
        <BannerAd 
          customKey="bc7ad908b9b26c08f097d12764e1d4be"
          customWidth={728}
          customHeight={90}
          slot="first"
        />
      </div>

      {/* What We Offer */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">What We Offer</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="mb-4 text-pink-500">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">MSBTE Resources</h3>
            <p className="text-gray-600">
              Comprehensive study materials, question papers, and solved manuals for MSBTE diploma courses in Computer Engineering.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="mb-4 text-pink-500">
              <Briefcase size={32} />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Microprojects</h3>
            <p className="text-gray-600">
              Practical project ideas and implementations to help students apply theoretical knowledge and build their portfolio for better career opportunities.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="mb-4 text-pink-500">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Community Support</h3>
            <p className="text-gray-600">
              A platform where students can connect, share knowledge, ask questions, and find support from peers and experienced educators.
            </p>
          </div>
        </div>
      </div>

      {/* Ad Banner before "Meet Our Team" */}
      <div className="mb-10 flex justify-center">
        <BannerAd 
          customKey="bc7ad908b9b26c08f097d12764e1d4be"
          customWidth={728}
          customHeight={90}
          slot="first"
        />
      </div>

      {/* Our Team */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-1">Khaire Atharv</h3>
              <p className="text-pink-600 mb-4">Founder & Lead Developer</p>
              <p className="text-gray-600 mb-4">
                MSBTE Computer Engineering graduate with 2+ years of experience in web development and educational content creation.
              </p>
              <div className="flex items-center text-yellow-400">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-1">Bhangale Yash & Sonwane Prasad</h3>
              <p className="text-pink-600 mb-4">Content Manager</p>
              <p className="text-gray-600 mb-4">
                MSBTE graduate with expertise in creating educational content, curriculum development, and managing learning resources.
              </p>
              <div className="flex items-center text-yellow-400">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-1">Khaire Om</h3>
              <p className="text-pink-600 mb-4">Technical Advisor</p>
              <p className="text-gray-600 mb-4">
                Senior lecturer with 8+ years of teaching experience in computer engineering subjects at a leading polytechnic institute.
              </p>
              <div className="flex items-center text-yellow-400">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Banner before "Get In Touch" */}
      <div className="mb-10 flex justify-center">
        <BannerAd 
          customKey="bc7ad908b9b26c08f097d12764e1d4be"
          customWidth={728}
          customHeight={90}
          slot="first"
        />
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Get In Touch</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center p-4">
            <div className="mb-4 text-pink-500 bg-pink-50 p-3 rounded-full">
              <Mail size={24} />
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-2">Email Us</h4>
            <p className="text-gray-600">contact@diplearn.in</p>
            <p className="text-gray-600">support@diplearn.in</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="mb-4 text-pink-500 bg-pink-50 p-3 rounded-full">
              <Phone size={24} />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600">+91 7387182100</p>
            <p className="text-gray-600">Mon-Fri, 9AM-6PM</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="mb-4 text-pink-500 bg-pink-50 p-3 rounded-full">
              <MapPin size={24} />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600">123 Education Hub</p>
            <p className="text-gray-600">Nashik, Maharashtra 422001</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 