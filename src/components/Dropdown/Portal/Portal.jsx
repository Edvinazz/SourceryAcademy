import { useState } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children, id = 'portal-root' }) => {
  const [element] = useState(() => {
    const portalRoot = document.getElementById('portal-root');

    if (portalRoot) {
      return portalRoot;
    }

    const el = document.createElement('div');
    const portalDiv = document.body.appendChild(el);
    portalDiv.id = id;

    return portalDiv;
  });

  return createPortal(children, element);
};
export default Portal;
