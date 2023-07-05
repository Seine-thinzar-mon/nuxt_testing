<template>
        <el-dialog v-model="isopen" title="Shipping address">
    bla bla
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
    isShowSetupItem: Boolean,
});
const isopen = ref(props.isShowSetupItem);
</script>