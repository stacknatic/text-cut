'use client';
import React, { useState, useMemo } from 'react';

interface TruncatedPostProps {
  body: string;
  viewMoreText?: string;
  viewLessText?: string;
  length: number;
  postLink?: string;
  useLink?: boolean;
  viewFullPostText?: string;
}

export default function TextSnippet({
  body,
  useLink,
  postLink,
  viewFullPostText,
  viewMoreText,
  viewLessText,
  length,
}: TruncatedPostProps) {
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

  return (
    <div>
      {isExpanded ? (
        <>
          {formattedFullPost}
          <button
            className="text-sm hover:text-blue transform ease-in delay-75 hover:scale-105 border-1 border-green p-2 rounded-3xl my-2"
            onClick={toggleExpansion}
          >
            {viewLessText}
          </button>
        </>
      ) : (
        <>
          {formattedTruncatedBody}
          {isLongPost && !useLink && (
            <button
              className="text-sm hover:text-blue transform ease-in delay-75 hover:scale-105 border-1 border-green p-2 rounded-3xl my-2"
              onClick={toggleExpansion}
            >
              {viewMoreText}
            </button>
          )}
          {isLongPost && useLink && (
            <a
              href={postLink as string}
              className="text-sm hover:text-blue transform ease-in delay-75 hover:scale-105 border-1 border-green p-2 rounded-3xl my-2"
            >
              {viewFullPostText}
            </a>
          )}
        </>
      )}
    </div>
  );
}
