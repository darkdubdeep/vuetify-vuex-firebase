<template>
    <v-dialog width="320px" persistent>
        <v-btn floateing slot="activator">
            <v-icon>
                edit
            </v-icon>
        </v-btn>
        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title>
                             Edit meetup
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                       <v-layout row>
                            <v-flex xs12>
                            <v-text-field
                                name="title"
                                label="Title"
                                id="title"
                                v-model="title"
                                required></v-text-field>
                            </v-flex>
                        </v-layout>
                    <v-layout row>
                        <v-flex xs12>
                        <v-text-field
                            name="location"
                            label="Location"
                            id="location"
                            v-model="location"
                            required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12>
                            <v-text-field
                                name="description"
                                label="Description"
                                id="description"
                                multi-line
                                v-model="description"
                                ></v-text-field>
                        </v-flex>
                    </v-layout>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>
