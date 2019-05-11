<template>
    <v-layout row>
        <v-flex sm12 px-2>
            <v-text-field label="equation" @change="$emit('change', text)" @input="$emit('input', text)" light box v-model="text"></v-text-field>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        data: () => ({
            text: "50 sin (2x deg)"
        })
    }
</script>

<style scoped>

</style>