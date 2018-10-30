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
                                v-model="editedTitle"
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
                                    v-model="editedDescription"
                                    ></v-text-field>
                            </v-flex>
                        </v-layout>
                         <v-layout row wrap>
                             <v-flex xs12>
                                <v-card-actions>
                                    <v-btn flat class="blue--text darken-1">
                                        Close
                                    </v-btn>
                                    <v-btn flat class="blue--text darken-1">
                                        Save
                                    </v-btn>
                                </v-card-actions> 
                             </v-flex>
                         </v-layout>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: ["meetup"],
  data() {
    return {
      editedTitle: this.meetup.title,
      editedDescription: this.meetup.description
    };
  }
};
</script>

