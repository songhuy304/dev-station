<script setup lang="ts">
import { Button, InputField, RichTextField } from '@/components'
import { FieldGroup } from '@/components/ui/field'
import { Plus, Trash, Building } from 'lucide-vue-next'
import { FieldArray } from 'vee-validate'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <FieldArray name="experiences" v-slot="{ fields, push, remove }">
    <div v-for="(field, index) in fields" :key="field.key" class="p-4 border rounded-lg mb-4">
      <FieldGroup class="grid grid-cols-2 gap-4">
        <InputField
          :name="`experiences.${index}.nameCompany`"
          :required="true"
          :labelIcon="Building"
          type="text"
          :label="t('fields.nameCompany.label')"
          :placeholder="t('fields.nameCompany.placeholder')"
        />

        <InputField
          :name="`experiences.${index}.jobRole`"
          :labelIcon="Building"
          type="text"
          :label="t('fields.jobRole.label')"
          :placeholder="t('fields.jobRole.placeholder')"
        />

        <InputField
          :name="`experiences.${index}.startDate`"
          :labelIcon="Building"
          type="text"
          :label="t('fields.startDate.label')"
          :placeholder="t('fields.startDate.placeholder')"
        />

        <InputField
          :name="`experiences.${index}.endDate`"
          :labelIcon="Building"
          type="text"
          :label="t('fields.endDate.label')"
          :placeholder="t('fields.endDate.placeholder')"
        />

        <RichTextField
          :name="`experiences.${index}.jobDescription`"
          :label="t('fields.jobDescription.label')"
          class="col-span-2"
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
          nameCompany: '',
          jobDescription: '',
          startDate: '',
          endDate: '',
          jobRole: '',
        })
      "
    >
      <Plus />
    </Button>
  </FieldArray>
</template>
