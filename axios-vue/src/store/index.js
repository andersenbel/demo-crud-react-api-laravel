import Vuex from 'vuex'
import api from '@/services/Api.js'

export default new Vuex.Store({
    actions: {
        async getTodoList(ctx) {
            api.getList().
                then((r) => ctx.commit('updateTodoList', r.data))
        },
        async storeTodoList(ctx, param) {
            api.storeTodo(param[0], param[1]).
                then((r) => ctx.commit('updateTodoList', r.data))
        },
        async deleteTodo(ctx, id) {
            api.deleteTodo(id).
                then((r) => ctx.commit('updateTodoList', r.data))
        },
        async getTodo(ctx, id) {
            api.getTodo(id).
                then((r) => ctx.commit('updateCurrentTodo', r))
        },
        async updateTodo(ctx, param) {
            api.updateTodo(param[0], param[1], param[2]).
                then((r) => ctx.commit('updateTodoList', r.data))
        },
    },
    mutations: {
        updateTodoList(state, todos) {
            state.todos = todos
        },
        updateCurrentTodo(state, todo) {
            state.currentTodo = todo
        }

    },
    state: {
        todos: [],
        currentTodo: {}
    },
    getters: {
        allTodos(state) {
            return state.todos
        },
        currentTodo(state) {
            return state.currentTodo
        },
        currentNameTodo(state) {
            return state.currentTodo['name']
        },
        currentDescriptionTodo(state) {
            return state.currentTodo['description']
        }
    },
}) 