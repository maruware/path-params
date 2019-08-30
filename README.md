# path-params

![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![Build Status](https://travis-ci.org/maruware/path-params.svg?branch=master)](https://travis-ci.org/maruware/path-params)

Build URL with path params

## Install

```
yarn add @maruware/path-params
```

## Usage

```ts
import pathParams from '@maruware/path-params'
const path = pathParams('/users/:id/messages/:message_id', {id: 2, message_id: 'abc'})
// '/users/2/messages/abc'
```

* with transform to snake case

```ts
import pathParams from '@maruware/path-params'
const path = pathParams('/users/:id/messages/:message_id', {id: 2, messageId: 'abc'}, {toSnake: true})
// '/users/2/messages/abc'
```
