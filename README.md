## Тестовое задание на разработку плагина для вебпака чтобы подсчитывать количество файлов с каждым расширением

>Вывод команды `npm run build`

```
Собрано файлов по расширениям:
2 js
1 vue
1 css
1 ts
asset bundle.js 5.85 KiB [emitted] (name: main)
runtime modules 937 bytes 4 modules
cacheable modules 90 bytes
  modules by path ./demo/*.js 87 bytes
    ./demo/index.js 86 bytes [built] [code generated]
    ./demo/one-more.js 1 bytes [built] [code generated]
  ./demo/component.vue 1 bytes [built] [code generated]
  ./demo/app.ts 1 bytes [built] [code generated]
  ./demo/style.css 1 bytes [built] [code generated]
webpack 5.78.0 compiled successfully in 64 ms
```

uncounted.js подсчитан не будет так как не входит в сборку