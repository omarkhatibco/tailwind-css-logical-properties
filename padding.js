const _ = require("lodash");

module.exports = function(
  { addUtilities, e, theme, variants, config },
  isEnabled
) {
  const corePaddingConfig = config("corePlugins.padding");

  if (isEnabled) {
    const prefixObj = {
      py: corePaddingConfig === false ? "pb" : "lpb",
      px: corePaddingConfig === false ? "pi" : "lpi"
    };

    const globalPadding =
      corePaddingConfig === false
        ? [
            (size, modifier) => ({
              [`.${e(`p-${modifier}`)}`]: { padding: `${size}` }
            })
          ]
        : [];

    const generators = [
      ...globalPadding,
      (size, modifier) => ({
        [`.${e(`${prefixObj["py"]}-${modifier}`)}`]: {
          "padding-block-start": `${size}`,
          "padding-block-end": `${size}`,
          "padding-block": `${size}`
        },
        [`.${e(`${prefixObj["px"]}-${modifier}`)}`]: {
          "padding-inline-start": `${size}`,
          "padding-inline-end": `${size}`,
          "padding-inline": `${size}`
        }
      }),
      (size, modifier) => ({
        [`.${e(`pbs-${modifier}`)}`]: { "padding-block-start": `${size}` },
        [`.${e(`pbe-${modifier}`)}`]: { "padding-block-end": `${size}` },
        [`.${e(`pis-${modifier}`)}`]: { "padding-inline-start": `${size}` },
        [`.${e(`pie-${modifier}`)}`]: { "padding-inline-end": `${size}` }
      })
    ];

    const utilities = _.flatMap(generators, generator => {
      return _.flatMap(theme("padding"), generator);
    });

    addUtilities(utilities, variants("padding"));
  }
};
