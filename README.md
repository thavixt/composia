# @thavixt/composia - a component library

| npm | github | bundle |
| --- | --- | --- |
| [![](https://img.shields.io/npm/v/@thavixt/composia?label=latest)](https://www.npmjs.com/package/@thavixt/composia) | ![GitHub last commit](https://img.shields.io/github/last-commit/thavixt/composia) | ![bundle (minified)](https://img.shields.io/bundlephobia/min/@thavixt/composia) |
| ![NPM Last Update](https://img.shields.io/npm/last-update/%40thavixt%2Fcomposia) | [![pipeline](https://github.com/thavixt/composia/actions/workflows/build.yml/badge.svg)](https://github.com/thavixt/composia/actions/workflows/build.yml) | ![bundle (minified)](https://img.shields.io/bundlephobia/minzip/@thavixt/composia) |
<!-- > @todo: analyze (and reduce) bundle size: https://bundlephobia.com/package/@thavixt/composia -->

Tiny blocks, big wings!
![Composia logo](https://composia.komlosidev.net/composia.svg)
<!-- [Composia credula](https://en.wikipedia.org/wiki/Composia) is a tiger moth of the family Erebidae first described in 1775. -->
`composia` is a React component library based on `shadcn` with some modifications and additional components.

Visit the [Storybook](https://composia.komlosidev.net/) to view all available components with code examples.

## Installation

```bash
npm install @thavixt/composia
```

## Usage

Import the pre-built styles in your root component:

```tsx
import '@thavixt/composia/dist/index.css';
```

An example of using the `<Button />` component would look like this:

```tsx
import { Button } from '@thavixt/composia';

export function MyComponent() {
  return (
    <Button variant="secondary" onClick={() => console.log('Clicked!')}>
      Perform task
    </Button>
  )
}
```
