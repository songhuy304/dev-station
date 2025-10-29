<script setup lang="ts">
import { ChevronsUpDown, LogOut, Settings, User } from 'lucide-vue-next'
import { computed } from 'vue'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/shared/stores/useUserStore'

const { isMobile } = useSidebar()
const router = useRouter()
const userStore = useUserStore()

const currentUser = computed(() => {
  const profile = userStore.getProfile
  const name = profile?.userName ?? 'Guest User'
  const email = profile?.email ?? 'guest@example.com'
  const avatar = `https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(name)}`
  return { name, email, avatar }
})

function goSetting() {
  router.push({ name: 'settings' }) // bạn có thể sửa lại name route theo nhu cầu
}
function goProfile() {
  router.push({ name: 'profile' })
}
function logout() {
  userStore.logout()
  router.push({ name: 'home' })
}
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <SidebarMenuButton
            size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <Avatar class="h-8 w-8 rounded-lg">
              <AvatarImage :src="currentUser.avatar" :alt="currentUser.name" />
              <AvatarFallback class="rounded-lg"> CN </AvatarFallback>
            </Avatar>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-medium">{{ currentUser.name }}</span>
              <span class="truncate text-xs">{{ currentUser.email }}</span>
            </div>
            <ChevronsUpDown class="ml-auto size-4" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          class="w-[--reka-dropdown-menu-trigger-width] min-w-56 rounded-lg"
          :side="isMobile ? 'bottom' : 'right'"
          align="end"
          :side-offset="4"
        >
          <DropdownMenuLabel class="p-0 font-normal">
            <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar class="h-8 w-8 rounded-lg">
                <AvatarImage :src="currentUser.avatar" :alt="currentUser.name" />
                <AvatarFallback class="rounded-lg"> CN </AvatarFallback>
              </Avatar>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">{{ currentUser.name }}</span>
                <span class="truncate text-xs">{{ currentUser.email }}</span>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem @click="goSetting">
            <Settings />
            Setting
          </DropdownMenuItem>
          <DropdownMenuItem @click="goProfile">
            <User />
            Profile
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem @click="logout">
            <LogOut />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
