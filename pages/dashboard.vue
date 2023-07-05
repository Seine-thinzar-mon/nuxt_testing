<script lang="ts" setup>
import { useHomeStore } from '@/stores/home';
import { storeToRefs } from 'pinia';
import  ItemCard  from '@/components/home/itemCard.vue'
import ItemDialog from '@/components/home/itemDialog.vue'

definePageMeta({
  layout: "custom",
});


const homeStore = useHomeStore();
const { loading, allItems, } = storeToRefs(homeStore);
const { _handleGetAllItems, } = homeStore;

onMounted(()=> {
    _handleGetAllItems();
});

</script>
<template>
    <div class="m-[30px]">
        <div class="flex justify-end m-2">
            <ElButton type="primary" @click="">Add Item +</ElButton>
        </div>
        <div class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
            <ElCol v-for="(item, index) in allItems" :key="index">
                <ItemCard :item="item" />
            </ElCol>
        </div>
        <!-- <ItemDialog :isShowSetupItem="isShowSetupItem"/> -->
    </div>
</template>

