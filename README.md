<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# writablePropertyNames

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an array of an object's own writable property names.

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-writable-property-names
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var writablePropertyNames = require( '@stdlib/utils-writable-property-names' );
```

#### writablePropertyNames( obj )

Returns an `array` of an object's own writable property names.

```javascript
var defineProperty = require( '@stdlib/utils-define-property' );

var obj = {
    'a': 'b'
};

defineProperty( obj, 'c', {
    'configurable': true,
    'enumerable': true,
    'writable': false,
    'value': 'd'
});

var keys = writablePropertyNames( obj );
// returns [ 'a' ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Name order is not guaranteed, as `object` key enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s keys, thus allowing for deterministic extraction.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var defineProperty = require( '@stdlib/utils-define-property' );
var writablePropertyNames = require( '@stdlib/utils-writable-property-names' );

function Foo() {
    this.a = {
        'b': 'c'
    };
    defineProperty( this, 'baz', {
        'configurable': true,
        'enumerable': true,
        'writable': false,
        'value': 'qux'
    });
    return this;
}

Foo.prototype.foo = [ 'bar' ];
defineProperty( Foo.prototype, 'bip', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'bop'
});

var obj = new Foo();
var keys = writablePropertyNames( obj );

console.log( keys );
// => [ 'a' ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/inherited-writable-property-names`][@stdlib/utils/inherited-writable-property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited writable property names.</span>
-   <span class="package-name">[`@stdlib/utils/writable-properties`][@stdlib/utils/writable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's own writable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/writable-property-names-in`][@stdlib/utils/writable-property-names-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited writable property names.</span>
-   <span class="package-name">[`@stdlib/utils/writable-property-symbols`][@stdlib/utils/writable-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's own writable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils/property-names`][@stdlib/utils/property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable and non-enumerable property names.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-writable-property-names.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-writable-property-names

[test-image]: https://github.com/stdlib-js/utils-writable-property-names/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-writable-property-names/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-writable-property-names/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-writable-property-names?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-writable-property-names.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-writable-property-names/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-writable-property-names/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-writable-property-names/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-writable-property-names/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-writable-property-names/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-writable-property-names/main/LICENSE

[ecma-262-for-in]: http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.4

<!-- <related-links> -->

[@stdlib/utils/inherited-writable-property-names]: https://github.com/stdlib-js/utils-inherited-writable-property-names

[@stdlib/utils/writable-properties]: https://github.com/stdlib-js/utils-writable-properties

[@stdlib/utils/writable-property-names-in]: https://github.com/stdlib-js/utils-writable-property-names-in

[@stdlib/utils/writable-property-symbols]: https://github.com/stdlib-js/utils-writable-property-symbols

[@stdlib/utils/property-names]: https://github.com/stdlib-js/utils-property-names

<!-- </related-links> -->

</section>

<!-- /.links -->
