const _ = require("lodash");

module.exports = function(
  { addUtilities, e, theme, variants, config },
  isEnabled
) {
  const coreMarginConfig = config("corePlugins.margin");

  if (isEnabled) {
    const prefixObj = {
      my: coreMarginConfig === false ? "mb" : "lmb",
      mx: coreMarginConfig === false ? "mi" : "lmi"
    };

    const globalMargin =
      coreMarginConfig === false
        ? [
            (size, modifier) => ({
              [`.${e(prefixNegativeModifiers("m", modifier))}`]: {
                margin: `${size}`
              }
            })
          ]
        : [];

    const generators = [
      ...globalMargin,
      (size, modifier) => ({
        [`.${e(prefixNegativeModifiers(prefixObj["my"], modifier))}`]: {
          "margin-block-start": `${size}`,
          "margin-block-end": `${size}`,
          "margin-block": `${size}`
        },
        [`.${e(prefixNegativeModifiers(prefixObj["mx"], modifier))}`]: {
          "margin-inline-start": `${size}`,
          "margin-inline-end": `${size}`,
          "margin-inline": `${size}`
        }
      }),
      (size, modifier) => ({
        [`.${e(prefixNegativeModifiers("mbs", modifier))}`]: {
          "margin-block-start": `${size}`
        },
        [`.${e(prefixNegativeModifiers("mbe", modifier))}`]: {
          "margin-block-end": `${size}`
        },
        [`.${e(prefixNegativeModifiers("mis", modifier))}`]: {
          "margin-inline-start": `${size}`
        },
        [`.${e(prefixNegativeModifiers("mie", modifier))}`]: {
          "margin-inline-end": `${size}`
        }
      })
    ];

    const utilities = _.flatMap(generators, generator => {
      return _.flatMap(theme("margin"), generator);
    });

    addUtilities(utilities, variants("margin"));
  }
};

function prefixNegativeModifiers(base, modifier) {
  if (modifier === "-") {
    return `-${base}`;
  } else if (_.startsWith(modifier, "-")) {
    return `-${base}-${modifier.slice(1)}`;
  } else {
    return `${base}-${modifier}`;
  }
}
