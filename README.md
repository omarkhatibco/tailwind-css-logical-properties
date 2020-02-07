# CSS Logical Properties

> Generate classnames for CSS Logical Properties for margin, padding, border-width, border-raduis, text-align, float & writing-mode.

[![npm](https://img.shields.io/npm/v/tailwind-css-logical-properties.svg?style=for-the-badge)](https://www.npmjs.com/package/tailwind-css-logical-properties)
[![Downloads](https://img.shields.io/npm/dt/tailwind-css-logical-properties.svg?style=for-the-badge)](https://www.npmjs.com/package/tailwind-css-logical-properties)
[![License](https://img.shields.io/npm/l/tailwind-css-logical-properties.svg?style=for-the-badge)](https://es.wikipedia.org/wiki/Licencia_MIT)

## CSS Logical Properties

> CSS Logical Properties and Values is a module of CSS introducing logical properties and values that provide the ability to control layout through logical, rather than physical, direction and dimension mappings.

> The module also defines logical properties and values for properties previously defined in CSS 2.1. Logical properties define direction‐relative equivalents of their corresponding physical properties.
>
> - MDN Docs

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties) - [CSS Tricks](https://css-tricks.com/css-logical-properties/)

CSS Logical Properties is very helpful if your are going to develop websites in many styles like (RTL - LTR) because if you use theme you can flip the website just by adding `direction: rtl;` and no need for any other adjacment

:warning: **CSS Logical Properties still in Editor's Draft so they may or may not work in all browsers and the may change also, keep that in your mind before you use them.**

[Can I Use](https://caniuse.com/#feat=css-logical-props)

## Installation

Add the plugin to you Project

```bash
# Install via npm
npm install --save-dev tailwind-css-logical-properties
```

## Configure

The CSS Logical Properties plugin exposes options for you to use. Here is the example for adding it to your project tailwind plugins.

In `tailwind.js` or `tailwind.config.js` search for plugins section and add this lines.

```js
plugins: [
  require('tailwind-css-logical-properties')({});
]
```

## Modules

### Writing Mode

> CSS Writing Modes is a CSS module that defines various international writing modes, such as left-to-right (e.g. used by Latin and Indic scripts), right-to-left (e.g. used by Hebrew or Arabic scripts), bidirectional (used when mixing left-to-right and right-to-left scripts) and vertical (e.g. used by some Asian scripts).
>
> - MDN Docs

This module will generate the following rules.

```css
.rm-h {
  writing-mode: horizontal-tb;
}
.rm-vl {
  writing-mode: vertical-lr;
}
.rm-vr {
  writing-mode: vertical-rl;
}
```

#### Variants

```js
{
  variants: {
    writingMode: ["responsive"],
  }
}
```

#### Deactivation

```js
plugins: [
  require('tailwind-css-logical-properties')({
     writingMode: false,
  });
]
```

### Float

This module will generate the following rules.

```css
.float-start {
  float: start;
}
.float-end {
  float: end;
}
```

#### Variants and Deactivation

This Module respect and follow all settings of the `Float` core plugin.

### Text Align

This Module will generate this following css

```css
.text-start {
  text-align: start;
}
.text-end {
  text-align: end;
}
```

#### Variants and Deactivation

This Module respect and follow all settings of the `textAlign` core plugin.

### Padding

This module has a conflict with the core plugin `padding` so It will check if the core plugin is deactivated or not.

#### if core plugin is deactivated

```js
  corePlugins: {
    padding: false,
  },
```

```css
.pb-{size} {
  padding-block-start: size;
  padding-block-end: size;
  padding-block: size;
}

.pi-{size} {
  padding-inline-start: size;
  padding-inline-end: size;
  padding-inline: size;
}
```

#### if core plugin is activated

```css
.lpb-{size} {
  padding-block-start: size;
  padding-block-end: size;
  padding-block: size;
}

.lpi-{size} {
  padding-inline-start: size;
  padding-inline-end: size;
  padding-inline: size;
}
```

#### Also Generates

```css
.pbs-{size} {
  padding-block-start: size;
}
.pbe-{size} {
  padding-block-end: size;
}
.pis-{size} {
  padding-inline-start: size;
}
.pie-{size} {
  padding-inline-end: size;
}
```

#### Variants and Values

This Module respect and follow all settings of the `padding` core plugin.

#### Deactivation

```js
plugins: [
  require('tailwind-css-logical-properties')({
     logicalPadding: false,
  });
]
```

### Margin

This module has a conflict with the core plugin `margin` so It will check if the core plugin is deactivated or not.

#### if core plugin is deactivated

```js
  corePlugins: {
    margin: false,
  },
```

```css
.mb-{size} {
  margin-block-start: size;
  margin-block-end: size;
  margin-block: size;
}

.mi-{size} {
  margin-inline-start: size;
  margin-inline-end: size;
  margin-inline: size;
}
```

#### if core plugin is activated

```css
.lmb-{size} {
  margin-block-start: size;
  margin-block-end: size;
  margin-block: size;
}

.lmi-{size} {
  margin-inline-start: size;
  margin-inline-end: size;
  margin-inline: size;
}
```

#### Also Generates

```css
.mbs-{size} {
  margin-block-start: size;
}
.mbe-{size} {
  margin-block-end: size;
}
.mis-{size} {
  margin-inline-start: size;
}
.mie-{size} {
  margin-inline-end: size;
}
```

#### Variants and Values

This Module respect and follow all settings of the `margin` core plugin.

#### Deactivation

```js
plugins: [
  require('tailwind-css-logical-properties')({
     logicalMargin: false,
  });
]
```

### Border Width

This module will generate the following rules.

```css
.border-bs-{size} {
  border-block-start-width: size;
}
.border-be-{size} {
  border-block-end-width: size;
}
.border-is-{size} {
  border-inline-start-width: size;
}
.border-ie-{size} {
  border-inline-end-width: size;
}
```

#### Variants and Values

This Module respect and follow all settings of the `borderWidth` core plugin.

#### Deactivation

```js
plugins: [
  require('tailwind-css-logical-properties')({
     LogicalBorderWidth: false,
  });
]
```

### Border Radius

:warning: **This module is deactivated by default, because it has no broswer support yet, but If you want to play with it, go for it!**

This module will generate the following rules.

```css
.rounded-bs-{size} {
  border-start-start-radius: size;
  border-start-end-radius: size;
}
.rounded-be-{size} {
  border-end-start-radius: size;
  border-end-end-radius: size;
}
.rounded-is-{size} {
  border-start-start-radius: size;
  border-end-start-radius: size;
}
.rounded-ie-{size} {
  border-start-end-radius: size;
  border-end-end-radius: size;
}

.rounded-ss-{size} {
  border-start-start-radius: size;
}
.rounded-se-{size} {
  border-start-end-radius: size;
}
.rounded-es-{size} {
  border-end-start-radius: size;
}
.rounded-ee-{size} {
  border-emd-end-radius: size;
}
```

#### Variants and Values

This Module respect and follow all settings of the `borderRadius` core plugin.

#### Activation

```js
plugins: [
  require('tailwind-css-logical-properties')({
     logicalBorderRadius: true,
  });
]
```

## Release History

Checkout [CHANGELOG.md](https://github.com/omarkhatibco/tailwind-css-logical-properties/blob/master/CHANGELOG.md) file for release history.

## Meta

Checkout [LICENSE](https://github.com/omarkhatibco/tailwind-css-logical-properties/blob/master/LICENSE) for license information.
