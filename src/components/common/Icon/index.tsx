import { IconComponents } from './IconComponents';

interface IIcon {
  name: keyof typeof IconComponents;
  width?: number;
  height?: number;
  fill?: string;
}

const Icon = ({ name, width = 21, height = 21, fill = '#14142b' }: IIcon) => {
  const IconComponent = IconComponents[name];

  return <IconComponent width={width} height={height} fill={fill} />;
};

export default Icon;
