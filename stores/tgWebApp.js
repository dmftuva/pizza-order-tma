import { useWebApp } from "vue-tg";

export const useTgWebAppStore = defineStore("tgWebAppStore", {
  state: () => ({
    webAppData: null,
  }),

  actions: {
    init() {
      console.log(useWebApp());
    },
  },
});
