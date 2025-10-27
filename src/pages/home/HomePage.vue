<script setup lang="ts">
import PageHeader from '@/components/page-header/page-header.vue'
import LoginModal from '@/features/auth/LoginModal.vue'
import { ref } from 'vue'

const loginOpen = ref(false)
</script>

<template>
  <div>
    <PageHeader
      title="Hãy học theo cách riêng của bạn"
      description="Hãy cùng chúng tôi khám phá tri thức và nâng cao kỹ năng qua những buổi học online linh hoạt, đầy cảm hứng. Chọn chúng tôi, bạn chọn một tương lai tươi sáng và thành công."
      buttonText="Bắt đầu"
      @button-click="loginOpen = true"
    />
  </div>

  <LoginModal v-model:open="loginOpen" />
</template>
