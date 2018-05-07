# 05_vuex_demo

> vuex_practice

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localip:8098/#/
npm run dev
```

Vuex�����ṩһ���ֿ⣬Store�ֿ�������˺ܶ����
����state��������Դ��ŵأ���Ӧ����һ��Vue���������data��һ�����computed������mapGetters��ȡ
actions��mutations��Ӧ��methods����mapActions��ȡ

��ʹ��Vuex��ʱ��ͨ���ᴴ��Storeʵ��new Vuex.Store({state,getters,mutations,actions})�кܶ���ģ���ʱ�򻹻�ʹ�õ�modules��
����Ȼ��֮ǰ����useһ���£� Vue.use(Vuex) ��

StoreԴ�����:

class Store{

     constructor (options = {}) {

     1.����2�������Ժ������ж�����

     assert(Vue, `must call Vue.use(Vuex) before creating a store 
     instance.`)  // ��Storeʵ����֮ǰһ��Ҫȷ��Vue�Ĵ���
     assert(typeof Promise !== 'undefined', `vuex requires a Promise polyfill in this browser.`)
     //ȷ��promise����
     
     2.�ṹ��ֵ�õ�options�����state��plugins��strict

     const {
        state = {},   //rootState
        plugins = [], // ���
        strict = false //�Ƿ��ϸ�ģʽ
            } = options
            
     3.Store internal state����store�ڲ�����

     this._options = options //�洢����
     this._committing = false //��ʶ�ύ״̬����֤�޸�stateֻ����mutation���棬�������ⲿ�����޸�
     this._actions = Object.create(null)  //�洢�û������actions
     this._mutations = Object.create(null) //�洢�û������mutations
     this._wrappedGetters = Object.create(null) //�洢�û������getters
     this._runtimeModules = Object.create(null) //�洢����ʱ��modules
     this._subscribers = []   //�洢���ж�mutation�仯�Ķ�����
     this._watcherVM = new Vue() //����Vueʵ���ķ�����$watch���۲�仯
     
     4.��dispatch��commit��thisָ��ǰstoreʵ��

     const store = this
     const { dispatch, commit } = this
     this.dispatch = function boundDispatch (type, payload) {
     return dispatch.call(store, type, payload)}
     this.commit = function boundCommit (type, payload, options) {
     return commit.call(store, type, payload, options)}
}

KEY CODE:

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const getters = {
    count: (state) => {
        return state.count
    },
    type: (state) => {
        return state.count % 2 ? "����" : "ż��"
    }
}

const state = {
    count: 10,
    type: ''
}

const actions = {
    add: ({ commit }) => {
        commit('add')
    },
    minus: ({ commit }) => {
        commit('minus')
    },
    odd: ({ commit }) => {
        if (state.count % 2 == 0) {
            commit('add')
        }
    }
}

const mutations = {
    add(state) {
        state.count++
    },
    minus(state) {
        state.count--
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
