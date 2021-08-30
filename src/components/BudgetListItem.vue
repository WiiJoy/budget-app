<template>
    <div class="budget-list-item" :class="budgetItem.type.toLowerCase()" v-show="budgetItem.isItemVisible">
        <i :class="arrowClass"></i>
        <span class="budget-comment">{{ budgetItem.comment }}</span>
        <span class="budget-value">{{ budgetItem.value }}</span>
        <!-- <el-button type="danger" size="mini" @click="deleteItem(budgetItem.id)">Delete</el-button> -->
        <el-button type="danger" size="mini" @click="deleteItemWithConfirm(budgetItem.id)">Delete</el-button>
    </div>
</template>

<script>
import { MessageBox } from 'element-ui';
import { Message } from 'element-ui';

export default {
    name: 'BudgetListItem',
    props: {
        budgetItem: {
            type: Object,
            default: () => ({}),
        },
    },
    computed: {
        arrowClass() {
            if (this.budgetItem.type === 'INCOME') {
                return 'el-icon-top';
            } else {
                return 'el-icon-bottom';
            }
        },    
    },
    methods: {
        // deleteItem(id) {
        //     this.$emit('deleteItem', id);
        // },
        deleteItemWithConfirm(id) {
            MessageBox.confirm('This will permanently delete item. Continue?', 'Warning', {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                this.$emit('deleteItem', id);
                Message({
                    type: 'success',
                    message: 'Delete completed'
                });
            }).catch(() => {
                Message({
                    type: 'info',
                    message: 'Delete canceled'
                });          
            });
        },
        // takeItemType() {
        //     console.log(this.budgetItem.type);
        //     this.$emit('itemType', this.budgetItem.type);
        // },
    },
}
</script>

<style scoped>
.budget-list-item {
    display: flex;
    align-items: center;
    padding: 10px 15px;
}

.budget-value {
    font-weight: bold;
    margin-left: auto;
    margin-right: 20px;
}

.income .budget-value {
    color: green;
}

.outcome .budget-value {
    color: red;
}
</style>