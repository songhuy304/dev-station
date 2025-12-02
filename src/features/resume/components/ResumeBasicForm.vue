<script setup lang="ts">
import { InputField, RichTextField } from '@/components'
import { FieldGroup } from '@/components/ui/field'
import { Github, Linkedin, Mail, MapPin, Phone, User } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <FieldGroup>
    <InputField
      name="name"
      :required="true"
      :labelIcon="User"
      type="text"
      :label="t('fields.name.label')"
      :placeholder="t('fields.name.placeholder')"
    />
    <InputField
      name="email"
      :labelIcon="Mail"
      type="email"
      :label="t('fields.email.label')"
      :placeholder="t('fields.email.placeholder')"
    />
    <InputField
      name="phoneNumber"
      :labelIcon="Phone"
      type="text"
      :label="t('fields.phoneNumber.label')"
      :placeholder="t('fields.phoneNumber.placeholder')"
    />
    <InputField
      name="location"
      :labelIcon="MapPin"
      type="text"
      :label="t('fields.location.label')"
      :placeholder="t('fields.location.placeholder')"
    />
    <InputField
      name="linkedin"
      :labelIcon="Linkedin"
      type="text"
      :label="t('fields.linkedin.label')"
      :placeholder="t('fields.linkedin.placeholder')"
    />
    <InputField
      name="github"
      :labelIcon="Github"
      type="text"
      :label="t('fields.github.label')"
      :placeholder="t('fields.github.placeholder')"
    />

    <RichTextField name="summary" label="Summary" />
  </FieldGroup>
</template>
