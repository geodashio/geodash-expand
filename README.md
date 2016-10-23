# GeoDash Expand (geodash-expand)

The `expand` function for [GeoDash](http://geodash.io) that is used during building and runtime.

```
var value = expand(keyChain);
```

## GeoDash

GeoDash is a modern web framework and approach for quickly producing visualizations of geospatial data. The name comes from "geospatial dashboard".

The framework is built to be extremely extensible. You can use GeoDash Server (an implementation), the front-end framework, backend code, or just the Gulp pipeline. Have fun!

See [http://geodash.io](http://geodash.io) for more details.

# Install

Install with [npm](https://npmjs.org/package/geodash-expand)

```
npm install geodash-expand--save-dev
```

# Usage

`expand` is a function mostly used with [extract](https://www.npmjs.com/package/geodash-extract).  Expand can expand an arbitrary array of period separated keychains and create a unified array of 1 element per key.

```
var a = ["featurelayers"];
var b = expand(a.concat([0, "popup.panes", 2]));
// b == ["featurelayers", 0, "popup", "panes", 2]
var pane = extract(b, dashbaord);
```

Since the function can be used throughout the framework and in downstream project code, in GeoDashJS, it is attached to the `window` and is globally accessible with no namespace.

# Building

## docs

To build the custom docs template used in the website, you'll need to install a custom version of docstrap.git on top of the default version.  The below command will install the custom version.

```
npm install git+https://git@github.com/geodashio/docstrap.git\#geodash # Install custom docs template with font awesome
```

You can just build docs with:
```
npm run build:docs # or gulp docs since run the same thing
```

# Tests

Only [jshint](http://jshint.com/about/) is supported right now.  Run tests with the following command.

```
npm run tests
```

# Contributing

Happy to accept pull requests!

# License

See `LICENSE` file.
