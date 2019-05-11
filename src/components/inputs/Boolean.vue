<template>
    <v-list-tile>
        <v-list-tile-action>
            <v-switch v-model="message" color="purple" @click="$emit('change', _state)"></v-switch>
        </v-list-tile-action>
        <v-list-tile-title>Scale</v-list-tile-title>
    </v-list-tile>
</template>

<script>
    export default {
        props: ['state'],

        data: () => ({
            message: null,
            _state: null
        }),

        mounted() {
            this._state = this.state
        }
    }
</script>

<style scoped>

</style>