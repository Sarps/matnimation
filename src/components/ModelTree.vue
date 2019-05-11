<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-navigation-drawer app class="grey lighten-3" clipped dark stateless value="true" :width="menu ? '450px' : '200px'">
        <v-container fill-height px-0 py-0>
            <v-layout fill-height row>
                <v-flex class="primary darken-1" fill-height :class="{'xs5': menu, 'xs12': !menu}">
                    <v-sheet class="pa-0 primary lighten-1">
                        <v-text-field
                                clear-icon="far fa-1x fa-times-circle"
                                clearable
                                dark
                                flat
                                hide-details
                                label="Search Tree"
                                solo-inverted
                                v-model="search"
                        ></v-text-field>
                    </v-sheet>
                    <v-treeview
                            :active.sync="active"
                            :items="items"
                            :search="search"
                            activatable
                            expand-icon="fas fa-1x fa-arrow-circle-down"
                            hoverable
                            item-children="props"
                            item-key="name"
                            return-object
                            transition v-model="tree" >
                        <template v-slot:append="{ item }">
                            <v-icon class="mr-2">fa-1x {{item.icon}}</v-icon>
                        </template>
                    </v-treeview>
                </v-flex>
                <v-flex class="white right-side" fill-height :class="{'xs7': menu, 'hidden-lg-and-down': !menu}">
                    <Properties :model="selected" @deselect="deselect"/>
                </v-flex>
            </v-layout>
        </v-container>
    </v-navigation-drawer>
</template>

<script>

    import Properties from './Properties'

    export default {

        components: {
            Properties
        },

        data: () => ({
            tree: [],
            active: [],
            search: "",
        }),

        computed: {
            items() {
                return this.$store.state.MODELTREE;
            },

            menu() {
                return !!this.selected;
            },

            selected() {
                return this.active[0];
            }
        },

        methods: {
            deselect() {
                this.active = [];
            }
        }

    };
</script>

<style>
    .right-side {
        overflow: auto;
    }
</style>