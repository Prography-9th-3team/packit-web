import apis from '@/apis/api';
import Icon from '@/components/common/Icon';

const GoogleButton = () => {
  const redirectUri = process.env.NEXT_PUBLIC_LOGIN_REDIRECT_URL;

  const handleLogin = () => {
    try {
      const popupWidth = 600;
      const popupHeight = 730;

      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const popupLeft = (screenWidth - popupWidth) / 2 + window.screenX;
      const popupTop = (screenHeight - popupHeight) / 2 + window.screenY;

      const loginRedirectUri = apis.auth.google_login(redirectUri as string);

      window.open(
        loginRedirectUri,
        'Packit Login',
        `width=${popupWidth},height=${popupHeight},left=${popupLeft},top=${popupTop},scrollbars=yes,resizable=yes`,
      );
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };

  return (
    <button
      onClick={handleLogin}
      className='w-full h-48 px-16 py-12 text-secondary label-lg border border-border rounded-lg flex justify-center items-center gap-8'
    >
      <Icon name='google' />
      <span>Google 계정으로 로그인</span>
    </button>
  );
};

export default GoogleButton;
