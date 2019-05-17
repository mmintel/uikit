<template>
  <div
    class="theme"
    :class="[ `theme--${type}` ]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Theme extends Vue {
  @Prop({ default: 'light' }) type: 'light' | 'dark'
}
</script>

<style>
.theme--light {
  --font-color: var(--color-gray-1);
  --background-color: var(--color-gray-9);
  --raised-background-color: var(--color-white);
  --line-color: var(--color-gray-8);
  --button-default-color: var(--color-primary-5);
  --button-default-background-color: var(--color-primary-8);
  --button-default-hover-color: var(--color-white);
  --button-default-hover-background-color: var(--color-primary-7);
  --button-primary-color: var(--color-white);
  --button-primary-background-color: var(--color-primary-5);
  --button-primary-hover-color: var(--color-white);
  --button-primary-hover-background-color: var(--color-primary-6);
  --button-success-color: var(--color-success-1);
  --button-success-background-color: var(--color-success-3);
  --button-error-color: var(--color-error-3);
  --button-error-background-color: var(--color-error-1);
  --button--link-color: var(--color-primary-5);
  --button--link-background-color: transparent;
  --button--text-color: inherit;
  --button--text-background-color: transparent;
  --button-link-color: var(--color-primary-5);
  --button-link-hover-background-color: rgba(0, 0, 0, var(--alpha-5));
  --badge-default-color: var(--color-white);
  --badge-default-background-color: var(--color-primary-6);
  --input-border-color: var(--color-gray-8);
  --input-hover-border-color: var(--color-gray-7);
  --input-focus-border-color: var(--color-primary-5);
  --input-focus-box-shadow-color: var(--color-primary-9);
  --tabs-head-border-color: var(--color-gray-8);
  --tabs-head-active-background-color: var(--color-primary-9);
  --tabs-head-active-border-color: var(--color-primary-5);
  --table-stripe-background-color: var(--color-gray-9);
  --table-hover-color: var(--color-primary-5);
  --table-hover-background-color: var(--color-primary-9);
  --overlay-background-color: rgba(var(--white), 0.9);
}

.theme--dark {
  --font-color: var(--color-white);
  --background-color: var(--color-gray-1);
  --button-default-color: var(--color-gray-5);
  --button-default-background-color: var(--color-gray-2);
  --button-default-hover-color: var(--color-white);
  --button-default-hover-background-color: var(--color-gray-3);
  --button-primary-color: var(--color-gray-1);
  --button-primary-background-color: var(--color-white);
  --button-primary-hover-color: var(--color-white);
  --button-primary-hover-background-color: var(--color-gray-3);
}

.theme {
  background-color: var(--background-color);
}
</style>
