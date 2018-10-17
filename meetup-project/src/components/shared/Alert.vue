<template>
  <div>
    <v-alert
      :value="true"
      type="error"
      dismissible
      @input="onClose"
    >
     {{ text }}
    </v-alert>
  </div>
</template>

<script>
export default {
  props: ["text"],
  methods: {
    onClose() {
      this.$emit("dissmissed");
    }
  }
};
</script>
