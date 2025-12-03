<script setup lang="ts">
import { Button, InputField, RichTextField } from '@/components'
import { FieldGroup } from '@/components/ui/field'
import { Plus, Trash, Briefcase } from 'lucide-vue-next'
import { FieldArray } from 'vee-validate'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <FieldArray name="projects" v-slot="{ fields, push, remove }">
    <div v-for="(field, index) in fields" :key="field.key" class="p-4 border rounded-lg mb-4">
      <FieldGroup class="grid grid-cols-2 gap-4">
        <InputField
          :name="`projects.${index}.nameProject`"
          :required="true"
          :labelIcon="Briefcase"
          :label="t('fields.nameProject.label')"
          :placeholder="t('fields.nameProject.placeholder')"
        />

        <InputField
          :name="`projects.${index}.role`"
          :labelIcon="Briefcase"
          :label="t('fields.role.label')"
          :placeholder="t('fields.role.placeholder')"
        />

        <InputField
          :name="`projects.${index}.startDate`"
          :labelIcon="Briefcase"
          :label="t('fields.startDate.label')"
          :placeholder="t('fields.startDate.placeholder')"
        />

        <InputField
          :name="`projects.${index}.endDate`"
          :labelIcon="Briefcase"
          :label="t('fields.endDate.label')"
          :placeholder="t('fields.endDate.placeholder')"
        />

        <RichTextField
          :name="`projects.${index}.projectDescription`"
          label="Summary"
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
          nameProject: '',
          projectDescription: '',
          startDate: '',
          endDate: '',
          role: '',
        })
      "
    >
      <Plus />
    </Button>
  </FieldArray>
</template>
