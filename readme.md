# PostCSS OverlayGradient

[PostCSS] plugin when create Overlay Gradient from one word.


[PostCSS]: https://github.com/postcss/postcss


```css
.selector {
   ovg: linear-gradient(to bottom ,#fff 0%, rgba(#fff, .0), #fff 100%));
   }
```

```css
.selector {
	position: relative;
}

.selector:before {
	content: "";
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 2;
	background-image: linear-gradient(to bottom, #fff 0%, rgba(255, 255, 255, 0) #fff 100%);
	pointer-events: none;
	touch-action: none;
}

@media screen and (min-width: 0\0) {
	.selector:before {
		content: none;
	}
}
```

## Usage

```js
postcss([ require('postcss-overlay-gradient') ])
```

See [PostCSS] docs for examples for your environment.