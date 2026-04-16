import React from 'react';

const EmailInput: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* Icon: fixed width, shrink-0 */}
      <div className="shrink-0 flex items-center justify-center w-10 md:w-12 h-10">
        <span className="text-sm font-medium">📧</span>
      </div>

      {/* Input: flex-1 min-w-0 w-full */}
      <input
        type="email"
        className="flex-1 min-w-0 w-full h-10 px-4 py-0 text-sm font-medium leading-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:focus:ring-blue-400 dark:focus:border-blue-400"
        placeholder="Enter email address"
      />
    </div>
  );
};

export default EmailInput;