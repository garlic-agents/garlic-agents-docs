import {defineNoteConfig, defineNotesConfig} from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const zhQuickStartNote = defineNoteConfig({
  dir: 'quick-start',
  link: '/quick-start',
  sidebar: ['']
})

const zhDocsNote = defineNoteConfig({
  dir: 'docs',
  link: '/docs',
  sidebar: ['']
})

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    zhQuickStartNote,
    zhDocsNote,
  ],
})
