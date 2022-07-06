<template>
    <div class="container px-4 py-5" id="hanging-icons">
        <div class="row">
            <div class="col">
                <EditForm />
            </div>
        </div>
    </div>
</template>

<script>
import EditForm from '@/components/EditForm.vue'
export default {
    name: 'App',
    components: {
        EditForm,
    }
}
</script>

<style>
</style>
