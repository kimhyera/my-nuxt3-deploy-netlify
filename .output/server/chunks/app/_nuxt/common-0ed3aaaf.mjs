import { d as defineStore } from '../server.mjs';

const useCommonStore = defineStore("common", {
  state: () => ({
    data1: null,
    data2: null,
    isDataLoaded: false
  }),
  getters: {
    getData1: (state) => state.data1,
    getData2: (state) => state.data2,
    getIsDataLoaded: (state) => state.isDataLoaded
  },
  actions: {
    setData1(data) {
      this.data1 = data;
    },
    setData2(data) {
      this.data2 = data;
      this.isDataLoaded = true;
      console.log("setData2");
    }
  }
});

export { useCommonStore as u };
//# sourceMappingURL=common-0ed3aaaf.mjs.map
