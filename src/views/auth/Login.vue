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



import { useForm } from 'vee-validate';
import {toTypedSchema} from "@vee-validate/zod";
import * as z from 'zod'

const formValidate = toTypedSchema(z.object({

}))

const { handleSubmit } = useForm({
  validationSchema:formValidate
})
const onSubmit = handleSubmit(() => {
  authStore.setIsAuthed(true)

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
</style>