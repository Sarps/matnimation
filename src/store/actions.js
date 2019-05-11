import { Core } from "../core";

export default {

    previewer_button(state, key) {
        Core.trigger("PREVIEWER", key);
    },

    tabbar_button(state, key) {
        Core.trigger("TABBAR",  key);
    },

    init({ state }) {
        Core.init();
        state.MODELTREE = Core.tree;
    }
};
