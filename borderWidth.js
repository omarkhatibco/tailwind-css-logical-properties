const _ = require("lodash");

module.exports = function(
  { addUtilities, e, theme, variants, config },
  isEnabled
) {
  if (isEnabled) {
    const generators = [
      (value, modifier) => ({
        [`.${e(`border-bs${modifier}`)}`]: {
          "border-block-start-width": `${value}`
        },
        [`.${e(`border-ie${modifier}`)}`]: {
          "border-inline-end-width": `${value}`
        },
        [`.${e(`border-be${modifier}`)}`]: {
          "border-block-end-width": `${value}`
        },
        [`.${e(`border-is${modifier}`)}`]: {
          "border-inline-start-width": `${value}`
        }
      })
    ];

    const utilities = _.flatMap(generators, generator => {
      return _.flatMap(theme("borderWidth"), (value, modifier) => {
        return generator(value, modifier === "default" ? "" : `-${modifier}`);
      });
    });

    addUtilities(utilities, variants("borderWidth"));
  }
};
