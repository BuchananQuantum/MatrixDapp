import React from 'react';
import { CSS, styled, useTheme } from '@nextui-org/react';

export interface LogoProps {
  auto?: boolean;
  size?: number;
  width?: number;
  height?: number;
  small?: boolean;
  fill?: string;
  dark?: boolean;
  className?: string;
  css?: CSS;
}

const StyledSmallLogo = styled('svg', {
  '& path': { fill: '$black' },
  '& g': { fill: '$black', stroke: '$black', strokeMiterlimit: '10'},
  variants: {
    auto: {
      true: {
        display: 'none',
        '@mdMax': {
          display: 'block'
        }
      }
    }
  }
});

const StyledLargeLogo = styled('svg', {
  display: 'block',
  '& path': { fill: '$foreground', stroke: '$foreground', strokeMiterlimit: '10' },
  variants: {
    auto: {
      true: {
        '@mdMax': {
          display: 'none'
        }
      }
    }
  }
});

const Logo: React.FC<LogoProps> = ({
  auto,
  size,
  width,
  height,
  dark,
  small,
  fill,
  css,
  className,
  ...props
}) => {
  const Small = () => (
    <StyledSmallLogo
      className="logo__small"
      width={width || size || 40}
      height={height || size || 40}
      viewBox="0 0 313 313"
      auto={auto}
      css={css}
      {...props}
    >
<path d="M245.569,313H67.431C30.19,313,0,282.81,0,245.569V67.431C0,30.19,30.19,0,67.431,0h178.138C282.81,0,313,30.19,313,67.431
	v178.138C313,282.81,282.81,313,245.569,313z"/>
<g>
	<path  d="M61.956,90.54h8.76l50.823,120.325h0.902L173.263,90.54h8.76
		V222.46h-7.729V109.672h-0.773L125.79,222.46h-7.601L70.459,109.672h-0.773V222.46h-7.73V90.54z"/>
	<path  d="M176.067,222.46V90.54h73.431v7.472h-65.38v54.687h61.451
		v7.472h-61.451v54.817h66.926v7.472H176.067z"/>
</g>
    </StyledSmallLogo>
  );

  const Large = () => (
    <StyledLargeLogo
      className="logo__large"
      width={50}
      height={50}
      viewBox="0 0 175 126"
      auto={auto}
      {...props}
    >
  <g>
	<path  d="M13.281,9.773h6.955l40.347,95.523h0.716l40.347-95.523h6.954
		V114.5h-6.136V24.961h-0.614L63.957,114.5h-6.034L20.031,24.961h-0.613V114.5h-6.137V9.773z"/>
	<path  d="M103.87,114.5V9.773h58.295v5.932h-51.903v43.415h48.784v5.932
		h-48.784v43.518h53.131v5.932H103.87z"/>
</g>
    </StyledLargeLogo>
  );

  if (auto) {
    return (
      <div>
        <Small />
        <Large />
      </div>
    );
  }

  if (small) {
    return <Small />;
  }
  return <Large />;
};

export default Logo;
