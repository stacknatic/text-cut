"use client";
import React, { useState, useMemo } from 'react';




interface TruncatedPostProps {
  body: string;
  viewMoreText?: string;
  viewLessText?: string;
  length: number;
  postLink?: string;
  useLink?: boolean;
  viewFullPostText?: string;
  bgColor?: string;
}


const TruncatedPost: React.FC<TruncatedPostProps> = ({ body, useLink, postLink, viewFullPostText, viewMoreText="View More", viewLessText="View Less", length, bgColor="green" }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { truncatedText, notAboveLength, fullText, isLongText } = useMemo(() => {
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
      {notAboveLength ? fullText : 

      isExpanded ? (
        <>
          {fullText}
            <button
              className={`text-view-button ${bgColor}`}
              onClick={toggleExpansion}
            >
              {viewLessText}
            </button>
          
        </>
      ) : (
        <>
          {truncatedText}
        {isLongText && !useLink &&(
            <button
              className={`text-view-button ${bgColor}`}

              onClick={toggleExpansion}
            >
              {viewMoreText}
            </button>
          )}
          
          {isLongText && useLink && (
            <a href={postLink as string} className="post-link-button">
                {viewFullPostText}
            </a>
              
          )}
        </>
      )}
    </div>
  );
};

export default TruncatedPost;