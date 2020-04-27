<template>
  <Page>
    <ActionBar title="entered" />

    <GridLayout rows="90,60,60,*" columns="*" class="p-5">
      <Label text="Welcome" textWrap="true" class="h1" row="0" />
      <StackLayout orientation="horizontal" row="1">
        <Label text="User: " textWrap="true" class="h4 p-r-30" />
        <Label :text="userData.username" textWrap="true" />
      </StackLayout>
      <StackLayout orientation="horizontal" row="2">
        <Label text="User ID:" textWrap="true" class="h4 p-r-20" />
        <Label :text="userID" textWrap="true" />
      </StackLayout>
      <Button text="Goto List" @tap="gotoList" row="3" />
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import * as ApplicationSettings from "tns-core-modules/application-settings";
import list from "./list.vue";
export default {
  data() {
    return {
      userData: JSON.parse(ApplicationSettings.getString("userData")),
      userID: this.$store.state.userID,
    };
  },
  methods: {
    gotoList() {
      this.$navigateTo(list);
    },
  },
};
</script>

<style scoped></style>
