# Description

Text-snippet is a simple text truncator that limits the display of text based on a maximum set length for words. When the text exceeds this length, users can choose to view the full content.

## Features

- Truncates text to a specified maximum word length.
- Provides "View More" and "View Less" functionality.
- Supports external links to full posts.
- Easily customizable text for expanding/collapsing views.
- Customizable background and text colors.

## Props

The text truncator takes the following props:

- `body` (string, compulsory): The text that you want to truncate.
- `length` (number, compulsory): The maximum length of words to display.
- `viewMoreText` (string, optional): Text for the "View More" link.
- `viewLessText` (string, optional): Text for the "View Less" link.
- `useLink` (boolean, optional): If set to true, clicking "View More" will lead to the `postLink`. If false, the post will be expandable/collapsible in place.
- `postLink` (string, optional): The URL to the full post if it is available on another page.
- `viewFullPostText` (string, optional): Custom text for linking to view the full post.
- `bgColor` (string, optional): Custom background color for the text truncator, eg "red".
- `textColor` (string, optional): Custom text color for the truncated text, eg "blue".
- `buttonBR` (string, optional): Custom border radius for buttons. Options are "small" (border radius of 5px) and "medium" (border radius of 25px). Default is "small".

## Installation

To install, run:

```bash
npm install text-snippet
```
