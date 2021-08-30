<template>
    <div class="budget-list-wrap">
        <ChooseType @typeSelected="resoltOfVisible"/>
        <el-card :header="header">
            <template v-if="!isEmpty">
                <BudgetListItem
                    v-for="(item, prop) in list"
                    :key="prop"
                    :budgetItem="item"
                    @deleteItem="deleteItem"
                />
                <!-- <div class="list-item" v-for="(item, prop) in list" :key="prop">
                    <span class="budget-comment">{{ item.comment }}</span>
                    <span class="budget-value">{{ item.value }}</span>
                    <el-button type="danger" size="mini" @click="deleteItem(item.id)">Delete</el-button>
                </div> -->
            </template>
            <el-alert v-else type="info" :title="emptyTitle" :closable="closable"/>
        </el-card>
    </div>
</template>

<script>
import BudgetListItem from '@/components/BudgetListItem';
import ChooseType from '@/components/ChooseType';

export default {
    name: 'BudgetList',
    components: {
        BudgetListItem,
        ChooseType,
    },
    data: () => ({
        header: 'Budget List',
        emptyTitle: 'Empty List',
        closable: false,
    }),
    props: {
        list: {
            type: Object,
            default: () => ({}),
        },
    }, 
    computed: {
        isEmpty() {
            return !Object.keys(this.list).length;
        },
    },
    methods: {
        deleteItem(id) {
            this.$emit('deleteItem', id);
        },
        resoltOfVisible(data) {
            console.log(Object.keys(this.list));

            for (let i = 1; i <= Object.keys(this.list).length; i++) {
                console.log(i);
                console.log(this.list[i].type);
                

                if (this.list[i].type !== data && data !== 'ALL') {
                    this.list[i].isItemVisible = false;
                } else {
                    this.list[i].isItemVisible = true;
                }
            }
            console.log(this.list);
        }
    },
}
</script>

<style scoped>

.budget-list-wrap {
    max-width: 500px;
    margin: auto;
}

</style>