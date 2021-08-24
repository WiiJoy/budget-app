<template>
    <div class="budget-list-item">
        <i :class="arrowClass"></i>
        <span class="budget-comment">{{ budgetItem.comment }}</span>
        <span class="budget-value" :class="budgetItem.type.toLowerCase()">{{ budgetItem.value }}</span>
        <el-button type="danger" size="mini" @click="deleteItem(budgetItem.id)">Delete</el-button>
    </div>
</template>

<script>
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
        deleteItem(id) {
            this.$emit('deleteItem', id);
        },

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

.income {
    color: green;
}

.outcome {
    color: red;
}
</style>