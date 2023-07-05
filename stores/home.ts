import { acceptHMRUpdate, defineStore } from "pinia";
import { ref } from 'vue';

export const useHomeStore = defineStore("home", () => {
    /**
       State
    **/
    const loading = ref(false);
    const allItems= ref([]);
    const isShowSetupItem = ref(false);

    /**
        Functions
    **/
    const _handleGetAllItems =()=> {
        loading.value = true;
        fetch('./data/items.json')
            .then(res => res.json())
            .then(data => {
                allItems.value = data;
                loading.value = false;
            })
            .catch(err => {
                console.log('err ', err);
                loading.value = false;
            });
    };

    const _handleOpenSetupItem = async()=> {
        isShowSetupItem.value = true;
    };

    return { 
        loading, 
        allItems, 
        isShowSetupItem, 
        _handleGetAllItems, 
        _handleOpenSetupItem 
    };
});
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useHomeStore, import.meta.hot));
};