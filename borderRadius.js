const _ = require("lodash");

module.exports = function(
  { addUtilities, e, theme, variants, config },
  isEnabled
) {
  if (isEnabled) {
    const generators = [
      (value, modifier) => ({
        [`.${e(`rounded-bs${modifier}`)}`]: {
          "border-start-start-radius": `${value}`,
          "border-start-end-radius": `${value}`
        },
        [`.${e(`rounded-be${modifier}`)}`]: {
          "border-end-start-radius": `${value}`,
          "border-end-end-radius": `${value}`
        },
        [`.${e(`rounded-is${modifier}`)}`]: {
          "border-start-start-radius": `${value}`,
          "border-end-start-radius": `${value}`
        },
        [`.${e(`rounded-ie${modifier}`)}`]: {
          "border-start-end-radius": `${value}`,
          "border-end-end-radius": `${value}`
        }
      }),
      (value, modifier) => ({
        [`.${e(`rounded-ss${modifier}`)}`]: {
          "border-start-start-radius": `${value}`
        },
        [`.${e(`rounded-se${modifier}`)}`]: {
          "border-start-end-radius": `${value}`
        },
        [`.${e(`rounded-es${modifier}`)}`]: {
          "border-end-start-radius": `${value}`
        },
        [`.${e(`rounded-ee${modifier}`)}`]: {
          "border-end-end-radius": `${value}`
        }
      })
    ];

    const utilities = _.flatMap(generators, generator => {
      return _.flatMap(theme("borderRadius"), (value, modifier) => {
        return generator(value, modifier === "default" ? "" : `-${modifier}`);
      });
    });

    addUtilities(utilities, variants("borderRadius"));
  }
};
