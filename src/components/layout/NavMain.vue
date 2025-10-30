<script setup lang="ts">
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import { SIDEBAR_ITEMS } from '@/router'
import { ChevronRight } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { t } = useI18n()
</script>

<template>
  <SidebarGroup>
    <SidebarGroupLabel>Platform</SidebarGroupLabel>
    <SidebarMenu>
      <Collapsible
        v-for="item in SIDEBAR_ITEMS"
        :key="item.title"
        as-child
        :default-open="item.isActive"
        class="group/collapsible"
      >
        <SidebarMenuItem>
          <CollapsibleTrigger v-if="item.items?.length" as-child>
            <SidebarMenuButton :tooltip="item.title">
              <component :is="item.icon" />
              <span>{{ t(`app.${item.title}`) }}</span>
            </SidebarMenuButton>
          </CollapsibleTrigger>

          <SidebarMenuButton v-else as-child>
            <RouterLink :to="item.path ? item.path : '/'" active-class="text-primary">
              <component :is="item.icon" />
              <span>{{ t(`app.${item.title}`) }}</span>
            </RouterLink>
          </SidebarMenuButton>

          <template v-if="item.items?.length">
            <SidebarMenuAction class="group-data-[state=open]/collapsible:rotate-90">
              <ChevronRight />
              <span class="sr-only">Toggle</span>
            </SidebarMenuAction>

            <CollapsibleContent>
              <SidebarMenuSub>
                <SidebarMenuSubItem v-for="subItem in item.items" :key="subItem.title">
                  <SidebarMenuSubButton as-child>
                    <RouterLink :to="subItem.path ? subItem.path : '/'" active-class="text-primary">
                      <component :is="subItem.icon" />
                      <span>{{ t(`app.${subItem.title}`) }}</span>
                    </RouterLink>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </template>

          <CollapsibleContent>
            <SidebarMenuSub>
              <SidebarMenuSubItem v-for="subItem in item.items" :key="subItem.title">
                <SidebarMenuSubButton as-child>
                  <a :href="subItem.path">
                    <span>{{ subItem.title }}</span>
                  </a>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  </SidebarGroup>
</template>
