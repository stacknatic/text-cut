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
declare const TextSnippet: React.FC<TruncatedPostProps>;
export default TextSnippet;
//# sourceMappingURL=TextSnippet.d.ts.map