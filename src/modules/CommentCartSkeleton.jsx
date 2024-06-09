import React from 'react';
import ContentLoader from 'react-content-loader';

const CommentCartSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={550}
    viewBox="0 0 400 550"
    backgroundColor="#adadad"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="469" y="536" rx="20" ry="20" width="261" height="89" />
    <rect x="0" y="123" rx="0" ry="0" width="453" height="158" />
    <rect x="272" y="321" rx="0" ry="0" width="125" height="50" />
  </ContentLoader>
);

export default CommentCartSkeleton;
