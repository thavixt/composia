# @thavixt/composia - a component library

![Alt text](./public/composia.svg)

> Tiny blocks, big wings!

`composia` is a component library based on `shadcn` - including all the pre-made components and styling.

[![pipeline](https://github.com/thavixt/composia/actions/workflows/build.yml/badge.svg)](https://github.com/thavixt/composia/actions/workflows/build.yml)
[![npm](https://img.shields.io/npm/v/@thavixt/composia)](https://www.npmjs.com/package/@thavixt/tcn)
![bundle (min)](https://img.shields.io/bundlephobia/min/%40thavixt%2Fcomposia)

Visit the [Storybook](https://composia.komlosidev.net/) to view all available components with examples.

## Installation

```bash
npm install @thavixt/composia
```

## Usage

An example of using the `<Button/>` component would look like this:

```tsx
import '@thavixt/composia/dist/index.css';
import { Button } from '@thavixt/composia';

export function MyComponent() {
  return (
    <Button variant="secondary" onClick={() => {
      console.log('you clicked the button!');
    }}>
      Perform important task
    </Button>
  )
}
```

Import the pre-built styles:

```tsx
// in your root React component
import '@thavixt/uikit/dist/index.css';
```
*or* in your root `.css` file:

```css
/* index.css */
@import "~@thavixt/uikit/dist/index.css";
/* or */
@import "node_modules/@thavixt/uikit/dist/index.css";
```

## Notes

Publishing:

```bash
npm version v${next_version}
npm publish
```