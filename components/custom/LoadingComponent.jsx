import React from 'react';

const LoadingComponent = ({
    size = 'medium',
    text = '...',
    variant = 'spinner',
    showText = true,
    className = '',
    fullScreen = false
}) => {

    // Size configurations
    const sizes = {
        small: {
            spinner: 'w-6 h-6',
            dots: 'w-1.5 h-1.5',
            bars: 'w-1 h-4',
            text: 'text-sm'
        },
        medium: {
            spinner: 'w-8 h-8',
            dots: 'w-2 h-2',
            bars: 'w-1.5 h-6',
            text: 'text-base'
        },
        large: {
            spinner: 'w-12 h-12',
            dots: 'w-3 h-3',
            bars: 'w-2 h-8',
            text: 'text-lg'
        }
    };

    const currentSize = sizes[size];

    // Spinner variant
    const SpinnerLoader = () => (
        <div className={`relative ${currentSize.spinner}`}>
            <div className="absolute inset-0 border-2 rounded-full border-muted animate-spin border-t-primary"></div>
            <div className="absolute border-2 rounded-full inset-1 border-muted animate-spin border-b-secondary animate-reverse-spin"></div>
        </div>
    );

    // Dots variant
    const DotsLoader = () => (
        <div className="flex space-x-1">
            <div className={`${currentSize.dots} bg-primary rounded-full animate-bounce`}></div>
            <div className={`${currentSize.dots} bg-primary rounded-full animate-bounce`} style={{ animationDelay: '0.1s' }}></div>
            <div className={`${currentSize.dots} bg-primary rounded-full animate-bounce`} style={{ animationDelay: '0.2s' }}></div>
        </div>
    );

    // Bars variant
    const BarsLoader = () => (
        <div className="flex items-end space-x-1">
            <div className={`${currentSize.bars} bg-primary animate-pulse`} style={{ animationDelay: '0s' }}></div>
            <div className={`${currentSize.bars} bg-secondary animate-pulse`} style={{ animationDelay: '0.1s' }}></div>
            <div className={`${currentSize.bars} bg-primary animate-pulse`} style={{ animationDelay: '0.2s' }}></div>
            <div className={`${currentSize.bars} bg-secondary animate-pulse`} style={{ animationDelay: '0.3s' }}></div>
        </div>
    );

    // Pulse variant
    const PulseLoader = () => (
        <div className={`${currentSize.spinner} bg-primary rounded-full animate-ping opacity-75`}></div>
    );

    // Skeleton variant
    const SkeletonLoader = () => (
        <div className="space-y-2">
            <div className="h-4 rounded bg-muted animate-pulse"></div>
            <div className="w-3/4 h-4 rounded bg-muted animate-pulse"></div>
            <div className="w-1/2 h-4 rounded bg-muted animate-pulse"></div>
        </div>
    );

    const renderLoader = () => {
        switch (variant) {
            case 'dots':
                return <DotsLoader />;
            case 'bars':
                return <BarsLoader />;
            case 'pulse':
                return <PulseLoader />;
            case 'skeleton':
                return <SkeletonLoader />;
            default:
                return <SpinnerLoader />;
        }
    };

    const containerClasses = fullScreen
        ? "fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50"
        : "flex items-center justify-center";

    return (
        <div className={`${containerClasses} ${className}`}>
            <div className="text-center">
                {variant !== 'skeleton' && renderLoader()}
                {variant === 'skeleton' && renderLoader()}
                {showText && variant !== 'skeleton' && (
                    <p className={`mt-2 text-muted-foreground ${currentSize.text}`}>
                        {text}
                    </p>
                )}
            </div>

            <style jsx>{`
        @keyframes reverse-spin {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        .animate-reverse-spin {
          animation: reverse-spin 1s linear infinite;
        }
      `}</style>
        </div>
    );
};

// Export different preset configurations for common use cases
export const ButtonLoading = ({ size = 'small', className = '' }) => (
    <LoadingComponent
        size={size}
        variant="spinner"
        showText={false}
        className={`inline-flex ${className}`}
    />
);

export const CardLoading = ({ className = '' }) => (
    <LoadingComponent
        variant="skeleton"
        className={`p-4 ${className}`}
    />
);

export const FullScreenLoading = ({ text = 'Loading...', className = '' }) => (
    <LoadingComponent
        size="large"
        variant="spinner"
        text={text}
        fullScreen={true}
        className={className}
    />
);

export const TableLoading = ({ className = '' }) => (
    <div className={`space-y-4 ${className}`}>
        {[...Array(5)].map((_, i) => (
            <div key={i} className="flex space-x-4">
                <div className="w-12 h-4 rounded bg-muted animate-pulse"></div>
                <div className="flex-1 h-4 rounded bg-muted animate-pulse"></div>
                <div className="w-20 h-4 rounded bg-muted animate-pulse"></div>
            </div>
        ))}
    </div>
);

export default LoadingComponent;