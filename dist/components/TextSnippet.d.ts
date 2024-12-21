import React from 'react';
interface TruncatedPostProps {
    body: string;
    viewMoreText?: string;
    viewLessText?: string;
    length: number;
    postLink?: string;
    useLink?: boolean;
    viewFullPostText?: string;
}
export default function TextSnippet({ body, useLink, postLink, viewFullPostText, viewMoreText, viewLessText, length, }: TruncatedPostProps): React.JSX.Element;
export {};
