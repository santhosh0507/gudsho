$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/paywall.feature");
formatter.feature({
  "line": 2,
  "name": "This is to test the paywall feature",
  "description": "",
  "id": "this-is-to-test-the-paywall-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@nohook"
    }
  ]
});
formatter.scenarioOutline({
  "line": 18,
  "name": "This test is to verify add to watchlist feature on sho detail page",
  "description": "",
  "id": "this-is-to-test-the-paywall-feature;this-test-is-to-verify-add-to-watchlist-feature-on-sho-detail-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@paywall"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "search \u003csearchName\u003e sho or series or studio",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "click on add to watchlist button from sho detail page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Verify the add to watchlist mini pop elements",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "click on later button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on add to watchlist button from sho detail page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "verify that system is redirecting login page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Navigate back from login page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "scroll and click on the add to watchlist button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verify the add to watchlist mini pop elements",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click on later button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "scroll and click on the add to watchlist button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "verify that system is redirecting login page",
  "keyword": "And "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "this-is-to-test-the-paywall-feature;this-test-is-to-verify-add-to-watchlist-feature-on-sho-detail-page;",
  "rows": [
    {
      "cells": [
        "searchName"
      ],
      "line": 35,
      "id": "this-is-to-test-the-paywall-feature;this-test-is-to-verify-add-to-watchlist-feature-on-sho-detail-page;;1"
    },
    {
      "cells": [
        "Interstellar - English"
      ],
      "line": 36,
      "id": "this-is-to-test-the-paywall-feature;this-test-is-to-verify-add-to-watchlist-feature-on-sho-detail-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "Pre-requsit for paywall",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Launch the browser and naviagate to home page",
  "keyword": "Given "
});
formatter.match({
  "location": "PromoSwitching.launch_the_browser_and_naviagate_to_home_page()"
});
