<template>
    <div class="text-xs-center" v-show="model != null">
            <v-card light flat>
                <v-toolbar dense>
                    <v-btn icon @click="$emit('deselect')"><v-icon>fas fa-1x fa-arrow-left </v-icon></v-btn>
                </v-toolbar>
                <v-list>
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <v-icon class="white darken-2" color="black">fas fa-1x {{model.icon}}</v-icon>
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{model.name}}</v-list-tile-title>
                            <v-list-tile-sub-title>
                                <v-btn icon color="info" small flat class="pa-0 ma-0">
                                    <v-icon>fas fa-1x fa-clone</v-icon>
                                </v-btn>
                                <v-btn icon color="primary" small flat class="pa-0 ma-0">
                                    <v-icon>far fa-1x fa-eye</v-icon>
                                </v-btn>
                                <v-btn icon color="error" small flat class="pa-0 ma-0">
                                    <v-icon>fas fa-1x fa-trash</v-icon>
                                </v-btn>
                            </v-list-tile-sub-title>
                        </v-list-tile-content>

                    </v-list-tile>
                </v-list>

                <v-divider class="primary"></v-divider>

                <v-list subheader>
                    <v-subheader>Transform</v-subheader>
                    <Boolean />


                    <v-subheader>Equation</v-subheader>
                    <LineText @input="change"/>
                    <Numbers />

                </v-list>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <Button />
                </v-card-actions>
            </v-card>
    </div>
</template>

<script>

    import Boolean from './inputs/Boolean'
    import Button from './inputs/Button'
    import LineText from "./inputs/LineText";
    import Numbers from "./inputs/Numbers";
    import Model from "../core/models/Model";


    export default {
        props: {
            "model": {
                type: Model,
                required: false
            }
        },

        components: {
            Numbers,
            Boolean,
            Button,
            LineText
        },

        data: () => ({
            fav: true,
            message: false,
            hints: true
        }),

        methods: {
            change(d) {
                alert(d);
            }
        }
    }
</script>

<style scoped>

</style>