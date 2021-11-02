import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const initMemos = localStorage.getItem('memos');

export default new Vuex.Store({
  state: {
    memos: (initMemos ? JSON.parse(initMemos) : [])
  },
  mutations: {
    addMemo (state, memoContent) {
      state.memos.push({
        id: `${Date.now()}`,
        content: memoContent
      });
    },
    removeMemo (state, memoId) {
      const newMemoList = state.memos.filter((item) => (item.id !== memoId));
      state.memos = newMemoList;
    },
    modifyMemo (state, memoId, newMemoContent) {
      let memoIndex = 0;
      while (memoIndex < state.memos.length) {
        if (state.memos[memoIndex].id === memoId) {
          break;
        }
        memoIndex++;
      }
      state.memos[memoIndex].content = newMemoContent;
    }
  },
  actions: {
    saveMemosToStorage (state) {
      const content = JSON.stringify(state.memos);
      localStorage.setItem('memos', content);
    }
  },
  modules: {
  }
})
