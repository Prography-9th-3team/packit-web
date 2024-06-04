import Icon from '../Icon';

interface ILogo {
  type?: 'symbol' | 'default';
  width?: number;
  height?: number;
  className?: string;
}

const Logo = ({ type = 'default', width = 50, height = 50, className = 'text-text' }: ILogo) => {
  return (
    <div className='flex items-center gap-[16.5px]'>
      {type === 'symbol' ? (
        <Icon name='packit_logo' width={width} height={height} className={className} />
      ) : (
        <Icon name='packit_full_logo' width={width} height={height} className={className} />
      )}
    </div>
  );
};

export default Logo;
