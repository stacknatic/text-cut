import React from 'react';
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
declare const TextSnippet: React.FC<TextSnippetProps>;
export default TextSnippet;
