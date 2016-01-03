// helper function to mock a click event
const mockClickEvent = (targetAttributes) => {
  let origin = location.protocol + '//' + location.hostname;
  if (location.port) origin += ':' + location.port;
  return {
    defaultPrevented: true,
    which: 1,
    target: {
      tagName: 'A',
      href: origin + targetAttributes.href,
      hasAttribute: (attrName) => targetAttributes.hasOwnProperty(attrName),
      getAttribute: (attrName) => targetAttributes[attrName],
    },
    preventDefault: () => {},
  };
};

export default mockClickEvent;
