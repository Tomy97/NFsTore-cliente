<script setup lang="ts">
  import { Form } from "vee-validate";
  import { reactive } from "vue";
  import routes from "../../routes";
  import BtnSubmit from "../buttons/BtnSubmit.vue";
  import FormInputEmail from "./inputs/FormInputEmail.vue";

  const form = reactive({
    email: ""
  });

  const handleSubmit = (values: any) => {
    if (values) {
      routes.push({ name: "RecoveryPassword" });
    }
  };
</script>
<template>
  <Form class="px-2" @submit="handleSubmit">
    <div class="row">
      <div class="col-12">
        <FormInputEmail v-model="form.email" />
      </div>
    </div>
    <div class="row justify-content-center my-3">
      <div class="col-7 text-center">
        <BtnSubmit text="enviar" />
      </div>
    </div>
  </Form>
</template>
