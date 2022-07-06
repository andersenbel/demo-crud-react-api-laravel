<template>
    <div class="container px-4 py-5" id="hanging-icons">
        <div class="row">
            <div class="col">
                <InputForm />
            </div>
        </div>
        <ToDoList />
    </div>
</template>

<script>
import InputForm from '@/components/InputForm.vue'
import ToDoList from '@/components/ToDoList.vue'
export default {
    name: 'App',
    components: {
        InputForm,
        ToDoList
    }
}
</script>

<style>
</style>
