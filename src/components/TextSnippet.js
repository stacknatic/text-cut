'use client';
import React, { useState, useMemo } from 'react';
const TextSnippet = ({
  body,
  useLink,
  postLink,
  viewFullPostText,
  viewMoreText,
  viewLessText,
  length,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    formattedTruncatedBody,
    formattedRemainingBody,
    formattedFullPost,
    isLongPost,
  } = useMemo(() => {
    const words = body.split(' ');
    const truncatedBody = words.slice(0, length).join(' ');
    const remainingBody = words.slice(length).join(' ');
    return {
      formattedTruncatedBody:
        truncatedBody + (words.length > length ? '...' : ''),
      formattedRemainingBody: remainingBody,
      formattedFullPost: body,
      isLongPost: words.length > length,
    };
  }, [body, length]);
  const toggleExpansion = () => setIsExpanded(!isExpanded);
  return React.createElement(
    'div',
    null,
    isExpanded
      ? React.createElement(
          React.Fragment,
          null,
          formattedFullPost,
          React.createElement(
            'button',
            {
              className:
                'text-sm hover:text-blue transform ease-in delay-75 hover:scale-105 border-1 border-green p-2 rounded-3xl my-2',
              onClick: toggleExpansion,
            },
            viewLessText,
          ),
        )
      : React.createElement(
          React.Fragment,
          null,
          formattedTruncatedBody,
          isLongPost &&
            !useLink &&
            React.createElement(
              'button',
              {
                className:
                  'text-sm hover:text-blue transform ease-in delay-75 hover:scale-105 border-1 border-green p-2 rounded-3xl my-2',
                onClick: toggleExpansion,
              },
              viewMoreText,
            ),
          isLongPost &&
            useLink &&
            React.createElement(
              'a',
              {
                href: postLink,
                className:
                  'text-sm hover:text-blue transform ease-in delay-75 hover:scale-105 border-1 border-green p-2 rounded-3xl my-2',
              },
              viewFullPostText,
            ),
        ),
  );
};
export default TextSnippet;
