# Text Truncator

A simple text truncator that limits the display of text based on a maximum set length. When the text exceeds this length, users can choose to view the full content.

## Features

- Truncates text to a specified maximum word length.
- Optionally provides "View More" and "View Less" functionality.
- Supports external links to full posts.
- Easily customizable text for expanding/collapsing views.

## Parameters

The text truncator takes the following parameters:

- `body` (string, compulsory): The text that you want to truncate.
- `length` (number, compulsory): The maximum length of words to display.
- `viewMoreText` (string, optional): Text for the "View More" link.
- `viewLessText` (string, optional): Text for the "View Less" link.
- `postLink` (string, optional): The URL to the full post if using an external link.
- `useLink` (boolean, optional): If set to true, clicking "View More" will lead to the `postLink`. If false, the post will be expandable/collapsible in place.
- `viewFullPostText` (string, optional): Custom text for linking to view the full post.

## Installation

To install the Text Truncator, run:

```bash
npm install text-snippet
```
