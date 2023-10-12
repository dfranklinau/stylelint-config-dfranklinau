"use strict";

module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-order"],
  rules: {
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["after-comment"],
        ignoreAtRules: ["if", "include", "function", "mixin"],
      },
    ],
    "at-rule-no-vendor-prefix": true,
    "block-no-empty": true,
    "color-hex-length": "long",
    "color-named": "never",
    "color-no-invalid-hex": true,
    "comment-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
      },
    ],
    "comment-no-empty": true,
    "custom-property-empty-line-before": [
      "always",
      {
        except: ["after-comment", "after-custom-property", "first-nested"],
      },
    ],
    "declaration-block-no-duplicate-properties": [
      true,
      {
        ignore: ["consecutive-duplicates"],
      },
    ],
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-single-line-max-declarations": 1,
    "declaration-empty-line-before": [
      "always",
      {
        except: ["after-declaration", "first-nested"],
        ignore: ["after-declaration"],
      },
    ],
    "font-family-name-quotes": "always-where-recommended",
    "font-family-no-duplicate-names": true,
    "font-weight-notation": "numeric",
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-name-case": "lower",
    "function-url-no-scheme-relative": true,
    "function-url-quotes": [
      "always",
      {
        except: "empty",
      },
    ],
    "function-url-scheme-allowed-list": ["data", "https"],
    "keyframe-declaration-no-important": true,
    "length-zero-no-unit": true,
    "media-feature-name-no-vendor-prefix": true,
    "no-empty-source": true,
    "no-invalid-double-slash-comments": true,
    "no-unknown-animations": true,
    "number-max-precision": 5,
    "order/order": [
      [
        {
          type: "at-rule",
          name: "include",
        },
        "declarations",
        {
          type: "at-rule",
          name: "media",
        },
        "rules",
      ],
      {
        unspecified: "ignore",
      },
    ],
    "order/properties-order": [
      [
        {
          order: "strict",
          properties: [
            "display",
            "box-sizing",
            "position",
            "top",
            "right",
            "bottom",
            "left",
          ],
        },
        {
          order: "strict",
          properties: ["float", "clear"],
        },
        {
          order: "strict",
          properties: ["visibility", "opacity", "z-index"],
        },
        {
          order: "strict",
          properties: [
            "margin",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
          ],
        },
        {
          order: "strict",
          properties: [
            "outline",
            "outline-color",
            "outline-offset",
            "outline-style",
            "outline-width",
          ],
        },
        {
          order: "strict",
          properties: [
            "border",
            "border-top",
            "border-right",
            "border-bottom",
            "border-left",
          ],
        },
        {
          order: "strict",
          properties: [
            "border-width",
            "border-top-width",
            "border-right-width",
            "border-bottom-width",
            "border-left-width",
          ],
        },
        {
          order: "strict",
          properties: [
            "border-style",
            "border-top-style",
            "border-right-style",
            "border-bottom-style",
            "border-left-style",
          ],
        },
        {
          order: "strict",
          properties: [
            "border-color",
            "border-top-color",
            "border-right-color",
            "border-bottom-color",
            "border-left-color",
          ],
        },
        {
          order: "strict",
          properties: [
            "border-radius",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-bottom-right-radius",
            "border-bottom-left-radius",
          ],
        },
        {
          order: "strict",
          properties: [
            "background",
            "background-clip",
            "background-color",
            "background-image",
            "background-repeat",
            "background-position",
            "background-size",
            "cursor",
          ],
        },
        {
          order: "strict",
          properties: [
            "padding",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",
          ],
        },
        {
          order: "strict",
          properties: [
            "width",
            "min-width",
            "max-width",
            "height",
            "min-height",
            "max-height",
          ],
        },
        {
          order: "strict",
          properties: ["overflow", "overflow-x", "overflow-y"],
        },
        {
          order: "strict",
          properties: ["list-style", "list-style-type", "caption-side"],
        },
        {
          order: "strict",
          properties: [
            "table-layout",
            "border-collapse",
            "border-spacing",
            "empty-cells",
          ],
        },
        {
          order: "strict",
          properties: ["vertical-align"],
        },
        {
          order: "strict",
          properties: [
            "text-align",
            "text-indent",
            "text-transform",
            "text-decoration",
          ],
        },
        {
          order: "strict",
          properties: [
            "font",
            "font-display",
            "font-family",
            "font-size",
            "font-weight",
          ],
        },
        {
          order: "strict",
          properties: [
            "line-height",
            "word-spacing",
            "letter-spacing",
            "white-space",
            "color",
          ],
        },
        {
          order: "strict",
          properties: ["content", "quotes"],
        },
      ],
      {
        unspecified: "bottom",
      },
    ],
    "property-no-unknown": true,
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["after-comment"],
      },
    ],
    "selector-attribute-quotes": "always",
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "shorthand-property-no-redundant-values": true,
    "string-no-newline": true,
    "unit-no-unknown": true,
    "value-keyword-case": "lower",
    "value-no-vendor-prefix": true,
  },
};
