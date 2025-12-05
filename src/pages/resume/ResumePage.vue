<script setup lang="ts">
import { Button, Card, CardContent, Heading, Text } from '@/components'
import { APP_PATH, router } from '@/router'
import { PlusCircle, Trash } from 'lucide-vue-next'

const onDetail = (_: number) => {
  router.push({ path: APP_PATH.RESUME.detail() })
}
</script>

<template>
  <div>
    <Heading level="h3">My Resume</Heading>
    <Text color="muted" variant="sm">Start Creating resume to your next job role</Text>

    <div class="flex gap-8 mt-12">
      <Card
        class="max-w-64 w-full h-72 border border-dashed hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <CardContent class="flex justify-center items-center h-full">
          <PlusCircle />
        </CardContent>
      </Card>

      <div class="space-y-2 items-start">
        <Card
          @click="onDetail(23123)"
          class="w-64 h-72 hover:scale-105 transition-all duration-300 cursor-pointer bg-blue-100"
        >
          <CardContent class="flex justify-center items-center h-full">
            <img src="/images/resume-icon.png" alt="resume" class="object-cover" />
          </CardContent>
        </Card>

        <div class="flex justify-between items-center px-1">
          <div>
            <Text weight="semibold" variant="sm">Frontend Developer</Text>
            <Text color="muted" variant="xs">Last Update 2days ago</Text>
          </div>

          <Button variant="ghost"> <Trash class="text-destructive" /></Button>
        </div>
      </div>
    </div>
  </div>
</template>
