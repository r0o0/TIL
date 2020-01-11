exports.getToC = (toc, title, directory) => {
  return {
    title,
    collapsable: true,
    children: toc && directory ? toc.map(title => `${directory}${title}`) : toc.map(title => `${title}`),
  };
};
