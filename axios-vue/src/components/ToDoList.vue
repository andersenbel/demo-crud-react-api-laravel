  <template>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3" v-if="allTodos !== null">
        <div class="col d-flex align-items-start" v-for="(item, index) in allTodos" :key="item.id">
            <div :id="'todo' + index" class="bg-light m-1 p-3 w100">
                <h2 class="text-success ellipsis  h30">{{ item['name'] }}</h2>
                <p class="ellipsis h50">{{ item['description'] }}</p>
                <a :href="'/edit/' + item['id']" class="btn btn-primary">
                    Редагувати
                </a>
                <a @click="deleteTodo(item['id'])" class="btn btn-danger ms-1">
                    Видалити
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    computed: mapGetters(['allTodos']),
    methods: mapActions(['getTodoList', 'deleteTodo']),
    data: function () {
        return {
            todoList: null
        }
    },
    mounted() {
        this.getTodoList()
    },
}
</script>

<style scoped>
.w100 {
    width: 100%
}

.h30 {
    height: 30px;
}

.h50 {
    height: 50px;
}

.ellipsis {
    text-overflow: ellipsis;
}
</style>
