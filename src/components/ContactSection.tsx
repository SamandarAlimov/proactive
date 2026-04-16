import React from 'react';
import PhoneInput from './PhoneInput';
import EmailInput from './EmailInput';

const ContactSection: React.FC = () => {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Telefon raqami
        </label>
        <PhoneInput />
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Telefon raqamingizni to'liq kiriting (masalan, +998 90 123 45 67)
        </p>
      </div>

      <div className="space-y-3">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Elektron pochta
        </label>
        <EmailInput />
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Elektron pochtangizni to'liq kiriting (masalan, name@example.com)
        </p>
      </div>
    </section>
  );
};

export default ContactSection;