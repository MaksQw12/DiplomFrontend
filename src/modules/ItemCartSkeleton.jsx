import React from 'react';
import ContentLoader from 'react-content-loader';

const ItemCartSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={550}
    viewBox="0 0 400 550"
    backgroundColor="#293133"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="70" y="40" rx="15" ry="15" width="260" height="260" />

    <rect x="70" y="320" rx="10" ry="10" width="260" height="20" />

    <rect x="70" y="350" rx="10" ry="10" width="150" height="20" />

    <rect x="110" y="410" rx="10" ry="10" width="180" height="60" />
  </ContentLoader>
);

export default ItemCartSkeleton;
