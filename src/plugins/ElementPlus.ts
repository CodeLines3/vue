import { App } from "vue";
import { ElButton, ElSelect } from "element-plus";

export default {
  install(app: App) {
    app.component(ElSelect.name, ElSelect);
    app.component(ElButton.name, ElButton);
  },
};
