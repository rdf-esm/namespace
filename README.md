# @rdf-esm/namespace

[![Build Status](https://github.com/rdf-esm/namespace/workflows/Test/badge.svg)](https://github.com/rdf-esm/namespace/actions?query=workflow%3ATest)

[![npm version](https://img.shields.io/npm/v/@rdf-esm/namespace.svg)](https://www.npmjs.com/package/@rdf-esm/namespace)

[Named Node](http://rdf.js.org/) builder.

## Fork alert :exclamation:

This package is an ES Modules fork of [@rdfjs/namespace](https://npm.im/@rdfjs/namespace)

The original, commonjs version is used node environment.

## Usage

The package exports a factory to create builders for [Named Nodes](http://rdf.js.org/#namednode-interface).
The `baseIRI` given to the factory will be used together with the parameter given to the builder to create Named Nodes.

### Factory

The factory must be called with the `baseIRI` as a string:
```javascript
const builder = namespace('http://example.org/base-iri#')
```

An optional factory can be defined:
```javascript
const builder = namespace('http://example.org/base-iri#', { factory: customFactory })
```

By default `@rdf-esm/data-model` is used.

### Builder

The builder can be called in three different ways:

- function call: (`builder('property')`)
- tagged template string: (```builder`property` ```)
- property: (`builder.property`)

Calling the builder using the propery requires [Proxy](https://www.ecma-international.org/ecma-262/6.0/#sec-proxy-objects) support.
At the moment IE11 is the only [major platform](https://caniuse.com/#feat=proxy) which doesn't support Proxy.

### Example

This example shows how to create a builder and create Named Nodes using the three different ways.
The properties of the Named Nodes are written to the console.

```javascript
import namespace from '@rdf-esm/namespace'

const schema = namespace('http://schema.org/')

const hasPart = schema('hasPart')
console.log(hasPart.termType) // NamedNode
console.log(hasPart.value) // http://schema.org/hasPart

const person = schema`Person`
console.log(person.termType) // NamedNode
console.log(person.value) // http://schema.org/Person

const comment = schema.Comment
console.log(comment.termType) // NamedNode
console.log(comment.value) // http://schema.org/Comment
```
