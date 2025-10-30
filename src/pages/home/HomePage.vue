<script setup lang="ts">
import { BlurReveal, Card, CardContent, TabFilter, TabFilterItem } from '@/components'
import { Icon } from '@iconify/vue'

import { ref } from 'vue'

const value = ref('all')
</script>

<template>
  <Card>
    <CardContent>
      <BlurReveal :delay="0.2" :duration="0.75">
        <h2 class="text-3xl font-bold tracking-tighter xl:text-6xl/none sm:text-5xl">
          Hey there 👋
        </h2>
        <span class="text-pretty text-xl tracking-tighter xl:text-4xl/none sm:text-3xl">
          How is it going?
        </span>
      </BlurReveal>

      <TabFilter v-model="value">
        <TabFilterItem value="all">
          <div class="inline-flex gap-2 items-center justify-center">
            <div class="inline-flex -space-x-2">
              <div class="rounded-full border flex justify-center items-center size-6">
                <Icon icon="logos:react" width="16" height="16" />
              </div>
              <div class="rounded-full border flex justify-center items-center size-6">
                <Icon icon="logos:angular-icon" width="16" height="16" />
              </div>
              <div class="rounded-full border flex justify-center items-center size-6">
                <Icon icon="logos:vue" width="16" height="16" />
              </div>
            </div>
            <span>Frontend</span>
          </div>
        </TabFilterItem>
        <TabFilterItem value="react">BE</TabFilterItem>
      </TabFilter>
    </CardContent>
  </Card>
</template>
