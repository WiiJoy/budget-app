<template>
    <div class="choose-type-form">
        Display:
        <el-select @change="onSelected" class="type-select" v-model="typeFilter.type" placeholder="Choose type...">
            <el-option label="All" value="ALL"></el-option>
            <el-option label="Income" value="INCOME"></el-option>
            <el-option label="Outcome" value="OUTCOME"></el-option>
        </el-select>
    </div>
</template>

<script>
export default {
    name: 'ChooseType',
    data: () => ({
        typeFilter: {
            type: 'ALL',
            value: 'All',
        },
    }),
    methods: {
        onSelected() {
            console.log(`select ${this.typeFilter.type}`);
            this.$emit('typeSelected', this.typeFilter.type);
        },
    },
}
</script>

<style scoped>

.type-select {
    margin-bottom: 10px;
}

</style>