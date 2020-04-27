<template>
  <Page>
    <ActionBar title="login" />
    <FlexboxLayout class="nt-page">
      <StackLayout class="nt-form m-20">
        <GridLayout rows="auto, auto, auto">
          <StackLayout row="0" class="input-field">
            <TextField
              class="nt-input -rounded m-t-10 -border"
              hint="test"
              keyboardType="identifier"
              autocorrect="false"
              autocapitalizationType="none"
              v-model="user.identifier"
              returnKeyType="next"
            ></TextField>
          </StackLayout>
          <StackLayout row="1" class="input-field">
            <TextField
              class="nt-input -rounded m-t-10 -border"
              ref="password"
              hint="123123"
              secure="true"
              v-model="user.password"
              returnKeyType="done"
            ></TextField>
          </StackLayout>
        </GridLayout>
        <Button text="enter" @tap="enterToSystem" class="m-t-20"></Button>
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script lang="ts">
import * as ApplicationSettings from "tns-core-modules/application-settings";
import { request } from "tns-core-modules/http";
import welcome from "./welcome.vue";

export default {
  data() {
    return {
      user: {
        identifier: "test",
        password: "123123",
      },
    };
  },
  methods: {
    enterToSystem() {
      // clear token to prevent errors (if malformed)
      ApplicationSettings.remove("token");
      ApplicationSettings.remove("userID");
      ApplicationSettings.remove("userData");
      request({
        url: "https://sebapi.com/auth/local",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        content: JSON.stringify({
          identifier: this.user.identifier,
          password: this.user.password,
        }),
      })
        .then(
          (response) => {
            const result = response.content.toJSON();
            ApplicationSettings.setString("token", result.jwt);
            ApplicationSettings.setNumber("userID", result.user.id);
            // userData object to string
            ApplicationSettings.setString("userData", JSON.stringify(result.user));
          },
          (e) => {
            console.error("auth/local error :", e);
          }
        )
        .then(() => {
          this.$navigateTo(welcome);
        });
    },
  },
};
</script>

<style scoped></style>
