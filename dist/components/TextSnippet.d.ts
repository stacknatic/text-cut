import React from 'react';
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
declare const TruncatedPost: React.FC<TruncatedPostProps>;
export default TruncatedPost;
