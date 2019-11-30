# 🎵코노🎤
![badge](https://img.shields.io/badge/Part-Front--end-brightgreen) ![lang](https://img.shields.io/badge/Language-JavaScript-blue) ![react](https://img.shields.io/badge/Tech--stack-React-orange)

React를 활용한 전국 코노지도 웹 어플리케이션.

## Requirements
| Dependency  | Version  |
| :---------: | :------: |
|    React    | ^16.12.0 |
| json-server |  0.15.0  |
|    yarn     |  1.19.1  |
| typescript  |  3.7.2   |

## Installation

### Install json-server
```shell
npm install -g json-server
```

### Install Project
```shell
yarn install
```

### Start Project
In order to start project, need to start json-server first:
```shell
json-server db.json --port 3004
```
The port has to be set 3004 for CRA server runs on 3000.

Now run the project:
```shell
yarn start
```

## Features
- [X] 카카오 지도 연동
- [X] 마커 및 인포윈도우 연동
- [ ] 리스트 뷰 구현
- [ ] 디테일 뷰 구현