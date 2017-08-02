"use strict";
var postcss = require("postcss");

module.exports = postcss.plugin('postcss-overlay-gradient', function myplugin(options) {
	// Work with options here
	return function (css) {

		options = options || {};

		// Transform each rule here
		css.walkDecls(decl => {
			if (decl.prop == 'ovg') {

				const selector = decl.parent.selector + ':before';
				const rule = postcss.rule({ selector: selector });
				const gradient = decl.value;

				rule.append({
					type: 'decl',
					prop: 'content',
					value: '""',
					raws: {
						before: "\n\t",
						between: ": "
					}
				}, {
					type: 'decl',
					prop: 'width',
					value: '100%',
					raws: {
						before: "\n\t",
						between: ": "
					}
				}, {
					type: 'decl',
					prop: 'height',
					value: '100%',
					raws: {
						before: "\n\t",
						between: ": "
					}
				}, {
					type: 'decl',
					prop: 'position',
					value: 'absolute',
					raws: {
						before: "\n\t",
						between: ": "
					}
				}, {
					type: 'decl',
					prop: 'left',
					value: '0',
					raws: {
						before: "\n\t",
						between: ": "
					}
				}, {
					type: 'decl',
					prop: 'top',
					value: '0',
					raws: {
						before: "\n\t",
						between: ": "
					}
				}, {
					type: 'decl',
					prop: 'z-index',
					value: '2',
					raws: {
						before: "\n\t",
						between: ": "
					}
				}, {
					type: 'decl',
					prop: 'background-image',
					value: gradient,
					raws: {
						before: "\n\t",
						between: ": "
					}
				}, {
					type: 'decl',
					prop: 'pointer-events',
					value: 'none',
					raws: {
						before: "\n\t",
						between: ": "
					}
				}, {
					type: 'decl',
					prop: 'touch-action',
					value: 'none',
					raws: {
						before: "\n\t",
						between: ": "
					}
				});

				const atrule = postcss.atRule({
					type: 'atrule',
					name: 'media',
					params: 'all and (-ms-high-contrast: none), (-ms-high-contrast: active)',
					raws: {
						before: '\n\n',
						after: '\n',
						semicolon: false,
						afterName: ' '
					}
				});

				const ierule = postcss.rule({ selector: selector });
				
				ierule.append({
					type: 'decl',
					prop: 'content',
					value: 'none',
					raws: {
						before: "\n\t",
						between: ": ",
						semicolon: false,
						afterName: ' '
					}
				});
				
				atrule.append(ierule);

				decl.parent.prepend({
					type: 'decl',
					prop: 'position',
					value: 'relative',
					raws: {
						before: "\n\t",
						between: ": "
					}
				});

				decl.root().insertAfter(decl.parent, rule);
				decl.root().insertAfter(rule, atrule);

				decl.remove();


			}

		});
	};
});