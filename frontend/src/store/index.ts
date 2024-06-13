import type { InjectionKey } from 'vue'
import { State } from './../types/state';
//@ts-ignore
import { createStore, useStore as baseUseStore, Store, ActionContext } from 'vuex';
import ApiServices from './../services/api.service';
import { MainTable } from '@/types/respBack';

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        leads: [],
        loading: false
    },
    mutations: {
        setLeads(state: State, leads: MainTable[]) {
            state.leads = leads;
        },
        setLoading(state: State, loading: boolean) {
            state.loading = loading;
        },
    },
    actions: {
        async fetchAPI(context: ActionContext<State, Store>, query?: string) {
            console.log(query)
            context.commit('setLoading', true)
            const responceApi = await ApiServices.getLeads(query);
            context.commit('setLoading', false);
            if (responceApi) {
                context.commit('setLeads', responceApi);
            }
        }
    }
})

export function useStore() {
    return baseUseStore(key)
}