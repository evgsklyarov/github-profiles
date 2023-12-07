export const hasLinkHeaderNext = (linkHeader?: string) => {
  if (!linkHeader) {
    return false;
  }

  const links = linkHeader.split(', ');
  const nextLink = links.find(link => link.includes('rel="next"'));

  return !!nextLink;
};
