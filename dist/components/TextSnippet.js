'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const TextSnippet = ({ body, useLink, postLink, viewFullPostText, viewMoreText, viewLessText, length, }) => {
    const [isExpanded, setIsExpanded] = (0, react_1.useState)(false);
    const { formattedTruncatedBody, formattedRemainingBody, formattedFullPost, isLongPost, } = (0, react_1.useMemo)(() => {
        const words = body.split(' ');
        const truncatedBody = words.slice(0, length).join(' ');
        const remainingBody = words.slice(length).join(' ');
        return {
            formattedTruncatedBody: truncatedBody + (words.length > length ? '...' : ''),
            formattedRemainingBody: remainingBody,
            formattedFullPost: body,
            isLongPost: words.length > length,
        };
    }, [body, length]);
    const toggleExpansion = () => setIsExpanded(!isExpanded);
    return (react_1.default.createElement("div", null, isExpanded ? (react_1.default.createElement(react_1.default.Fragment, null,
        formattedFullPost,
        react_1.default.createElement("button", { className: "text-sm hover:text-blue transform ease-in delay-75 hover:scale-105 border-1 border-green p-2 rounded-3xl my-2", onClick: toggleExpansion }, viewLessText))) : (react_1.default.createElement(react_1.default.Fragment, null,
        formattedTruncatedBody,
        isLongPost && !useLink && (react_1.default.createElement("button", { className: "text-sm hover:text-blue transform ease-in delay-75 hover:scale-105 border-1 border-green p-2 rounded-3xl my-2", onClick: toggleExpansion }, viewMoreText)),
        isLongPost && useLink && (react_1.default.createElement("a", { href: postLink, className: "text-sm hover:text-blue transform ease-in delay-75 hover:scale-105 border-1 border-green p-2 rounded-3xl my-2" }, viewFullPostText))))));
};
exports.default = TextSnippet;
