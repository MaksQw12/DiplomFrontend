import React from 'react';
import ContentLoader from 'react-content-loader';

const ItemCartSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={550}
    viewBox="0 0 400 550"
    backgroundColor="#adadad"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="-3" y="385" rx="10" ry="10" width="408" height="19" />
    <rect x="469" y="536" rx="20" ry="20" width="261" height="89" />
    <rect x="0" y="343" rx="10" ry="10" width="408" height="19" />
    <rect x="1" y="445" rx="0" ry="0" width="408" height="44" />
    <rect x="-6" y="9" rx="10" ry="10" width="406" height="304" />
  </ContentLoader>
);

export default ItemCartSkeleton;
