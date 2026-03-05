import React from 'react';
import "./style.scss";
const badgeStyles = {
  Overdue: 'Overdue',
  Paid: 'Paid',
  Unpaid: 'Unpaid',
  Rejected: 'Rejected',
  Submitted: 'Submitted',
  warning: 'bg-yellow-50 text-yellow-600 ring-1 ring-yellow-600/20 ring-inset',
  info: 'bg-blue-50 text-blue-700 ',
  error: 'bg-red-50 text-red-700 ring-1 ring-red-600/20 ring-inset',
  primary: 'bg-indigo-50 text-indigo-700 ',
  secondary: 'bg-purple-50 text-purple-700 ',
};

const StatusTag = ({ variant = 'New', className = '', children }) => {
const variantStyles = badgeStyles[variant] || "";

  return (
    <span className={`StatusTag inline-flex items-center px-2 py-1 text-xs font-medium ${variantStyles} ${className}`}>
      {children}
    </span>
  );
};

export default StatusTag;
