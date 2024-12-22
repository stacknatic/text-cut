'use client';
import React, { useState, useMemo } from 'react';

interface TextSnippetProps {
  body: string;
  length: number;
  viewMoreText?: string;
  viewLessText?: string;
  useLink?: boolean;
  postLink?: string;
  viewFullPostText?: string;
  bgColor?: string;
  textColor?: string;
  buttonBR?: string;
}

const TruncatedPost: React.FC<TextSnippetProps> = ({
  body,
  length,
  viewMoreText = 'View More',
  viewLessText = 'View Less',
  useLink,
  postLink,
  viewFullPostText = 'View Full Post',
  bgColor = 'green',
  textColor = 'white',
  buttonBR = 'small',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { truncatedText, notAboveLength, fullText, isLongText } =
    useMemo(() => {
      const words = body.split(' ');
      const truncatedBody = words.slice(0, length).join(' ');
      const remainingBody = words.slice(length).join(' ');

      return {
        truncatedText: truncatedBody + (words.length > length ? ' ...' : ''),
        fullText: body,
        isLongText: words.length > length,
        notAboveLength: words.length <= length,
      };
    }, [body, length]);

  const toggleExpansion = () => setIsExpanded(!isExpanded);

  return (
    <div>
      {notAboveLength ? (
        <p>{fullText}</p>
      ) : isExpanded ? (
        <>
          <p>{fullText}</p>
          <button
            className={`text-view-button ts-${bgColor}-bg ts-${textColor}-text ts-${buttonBR}-radius`}
            onClick={toggleExpansion}
          >
            {viewLessText}
          </button>
        </>
      ) : (
        <>
          <p> {truncatedText} </p>
          {isLongText && !useLink && (
            <button
              className={`text-view-button ts-${bgColor}-bg ts-${textColor}-text ts-${buttonBR}-radius`}
              onClick={toggleExpansion}
            >
              {viewMoreText}
            </button>
          )}

          {isLongText && useLink && (
            <a
              href={postLink as string}
              target="_blank"
              className="post-link-button"
            >
              {viewFullPostText}
            </a>
          )}
        </>
      )}
    </div>
  );
};

export default TruncatedPost;
