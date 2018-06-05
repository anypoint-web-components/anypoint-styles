import '@polymer/polymer/lib/elements/custom-style.js';
import './typography.js';
import './colors.js';

/**
@license
Copyright 2018 MuleSoft.
All rights reserverd.
*/

/*
The anypoint default theme.
*/

const $documentContainer = document.createElement('template');
$documentContainer.setAttribute('style', 'display: none;');

$documentContainer.innerHTML = `<custom-style>
<style is="custom-style">
:root {
  /* Commonly used properties in Polymer elements */
  --primary-color: var(--anypoint-color-primary);
  --secondary-color: var(--anypoint-color-secondary);
  --primary-background-color: var(--anypoint-color-tertiary);
  --accent-color: var(--anypoint-color-violet3);

  /* HTTP methods colors */
  --method-display-selected-color: #000;
  --method-display-get-color: rgba(56, 142, 60, 1);
  --method-display-post-color: var(--anypoint-color-violet3);
  --method-display-put-color: var(--anypoint-color-navy3);
  --method-display-patch-color: rgb(156, 39, 176);
  --method-display-delete-color: rgb(244, 67, 54);

  /* HTTP methods colors in method documentation panel */
  --method-label-get-background-color: transparent;
  --method-label-get-color: var(--method-display-get-color);
  --method-label-post-background-color: transparent;
  --method-label-post-color: var(--method-display-post-color);
  --method-label-put-background-color: transparent;
  --method-label-put-color: var(--method-display-put-color);
  --method-label-patch-background-color: transparent;
  --method-label-patch-color: var(--method-display-patch-color);
  --method-label-delete-background-color: transparent;
  --method-label-delete-color: var(--method-display-delete-color);
}
</style>
</custom-style>`;

document.head.appendChild($documentContainer.content);
