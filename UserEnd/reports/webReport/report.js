$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/watchHistory.feature");
formatter.feature({
  "line": 1,
  "name": "This is to test watch history feature",
  "description": "",
  "id": "this-is-to-test-watch-history-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": ": Verify that played sho is displaying in the watch history",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;:-verify-that-played-sho-is-displaying-in-the-watch-history",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "search \u003csearchName\u003e sho or series or studio",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "click on watch free button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "play for a while and close the player",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "navigate to my watch history",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "verify the played sho availability",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;:-verify-that-played-sho-is-displaying-in-the-watch-history;",
  "rows": [
    {
      "cells": [
        "searchName"
      ],
      "line": 11,
      "id": "this-is-to-test-watch-history-feature;:-verify-that-played-sho-is-displaying-in-the-watch-history;;1"
    },
    {
      "cells": [
        "carmen"
      ],
      "line": 12,
      "id": "this-is-to-test-watch-history-feature;:-verify-that-played-sho-is-displaying-in-the-watch-history;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8868808600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": ": Verify that played sho is displaying in the watch history",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;:-verify-that-played-sho-is-displaying-in-the-watch-history;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "search carmen sho or series or studio",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "click on watch free button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "play for a while and close the player",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "navigate to my watch history",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "verify the played sho availability",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "carmen",
      "offset": 7
    }
  ],
  "location": "PayWallConcep.search_sho_or_series_or_studio(String)"
});
formatter.result({
  "duration": 4166246200,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.click_on_watch_free_button()"
});
formatter.result({
  "duration": 16755335700,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.play_for_a_while_and_close_the_player()"
});
formatter.result({
  "duration": 17372140000,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.navigate_to_my_watch_history()"
});
formatter.result({
  "duration": 30113771900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027username-open text-control\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.182)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7O375GI\u0027, ip: \u002710.8.0.156\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\SANTII~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:62614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 42a6c0dc642862087444bbd9c8ac4230\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027username-open text-control\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.pageObjects.MyProfile_Objects.myProfileElement(MyProfile_Objects.java:57)\r\n\tat com.setDefinition.WatchHistory.navigate_to_my_watch_history(WatchHistory.java:85)\r\n\tat ✽.And navigate to my watch history(FeatureFiles/watchHistory.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WatchHistory.verify_the_played_sho_availability()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 62860500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": ": Verify that user is able to delete the played record from watch history sho",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;:-verify-that-user-is-able-to-delete-the-played-record-from-watch-history-sho",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "search \u003csearchName\u003e sho or series or studio",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "click on watch free button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "play for a while and close the player",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "navigate to my watch history",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "verify the played sho availability",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on delete icon for the played sho",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "verify the toaster message of delete sho",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;:-verify-that-user-is-able-to-delete-the-played-record-from-watch-history-sho;",
  "rows": [
    {
      "cells": [
        "searchName"
      ],
      "line": 26,
      "id": "this-is-to-test-watch-history-feature;:-verify-that-user-is-able-to-delete-the-played-record-from-watch-history-sho;;1"
    },
    {
      "cells": [
        "kaththi"
      ],
      "line": 27,
      "id": "this-is-to-test-watch-history-feature;:-verify-that-user-is-able-to-delete-the-played-record-from-watch-history-sho;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 30026261900,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": ": Verify that user is able to delete the played record from watch history sho",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;:-verify-that-user-is-able-to-delete-the-played-record-from-watch-history-sho;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "search kaththi sho or series or studio",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "click on watch free button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "play for a while and close the player",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "navigate to my watch history",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "verify the played sho availability",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on delete icon for the played sho",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "verify the toaster message of delete sho",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "kaththi",
      "offset": 7
    }
  ],
  "location": "PayWallConcep.search_sho_or_series_or_studio(String)"
});
formatter.result({
  "duration": 4720738300,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.click_on_watch_free_button()"
});
formatter.result({
  "duration": 5411936400,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.play_for_a_while_and_close_the_player()"
});
formatter.result({
  "duration": 10527534000,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.navigate_to_my_watch_history()"
});
formatter.result({
  "duration": 30051653400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027username-open text-control\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.182)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7O375GI\u0027, ip: \u002710.8.0.156\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\SANTII~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:62767}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 97e4b6aa6a146860ab23cc8d45ab272b\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027username-open text-control\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.pageObjects.MyProfile_Objects.myProfileElement(MyProfile_Objects.java:57)\r\n\tat com.setDefinition.WatchHistory.navigate_to_my_watch_history(WatchHistory.java:85)\r\n\tat ✽.And navigate to my watch history(FeatureFiles/watchHistory.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WatchHistory.verify_the_played_sho_availability()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WatchHistory.click_on_delete_icon_for_the_played_sho()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WatchHistory.verify_the_toaster_message_of_delete_sho()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 71671200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": ": Verify that user is able to delete the played record from watch history series",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;:-verify-that-user-is-able-to-delete-the-played-record-from-watch-history-series",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "search \u003csearchName\u003e sho or series or studio",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "click on watch free button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "play for a while and close the player",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "navigate to my watch history",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "verify the played sho availability",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "click on delete icon for the played sho",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "verify the toaster message of delete series",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;:-verify-that-user-is-able-to-delete-the-played-record-from-watch-history-series;",
  "rows": [
    {
      "cells": [
        "searchName"
      ],
      "line": 40,
      "id": "this-is-to-test-watch-history-feature;:-verify-that-user-is-able-to-delete-the-played-record-from-watch-history-series;;1"
    },
    {
      "cells": [
        "carmen"
      ],
      "line": 41,
      "id": "this-is-to-test-watch-history-feature;:-verify-that-user-is-able-to-delete-the-played-record-from-watch-history-series;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 28167263200,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": ": Verify that user is able to delete the played record from watch history series",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;:-verify-that-user-is-able-to-delete-the-played-record-from-watch-history-series;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "search carmen sho or series or studio",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "click on watch free button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "play for a while and close the player",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "navigate to my watch history",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "verify the played sho availability",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "click on delete icon for the played sho",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "verify the toaster message of delete series",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "carmen",
      "offset": 7
    }
  ],
  "location": "PayWallConcep.search_sho_or_series_or_studio(String)"
});
formatter.result({
  "duration": 4246478800,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.click_on_watch_free_button()"
});
formatter.result({
  "duration": 5277011400,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.play_for_a_while_and_close_the_player()"
});
formatter.result({
  "duration": 10592450900,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.navigate_to_my_watch_history()"
});
formatter.result({
  "duration": 30029906600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027username-open text-control\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.182)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7O375GI\u0027, ip: \u002710.8.0.156\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\SANTII~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:62934}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 2eaba614ce1889b32e7ea351eab9c396\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027username-open text-control\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.pageObjects.MyProfile_Objects.myProfileElement(MyProfile_Objects.java:57)\r\n\tat com.setDefinition.WatchHistory.navigate_to_my_watch_history(WatchHistory.java:85)\r\n\tat ✽.And navigate to my watch history(FeatureFiles/watchHistory.feature:34)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WatchHistory.verify_the_played_sho_availability()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WatchHistory.click_on_delete_icon_for_the_played_sho()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WatchHistory.verify_the_toaster_message_of_delete_series()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 78452600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 43,
  "name": ": Verify clear all functionality of watch history",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;:-verify-clear-all-functionality-of-watch-history",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "search \u003csearchName\u003e sho or series or studio",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "click on watch free button",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "play for a while and close the player",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "navigate to my watch history",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "click on clear all button and verify the elements",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "click on no button and verify the sho availabilty",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "click on yes and verify the CTA",
  "keyword": "Then "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;:-verify-clear-all-functionality-of-watch-history;",
  "rows": [
    {
      "cells": [
        "searchName"
      ],
      "line": 53,
      "id": "this-is-to-test-watch-history-feature;:-verify-clear-all-functionality-of-watch-history;;1"
    },
    {
      "cells": [
        "kaththi"
      ],
      "line": 54,
      "id": "this-is-to-test-watch-history-feature;:-verify-clear-all-functionality-of-watch-history;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 28194056300,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": ": Verify clear all functionality of watch history",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;:-verify-clear-all-functionality-of-watch-history;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "search kaththi sho or series or studio",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "click on watch free button",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "play for a while and close the player",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "navigate to my watch history",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "click on clear all button and verify the elements",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "click on no button and verify the sho availabilty",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "click on yes and verify the CTA",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "kaththi",
      "offset": 7
    }
  ],
  "location": "PayWallConcep.search_sho_or_series_or_studio(String)"
});
formatter.result({
  "duration": 3923128900,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.click_on_watch_free_button()"
});
formatter.result({
  "duration": 5128006200,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.play_for_a_while_and_close_the_player()"
});
formatter.result({
  "duration": 10595350000,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.navigate_to_my_watch_history()"
});
formatter.result({
  "duration": 30018695900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027username-open text-control\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.182)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7O375GI\u0027, ip: \u002710.8.0.156\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\SANTII~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:63071}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 33ed37c1c3bf8005f96d1287789b61ad\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027username-open text-control\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.pageObjects.MyProfile_Objects.myProfileElement(MyProfile_Objects.java:57)\r\n\tat com.setDefinition.WatchHistory.navigate_to_my_watch_history(WatchHistory.java:85)\r\n\tat ✽.And navigate to my watch history(FeatureFiles/watchHistory.feature:47)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WatchHistory.click_on_clear_all_button_and_verify_the_elements()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WatchHistory.click_on_no_button_and_verify_the_sho_availabilty()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WatchHistory.click_on_yes_and_verify_the_cta()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 108880200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 57,
  "name": ": Click on start watch and verify that system is redirecting the user to home page.",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;:-click-on-start-watch-and-verify-that-system-is-redirecting-the-user-to-home-page.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 59,
  "name": "search \u003csearchName\u003e sho or series or studio",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "click on watch free button",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "play for a while and close the player",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "navigate to my watch history",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "click on clear all button and verify the elements",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "click on no button and verify the sho availabilty",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "click on yes and verify the CTA",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "click on the start watch button",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "the system should redirect the user to home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 69,
  "name": "",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;:-click-on-start-watch-and-verify-that-system-is-redirecting-the-user-to-home-page.;",
  "rows": [
    {
      "cells": [
        "searchName"
      ],
      "line": 70,
      "id": "this-is-to-test-watch-history-feature;:-click-on-start-watch-and-verify-that-system-is-redirecting-the-user-to-home-page.;;1"
    },
    {
      "cells": [
        "kaththi"
      ],
      "line": 71,
      "id": "this-is-to-test-watch-history-feature;:-click-on-start-watch-and-verify-that-system-is-redirecting-the-user-to-home-page.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 28134797100,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": ": Click on start watch and verify that system is redirecting the user to home page.",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;:-click-on-start-watch-and-verify-that-system-is-redirecting-the-user-to-home-page.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 59,
  "name": "search kaththi sho or series or studio",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "click on watch free button",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "play for a while and close the player",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "navigate to my watch history",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "click on clear all button and verify the elements",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "click on no button and verify the sho availabilty",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "click on yes and verify the CTA",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "click on the start watch button",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "the system should redirect the user to home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "kaththi",
      "offset": 7
    }
  ],
  "location": "PayWallConcep.search_sho_or_series_or_studio(String)"
});
formatter.result({
  "duration": 4694195500,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.click_on_watch_free_button()"
});
formatter.result({
  "duration": 5152297200,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.play_for_a_while_and_close_the_player()"
});
formatter.result({
  "duration": 10623149900,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.navigate_to_my_watch_history()"
});
formatter.result({
  "duration": 30098062400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027username-open text-control\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.182)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7O375GI\u0027, ip: \u002710.8.0.156\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\SANTII~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:63153}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 30dce3ec31aad15f835a11d8fb6bb718\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027username-open text-control\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.pageObjects.MyProfile_Objects.myProfileElement(MyProfile_Objects.java:57)\r\n\tat com.setDefinition.WatchHistory.navigate_to_my_watch_history(WatchHistory.java:85)\r\n\tat ✽.And navigate to my watch history(FeatureFiles/watchHistory.feature:62)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WatchHistory.click_on_clear_all_button_and_verify_the_elements()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WatchHistory.click_on_no_button_and_verify_the_sho_availabilty()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WatchHistory.click_on_yes_and_verify_the_cta()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WatchHistory.click_on_the_start_watch_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WatchHistory.the_system_should_redirect_the_user_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 83839300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 74,
  "name": "Verify that user is able to play the sho from watch history",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;verify-that-user-is-able-to-play-the-sho-from-watch-history",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "search \u003csearchName\u003e sho or series or studio",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "click on watch free button",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "play for a while and close the player",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "navigate to my watch history",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Click on the first hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "verify that respective sho is playing or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 82,
  "name": "",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;verify-that-user-is-able-to-play-the-sho-from-watch-history;",
  "rows": [
    {
      "cells": [
        "searchName"
      ],
      "line": 83,
      "id": "this-is-to-test-watch-history-feature;verify-that-user-is-able-to-play-the-sho-from-watch-history;;1"
    },
    {
      "cells": [
        "kaththi"
      ],
      "line": 84,
      "id": "this-is-to-test-watch-history-feature;verify-that-user-is-able-to-play-the-sho-from-watch-history;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 28090467300,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "Verify that user is able to play the sho from watch history",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;verify-that-user-is-able-to-play-the-sho-from-watch-history;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "search kaththi sho or series or studio",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "click on watch free button",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "play for a while and close the player",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "navigate to my watch history",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Click on the first hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "verify that respective sho is playing or not",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "kaththi",
      "offset": 7
    }
  ],
  "location": "PayWallConcep.search_sho_or_series_or_studio(String)"
});
formatter.result({
  "duration": 5015392400,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.click_on_watch_free_button()"
});
formatter.result({
  "duration": 5246156600,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.play_for_a_while_and_close_the_player()"
});
formatter.result({
  "duration": 10588842800,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.navigate_to_my_watch_history()"
});
formatter.result({
  "duration": 30062655600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027username-open text-control\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.182)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7O375GI\u0027, ip: \u002710.8.0.156\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\SANTII~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:63230}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 2cc559cf95975ea61694c60c296a32a7\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027username-open text-control\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.pageObjects.MyProfile_Objects.myProfileElement(MyProfile_Objects.java:57)\r\n\tat com.setDefinition.WatchHistory.navigate_to_my_watch_history(WatchHistory.java:85)\r\n\tat ✽.And navigate to my watch history(FeatureFiles/watchHistory.feature:78)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WatchHistory.click_on_the_first_hyperlink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WatchHistory.verify_that_respective_sho_is_playing_or_not()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 105098200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 87,
  "name": "Verify that watch history is capturing records when playing the sho from promo",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;verify-that-watch-history-is-capturing-records-when-playing-the-sho-from-promo",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 88,
  "name": "search \u003csearchName\u003e sho or series or studio",
  "keyword": "Given "
});
formatter.step({
  "line": 89,
  "name": "Scroll to bottom and play any promo",
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "forward to the end",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "click on watch free button",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "play for a while and close the player",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "navigate to my watch history",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "verify the played sho availability",
  "keyword": "Then "
});
formatter.examples({
  "line": 97,
  "name": "",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;verify-that-watch-history-is-capturing-records-when-playing-the-sho-from-promo;",
  "rows": [
    {
      "cells": [
        "searchName"
      ],
      "line": 98,
      "id": "this-is-to-test-watch-history-feature;verify-that-watch-history-is-capturing-records-when-playing-the-sho-from-promo;;1"
    },
    {
      "cells": [
        "kaththi"
      ],
      "line": 99,
      "id": "this-is-to-test-watch-history-feature;verify-that-watch-history-is-capturing-records-when-playing-the-sho-from-promo;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 28292362000,
  "status": "passed"
});
formatter.scenario({
  "line": 99,
  "name": "Verify that watch history is capturing records when playing the sho from promo",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;verify-that-watch-history-is-capturing-records-when-playing-the-sho-from-promo;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 88,
  "name": "search kaththi sho or series or studio",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 89,
  "name": "Scroll to bottom and play any promo",
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "forward to the end",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "click on watch free button",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "play for a while and close the player",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "navigate to my watch history",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "verify the played sho availability",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "kaththi",
      "offset": 7
    }
  ],
  "location": "PayWallConcep.search_sho_or_series_or_studio(String)"
});
formatter.result({
  "duration": 5341454500,
  "status": "passed"
});
formatter.match({
  "location": "PayWallConcep.scroll_to_bottom_and_play_any_promo()"
});
formatter.result({
  "duration": 27903650200,
  "error_message": "org.openqa.selenium.JavascriptException: javascript error: Failed to execute \u0027elementsFromPoint\u0027 on \u0027Document\u0027: The provided double value is non-finite.\n  (Session info: chrome\u003d88.0.4324.182)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7O375GI\u0027, ip: \u002710.8.0.156\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\SANTII~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:63306}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a8ae515f77bdf251bd2f5671344a8607\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\tat com.setDefinition.PayWallConcep.scroll_to_bottom_and_play_any_promo(PayWallConcep.java:125)\r\n\tat ✽.When Scroll to bottom and play any promo(FeatureFiles/watchHistory.feature:89)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PayWallConcep.forward_to_the_end()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WatchHistory.click_on_watch_free_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WatchHistory.play_for_a_while_and_close_the_player()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WatchHistory.navigate_to_my_watch_history()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WatchHistory.verify_the_played_sho_availability()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 105861700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 102,
  "name": "Play the first series from detial page and verify it in history",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;play-the-first-series-from-detial-page-and-verify-it-in-history",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 103,
  "name": "search \u003csearchName\u003e sho or series or studio",
  "keyword": "Given "
});
formatter.step({
  "line": 104,
  "name": "Scroll to buttom and play first episode",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "play for a while and close the player",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "navigate to my watch history",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "verify the played sho availability",
  "keyword": "Then "
});
formatter.examples({
  "line": 110,
  "name": "",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;play-the-first-series-from-detial-page-and-verify-it-in-history;",
  "rows": [
    {
      "cells": [
        "searchName"
      ],
      "line": 111,
      "id": "this-is-to-test-watch-history-feature;play-the-first-series-from-detial-page-and-verify-it-in-history;;1"
    },
    {
      "cells": [
        "carmen"
      ],
      "line": 112,
      "id": "this-is-to-test-watch-history-feature;play-the-first-series-from-detial-page-and-verify-it-in-history;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 29408794500,
  "status": "passed"
});
formatter.scenario({
  "line": 112,
  "name": "Play the first series from detial page and verify it in history",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;play-the-first-series-from-detial-page-and-verify-it-in-history;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 103,
  "name": "search carmen sho or series or studio",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 104,
  "name": "Scroll to buttom and play first episode",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "play for a while and close the player",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "navigate to my watch history",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "verify the played sho availability",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "carmen",
      "offset": 7
    }
  ],
  "location": "PayWallConcep.search_sho_or_series_or_studio(String)"
});
formatter.result({
  "duration": 4002464400,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.scroll_to_buttom_and_play_first_episode()"
});
formatter.result({
  "duration": 4982291900,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.play_for_a_while_and_close_the_player()"
});
formatter.result({
  "duration": 10579537200,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.navigate_to_my_watch_history()"
});
formatter.result({
  "duration": 30094637800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027username-open text-control\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.182)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7O375GI\u0027, ip: \u002710.8.0.156\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\SANTII~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:63380}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 1a03cc7796f21eb1b2ae90878548589e\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027username-open text-control\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.pageObjects.MyProfile_Objects.myProfileElement(MyProfile_Objects.java:57)\r\n\tat com.setDefinition.WatchHistory.navigate_to_my_watch_history(WatchHistory.java:85)\r\n\tat ✽.And navigate to my watch history(FeatureFiles/watchHistory.feature:106)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WatchHistory.verify_the_played_sho_availability()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 110285400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 115,
  "name": "click on episode hyper link and play first episode and verify it in watch history",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;click-on-episode-hyper-link-and-play-first-episode-and-verify-it-in-watch-history",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 116,
  "name": "search \u003csearchName\u003e sho or series or studio",
  "keyword": "Given "
});
formatter.step({
  "line": 117,
  "name": "Scroll to buttom and click on episodes hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 118,
  "name": "play the first episode",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "play for a while and close the player",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "navigate to my watch history",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "verify the played sho availability",
  "keyword": "Then "
});
formatter.examples({
  "line": 124,
  "name": "",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;click-on-episode-hyper-link-and-play-first-episode-and-verify-it-in-watch-history;",
  "rows": [
    {
      "cells": [
        "searchName"
      ],
      "line": 125,
      "id": "this-is-to-test-watch-history-feature;click-on-episode-hyper-link-and-play-first-episode-and-verify-it-in-watch-history;;1"
    },
    {
      "cells": [
        "carmen"
      ],
      "line": 126,
      "id": "this-is-to-test-watch-history-feature;click-on-episode-hyper-link-and-play-first-episode-and-verify-it-in-watch-history;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 28174955000,
  "status": "passed"
});
formatter.scenario({
  "line": 126,
  "name": "click on episode hyper link and play first episode and verify it in watch history",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;click-on-episode-hyper-link-and-play-first-episode-and-verify-it-in-watch-history;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 116,
  "name": "search carmen sho or series or studio",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 117,
  "name": "Scroll to buttom and click on episodes hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 118,
  "name": "play the first episode",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "play for a while and close the player",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "navigate to my watch history",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "verify the played sho availability",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "carmen",
      "offset": 7
    }
  ],
  "location": "PayWallConcep.search_sho_or_series_or_studio(String)"
});
formatter.result({
  "duration": 5026259500,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.scroll_to_buttom_and_click_on_episodes_hyperlink()"
});
formatter.result({
  "duration": 4968737500,
  "status": "passed"
});
formatter.match({
  "location": "PayWallConcep.play_the_first_episode()"
});
formatter.result({
  "duration": 2116862200,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.play_for_a_while_and_close_the_player()"
});
formatter.result({
  "duration": 10568300100,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.navigate_to_my_watch_history()"
});
formatter.result({
  "duration": 30092837900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027username-open text-control\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.182)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7O375GI\u0027, ip: \u002710.8.0.156\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\SANTII~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:63458}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: ce524c9046dc3144882bf8f8a9e9e9da\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027username-open text-control\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.pageObjects.MyProfile_Objects.myProfileElement(MyProfile_Objects.java:57)\r\n\tat com.setDefinition.WatchHistory.navigate_to_my_watch_history(WatchHistory.java:85)\r\n\tat ✽.And navigate to my watch history(FeatureFiles/watchHistory.feature:120)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WatchHistory.verify_the_played_sho_availability()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 104568900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 129,
  "name": "Verify that watch history is capturing records when playing the series from nextup",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;verify-that-watch-history-is-capturing-records-when-playing-the-series-from-nextup",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 128,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 130,
  "name": "search \u003csearchName\u003e sho or series or studio",
  "keyword": "Given "
});
formatter.step({
  "line": 131,
  "name": "Scroll to buttom and play first episode",
  "keyword": "When "
});
formatter.step({
  "line": 132,
  "name": "forward to the end for sho",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "play for a while and close the player",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "navigate to my watch history",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "verify the played sho availability",
  "keyword": "Then "
});
formatter.examples({
  "line": 138,
  "name": "",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;verify-that-watch-history-is-capturing-records-when-playing-the-series-from-nextup;",
  "rows": [
    {
      "cells": [
        "searchName"
      ],
      "line": 139,
      "id": "this-is-to-test-watch-history-feature;verify-that-watch-history-is-capturing-records-when-playing-the-series-from-nextup;;1"
    },
    {
      "cells": [
        "carmen"
      ],
      "line": 140,
      "id": "this-is-to-test-watch-history-feature;verify-that-watch-history-is-capturing-records-when-playing-the-series-from-nextup;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7944706700,
  "status": "passed"
});
formatter.scenario({
  "line": 140,
  "name": "Verify that watch history is capturing records when playing the series from nextup",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;verify-that-watch-history-is-capturing-records-when-playing-the-series-from-nextup;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 128,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 130,
  "name": "search carmen sho or series or studio",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 131,
  "name": "Scroll to buttom and play first episode",
  "keyword": "When "
});
formatter.step({
  "line": 132,
  "name": "forward to the end for sho",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "play for a while and close the player",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "navigate to my watch history",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "verify the played sho availability",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "carmen",
      "offset": 7
    }
  ],
  "location": "PayWallConcep.search_sho_or_series_or_studio(String)"
});
formatter.result({
  "duration": 5326640600,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.scroll_to_buttom_and_play_first_episode()"
});
formatter.result({
  "duration": 6485568500,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.forward_to_the_end_for_sho()"
});
formatter.result({
  "duration": 9901421800,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.play_for_a_while_and_close_the_player()"
});
formatter.result({
  "duration": 40079855900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@aria-label\u003d\u0027Pause\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.182)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7O375GI\u0027, ip: \u002710.8.0.156\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\SANTII~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:63538}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: ca770307394ce5f0003196074926ddf7\n*** Element info: {Using\u003dxpath, value\u003d//button[@aria-label\u003d\u0027Pause\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.pageObjects.PayWall_Objects.playButton(PayWall_Objects.java:150)\r\n\tat com.setDefinition.WatchHistory.play_for_a_while_and_close_the_player(WatchHistory.java:72)\r\n\tat ✽.And play for a while and close the player(FeatureFiles/watchHistory.feature:133)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WatchHistory.navigate_to_my_watch_history()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WatchHistory.verify_the_played_sho_availability()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 72099100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 143,
  "name": "Verify that watch history is capturing records when hitting on the next episode",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;verify-that-watch-history-is-capturing-records-when-hitting-on-the-next-episode",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "search \u003csearchName\u003e sho or series or studio",
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "Scroll to buttom and play first episode",
  "keyword": "When "
});
formatter.step({
  "line": 146,
  "name": "Play for a while and click on next episode button",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Play for a while and click on next episode button",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "play for a while and close the player",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "navigate to my watch history",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "verify the played sho availability",
  "keyword": "Then "
});
formatter.examples({
  "line": 153,
  "name": "",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;verify-that-watch-history-is-capturing-records-when-hitting-on-the-next-episode;",
  "rows": [
    {
      "cells": [
        "searchName"
      ],
      "line": 154,
      "id": "this-is-to-test-watch-history-feature;verify-that-watch-history-is-capturing-records-when-hitting-on-the-next-episode;;1"
    },
    {
      "cells": [
        "carmen"
      ],
      "line": 155,
      "id": "this-is-to-test-watch-history-feature;verify-that-watch-history-is-capturing-records-when-hitting-on-the-next-episode;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7697463500,
  "status": "passed"
});
formatter.scenario({
  "line": 155,
  "name": "Verify that watch history is capturing records when hitting on the next episode",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;verify-that-watch-history-is-capturing-records-when-hitting-on-the-next-episode;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 144,
  "name": "search carmen sho or series or studio",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "Scroll to buttom and play first episode",
  "keyword": "When "
});
formatter.step({
  "line": 146,
  "name": "Play for a while and click on next episode button",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Play for a while and click on next episode button",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "play for a while and close the player",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "navigate to my watch history",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "verify the played sho availability",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "carmen",
      "offset": 7
    }
  ],
  "location": "PayWallConcep.search_sho_or_series_or_studio(String)"
});
formatter.result({
  "duration": 6211792600,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.scroll_to_buttom_and_play_first_episode()"
});
formatter.result({
  "duration": 4988121600,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.play_for_a_while_and_click_on_next_episode_button()"
});
formatter.result({
  "duration": 10272882000,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.play_for_a_while_and_click_on_next_episode_button()"
});
formatter.result({
  "duration": 40067750900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[text()\u003d\u0027Next Episode\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.182)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7O375GI\u0027, ip: \u002710.8.0.156\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\SANTII~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:63609}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a0f5f5ba3f9eff5bb847a4f5fceb24e6\n*** Element info: {Using\u003dxpath, value\u003d//*[text()\u003d\u0027Next Episode\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.pageObjects.PayWall_Objects.nextEpisodes(PayWall_Objects.java:80)\r\n\tat com.setDefinition.WatchHistory.play_for_a_while_and_click_on_next_episode_button(WatchHistory.java:216)\r\n\tat ✽.And Play for a while and click on next episode button(FeatureFiles/watchHistory.feature:147)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WatchHistory.play_for_a_while_and_close_the_player()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WatchHistory.navigate_to_my_watch_history()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WatchHistory.verify_the_played_sho_availability()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 117582100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 158,
  "name": "Verify that watch history is capturing records when hitting on the next episode",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;verify-that-watch-history-is-capturing-records-when-hitting-on-the-next-episode",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 159,
  "name": "search \u003csearchName\u003e sho or series or studio",
  "keyword": "Given "
});
formatter.step({
  "line": 160,
  "name": "Scroll to buttom and collect all episodes",
  "keyword": "When "
});
formatter.examples({
  "line": 163,
  "name": "",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;verify-that-watch-history-is-capturing-records-when-hitting-on-the-next-episode;",
  "rows": [
    {
      "cells": [
        "searchName"
      ],
      "line": 164,
      "id": "this-is-to-test-watch-history-feature;verify-that-watch-history-is-capturing-records-when-hitting-on-the-next-episode;;1"
    },
    {
      "cells": [
        "carmen"
      ],
      "line": 165,
      "id": "this-is-to-test-watch-history-feature;verify-that-watch-history-is-capturing-records-when-hitting-on-the-next-episode;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7844591000,
  "status": "passed"
});
formatter.scenario({
  "line": 165,
  "name": "Verify that watch history is capturing records when hitting on the next episode",
  "description": "",
  "id": "this-is-to-test-watch-history-feature;verify-that-watch-history-is-capturing-records-when-hitting-on-the-next-episode;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 159,
  "name": "search carmen sho or series or studio",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 160,
  "name": "Scroll to buttom and collect all episodes",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "carmen",
      "offset": 7
    }
  ],
  "location": "PayWallConcep.search_sho_or_series_or_studio(String)"
});
formatter.result({
  "duration": 4651062400,
  "status": "passed"
});
formatter.match({
  "location": "WatchHistory.scroll_to_buttom_and_collect_all_episodes()"
});
formatter.result({
  "duration": 34254826100,
  "status": "passed"
});
formatter.after({
  "duration": 160390400,
  "status": "passed"
});
});