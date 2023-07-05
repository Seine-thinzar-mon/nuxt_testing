<template>
    <ElCard class="m-2">
        <div class="max-h-[300px] overflow-hidden">
            <img :src="item!.img" class="h-[300px] w-full object-cover hover:scale-125 duration-500" />
        </div>
        <div class="my-3">
            <div class="bg-red-500 px-1 text-white w-fit my-1 ">{{ item!.cat?.toUpperCase() }}</div>
            <div class="font-bold text-lg">{{item!.title}}</div>
            <div>{{ item!.desc }}</div>
        </div>
    </ElCard>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
    item: Object,
});
const item = ref(props.item)
</script>