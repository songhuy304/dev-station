<script setup lang="ts">
import { InputField, RichTextField } from '@/components'
import { FieldGroup } from '@/components/ui/field'
import { User } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <FieldGroup class="grid grid-cols-2 gap-4">
    <InputField
      name="educationName"
      :required="true"
      :labelIcon="User"
      type="text"
      class="col-span-2"
      :label="t('fields.educationName.label')"
      :placeholder="t('fields.educationName.placeholder')"
    />
    <InputField
      name="degree"
      :required="true"
      :labelIcon="User"
      type="text"
      :label="t('fields.degree.label')"
      :placeholder="t('fields.degree.placeholder')"
    />
    <InputField
      name="gpa"
      type="text"
      :labelIcon="User"
      :label="t('fields.gpa.label')"
      :placeholder="t('fields.gpa.placeholder')"
    />

    <!-- Column 2 -->
    <InputField
      name="startDate"
      :required="true"
      :labelIcon="User"
      :label="t('fields.startDate.label')"
      :placeholder="t('fields.startDate.placeholder')"
    />
    <InputField
      name="graduationDate"
      :labelIcon="User"
      :label="t('fields.graduationDate.label')"
      :placeholder="t('fields.graduationDate.placeholder')"
    />
  </FieldGroup>
</template>
