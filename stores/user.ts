import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
  state: () => (
    { data1: null, data2: null, 
      isDataLoaded: false }
    ),
  getters: {
    stateInfo: (state) => state,
    getData1: (state) => state.data1,
    getData2: (state) => state.data2,
    getIsDataLoaded: (state) => state.isDataLoaded,
  },
  actions: {
    setData1(data:any) {
     this.data1 = data;
    },
    setData2(data:any) {
     this.data2 = data;
     
     this.isDataLoaded = true;
     console.log('setData2');
     
    }

  },
})