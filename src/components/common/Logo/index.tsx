import Icon from '../Icon';

interface ILogo {
  type?: 'symbol' | 'default';
  width?: number;
  height?: number;
}

const Logo = ({ type = 'default', width = 50, height = 50 }: ILogo) => {
  return (
    <div className='flex items-center gap-[16.5px]'>
      {type === 'symbol' ? (
        <Icon name='packit_logo' width={width} height={height} className='text-text' />
      ) : (
        <Icon name='packit_full_logo' width={208} height={height} className='text-text' />
      )}
    </div>
  );
};

export default Logo;
