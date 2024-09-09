<script setup>

import {Input} from "@/components/UI/input/index.js";
import {Button} from "@/components/UI/button/index.js";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import Logo from "@/components/UI/icon/Logo.vue";


import {useRoute, useRouter} from "vue-router";
const router = useRouter()
const route = useRoute()

import { useForm } from 'vee-validate';
import {toTypedSchema} from "@vee-validate/zod";
import * as z from 'zod'

const formValidate = toTypedSchema(z.object({
  login: z.string().min(4).max(12).regex(/^[A-Za-z]+$/, "Only english letters"),
  password: z.string().min(8).max(16) .regex(/^[A-Za-z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/, "Only english letters, special characters, numbers")
}))

const { handleSubmit } = useForm({
  validationSchema:formValidate
})
const onSubmit = handleSubmit(() => {
  authStore.setIsAuthed(true)
  router.push("/")
})


import { useAuthStore } from "@/stores/AuthStore.js";


const authStore = useAuthStore()
</script>

<template>
  <div class="page-wrapper">
    <Logo variant="big"/>
    {{authStore.isAuthed}}
    <form class="form" @submit="onSubmit">
      <FormField v-slot="{componentField}" name="login">
        <FormItem>
          <FormLabel>
            Login
          </FormLabel>
          <FormControl>
            <Input type="text" class="input" placeholder="Your Login" v-bind="componentField"/>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{componentField}" name="password">
        <FormItem>
          <FormLabel>
            Password
          </FormLabel>
          <FormControl>
            <Input type="password" class="input" placeholder="Your Password" v-bind="componentField"/>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit">Button</Button>
      <div class="have-account">
        <p>Iam already have account</p>
        <RouterLink to="/login" class="link">
          Login
        </RouterLink>
      </div>
    </form>
  </div>
</template>

<style scoped>
  .page-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  .input{
    width: 20rem;
  }
  .form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .have-account{
    display: flex;
    width: 20rem;
    justify-content: space-between;
  }
  .link{
    color: teal;
  }
</style>