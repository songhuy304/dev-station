<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRouter } from 'vue-router'

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  SidebarMenu,
  SidebarMenuItem,
  Spinner,
} from '@/components/ui'
import { useGetProfile, useLogout } from '@/shared/hooks'
import { useUserStore } from '@/shared/stores'
import { ChevronDown, LogOut, Settings, User } from 'lucide-vue-next'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const router = useRouter()
const userStore = useUserStore()

const { data: profile, isLoading } = useGetProfile()

const currentUser = computed(() => {
  const prof = profile.value ?? userStore.getProfile
  const name = prof?.fullName ?? 'Guest User'
  const email = prof?.email ?? 'guest@example.com'
  const avatar = `https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(name)}`
  return { name, email, avatar }
})
console.log(currentUser.value.name)

watch(
  profile,
  (newProfile) => {
    if (newProfile && newProfile !== userStore.getProfile) {
      userStore.setProfile(newProfile)
    }
  },
  { immediate: false },
)

const { mutate: logoutClick } = useLogout()

function goSetting() {
  router.push({ name: 'settings' })
}

function goProfile() {
  router.push({ name: 'profile' })
}

function logout() {
  logoutClick()
}
</script>

<template>
  <div
    v-if="isLoading"
    class="z-100000 fixed inset-0 w-full h-full bg-black/60 flex items-center justify-center"
  >
    <Spinner />
  </div>

  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button size="lg" variant="ghost" class="flex items-center gap-2">
            <Avatar class="h-8 w-8 rounded-lg">
              <AvatarImage :src="currentUser.avatar" :alt="currentUser.name" />
              <AvatarFallback class="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div class="flex-1 text-left text-sm text-muted-foreground truncate">
              {{ currentUser.name }}
            </div>
            <ChevronDown class="ml-auto size-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          class="w-[--reka-dropdown-menu-trigger-width] min-w-56 rounded-lg"
          side="bottom"
          align="end"
          :side-offset="4"
        >
          <DropdownMenuLabel class="p-0 font-normal">
            <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar class="h-8 w-8 rounded-lg">
                <AvatarImage :src="currentUser.avatar" :alt="currentUser.name" />
                <AvatarFallback class="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div class="flex-1 text-left text-sm leading-tight">
                <span class="truncate text-xs">{{ currentUser.email }}</span>
              </div>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem @click="goSetting"> <Settings /> Setting </DropdownMenuItem>
          <DropdownMenuItem @click="goProfile"> <User /> Profile </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem @click="logout"> <LogOut /> Logout </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
