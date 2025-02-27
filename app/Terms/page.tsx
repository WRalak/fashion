import React, { Suspense } from 'react';

const Page = () => {
  return (
     <Suspense fallback={<p>Loading...</p>}>
        
        
        
    <div className="px-4 md:px-8 lg:px-16 xl:px-24 mt-4 max-w-4xl mx-auto">
      <h1 className="text-xl md:text-2xl font-bold">Terms And Conditions</h1>
      <p className="text-xs md:text-sm font-extralight mt-2 text-gray-700">
        Solgates is committed to protecting the privacy of our customers. This Privacy Policy outlines the information we collect and how we use it. By using our website, you consent to the data practices described in this policy. 
        
        <br /><br />
        <strong>Information We Collect:</strong> 
        <br />
        <strong>Personal Information:</strong> We may collect personal information such as your name, email address, postal address, and phone number when you create an account, place an order, sign up for our newsletter, or contact us.
        <br />
        <strong>Payment Information:</strong> We may collect payment information, such as your credit card number, when you make a purchase on our site. This information is securely transmitted and stored in accordance with industry standards.
        <br />
        <strong>Behavioral Information:</strong> We collect information about your use of our website, including the pages you visit and the links you click on. This information helps us improve our site and provide you with a better shopping experience.
        
        <br /><br />
        <strong>Use of Information:</strong> 
        <br />
        <strong>Processing Orders:</strong> We use the information you provide to process your orders and provide customer support.
        <br />
        <strong>Improving Our Site:</strong> We use the information we collect to continually improve our website and provide you with a better shopping experience.
        <br />
        <strong>Marketing:</strong> We may use your information to send you promotional offers, newsletters, or other marketing communications. You can opt out of receiving these communications at any time by clicking the unsubscribe&quot; link in the email or by contacting us.
        <br />
        <strong>Legal Compliance:</strong> We may be required to disclose your information in response to a legal request, such as a court order or subpoena.
        
        <br /><br />
        <strong>Security of Information:</strong> We take the security of your information seriously and use appropriate security measures to protect it from unauthorized access, disclosure, alteration, or destruction.
        
        <br /><br />
        <strong>Cookies:</strong> We use cookies to track your use of our website and improve your shopping experience. A cookie is a small text file stored on your device that contains information about your use of the site. You can disable cookies in your browser, but this may affect your ability to use some features of our site.
        
        <br /><br />
        <strong>Changes to this Policy:</strong> We reserve the right to update this Privacy Policy from time to time. We will notify you of any changes by posting the updated policy on our website.
        
        <br /><br />
        <strong>Contact Us:</strong> If you have any questions about this Privacy Policy, please contact us at [contact email].
        
        <br /><br />
        <strong>Effective Date:</strong> 9th Feb 2023 
        
        <br /><br />
        Thank you for shopping with us! 
        <br />
        <strong>Best regards,</strong> 
        <br />
        <strong>Solgates Team</strong>
      </p>
    </div>
    </Suspense>
  );
};

export default Page;

