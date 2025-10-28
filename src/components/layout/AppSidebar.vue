<script setup lang="ts">
import type { SidebarProps } from '@/components/ui/sidebar'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { routes } from '@/router'
import { RouterLink } from 'vue-router'
import AppLogo from '../ui/logo/AppLogo.vue'
import NavMain from './NavMain.vue'

const props = withDefaults(defineProps<SidebarProps>(), {
  variant: 'inset',
})
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" as-child>
            <RouterLink to="/">
              <AppLogo />
              <div class="grid flex-1 text-left text-lg leading-tight">
                <span class="truncate font-semibold">Dev Station</span>
              </div>
            </RouterLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="routes" />
    </SidebarContent>
    <SidebarFooter>
      <!-- <NavUser :user="data.user" /> -->
    </SidebarFooter>
  </Sidebar>
</template>
