import { SVGProps } from 'react';
import * as iconTypes from './lib/index';

export type IconTypes = keyof typeof iconTypes;

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconTypes;
  className?: string;
}

const Icon = ({ name, className = 'h-16 w-16', ...props }: IconProps) => {
  const IconComponent = iconTypes[name];

  return <IconComponent className={className} {...props} />;
};

export default Icon;
