import React from 'react';

interface NavBarTitleProps {
  variant?: 'logo' | 'text';
  title?: string;
  showSubtitle?: boolean;
  subtitle?: string;
  size?: 'small' | 'medium' | 'large';
}

const NavBarTitle: React.FC<NavBarTitleProps> = ({
  variant = 'logo',
  title = 'MyApp',
  showSubtitle = false,
  subtitle = '',
  size = 'medium',
}) => {
  // Responsive sizing for web
  const getSizing = () => {
    const sizes = {
      small: {
        height: 32,
        width: 38,
        iconSize: 20,
        fontSize: 16,
        subtitleSize: 12,
      },
      medium: {
        height: 40,
        width: 48,
        iconSize: 24,
        fontSize: 18,
        subtitleSize: 14,
      },
      large: {
        height: 48,
        width: 58,
        iconSize: 28,
        fontSize: 20,
        subtitleSize: 16,
      },
    };
    return sizes[size];
  };

  const sizing = getSizing();

  // Logo variant - Enhanced with responsive design
  if (variant === 'logo') {
    return (
      <div className="flex items-center justify-center">
        <img
          src="/src/assets/react.svg"
          alt="Logo"
          className="mb-1"
          style={{
            height: sizing.height,
            width: sizing.width,
            objectFit: 'contain',
            filter: 'hue-rotate(200deg) saturate(0.8)',
          }}
        />
        {showSubtitle && subtitle && (
          <div className="ml-2">
            <span className="font-medium text-gray-900" style={{ fontSize: sizing.subtitleSize }}>
              {subtitle}
            </span>
          </div>
        )}
      </div>
    );
  }

  // Text variant
  if (variant === 'text') {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-gray-900" style={{ fontSize: sizing.fontSize }}>
          {title}
        </h1>
        {showSubtitle && subtitle && (
          <span className="font-medium text-gray-600" style={{ fontSize: sizing.subtitleSize }}>
            {subtitle}
          </span>
        )}
      </div>
    );
  }

  // Fallback to logo
  return (
    <img
      src="/src/assets/react.svg"
      alt="Logo"
      className="mb-1"
      style={{
        height: sizing.height,
        width: sizing.width,
        objectFit: 'contain',
        filter: 'hue-rotate(200deg) saturate(0.8)',
      }}
    />
  );
};

export default NavBarTitle;
