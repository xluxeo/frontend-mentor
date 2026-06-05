import path from 'path'
import { fileURLToPath } from 'url'
import vituum from 'vituum'
import twig from '@vituum/vite-plugin-twig'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, 'src')
const OUT_DIR = path.resolve(__dirname, 'dist')

export default {
  plugins: [
    vituum({
      vite: {
        root: ROOT,
        build: {
          outDir: OUT_DIR,
          emptyOutDir: true,
          rollupOptions: {
            input: path.resolve(ROOT, 'pages/index.twig')
          }
        },
        css: {
          devSourcemap: true,
          cssPreprocessOptions: {
            scss: {
              includePaths: ['node_modules/']
            }
          }
        },
      },
      templates: {
        format: 'twig'
      }
    }),
    twig({
      namespaces: {
        components: 'src/components',
        layout: 'src/layouts',
        pages: 'src/pages'
      },
    })
  ]
}
