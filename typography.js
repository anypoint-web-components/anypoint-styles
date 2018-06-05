import '@polymer/polymer/lib/elements/custom-style.js';
import './din-pro.js';
/**
@license
Copyright 2018 MuleSoft.
All rights reserverd.
*/
/*
Anypoint typography.
*/
const $documentContainer = document.createElement('template');
$documentContainer.setAttribute('style', 'display: none;');
$documentContainer.innerHTML = `<custom-style>
<style is="custom-style">
:root {
  --anypoint-font-common-base: {
    font-family: "Open Sans", "DIN Pro", sans-serif;
    -webkit-font-smoothing: antialiased;
  };

  --anypoint-font-common-code: {
    font-family: "Source Code Pro", 'Consolas', 'Menlo', monospace;
    -webkit-font-smoothing: antialiased;
  };

  --anypoint-font-common-expensive-kerning: {
    text-rendering: optimizeLegibility;
  };

  --anypoint-font-common-nowrap: {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  };

  --anypoint-font-header1: {
    @apply(--anypoint-font-common-base);
    @apply(--anypoint-font-common-nowrap);
    font-size: 30px;
    font-weight: 100;
    letter-spacing: -0.5px;
    margin-bottom: 20px;
  };

  --anypoint-font-header2: {
    @apply(--anypoint-font-common-base);
    @apply(--anypoint-font-common-nowrap);
    font-size: 25px;
    font-weight: 100;
    letter-spacing: -.3px;
    margin-bottom: 20px;
  };

  --anypoint-font-header3: {
    @apply(--anypoint-font-common-base);
    font-size: 20px;
    font-weight: 100;
    letter-spacing: -.25px;
    margin-bottom: 20px;
  };

  --anypoint-font-header4: {
    @apply(--anypoint-font-common-base);
    font-size: 18px;
    font-weight: 100;
    letter-spacing: -.2px;
    margin-bottom: 20px;
  };

  --anypoint-font-header5: {
    @apply(--anypoint-font-common-base);
    font-size: 16px;
    font-weight: 100;
    letter-spacing: -.2px;
    margin-bottom: 20px;
  };

  --anypoint-font-header6: {
    @apply(--anypoint-font-common-base);
    @apply(--anypoint-font-common-nowrap);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0;
    margin-bottom: 20px;
  };

  --anypoint-font-body: {
    @apply(--anypoint-font-common-base);
    font-size: 14px;
    letter-spacing: 0;
    font-weight: 400;
  };

  --anypoint-font-body-small: {
    @apply(--anypoint-font-common-base);
    font-size: 14px;
    letter-spacing: 0;
    font-weight: 400;
  };

  --anypoint-font-blockquote: {
    @apply(--anypoint-font-common-base);
    font-style: italic;
    font-weight: 200;
    font-size: 18px;
  };

  --anypoint-font-code: {
    @apply(--anypoint-font-common-code);
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  };
}
</style>
</custom-style>`;
document.head.appendChild($documentContainer.content);
