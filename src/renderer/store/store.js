import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    showFileExplorer: true,
    fileTree: null,
    filePath: null,
    selectedFilePath: null,
    fileContent: ''
  },
  mutations: {
    changeFileExplorer(state) {
      state.showFileExplorer = !state.showFileExplorer;
    },
    updateFilePath(state, payload) {
      state.filePath = payload.path;
    }, 
    updateFileTree(state, payload) {
      state.fileTree = payload.fileTree;
    },
    updateSelectedFilePath(state, payload) {
      state.selectedFilePath = payload.selectedFilePath;
    },
    updateFileContent(state, payload) {
      state.fileContent = payload.fileContent
    }
  }, 
  actions: {
    toggleFileExplorer(context) {
      context.commit('changeFileExplorer');
    },
    setFilePath(context, path) {
      context.commit('updateFilePath', { path })
    },
    createFileTree(context, fileTree) {
      context.commit('updateFileTree', { fileTree })
    },
    setSelectedFilePath(context, selectedFilePath) {
      context.commit('updateSelectedFilePath', { selectedFilePath })
    },
    setFileContent(context, fileContent) {
      context.commit('updateFileContent', { fileContent })
    }
  },
  getters: {
    showFileExplorer: state => state.showFileExplorer,
    getFileTree: state => state.fileTree,
    getFilePath: state => state.filePath,
    getSelectedFilePath: state => state.selectedFilePath,
    getFileContent: state => state.fileContent
  }
})