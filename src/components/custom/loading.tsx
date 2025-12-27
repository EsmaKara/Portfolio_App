import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Zap } from 'lucide-react';

// Loading component configuration
export interface LoadingConfig {
  variant?: 'spinner' | 'dots' | 'pulse' | 'bounce' | 'wave' | 'custom';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'muted';
  text?: string;
  showText?: boolean;
  customIcon?: React.ComponentType<{ size?: number; className?: string }>;
  fullScreen?: boolean;
  overlay?: boolean;
}

interface LoadingProps {
  config?: LoadingConfig;
  className?: string;
}

const LoadingComponent: React.FC<LoadingProps> = ({ config, className = '' }) => {
  const loadingConfig: LoadingConfig = {
    variant: 'spinner',
    size: 'md',
    color: 'primary',
    text: 'Yükleniyor...',
    showText: true,
    fullScreen: false,
    overlay: false,
    ...config,
  };

  // Size configurations
  const sizeConfig = {
    sm: { icon: 16, text: 'text-sm', container: 'gap-2' },
    md: { icon: 24, text: 'text-base', container: 'gap-3' },
    lg: { icon: 32, text: 'text-lg', container: 'gap-4' },
    xl: { icon: 48, text: 'text-xl', container: 'gap-6' },
  };

  // Color configurations
  const colorConfig = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    white: 'text-white',
    muted: 'text-muted-foreground',
  };

  const currentSize = sizeConfig[loadingConfig.size!];
  const currentColor = colorConfig[loadingConfig.color!];

  // Spinner variant
  const renderSpinner = () => (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      className={currentColor}>
      {loadingConfig.customIcon ? (
        <loadingConfig.customIcon size={currentSize.icon} />
      ) : (
        <Loader2 size={currentSize.icon} />
      )}
    </motion.div>
  );

  // Dots variant
  const renderDots = () => (
    <div className="flex items-center space-x-1">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`h-2 w-2 rounded-full ${currentColor.replace('text-', 'bg-')}`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />
      ))}
    </div>
  );

  // Pulse variant
  const renderPulse = () => (
    <motion.div
      className={`h-8 w-8 rounded-full ${currentColor.replace('text-', 'bg-')}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );

  // Bounce variant
  const renderBounce = () => (
    <div className="flex items-center space-x-1">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`h-3 w-3 rounded-full ${currentColor.replace('text-', 'bg-')}`}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: index * 0.1,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );

  // Wave variant
  const renderWave = () => (
    <div className="flex items-center space-x-1">
      {[0, 1, 2, 3, 4].map((index) => (
        <motion.div
          key={index}
          className={`h-6 w-1 rounded-full ${currentColor.replace('text-', 'bg-')}`}
          animate={{
            scaleY: [1, 2, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: index * 0.1,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );

  // Custom variant
  const renderCustom = () => (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      className={currentColor}>
      {loadingConfig.customIcon ? (
        <loadingConfig.customIcon size={currentSize.icon} />
      ) : (
        <Zap size={currentSize.icon} />
      )}
    </motion.div>
  );

  // Render loading animation based on variant
  const renderLoadingAnimation = () => {
    switch (loadingConfig.variant) {
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'bounce':
        return renderBounce();
      case 'wave':
        return renderWave();
      case 'custom':
        return renderCustom();
      default:
        return renderSpinner();
    }
  };

  // Main loading content
  const loadingContent = (
    <div
      className={`flex flex-col items-center justify-center ${currentSize.container} ${className}`}>
      {renderLoadingAnimation()}
      {loadingConfig.showText && loadingConfig.text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`${currentSize.text} ${currentColor} font-medium`}>
          {loadingConfig.text}
        </motion.p>
      )}
    </div>
  );

  // Full screen loading
  if (loadingConfig.fullScreen) {
    return (
      <div className="bg-background/80 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
        {loadingContent}
      </div>
    );
  }

  // Overlay loading
  if (loadingConfig.overlay) {
    return (
      <div className="bg-background/50 absolute inset-0 z-40 flex items-center justify-center backdrop-blur-sm">
        {loadingContent}
      </div>
    );
  }

  // Default loading
  return loadingContent;
};

// Preset loading components for common use cases
export const LoadingSpinner: React.FC<Omit<LoadingProps, 'config'>> = (props) => (
  <LoadingComponent {...props} config={{ variant: 'spinner' }} />
);

export const LoadingDots: React.FC<Omit<LoadingProps, 'config'>> = (props) => (
  <LoadingComponent {...props} config={{ variant: 'dots' }} />
);

export const LoadingPulse: React.FC<Omit<LoadingProps, 'config'>> = (props) => (
  <LoadingComponent {...props} config={{ variant: 'pulse' }} />
);

export const LoadingBounce: React.FC<Omit<LoadingProps, 'config'>> = (props) => (
  <LoadingComponent {...props} config={{ variant: 'bounce' }} />
);

export const LoadingWave: React.FC<Omit<LoadingProps, 'config'>> = (props) => (
  <LoadingComponent {...props} config={{ variant: 'wave' }} />
);

export const LoadingFullScreen: React.FC<Omit<LoadingProps, 'config'>> = (props) => (
  <LoadingComponent {...props} config={{ fullScreen: true, size: 'lg' }} />
);

export const LoadingOverlay: React.FC<Omit<LoadingProps, 'config'>> = (props) => (
  <LoadingComponent {...props} config={{ overlay: true }} />
);

export default LoadingComponent;
