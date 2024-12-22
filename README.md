# Description

Text-cut is a simple text truncator that limits the display of text based on a maximum set length for words. When the text exceeds this length, a reader can toggle the text expansion button to view the full text or less.

## Features

- Truncates text to a specified maximum word length.
- Provides "View More" and "View Less" functionality.
- Supports external links to full posts.
- Easily customizable text for expanding/collapsing views (You can customize the displayed text on the button with props for better SEO).
- Customizable background colors for the view more or less button.

## Props

The text truncator takes the following props:

- `body` (string, compulsory): The text that you want to truncate.

- `length` (number, compulsory): The maximum length of words to display.

- `viewMoreText` (string, optional): Text to be displayed for the "View More" button.

- `viewLessText` (string, optional): Text to be displayed for the "View Less" button.

- `useLink` (boolean, optional): If set to true, clicking "View More" will lead to the `postLink`. If false, the post will be expandable/collapsible in place.

- `postLink` (string, optional): The URL to the full post if it is available on another page (You should add this prop if you are using the useLink prop).

- `viewFullPostText` (string, optional): Custom text for linking to view the full post.

- `bgColor` (string, optional): Sets background color for the text snippet expansion (View more or less) button, eg "green". Default is "blue".

- `textColor` (string, optional): Sets text color for the text displayed in the button (view more or less), eg "blue".

- `buttonBR` (string, optional): Sets border radius for buttons. Options are "small" (border radius of 5px) and "medium" (border radius of 25px). Default is "small".

## Installation

To install, run:

```bash
npm install text-cut
```
