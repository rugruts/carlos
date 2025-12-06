import React from 'react';

interface ModernInputProps {
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  error?: string;
}

const ModernInput: React.FC<ModernInputProps> = ({
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  className = '',
  icon,
  disabled = false,
  error,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className={`relative flex items-center h-12 px-4 rounded-[12px] bg-bg-glass border border-border-glass transition-all duration-300 ${error ? 'border-red-500' : 'hover:border-toxic-green/20 focus-within:border-toxic-green/30'}`}>
        {icon && (
          <div className="mr-3 text-brand-white-45">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`flex-1 bg-transparent text-brand-white placeholder-brand-white-45 focus:outline-none body-m`}
        />
      </div>
      {error && (
        <p className="mt-1 text-xs text-red-400 body-s">
          {error}
        </p>
      )}
    </div>
  );
};

export default ModernInput;