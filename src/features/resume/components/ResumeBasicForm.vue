<script setup lang="ts">
import { InputField } from '@/components'
import { FieldGroup } from '@/components/ui/field'
import { User } from 'lucide-vue-next'
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
      type="email"
      :label="t('fields.email.label')"
      :placeholder="t('fields.email.placeholder')"
    />
    <InputField
      name="phoneNumber"
      type="text"
      :label="t('fields.phoneNumber.label')"
      :placeholder="t('fields.phoneNumber.placeholder')"
    />
    <InputField
      name="location"
      type="text"
      :label="t('fields.location.label')"
      :placeholder="t('fields.location.placeholder')"
    />
    <InputField
      name="linkedin"
      type="text"
      :label="t('fields.linkedin.label')"
      :placeholder="t('fields.linkedin.placeholder')"
    />
    <InputField
      name="github"
      type="text"
      :label="t('fields.github.label')"
      :placeholder="t('fields.github.placeholder')"
    />
  </FieldGroup>
</template>
