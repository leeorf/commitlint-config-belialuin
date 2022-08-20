const configConventional = require("@commitlint/config-conventional");

const INDEX_OF_TYPES = 2;
const configConventionalTypeEnum =
  configConventional.rules["type-enum"][INDEX_OF_TYPES];

const ADDITIONAL_TYPES = [
  "css", // CSS Changes
];

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [...configConventionalTypeEnum, ...ADDITIONAL_TYPES],
    ],
  },
};
