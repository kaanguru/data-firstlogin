<template>
  <Page>
    <ActionBar title="entered" />

    <GridLayout rows="90,60,60,*" columns="*">
      <Label text="Welcome" textWrap="true" class="h1" row="0" />
      <StackLayout orientation="horizontal" row="1">
        <Label text="User: " textWrap="true" class="text-weight-bold" />
        <Label :text="userData.username" textWrap="true" />
      </StackLayout>
      <StackLayout orientation="horizontal" row="2">
        <Label text="User ID:" textWrap="true" class="text-weight-bold" />
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
      userID: ApplicationSettings.getNumber("userID"),
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
