<template>
  <Page>
    <ActionBar title="list" />
    <GridLayout rows="90,90,*" columns="*" class="p-5">
      <Label text="list of items" class="h1" row="0" />
      <Label v-if="$apollo.loading" text="loading" textWrap="true" class="h2" row="1" />
      <GridLayout v-else columns="*" rows="*" row="2">
        <ListView for="bird in birds">
          <v-template>
            <GridLayout rows="*" columns="*,*">
              <Label :text="bird.isim" :key="bird.id" class="text-center font-weight-bold p-15" col="0" />
              <Label :text="bird.bilezik" class="text-center font-weight-light p-15" col="1" />
            </GridLayout>
          </v-template>
        </ListView>
      </GridLayout>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import gql from "graphql-tag";
import * as ApplicationSettings from "tns-core-modules/application-settings";


export default {
  data() {
    return {
      birds:[],
      bird:{
        id: null,
        isim: "",
        bilezik: ""
      },
      userId: ApplicationSettings.getNumber("userID")
    };
  },

  apollo: {
    birds: {
      query: gql`
        query myBirds($userId: ID!) {
          birds(where: { user: $userId }) {
            id
            isim
            bilezik
          }
        }
      `,
      variables() {
        return {
          userId: this.userId,
        };
      },
    },
  },
};
</script>

<style scoped></style>
