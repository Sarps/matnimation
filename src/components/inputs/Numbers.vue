<template>
    <v-layout row>
        <v-flex auto px-2 v-for="i in 3" :key="i">
            <v-text-field label="X" light box type="number" v-model="number"></v-text-field>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "Numbers",

        data: () => ({
            number: 5.2
        })
    }
</script>

<style scoped>

</style>