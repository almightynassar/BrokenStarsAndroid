<template>
  <span>
    <f7-link no-link-class icon-material="help" icon-only icon-size=18 :open-popover="'#'+popover+'-popover'"></f7-link>
    <f7-popover :id="popover+'-popover'">
      <slot></slot>
    </f7-popover>
  </span>
</template>
<script>
export default {
  props: {
    popover: {
        type: String,
        required: true
      },
  }
}
</script>