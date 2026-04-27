import { defineConfig } from 'vite'

export default defineConfig({
    base: '/Labb3-Frontend-NoSql/',
    build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        add: 'add.html',
      }
    }
  }
})