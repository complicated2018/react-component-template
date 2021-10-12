import React from 'react';

const SvgIcon = (svgProps: { [key: string]: any }): JSX.Element => {
  const { name, prefix = 'icon', color = '#000', props } = svgProps;
  const symbolId = `#${prefix}-${name}`;

  return (
    <svg {...props} aria-hidden="true">
      <use href={symbolId} fill={color} />
    </svg>
  );
};

export default SvgIcon;
