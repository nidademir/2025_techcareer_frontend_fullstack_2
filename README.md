# Techcareer Node.js 
[Github Linki](https://github.com/nidademir/2025_techcareer_frontend_fullstack_2)
---

[Html5 Tutorials](https://www.w3schools.com/html/)
[Css3 Tutorials](https://www.w3schools.com/css/default.asp)
[JS Tutorials](https://www.w3schools.com/js/default.asp)
[JQuery Tutorials](https://www.w3schools.com/jquery/default.asp)
[TS Tutorials](https://www.w3schools.com/typescript/index.php)
[GIT Tutorials](https://www.w3schools.com/git/default.asp)

---
[Mongo Database Cloud](https://www.mongodb.com/products/platform/cloud)
[Mongo Database Download](https://www.mongodb.com/try/download/community)
[Font Awesome](https://fontawesome.com/search?ic=free)
[Google Font](https://fonts.google.com/selection/embed)
[Bootstrap](https://getbootstrap.com/)
[Box Shadow Online](https://cssgenerator.pl/en/box-shadow-generator/)
[jQuery](https://jquery.com//)
[Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install//)
---

# Programming Install
[Visual Studio Code](https://code.visualstudio.com/download)
[Git](https://git-scm.com/downloads)
[Docker](https://www.docker.com/products/docker-desktop/)

[Mongo Database Download](https://www.mongodb.com/try/download/community)
[MongoDB Localhost Shell](https://www.mongodb.com/try/download/shell)
[Mongo Database Cloud](https://www.mongodb.com/products/platform/cloud)
---

## Script run (Typescript başlat)
```sh
 docker container run -d --name mongodb-container  -p 27000:27017 \
             -e MONGO_INITDB_ROOT_USERNAME=root \
             -e MONGO_INITDB_ROOT_PASSWORD=rootroot \
             mongo

rm -rf node_modules dist

node_modules, dist yoksa kurmak için
npm run dev:setup

Eğer node_modules kuruluysa
npm run dev:start

UNUTMA: Mongodb localhost veya docker mongodb veya cloud mongo açık olması gerekiyor
```
---

## Version
```sh
code .
git -v
node -v
npm -v
tsc --version
mongosh --version
```
---

## Git
```sh
git init
git add .
git commit -m "Frontend init"
git remote add origin GITHUB_URL
git push -u origin master

git branch
git pull
git pull origin master

git add .
git commit -m "branch öncesi"
git branch
git branch frontend
git checkout frontend

## Visual Studio Code (VS Code) Extensions
```sh
Auto Close Tag            => Jun Han
Auto Complete Tag         => Jun Han
Auto Rename Tag           => Jun Han
Better Comments           => Aaron Bond
Bootstrap5 Quick Snippets =>  Anbuselvan Rocky
Css Snippet               => Joy-yu
Dev Containers            => Microsoft
Docker                    => Microsoft
Docker Compsose            => Microsoft
ES7+ React/Redux/React-Native snippets => dsznajder
Git Graph                   => mhutchie
Live Server                => Ritwick Dey
Material Icon Theme        => Philipp Kief
Prettier - Code Formatter  => Prettier
Prettier ESLint            => Rebecca Vest
Rainbow Brackets           => MHammed Talhaouy

## Docker
```sh
Turn Windows features on or off => Hyper-V, Virtual Machine Paltform, Windows Hypervisor, Windows Subsystem for Linux
Microsoft Store => Search => wsl2 => Ubuntu 22.04.5 LTS kuralım.
Dikkat: Eğer Ubuntu 22.04.5 kuramazsanız, Turn Windows features bilgileri kapat sonra tekrar aç ve bilgisayarın restart 
```
---

## Mongo Localhost
```sh
port:27017
```
---

## Teknoloji İsimleri
```sh
HTML5
CSS3
BOOTSTRAP5
JS
TYPESCRIPT
EJS
NODE JS
MONGODB
EXPRESS JS
GIT/GITHUB
DOCKER
REST API
NGINX
CI/CD
```
---

## Teknoloji İçerikleri
```sh
nodemon
mongoose
body-parser
compression
cookie-parser
cors
dotenv
ejs
express
express-rate-limit
helmet
mongodb
mongoose
morgan
swagger-jsdoc
swagger-ui-express
typescript
winston
```
---

## VSCode (settings.json)
```sh
{
    "workbench.colorTheme": "Default Dark+",
    "editor.mouseWheelZoom": true,
    "editor.fontSize": 16,
    "explorer.confirmDragAndDrop": false,
    "git.enableSmartCommit": true,
    "explorer.confirmDelete": false,
    "git.confirmSync": false,
    "workbench.iconTheme": "material-icon-theme",
    "files.autoSave": "afterDelay",
    "editor.cursorStyle": "line-thin",
    "terminal.integrated.mouseWheelZoom": true,
    "emmet.includeLanguages": {
        "javascript": "html",
        "javascriptreact": "html",
        "typescriptreact": "html"
    },
    "emmet.triggerExpansionOnTab": true,
    "editor.quickSuggestions": {
        "other": true,
        "comments": false,
        "strings": true
    },
```
---

## NPM
```sh
npm init
npm init -y

npm root
npm root -g
```
---

## NPM INIT
```sh
npm init
package name:
1-) herşeyi küçük harfle yaz
2-) boşluk kullanma bunun yerine (- veya _ kullan)
3-) Türkçe karakterlerden (üğşçö) kullanma

package name: 2025_techcareer_frontend_fullstack_2
version: v1.0.0 (Semantic version)
description: Html5,css3,bootstrap5, js, es, nodejs, jquery, express,nodemon
entry point: index.js
test command: start
git repository: https://github.com/nidademir/2025_techcareer_frontend_fullstack_2.git
keywords: Html5,css3,bootstrap5, js, es, ejs, nodejs, nodemon, jquery, express
author: Nida Demir
license: ISC
Is this OK? yes
```
---

## NPM INIT -Y
```sh
npm init -y
Default
{
  "name": "2025_techcareer_frontend_fullstack_2",
  "version": "1.0.0",
  "description": "[GitHub Address](https://github.com/nidademir/2025_techcareer_frontend_fullstack_2.git)\r [Mongo Database]()\r ---",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
---

## package.json(Son Hali)
```sh
{
  "name": "2025_techcareer_frontend_fullstack_2",
  "version": "1.0.0",
  "description": "[Github Linki](https://github.com/hamitmizrak/2025_techcareer_frontend_fullstack_2)\r ---",
  "main": "./dist/server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node  ./dist/server.js",
    "server:start": "lite-server",
    "build_watch": "tsc -w --pretty",
    "nodemon_app_watch": "nodemon --watch src --watch dist ./dist/server.js",
    "dev:setup": "npm install && tsc && concurrently -k \"tsc -w --pretty\" \"nodemon ./dist/server.js\"",
    "dev:start": "tsc && concurrently -k \"tsc -w --pretty\" \"nodemon ./dist/server.js\""
  },
  "keywords": [
    "Html5, Css3, Js, NodeJS, ES5+,TS, Bootstrap5, EJS"
  ],
  "author": "MSc Computer Enginner Hamit Mızrak",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.3",
    "compression": "^1.7.5",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "csurf": "^1.10.0",
    "ejs": "^3.1.10",
    "express": "^4.21.2",
    "express-rate-limit": "^7.5.0",
    "helmet": "^8.0.0",
    "mongodb": "^6.13.0",
    "mongoose": "^8.10.0",
    "morgan": "^1.10.0",
    "swagger-jsdoc": "^6.2.8",
    "swagger-ui-express": "^5.0.1",
    "winston": "^3.17.0"
  },
  "devDependencies": {
    "@types/node": "^22.13.1",
    "concurrently": "^9.1.2",
    "cross-env": "^7.0.3",
    "dotenv": "^16.4.7",
    "eslint": "^9.20.0",
    "eslint-config-prettier": "^10.0.1",
    "eslint-plugin-prettier": "^5.2.3",
    "lite-server": "^2.6.1",
    "nodemon": "^3.1.9",
    "npm-run-all": "^4.1.5",
    "prettier": "^3.4.2",
    "ts-node": "^10.9.2",
    "typescript": "^5.7.3"
  }
}
```
---

## npm delete
```sh
rm -rf node_modules
ls -al
npm install
```
---

## NPM Sıklıkla Kullanılan Komutlar-1
```sh
npm search  express
npm install express
npm install express@4.16.1
npm install express            # Local
npm install express --save     # Local
npm install express --save-dev # dev-dependencies
npm install express -D         # dev-dependencies
npm install express -g         # Global

npm install
npm i

npm update                # Bütün dosyaları güncelleme için.
npm update express        # Sadece verdiğimzi dosyaları güncelleme yapıyor.

npm uninstall express
npm uninstall express@4.16.1
```
---

## NPM Sıklıkla Kullanılan Komutlar-2
```sh
npm list
npm ls
npm list -g              # Globalde ben ne paketleri yüklemişim
npm list -g --depth=0    # Globalde sadece ana branch'e yüklediklerimi bana göster

npm root                 # Local projemizdeli node_modules kütüphanesini göstersin
npm root -g              # GLocal projemizdeli node_modules kütüphanesini göstersin
Global node_modules: C:\Users\Hamit-Mizrak\AppData\Roaming\npm\node_modules
```
---

## NPM Sıklıkla Kullanılan Komutlar-3
```sh
npm update              # package.json içindeki dosyalardaki paketleri günceller
npm outdated            # Projede eskiyen veya güncellenmesi gereken paketleride gösterir
npm audit               # Bağımlılıkların güvenlik analizleri rapor eder
npm audit fix           # Belirlenen güvenlik açıklarını otomatik olarak düzeltir.
npm audit fix --force   # Belirlenen güvenlik açıklarını otomatik olarak düzeltir.
npm dedupe              # Bağımlılıkların tekrarlanan kopyalarını temizler.
npm rebuild             # Tüm bağımlıkları yeniden derleme

npm info <paket-adi>    #  Belirli paketin detaylı bilgileri gösterir
npm cache clean --force # npm önbelleğini temizler
npm cache verify        # Cache dorğulaması
npm config list         # (Npm yapılandırılmalarını görmek içindir)
npm config set <key> <value> #  npm config set registry https://registry.npmjs.org/  )

# https://www.npmjs.com/
npm login                # npm hesabınıza giriş içindir)
npm pack                 # Node.js paketini .tgz sıkıştırma formatında ekliyor
npm publish              # ilgili pkaeti npm gönder
```
---

## Npm Package Install (Local --save)
```sh
npm list
npm root
npm list -g
npm root -g

# https://www.npmjs.com/
npm list
npm i body-parser compression cookie-parser cors csurf  ejs  express express-rate-limit helmet mongodb mongoose morgan  swagger-jsdoc swagger-ui-express  winston --save
```
---

## Npm Package Install (Local --save-dev)
```sh
npm list
npm root
npm list -g
npm root -g

# https://www.npmjs.com/
npm i nodemon typescript -D
npm i nodemon typescript --save-dev
npm install lite-server  --save-dev
npm install  @types/node dotenv concurrently  ts-node --save-dev
npm install  eslint eslint-config-prettier npm-run-all prettier --save-dev
npm install  eslint-plugin-prettier  npm-run-all --save-dev

npm install
npm dedupe  # Bağımlılıkların tekrarlanan kopyalarını temizler.
npm list
```
---

## Npm Package Install (Global)
```sh
npm list
npm root

npm list -g
npm root -g

npm i body-parser compression cors csurf cookie-parser ejs  express express-rate-limit helmet mongodb morgan mongoose swagger-jsdoc swagger-ui-express prettier ts-node   winston lite-server  @types/node dotenv concurrently eslint eslint-config-prettier eslint-plugin-prettier npm-run-all -g
npm dedupe  # Bağımlılıkların tekrarlanan kopyalarını temizler.
npm list -g
```
---

## Typescript kurulum
```sh
npm install typescript -g          # global
npm install typescript --save-dev  # local 
npm install typescript -D          # local Dev-dependency

tsconfig dosyası için aşağıdaki komutu çalıştır:
tsc --init --locale tr
tsc --init

tsc
tsc -w (Sistem kendi compiler yapıyor yazdıklarımı kendi ekliyor.)
```
---

## Typescript (tsconfig.json )
```sh
/* Bu dosya hakkında daha fazla bilgi için https://aka.ms/tsconfig sayfasını ziyaret edin */
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```
---

## script => package.json typescript
```sh
  "scripts": {
    "build_watch": "tsc -w --pretty",
  },
```
---

## Nodemon kurulum
```sh
npm install  nodemon -g
npm install  nodemon -D
npm install  nodemon --save-dev
```
---

## nodemon.json (Nodemon.json)
```sh
{
  "watch": ["src", "dist"],
  "ext": "ts,js",
  "exec": "node ./dist/server.js"
}
```
---

## script => package.json nodemon-1
```sh
  "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1",
  },
```
---

## package.json içinden Script yazmak-2
```sh
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node  ./dist/server.js",
    "server:start": "lite-server",
    "build_watch": "tsc -w --pretty",
    "nodemon_app_watch": "nodemon --watch src --watch dist ./dist/server.js",
    "dev:setup": "npm install && tsc && concurrently -k \"tsc -w --pretty\" \"nodemon ./dist/server.js\"",
    "dev:start": "tsc && concurrently -k \"tsc -w --pretty\" \"nodemon ./dist/server.js\""
  },
```
---

## package.json içinden Script yazmak-3
```sh
  "scripts": {
    "start_app": "ts-node src/app.ts",
    "start_index": "ts-node src/app.ts",
    "dev_app": "nodemon src/app.ts",
    "dev_index": "nodemon src/index.ts",
    "build": "tsc",
    "build_watch": "tsc -w",
    "start_app:app": "node dist/app.js",
    "start_index:index": "node dist/index.js",
    "nodemon_app": "nodemon ./dist/app.js",
    "nodemon_app_watch": "nodemon --watch src --watch dist ./dist/app.js",
    "nodemon_index": "nodemon ./dist/index.js",
    "nodemon_index_watch": "nodemon --watch src --watch dist ./dist/index.js",
    "asenkron_app": "concurrently \"npm run build_watch\" \"npm run nodemon_app_watch\"",
    "asenkron_index": "concurrently \"npm run build_watch\" \"npm run nodemon_index_watch\"",
    "senkron:app": "npm-run-all --parallel  build_watch nodemon_app_watch",
    "senkron:index": "npm-run-all --parallel  build_watch nodemon_index_watch"
  }
```
---

## .env
```sh
; PORT
LOCALHOST_PORT=1111

; Local
MONGO_USERNAME=root
MONGO_PASSWORD=rootroot
MONGO_PORT=27017
MONGO_LOCALHOST=127.0.0.1
DATABASE_NAME=blogDB


; Cloud
MONGO_CLOUD_USERNAME=hamitmizrak
MONGO_CLOUD_PASSWORD=
MONGO_CLOUD_PORT=27017

; Docker
MONGO_DOCKER_USERNAME=hamitmizrak
MONGO_DOCKER_PASSWORD=
MONGO_DOCKER_PORT=27000
```
---

## .env
```sh

```
---

## **`.env` Dosyası Nedir?**
`.env` dosyası, **çevresel değişkenleri (environment variables) saklamak için kullanılan** bir dosyadır. Bu dosya, **gizli bilgiler**, **API anahtarları**, **veritabanı bağlantı bilgileri**, **uygulama yapılandırmaları** gibi duyarlı verileri saklamak için yaygın olarak kullanılır.

### **Neden `.env` Kullanılır?**
1. **Güvenlik** → Duyarlı bilgileri doğrudan kod içine yazmaktan kaçınırsınız.
2. **Taşınabilirlik** → Farklı ortamlar (geliştirme, test, üretim) için ayrı `.env` dosyaları oluşturabilirsiniz.
3. **Kolay Yönetim** → Değişkenleri merkezi bir yerde tanımlamak, proje yönetimini kolaylaştırır.
4. **Sürüm Kontrolü** → `.env` dosyası genellikle `.gitignore` içine eklenir, böylece hassas bilgiler GitHub gibi platformlara yüklenmez.

---