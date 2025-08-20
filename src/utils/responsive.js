// Responsive Design System
// Based on modern mobile-first approach and best practices

// Breakpoints (mobile-first approach)
export const breakpoints = {
  xs: '320px',    // Extra small phones
  sm: '576px',    // Small phones
  md: '768px',    // Tablets
  lg: '992px',    // Small desktops
  xl: '1200px',   // Large desktops
  xxl: '1400px'   // Extra large desktops
};

// Media query helpers
export const media = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  xxl: `@media (min-width: ${breakpoints.xxl})`,
  
  // Max-width queries for specific device targeting
  maxSm: `@media (max-width: ${breakpoints.sm})`,
  maxMd: `@media (max-width: ${breakpoints.md})`,
  maxLg: `@media (max-width: ${breakpoints.lg})`,
  maxXl: `@media (max-width: ${breakpoints.xl})`,
  
  // Device-specific queries
  mobile: `@media (max-width: ${breakpoints.md})`,
  tablet: `@media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg})`,
  desktop: `@media (min-width: ${breakpoints.lg})`,
  
  // Orientation queries
  landscape: `@media (orientation: landscape)`,
  portrait: `@media (orientation: portrait)`,
  
  // Touch device queries
  touch: `@media (hover: none) and (pointer: coarse)`,
  noTouch: `@media (hover: hover) and (pointer: fine)`
};

// Responsive spacing scale
export const spacing = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  xxl: '3rem',     // 48px
  xxxl: '4rem'     // 64px
};

// Responsive font sizes
export const fontSizes = {
  xs: '0.75rem',   // 12px
  sm: '0.875rem',  // 14px
  md: '1rem',      // 16px
  lg: '1.125rem',  // 18px
  xl: '1.25rem',   // 20px
  xxl: '1.5rem',   // 24px
  xxxl: '2rem',    // 32px
  display: '3rem'  // 48px
};

// Responsive container widths
export const containerWidths = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1140px',
  xxl: '1320px'
};

// Common responsive patterns
export const responsivePatterns = {
  // Mobile-first container
  container: `
    width: 100%;
    padding-left: ${spacing.md};
    padding-right: ${spacing.md};
    margin-left: auto;
    margin-right: auto;
    
    ${media.sm} {
      max-width: ${containerWidths.sm};
    }
    
    ${media.md} {
      max-width: ${containerWidths.md};
    }
    
    ${media.lg} {
      max-width: ${containerWidths.lg};
    }
    
    ${media.xl} {
      max-width: ${containerWidths.xl};
    }
    
    ${media.xxl} {
      max-width: ${containerWidths.xxl};
    }
  `,
  
  // Responsive grid
  grid: (columns = 1, gap = spacing.md) => `
    display: grid;
    grid-template-columns: repeat(${columns}, 1fr);
    gap: ${gap};
    
    ${media.md} {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    
    ${media.lg} {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  `,
  
  // Responsive flexbox
  flexCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  
  flexColumn: `
    display: flex;
    flex-direction: column;
  `,
  
  // Responsive text
  responsiveText: (mobileSize, tabletSize, desktopSize) => `
    font-size: ${mobileSize};
    
    ${media.md} {
      font-size: ${tabletSize};
    }
    
    ${media.lg} {
      font-size: ${desktopSize};
    }
  `,
  
  // Responsive padding
  responsivePadding: (mobile, tablet, desktop) => `
    padding: ${mobile};
    
    ${media.md} {
      padding: ${tablet};
    }
    
    ${media.lg} {
      padding: ${desktop};
    }
  `,
  
  // Responsive margin
  responsiveMargin: (mobile, tablet, desktop) => `
    margin: ${mobile};
    
    ${media.md} {
      margin: ${tablet};
    }
    
    ${media.lg} {
      margin: ${desktop};
    }
  `
};

// Touch-friendly button styles
export const touchFriendly = {
  button: `
    min-height: 44px;
    min-width: 44px;
    padding: ${spacing.sm} ${spacing.md};
    
    ${media.md} {
      min-height: 40px;
      min-width: 40px;
      padding: ${spacing.xs} ${spacing.lg};
    }
  `,
  
  input: `
    min-height: 44px;
    padding: ${spacing.sm} ${spacing.md};
    font-size: ${fontSizes.md};
    
    ${media.md} {
      min-height: 40px;
      padding: ${spacing.xs} ${spacing.md};
      font-size: ${fontSizes.sm};
    }
  `,
  
  link: `
    min-height: 44px;
    min-width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    ${media.md} {
      min-height: 40px;
      min-width: 40px;
    }
  `
};

// Accessibility helpers
export const accessibility = {
  focusVisible: `
    &:focus-visible {
      outline: 2px solid #ff6b9d;
      outline-offset: 2px;
      border-radius: 4px;
    }
  `,
  
  screenReaderOnly: `
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  `,
  
  reducedMotion: `
    @media (prefers-reduced-motion: reduce) {
      animation: none !important;
      transition: none !important;
    }
  `
};

// Performance optimizations
export const performance = {
  willChange: `
    will-change: transform;
  `,
  
  hardwareAcceleration: `
    transform: translateZ(0);
    backface-visibility: hidden;
  `,
  
  smoothScrolling: `
    scroll-behavior: smooth;
  `
};

const responsiveUtils = {
  breakpoints,
  media,
  spacing,
  fontSizes,
  containerWidths,
  responsivePatterns,
  touchFriendly,
  accessibility,
  performance
};

export default responsiveUtils; 