"use strict";
'use client';
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
const TruncatedPost = ({ body, length, viewMoreText = 'View More', viewLessText = 'View Less', useLink, postLink, viewFullPostText = 'View Full Post', bgColor = 'green', textColor = 'white', buttonBR = 'small', }) => {
    const [isExpanded, setIsExpanded] = (0, react_1.useState)(false);
    const { truncatedText, notAboveLength, fullText, isLongText } = (0, react_1.useMemo)(() => {
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
    return (react_1.default.createElement("div", null, notAboveLength ? (react_1.default.createElement("p", null, fullText)) : isExpanded ? (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("p", null, fullText),
        react_1.default.createElement("button", { className: `text-view-button ts-${bgColor}-bg ts-${textColor}-text ts-${buttonBR}-radius`, onClick: toggleExpansion }, viewLessText))) : (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("p", null,
            " ",
            truncatedText,
            " "),
        isLongText && !useLink && (react_1.default.createElement("button", { className: `text-view-button ts-${bgColor}-bg ts-${textColor}-text ts-${buttonBR}-radius`, onClick: toggleExpansion }, viewMoreText)),
        isLongText && useLink && (react_1.default.createElement("a", { href: postLink, target: "_blank", className: "post-link-button" }, viewFullPostText))))));
};
exports.default = TruncatedPost;
