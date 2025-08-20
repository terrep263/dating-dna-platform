@"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  envPrefix: ['VITE_', 'REACT_APP_']
})
"@ | Out-File -FilePath vite.config.js -Encoding UTF8
