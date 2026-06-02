---
layout: home

hero:
  name: Kairo
  text: 애드온 간 통신 라이브러리
  tagline: 여러 애드온이 서로의 API를 호출할 수 있는 Minecraft Bedrock Edition용 프레임워크. kairo-router를 추가하기만 하면 바로 사용할 수 있습니다.
  actions:
    - theme: brand
      text: 시작하기
      link: /ko/guide/
    - theme: alt
      text: GitHub
      link: https://github.com/kairo-js

features:
  - title: 간단한 API 호출
    details: router.send() / router.request() 로 다른 애드온의 함수를 호출할 수 있습니다. addonId와 API 이름만 지정하면 됩니다.
  - title: 훅 시스템
    details: before/after 훅으로 다른 애드온의 API 호출을 가로챌 수 있습니다. 인수 변환, 캐시 단락, 롤백을 지원합니다.
  - title: TypeScript 지원
    details: 타입 안전 제네릭으로 컴파일 시점에 인수 및 반환 타입을 검증합니다. 일반 JavaScript도 지원합니다.
---
