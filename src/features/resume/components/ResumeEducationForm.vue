<script setup lang="ts">
import { Button, InputField } from '@/components'
import { FieldGroup } from '@/components/ui/field'
import { Plus, Trash, User } from 'lucide-vue-next'
import { FieldArray } from 'vee-validate'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <FieldArray name="education" v-slot="{ fields, push, remove }">
    <div v-for="(field, index) in fields" :key="field.key" class="p-4 border rounded-lg mb-4">
      <FieldGroup class="grid grid-cols-2 gap-4">
        <InputField
          :name="`education.${index}.educationName`"
          :required="true"
          :labelIcon="User"
          type="text"
          class="col-span-2"
          :label="t('fields.educationName.label')"
          :placeholder="t('fields.educationName.placeholder')"
        />

        <InputField
          :name="`education.${index}.degree`"
          :required="true"
          :labelIcon="User"
          type="text"
          :label="t('fields.degree.label')"
          :placeholder="t('fields.degree.placeholder')"
        />

        <InputField
          :name="`education.${index}.gpa`"
          type="text"
          :labelIcon="User"
          :label="t('fields.gpa.label')"
          :placeholder="t('fields.gpa.placeholder')"
        />

        <InputField
          :name="`education.${index}.startDate`"
          :required="true"
          :labelIcon="User"
          :label="t('fields.startDate.label')"
          :placeholder="t('fields.startDate.placeholder')"
        />

        <InputField
          :name="`education.${index}.graduationDate`"
          :labelIcon="User"
          :label="t('fields.graduationDate.label')"
          :placeholder="t('fields.graduationDate.placeholder')"
        />
      </FieldGroup>

      <div class="flex justify-end mt-2">
        <Button type="button" variant="ghost" @click="remove(index)">
          <Trash class="text-destructive" />
        </Button>
      </div>
    </div>
    <Button
      type="button"
      variant="outline"
      @click="
        push({
          educationName: '',
          degree: '',
          gpa: '',
          startDate: '',
          graduationDate: '',
        })
      "
    >
      <Plus />
    </Button>
  </FieldArray>
</template>
