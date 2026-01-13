import React, { InputHTMLAttributes, forwardRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, error, helpText, id, type, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || `input-${generatedId}`;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-semibold mb-2"
            style={{ color: '#374151' }}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          className={`
            w-full px-4 py-2 border rounded-lg
            bg-white text-gray-900
            border-gray-300
            focus:outline-none focus:ring-2 focus:ring-[var(--action-primary)] focus:border-transparent
            disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50
            placeholder:text-gray-400
            ${error ? 'border-[var(--brand-error)]' : ''}
            ${className}
          `}
          style={{ color: '#000000' }}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-[var(--brand-error)]" role="alert">
            {error}
          </p>
        )}
        {!error && helpText && (
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            {helpText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
