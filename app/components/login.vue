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
              @returnPress="focusPassword"
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
export default {
  data() {
    return {
      user: {
        identifier: "test",
        password: "123123",
      },
    };
  },
};
</script>

<style scoped></style>
