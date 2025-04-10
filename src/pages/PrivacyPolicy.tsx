import React from 'react';
import { Helmet } from 'react-helmet-async';
import BannerAd from '../components/BannerAd';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Diplearn</title>
        <meta name="description" content="Diplearn's privacy policy. Learn how we collect, use, and protect your information while using our educational platform." />
        <link rel="canonical" href="https://diplearn.com/privacy-policy" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-pink max-w-none">
          <p>
            Welcome to Diplearn. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p>
              Diplearn ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website diplearn.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site").
            </p>
            <p>
              We encourage you to read this Privacy Policy carefully to understand our practices regarding your information and how we will treat it. By accessing or using our Site, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            <p>
              We may collect information about you in various ways when you use our Site. The information we may collect includes:
            </p>
            <h3 className="text-xl font-medium text-gray-900 mt-5 mb-3">Personal Data</h3>
            <p>
              Personally identifiable information that you voluntarily provide to us when using our services, such as your name and email address when you sign up for our newsletter or contact us through our contact form.
            </p>
            <h3 className="text-xl font-medium text-gray-900 mt-5 mb-3">Usage Data</h3>
            <p>
              Information automatically collected when you visit our website, such as your IP address, browser type, device information, pages visited, and time spent on those pages. This data is collected using cookies and similar technologies.
            </p>
          </section>

          {/* Ad Banner after two sections */}
          <div className="flex justify-center mb-10">
            <BannerAd 
              customKey="bc7ad908b9b26c08f097d12764e1d4be"
              customWidth={728}
              customHeight={90}
              slot="first"
            />
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <p>
              We use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc pl-6 mt-3">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website's features</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, and features</li>
              <li>Communicate with you for customer service and educational updates</li>
              <li>Send you newsletters and other educational information</li>
              <li>Prevent fraudulent activities and security breaches</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our Site and store certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            <p>
              We use the following types of cookies:
            </p>
            <ul className="list-disc pl-6 mt-3">
              <li><strong>Essential cookies:</strong> Necessary for the website to function properly</li>
              <li><strong>Analytical/performance cookies:</strong> Allow us to recognize and count the number of visitors and see how visitors move around our website</li>
              <li><strong>Functionality cookies:</strong> Used to recognize you when you return to our website</li>
            </ul>
          </section>

          {/* Ad Banner after two more sections */}
          <div className="flex justify-center mb-10">
            <BannerAd 
              customKey="bc7ad908b9b26c08f097d12764e1d4be"
              customWidth={728}
              customHeight={90}
              slot="first"
            />
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mt-3">
              <li>With service providers who assist us in operating our website</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a business transfer (e.g., merger or acquisition)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Ad Banner after two more sections */}
          <div className="flex justify-center mb-10">
            <BannerAd 
              customKey="bc7ad908b9b26c08f097d12764e1d4be"
              customWidth={728}
              customHeight={90}
              slot="first"
            />
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Links</h2>
            <p>
              Our Site may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policy of every site you visit.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
            <p>
              Our Site is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can take appropriate action.
            </p>
          </section>

          {/* Ad Banner after two more sections */}
          <div className="flex justify-center mb-10">
            <BannerAd 
              customKey="bc7ad908b9b26c08f097d12764e1d4be"
              customWidth={728}
              customHeight={90}
              slot="first"
            />
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: <a href="mailto:privacy@diplearn.com">privacy@diplearn.com</a>
            </p>
            <p>
              Or visit our <a href="/contact">Contact Us</a> page for more ways to reach us.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy; 