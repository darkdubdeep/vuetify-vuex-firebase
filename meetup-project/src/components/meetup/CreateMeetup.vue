<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <h1>Create new meetup</h1>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <form >
                    <v-flex xs12 sm6 offset-sm3>
                        <v-text-field 
                        name="title"
                        label="title"
                        id="title"
                        required
                        >
                        </v-text-field>
                    </v-flex>
                </form>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <form >
                    <v-flex xs12 sm6 offset-sm3>
                        <v-text-field 
                        name="location"
                        label="location"
                        id="location"
                        required
                        >
                        </v-text-field>
                    </v-flex>
                </form>
            </v-flex>
        </v-layout>
         <v-layout row>
            <v-flex xs12>
                <form >
                    <v-flex xs12 sm6 offset-sm3>
                        <v-text-field 
                        name="imageURL"
                        label="image URL"
                        id="image-url"
                        required
                        >
                        </v-text-field>
                    </v-flex>
                </form>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <form >
                    <v-flex xs12 sm6 offset-sm3>
                        <v-text-field 
                        name="Description"
                        label="Description"
                        id="Description"
                        multi-line
                        required
                        >
                        </v-text-field>
                    </v-flex>
                </form>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <img :src="imageUrl" alt="">
            </v-flex>
        </v-layout>
    </v-container>
</template>