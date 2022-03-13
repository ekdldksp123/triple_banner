# Triple Banner



## 프로젝트 실행 방법

패키지 설치

```
yarn install

```

실행 (port: 3000)

```
yarn run dev

```

## Stack

- React
- Babel
  - _사용 이유 : 크로스 브라우징 이슈를 해결하기 위해서 사용했습니다._
- Typescript
  - _사용 이유 : 타입 지정을 통해 에러를 방지하고, 협업에 편할수 있게, 메모리를 절약하기 위해 사용하였습니다._
- Next.js
  - _사용 이유 : 자동 코드 분할 기능이 있어 초기 구동속도가 빠르기 때문에 사용하였습니다. 이미지 최적화도 염두에 두었으나 Image 태그를 직접적으로 사용하지는 않았습니다._
- EmotionJs(CSS-in-JS)
  - _사용 이유 : 용량도 가볍고 성능도 좋고 css prop 기능을 제공해서 사용했습니다._
- Github Actions
  - _사용 이유 : 배포 자동화를 통해 push 하는 즉시 편하고 빠르게 gh-pages에 배포될 수 있도록 하기 위해 사용했습니다._




### _2022-03-06_

- github action으로 gh-pages 배포 자동화 구축
- @titicaca/eslint-config-triple 으로 Linting/Formatting setup
- babel 및 next.config.js 설정
- basic dependency 추가
- favicon 변경 및 구현에 필요한 imgs 추가

### _2022-03-07_

- 웹 최적화를 위해 analytics.js 스크립트 import (custom hook 사용)
- banner, logo, popularity, awards 컴포넌트 추가
- fadeIn 애니메이션 적용

### _2022-03-08_

- 숫자 증가 애니메이션 구현하긴 했지만 easeOut 이 티가 잘 안남
- .eslintrc.js 수정 및 의존성 추가
- lint:es:fix, lint:etc:fix 실행

### _2022-03-13_

- 숫자 증가 애니메이션에 easeOutExpo 함수 적용(counter.ts)
  => 홈페이지와 가장 비슷하게 구현됨
- stylelint 관련 devDependencies 추가 및 .stylelintrc.json 파일 추가 및 설정
- lint:es:fix, lint:etc:fix, lint:style:fix 실행
