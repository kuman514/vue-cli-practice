import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const initMemos = localStorage.getItem('memos');
const finalInitMemos = ((initMemos !== null && initMemos !== undefined && initMemos !== 'null' && initMemos !== 'undefined') ? JSON.parse(initMemos) : []);

export default new Vuex.Store({
  state: {
    memos: finalInitMemos
  },
  getters: {
    memos (state) {
      return state.memos;
    }
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
      // Unlike in mutations, why does it work when I wrote "state.state.memos", not when "state.memos"?

      // console.log(state) showed me this below
      //
      // state
      // └ ... (Other members)
      // └ state
      //   └ ... (Other members)
      //   └ memos

      const content = JSON.stringify(state.state.memos);
      localStorage.setItem('memos', content);
    }
  },
  modules: {
  }
})
