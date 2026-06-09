import './GlitchText.css';

const GlitchText = ({ children, speed = 1, enableShadows = true, enableOnHover = true, className = '' }: { children: string, speed?: number, enableShadows?: boolean, enableOnHover?: boolean, className?: string }) => {
  const inlineStyles = {
    '--after-duration': `${speed * 3}s`,
    '--before-duration': `${speed * 2}s`,
    '--after-shadow': enableShadows ? '-3px 0 rgba(201, 168, 76, 0.5)' : 'none',
    '--before-shadow': enableShadows ? '3px 0 rgba(26, 168, 122, 0.5)' : 'none'
  } as React.CSSProperties;

  const hoverClass = enableOnHover ? 'enable-on-hover' : '';

  return (
    <div className={`glitch ${hoverClass} ${className}`} style={inlineStyles} data-text={children}>
      {children}
    </div>
  );
};

export default GlitchText;
