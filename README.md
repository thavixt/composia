# @thavixt/composia - a component library

[![pipeline](https://github.com/thavixt/composia/actions/workflows/build.yml/badge.svg)](https://github.com/thavixt/composia/actions/workflows/build.yml)

[![npm](https://img.shields.io/npm/v/@thavixt/composia)](https://www.npmjs.com/package/@thavixt/tcn)

![last commit](https://img.shields.io/github/last-commit/thavixt/composia)

![bundle (minzipped)](https://img.shields.io/bundlephobia/minzip/@thavixt/composia)

> @todo: analyze bundle size at https://bundlephobia.com/package/@thavixt/composia

![Composia logo](https://composia.komlosidev.net/composia.svg)

> Tiny blocks, big wings!
>
> [Composia credula](https://en.wikipedia.org/wiki/Composia) is a tiger moth of the family Erebidae first described in 1775.

`composia` is a React component library based on `shadcn`, including all the pre-made components and styling- with some modifications and additional components.

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
