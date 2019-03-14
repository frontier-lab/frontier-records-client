# frontier-records-client

# 실행 환경
 - npm = 6.4.1
 - node = 10.15.1
 - xcode 설치
 - android studio 설치
    - https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment
    
# 실행 방법
 - npm install -g react-native-cli
 - npm start
 - 각각 client에서 띄우기
    - react-native link
        - native dependency와 연결을 해준다.
    - react-native run-ios
    - react-native run-android
 - 실제 device에서 실행 하기
    - https://facebook.github.io/react-native/docs/running-on-device
    
# 트러블 슈팅
 - ios
   - `unable to find utility "instruments", not a developer`에러
     - xcode의 commend line tool이 셋팅되지 않은 상태.
     - Xcode -> Preference -> Locations에 Commend Line Tools 셋팅.
     - https://stackoverflow.com/questions/39778607/error-running-react-native-app-from-terminal-ios
 - android
   - `Could not create service of type PluginResolutionStrategyInternal using BuildScopeServices.createPluginResolutionStrategy().` 에러 발생
     - java 11을 사용해서 생긴 문제.
     - java 8을 사용하도록 설정.
       - https://stackoverflow.com/questions/21964709/how-to-set-or-change-the-default-java-jdk-version-on-os-x
   - `No connected devices!`
     - 현재 실행중인 안드로이드 에뮬레이터가 없는 상태.
     - Android Studio를 실행해서 Tools -> AVD Manager 에서 에뮬레이터 하나 실행 한 이후에 run-android 수행.
 - LinearTextGradient에서 오류가 발생 시
   - node node_modules/react-native-text-gradient/patch-rn.js
         