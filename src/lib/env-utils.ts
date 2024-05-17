import getConfig from 'next/config';

export const getEnv = (envName: string, fallback: string = ''): string => {
  const config = getConfig();
  const publicRuntimeConfig = config?.publicRuntimeConfig;

  if (!envName) return fallback;

  return process?.env?.[envName] ?? publicRuntimeConfig?.[envName] ?? fallback;
};
