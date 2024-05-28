import getConfig from 'next/config';

export const getEnv = (envName: string, fallback: string = ''): string => {
  const { publicRuntimeConfig } = getConfig();

  if (!envName) return fallback;

  return (
    (process.env as Record<string, string>)[envName] ?? publicRuntimeConfig?.[envName] ?? fallback
  );
};
