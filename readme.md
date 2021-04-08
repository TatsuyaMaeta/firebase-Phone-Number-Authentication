GitHub へアップロードしてはいけない API キー等がある場合に
ファイルを別ディレクトリに切り分けておいくことで、
何度も削除して上げ直し等をしなくてもいい

env_firebase_chat については別のディレクトリにて
同じ様な開発案件があった場合に分かりやすくする為

要注意!!!  
ブラウザ上で表示させて確認する際は
ファイルをブラウザへのドラッグ&ドロップでする事。  
VSCodeからの[ブラウザで開く]では表示できない。
その場合はlocalhostが決まってしまい、  
そのディレクトリから外のディレクトリ及びファイルにはアクセスできない  


<ディレクトリ構成>
.  
│   
├─ env  
│  └── env_firebase_chat  
│      └── env.js  
└── firebase_chat  
     ├── css  
     │   ├── reset.css  
     │   └── style.css  
     ├── images   
     ├── index.html  
     ├── js  
     │   └── app.js  
     └── readme.md

README.md の書き方  
https://codechord.com/2012/01/readme-markdown/