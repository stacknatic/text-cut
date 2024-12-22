'use client';
import React, { useState, useMemo } from 'react';
import styles from '../styles.module.css'; // Import the CSS Module

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

const TextSnippet: React.FC<TextSnippetProps> = ({
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
            className={`${styles.textViewButton} ${styles[`ts${bgColor.charAt(0).toUpperCase() + bgColor.slice(1)}Bg`]} ${styles[`ts${textColor.charAt(0).toUpperCase() + textColor.slice(1)}Text`]} ${styles[`ts${buttonBR.charAt(0).toUpperCase() + buttonBR.slice(1)}Radius`]}`}
            onClick={toggleExpansion}
          >
            {viewLessText}
          </button>
        </>
      ) : (
        <>
          <p>{truncatedText}</p>
          {isLongText && !useLink && (
            <button
              className={`${styles.textViewButton} ${styles[`ts${bgColor.charAt(0).toUpperCase() + bgColor.slice(1)}Bg`]} ${styles[`ts${textColor.charAt(0).toUpperCase() + textColor.slice(1)}Text`]} ${styles[`ts${buttonBR.charAt(0).toUpperCase() + buttonBR.slice(1)}Radius`]}`}
              onClick={toggleExpansion}
            >
              {viewMoreText}
            </button>
          )}

          {isLongText && useLink && (
            <a
              href={postLink as string}
              target="_blank"
              className={styles.postLinkButton}
            >
              {viewFullPostText}
            </a>
          )}
        </>
      )}
    </div>
  );
};

export default TextSnippet;
