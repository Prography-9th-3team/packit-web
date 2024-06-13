export const getMetaData = (data: string, url: string) => {
  const title = getOgTag(data, 'title');
  const description = getOgTag(data, 'description');
  const image = getOgTag(data, 'image');
  const siteName = getOgTag(data, 'site_name');
  const favicon = getFavicon(data, url);

  return {
    title,
    description,
    image,
    siteName,
    favicon,
  };
};

export const getOgTag = (data: string, name: string) => {
  const startIndex = data.indexOf(`"og:${name}"`);

  if (startIndex === -1) return '';

  const str = data.substring(startIndex);
  const contentIndex = str.indexOf('content="');

  const str2 = str.substring(contentIndex + 9);
  const endIndex = str2.indexOf('"');

  const str3 = str2.substring(0, endIndex);

  return str3;
};

export const getFavicon = (html: string, url: string) => {
  let startIndex = html.indexOf(`<link rel="shortcut icon`);

  if (startIndex === -1) {
    startIndex = html.indexOf(`<link rel="apple-touch-icon`);
  }
  if (startIndex === -1) {
    startIndex = html.indexOf('<link rel="icon');
  }
  if (startIndex === -1) {
    startIndex = html.indexOf('rel="icon');
  }
  if (startIndex !== -1) {
    const start = html.indexOf(`href=`, startIndex);

    if (start !== -1) {
      const end = html.indexOf(`"`, start + 6);
      let favicon_url = html.substring(start + 6, end);

      if (favicon_url[0] == '/' && favicon_url[1] != '/') {
        favicon_url = sliceURL(url) + favicon_url;
      }

      if (favicon_url[0] == '/' && favicon_url[1] == '/') {
        favicon_url = 'http:' + favicon_url;
      }

      return favicon_url;
    }
  }
};

const sliceURL = (url: string) => {
  const start = url.indexOf('/');
  const end = url.indexOf('/', start + 2);
  const slice_url = url.substring(0, end);

  return slice_url;
};
