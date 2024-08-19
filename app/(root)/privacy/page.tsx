import React from "react";

import AppFooter from "@/app/component/ui/AppFooter";
import AppHeader from "@/app/component/ui/AppHeader";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="bg-white py-8 px-4 sm:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Privacy Policy
          </h1>
          <p className="text-gray-700 mb-6">
            At astralemon.com, we are committed to protecting your personal
            information and your right to privacy. This privacy policy explains
            what information we collect, how we use it, and the choices you have
            regarding your personal information.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Personal Information
          </h2>
          <p className="text-gray-700 mb-6">
            To use the services and affiliates of astralemon.com, you must
            register with your email address and password, collectively known as
            your login credentials. These credentials may also grant you access
            to other affiliated sites. When you sign in to astralemon.com, you
            might be automatically logged into other affiliated sites and
            services.
          </p>
          <p className="text-gray-700 mb-6">
            A unique ID will be assigned to your credentials for identification
            purposes and to associate your information with your account.
          </p>
          <p className="text-gray-700 mb-6">
            We request personal details such as your email address, name, home
            or work address, and phone number. Additionally, we may gather
            demographic data like ZIP code, age, gender, preferences, interests,
            and favorites. If you make a purchase or subscribe to a paid
            service, we will also need your credit card information and billing
            address to set up a billing account.
          </p>
          <p className="text-gray-700 mb-6">
            We collect data about your interactions with astralemon.com,
            including pages viewed, links clicked, and other activities.
            Standard information sent by your browser, such as IP address,
            browser type and language, access times, and referring websites, is
            also collected.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Use of Your Personal Information
          </h2>
          <p className="text-gray-700 mb-6">
            astralemon.com uses your personal information to enhance
            communication and customer service. This includes improving service
            efficiency by minimizing repetitive data entry and sending necessary
            communications such as welcome emails, billing reminders, technical
            support information, and security updates.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Sharing of Your Personal Information
          </h2>
          <p className="text-gray-700 mb-6">
            Your personal information will remain confidential and will not be
            shared outside of astralemon.com, except in urgent situations where
            user safety is at risk.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Accessing Your Personal Information
          </h2>
          <p className="text-gray-700 mb-6">
            You can view or modify your personal information online. To protect
            your data from unauthorized access, you must log in with your email
            address and password.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Security of Your Personal Information
          </h2>
          <p className="text-gray-700 mb-6">
            astralemon.com is dedicated to safeguarding your personal
            information. We employ various security measures, including
            encryption protocols like Secure Socket Layer (SSL) for transmitting
            sensitive data such as passwords. It is important to keep your
            password private and not share it with others.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Changes to This Privacy Statement
          </h2>
          <p className="text-gray-700 mb-6">
            This privacy statement may be updated periodically to reflect
            changes in our services and user feedback. We recommend reviewing
            this statement regularly to stay informed about how astralemon.com
            is protecting and managing your information.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
