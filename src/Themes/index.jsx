/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react'
import { ThemeProvider as StyledComponentsThemeProvider, createGlobalStyle, css } from 'styled-components'
import colors from './colors'
import { fontSize, fontWeight } from './fonts'

export * from './styled'

export const MEDIA_WIDTHS = {
  upToExtraSmall: 500,
  upToSmall: 720,
  upToMedium: 960,
  upToLarge: 1280,
  upToVeryLager: 1440,
  upToBigLager: 1690,
  upToExtraLarge: 1920
}

const mediaWidthTemplates = Object.keys(MEDIA_WIDTHS).reduce((accumulator, size) => {
  accumulator[size] = (a, b, c) => css`
    @media (max-width: ${MEDIA_WIDTHS[size]}px) {
      ${css(a, b, c)}
    }
  `
  return accumulator
}, {})

const input = {
  input_stretch: '100%',
  input_small: '380px',
  input_medium: '512px',
  input_large: '810px'
}

const theme = () => ({
  ...colors,
  ...fontSize,
  ...fontWeight,
  grids: {
    sx: 8,
    sm: 16,
    md: 24,
    lg: 32
  },
  ...input,
  mediaWidth: mediaWidthTemplates
})

export default function ThemeProvider({ children }) {
  return <StyledComponentsThemeProvider theme={theme()}>{children}</StyledComponentsThemeProvider>
}

export const ThemedGlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
}

body {
  background-color: ${({ theme }) => theme.bg_primary};
  font-size: 20px;
  line-height: 22px;
  font-family: 'Inconsolata', monospace;

  #root {
    overflow-x: hidden;
  }

  .hidden-mobile {
    display: block;
    @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
        display: none;
    }
  }

  .hidden-desktop {
    display: none;
    @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
      display: block;
    }
  }
 

  @media screen and (max-width: ${MEDIA_WIDTHS.upToLarge}px) {
    background-color: ${({ theme }) => theme.white};
  }

  .ant-dropdown {
    min-width: 314px !important;
    border: 1px solid ${({ theme }) => theme.bd_grey_dark};
    .ant-dropdown-menu {
      padding: 20px 16px;
      .ant-dropdown-menu-item {
        padding: 0;
        &:hover {
          background: white;
        }
      }
    }
  }
  
  .select__dropdown {
    padding: 0;
    .ant-select-item {
      &.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
        background: ${({ theme }) => theme.green_light};
      }
      &:hover {
        background: ${({ theme }) => theme.green_light};
      }
    }
  }
  .ant-cascader-menu-item-active:not(.ant-cascader-menu-item-disabled), .ant-cascader-menu-item-active:not(.ant-cascader-menu-item-disabled):hover {
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.green};
    font-weight: ${({ theme }) => theme.fw_400};
  }
  .ant-cascader-menu-item:hover {
    background: ${({ theme }) => theme.white};
  }
  .ant-cascader-menu-item-active {
    .ant-cascader-menu-item-expand-icon {
      color: ${({ theme }) => theme.green};
      &:hover {
        color: ${({ theme }) => theme.green};
      }
    }
  }
  .ant-cascader-menu-item:hover {
    color: ${({ theme }) => theme.green};
    .ant-cascader-menu-item-expand-icon {
      color: ${({ theme }) => theme.green};
    }
  }
  .ant-cascader-menu {
    min-width: 240px;
  }
  .ant-cascader-menus {
    left: 284px !important;
    top: 64px !important;
  }
  .ant-select-tree-checkbox-checked .ant-select-tree-checkbox-inner  {
    background-color: ${({ theme }) => theme.green};
    border-color: ${({ theme }) => theme.green};
  }
  .ant-select-tree-checkbox-checked .ant-select-tree-checkbox-inner:hover  {
    border-color: ${({ theme }) => theme.green};
  }
  .ant-select-tree-switcher {
    width: 17px;
  }
  .ant-tree-select-dropdown {
    width: 306px !important;
  }
  .ant-popover-inner {
    border-radius: 8px;
    box-shadow: 2px 12px 32px rgba(0, 0, 0, 0.2);
  }
  .ant-select-tree-treenode:hover {
    background: ${({ theme }) => theme.green_light};
  }
  .ant-select-tree .ant-select-tree-node-content-wrapper:hover {
    background: none;
  }
  .ant-tree-select-dropdown {
    padding: 0px;
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input{
    min-height: 35px;
  }
  .ant-popover-content {
    @media screen and (max-width: ${MEDIA_WIDTHS.upToLarge}px) {
      display: none;
    }
  }
  .ant-btn-two-chinese-chars > *:not(.anticon) { 
    letter-spacing: 0 !important; 
  }
  .ant-notification.ant-notification-topRight {
    .ant-notification-notice-close {
      top: 10px;
      right: 10px;
    }
  }
  /* customize paging for app */
  .ant-pagination-item a {
    &:hover {
      color: #00C271;
    }
  }

  .ant-pagination-item {
    &:hover {
      border-color: #00C271;
    }
  }
  
  .ant-pagination-item-active a {
    color: #00C271;
  }
  .ant-pagination-item-active {
    border-color: #00C271;
  }
  .ant-pagination-prev .ant-pagination-item-link, .ant-pagination-next .ant-pagination-item-link {
    &:hover {
      border-color: #00C271;
      color: #00C271;
    }
  }
}
*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    overflow-x: hidden;

    &.no-scroll {
        overflow-y: hidden;

        &:after {
            content: "";
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            background: rgba($color: #000000, $alpha: 0.6);
            z-index: 300;
        }
    }

    @media (max-width: 575.98px) {
        font-size: 0.875rem;
    }
}

figure {
    position: relative;

    img {
        max-height: 100%;
    }
}

article,
aside,
footer,
header,
hgroup,
main,
nav,
section {
    display: block;
}

[tabindex="-1"]:focus:not(:focus-visible) {
    outline: 0 !important;
}

hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
}

h1,
h2 {
    line-height: normal;
}

p {
    margin: 0;
}

abbr[title],
abbr[data-original-title] {
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    border-bottom: 0;
    -webkit-text-decoration-skip-ink: none;
    text-decoration-skip-ink: none;
}

address {
    font-style: normal;
    line-height: inherit;
}

ol,
ul,
dl {
    padding: 0;
    margin: 0;
    list-style: none;
}

ol ol,
ul ul,
ol ul,
ul ol {
    margin-bottom: 0;
}

dd {
    margin-left: 0;
}

b,
strong,
dt {
    font-weight: 700;
}

small {
    font-size: 80%;
}

sub,
sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
}

sub {
    bottom: -0.25em;
}

sup {
    top: -0.5em;
}

a {
    text-decoration: none;
}

a:not([href]):not([class]) {
    color: inherit;
    text-decoration: none;
}

a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none;
}

pre,
code,
kbd,
samp {
    font-size: 1em;
}

pre {
    margin-top: 0;
    overflow: auto;
    -ms-overflow-style: scrollbar;
}

figure {
    margin: 0;
}

img {
    vertical-align: middle;
    border-style: none;
    max-width: 100%;
    height: auto;
}

svg {
    overflow: hidden;
    vertical-align: middle;
}

table {
    border-collapse: collapse;
}

caption {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    text-align: left;
    caption-side: bottom;
}

th {
    text-align: inherit;
    text-align: -webkit-match-parent;
}

label {
    display: inline-block;
}

button {
    border-radius: 0;
}

button:focus {
    outline: 0;
}

input,
button,
select,
optgroup,
textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    outline: unset;
}

button,
input {
    overflow: visible;
}

button,
select {
    text-transform: none;
}

[role="button"] {
    cursor: pointer;
}

select {
    word-wrap: normal;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
    -webkit-appearance: button;
}

button:not(:disabled),
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled) {
    cursor: pointer;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
    padding: 0;
    border-style: none;
}

input[type="radio"],
input[type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
}

textarea {
    overflow: auto;
    resize: vertical;
}

fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
}

legend {
    display: block;
    width: 100%;
    max-width: 100%;
    padding: 0;
    line-height: inherit;
    color: inherit;
    white-space: normal;
}

progress {
    vertical-align: baseline;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
    height: auto;
}

[type="search"] {
    outline-offset: -2px;
    -webkit-appearance: none;
}

[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}

::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
}
`
