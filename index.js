const plugin = require("tailwindcss/plugin");
const padding = require("./padding.js");
const margin = require("./margin.js");
const borderRadius = require("./borderRadius.js");
const borderWidth = require("./borderWidth.js");

const defaultOptions = {
  writingMode: true,
  logicalMargin: true,
  logicalPadding: true,
  LogicalBorderWidth: true,
  logicalBorderRadius: false
};

module.exports = function(userOptions) {
  const options = { ...defaultOptions, ...userOptions };
  return plugin(
    function(props) {
      const { addUtilities, variants, config } = props;

      // * add Wrting Mode css Rules
      if (options.writingMode) {
        addUtilities(
          {
            ".rm-h": { "writing-mode": "horizontal-tb;" },
            ".rm-vl": { "writing-mode": "vertical-lr;" },
            ".rm-vr": { "writing-mode": "vertical-rl;" }
          },
          variants("writingMode")
        );
      }

      // * add Float css Rules
      const floatConfig = config("corePlugins.float");
      if (!(floatConfig === false)) {
        addUtilities(
          {
            ".float-start": { float: "inline-start" },
            ".float-end": { float: "inline-end" }
          },
          variants("float")
        );
      }

      // * add Text Align css Rules
      const textAlignConfig = config("corePlugins.textAlign");
      if (!(textAlignConfig === false)) {
        addUtilities(
          {
            ".text-start": { "text-align": "start" },
            ".text-end": { "text-align": "end" }
          },
          variants("textAlign")
        );
      }

      // * add Padding css Rules
      padding(props, options.logicalPadding);
      margin(props, options.logicalMargin);
      borderWidth(props, options.LogicalBorderWidth);
      borderRadius(props, options.logicalBorderRadius);
    },
    {
      theme: {},
      variants: {
        writingMode: ["responsive"]
      }
    }
  );
};
