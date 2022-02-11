// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from "k6";
import http from "k6/http";

export const options = { vus: 2, duration: "21m" };

export default function main() {
  let response;

  group("Dev-AUGX-Performance-Testing", function () {
    response = http.post(
      "https://dev2.augmedix.com:50000/token?grantType=password&idp=com.augmedix.legacy",
      '{"username":"test_account_scribe_dev_03@augmedix.com","password":"Asdfgh1234","otp":"","userType":"scribe"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50000/token?grantType=password&idp=com.augmedix.legacy",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.2);

    response = http.post(
      "https://dev2.augmedix.com:50050/login",
      '{"browser":"Chrome 96","angularFrontEnd":true}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options("https://dev2.augmedix.com:50050/login", null, {
      headers: {
        accept: "*/*",
        "access-control-request-method": "POST",
        "access-control-request-headers": "authorization,content-type",
        origin: "https://dev2.augmedix.com:8191",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "sec-fetch-dest": "empty",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
      },
    });
    sleep(1.9);

    response = http.get("https://dev2.augmedix.com:50050/dashboard/bootstrap", {
      headers: {
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        accept: "application/json, text/plain, */*",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        origin: "https://dev2.augmedix.com:8191",
        "sec-fetch-site": "same-site",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
      },
    });

    response = http.options(
      "https://dev2.augmedix.com:50050/dashboard/bootstrap",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get("https://dev2.augmedix.com:50050/auto-corrections", {
      headers: {
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        accept: "application/json, text/plain, */*",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        origin: "https://dev2.augmedix.com:8191",
        "sec-fetch-site": "same-site",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
      },
    });

    response = http.get("https://dev2.augmedix.com:50050/dictionary/affix", {
      headers: {
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        accept: "application/json, text/plain, */*",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        origin: "https://dev2.augmedix.com:8191",
        "sec-fetch-site": "same-site",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
      },
    });

    response = http.options(
      "https://dev2.augmedix.com:50050/auto-corrections",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get("https://wchat.freshchat.com/js/widget.js", {
      headers: {
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        accept: "*/*",
        "sec-fetch-site": "cross-site",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-dest": "script",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
      },
    });

    response = http.options(
      "https://dev2.augmedix.com:50050/dictionary/affix",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://dev2.augmedix.com:50050/note-grading/wfm/token",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-grading/wfm/token",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.6);

    response = http.get(
      "https://api-js.mixpanel.com/decide/?verbose=1&version=1&lib=web&token=5878b21fd3f6180f0f4471f799546ba7&ip=1&_=1640159960022",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          accept: "*/*",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://api-js.mixpanel.com/decide/?verbose=1&version=3&lib=web&token=5878b21fd3f6180f0f4471f799546ba7&distinct_id=3473&ip=1&_=1640159960036",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          accept: "*/*",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get("https://dev2.augmedix.com:50050/scribe-doctors", {
      headers: {
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        accept: "application/json, text/plain, */*",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        origin: "https://dev2.augmedix.com:8191",
        "sec-fetch-site": "same-site",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
      },
    });

    response = http.options(
      "https://dev2.augmedix.com:50050/scribe-doctors",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get("https://dev2.augmedix.com:50050/dictionary/medical", {
      headers: {
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        accept: "application/json, text/plain, */*",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        origin: "https://dev2.augmedix.com:8191",
        "sec-fetch-site": "same-site",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
      },
    });

    response = http.options(
      "https://dev2.augmedix.com:50050/dictionary/medical",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50050/last-activity",
      '{"providerEmail":"","scopeConnectStatus":false,"scribeControl":"Full Control","scribeEmail":"test_account_scribe_dev_03@augmedix.com","streamStatus":false}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/last-activity",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get("https://dev2.augmedix.com:50004/schedules", {
      headers: {
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        accept: "application/json, text/plain, */*",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        origin: "https://dev2.augmedix.com:8191",
        "sec-fetch-site": "same-site",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
      },
    });

    response = http.options("https://dev2.augmedix.com:50004/schedules", null, {
      headers: {
        accept: "*/*",
        "access-control-request-method": "GET",
        "access-control-request-headers": "authorization",
        origin: "https://dev2.augmedix.com:8191",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "sec-fetch-dest": "empty",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
      },
    });

    response = http.get(
      "https://wchat.freshchat.com/css/widget.css?t=1640159960686",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          accept: "text/css,*/*;q=0.1",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "style",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://wchat.freshchat.com/widget/?token=6d6b716a-a2b9-468f-8df3-ec0c139afd6a&referrer=aHR0cHM6Ly9kZXYyLmF1Z21lZGl4LmNvbTo4MTkx",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "upgrade-insecure-requests": "1",
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "navigate",
          "sec-fetch-user": "?1",
          "sec-fetch-dest": "iframe",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://assetscdn-wchat.freshchat.com/static/assets/vendor-cb48eae2d25974cb9e453b74e43d0225.css",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          accept: "text/css,*/*;q=0.1",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "style",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://assetscdn-wchat.freshchat.com/static/assets/fc_web_widget-3770faee89ac7255b21e0d18d79c4de4.css",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          accept: "text/css,*/*;q=0.1",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "style",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://assetscdn-wchat.freshchat.com/static/assets/vendor-bbac8741b62c02e7d7146c63ecac5f9d.js",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          accept: "*/*",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://assetscdn-wchat.freshchat.com/static/assets/fc_web_widget-d3b28f58968c2ced829c7f90c0d2da08.js",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          accept: "*/*",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.1);

    response = http.get(
      "https://rts-static-prod.freshworksapi.com/us/rts-min.js",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          accept: "*/*",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://wchat.freshchat.com/app/services/app/webchat/6d6b716a-a2b9-468f-8df3-ec0c139afd6a/config?domain=aHR0cHM6Ly9kZXYyLmF1Z21lZGl4LmNvbTo4MTkx",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://assetscdn-wchat.freshchat.com/static/assets/translations/en-us-28821ce664b923581d789fe132fdfa67.js",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://wchat.freshchat.com",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      '{"records":[{"data":"{\\"insertId\\":\\"ojx7p3sbg0ri2p5f\\",\\"timeStamp\\":1640159962468,\\"eventType\\":\\"scp_js_event\\",\\"userId\\":3473,\\"distinctId\\":3473,\\"scribeId\\":3473,\\"scribeEmail\\":\\"test_account_scribe_dev_03@augmedix.com\\",\\"scribeName\\":\\"test scribe\\",\\"vendorName\\":\\"AXBD\\",\\"scribeUid\\":\\"999999\\",\\"os\\":\\"Windows\\",\\"browser\\":\\"Chrome\\",\\"initialReferrer\\":\\"$direct\\",\\"initialReferringDomain\\":\\"$direct\\",\\"device\\":\\"\\",\\"currentUrl\\":\\"https://dev2.augmedix.com:8191/app/dashboard\\",\\"browserVersion\\":96,\\"screenHeight\\":864,\\"screenWidth\\":1536,\\"payload\\":{\\"eventName\\":\\"Logged In\\",\\"eventTime\\":\\"2021-12-22T07:59:22.465Z\\",\\"focusTimeSec\\":0}}","partitionKey":"ojx7p3sbg0ri2p5f"}]}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json; charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://assetscdn-wchat.freshchat.com/static/assets/fonts/fs-icons_db9017235f84eecfa2cafef72d487865-1181e40b8546834a9805fdf81df2f865.woff2",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          origin: "https://wchat.freshchat.com",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          accept: "*/*",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "font",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://assetscdn-wchat.freshchat.com/static/assets/audio/notif.mp3",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "accept-encoding": "identity;q=1, *;q=0",
          "sec-ch-ua-mobile": "?0",
          range: "bytes=0-",
          "sec-ch-ua-platform": '"Windows"',
          accept: "*/*",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "audio",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://wchat.freshchat.com/app/services/app/webchat/6d6b716a-a2b9-468f-8df3-ec0c139afd6a/user",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://wchat.freshchat.com/app/services/app/webchat/6d6b716a-a2b9-468f-8df3-ec0c139afd6a/widget_info_v2?locales=en-US,en-US&platform=web",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.5);

    response = http.get(
      "https://wchat.freshchat.com/app/services/app/webchat/6d6b716a-a2b9-468f-8df3-ec0c139afd6a/faq/category?platform=web&locales=en-US%2Cen-US&since=1519121234953&lastLocaleId=1",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.put(
      "https://wchat.freshchat.com/app/services/app/webchat/6d6b716a-a2b9-468f-8df3-ec0c139afd6a/user/84986aa7-a381-4127-9426-ae2c773b9e51/activity",
      null,
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          accept: "*/*",
          origin: "https://wchat.freshchat.com",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://assetscdn-wchat.freshchat.com/static/assets/images/freshchat-line-cd452acf4efb05843ef7575e5a9de756.svg",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "image",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://assetscdn-wchat.freshchat.com/static/assets/images/freshdesk_logo-700ca107b848b083e9b0659a98efb160.svg",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "image",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://67035273662470.webpush.freshchat.com/index.html?ref=aHR0cHM6Ly9kZXYyLmF1Z21lZGl4LmNvbTo4MTkx",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "upgrade-insecure-requests": "1",
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "navigate",
          "sec-fetch-dest": "iframe",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.6);

    response = http.get(
      "https://67035273662470.webpush.freshchat.com/fc_logo.png",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "image",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.8);

    response = http.get("https://dev2.augmedix.com:50050/dictionary/english", {
      headers: {
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        accept: "application/json, text/plain, */*",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        origin: "https://dev2.augmedix.com:8191",
        "sec-fetch-site": "same-site",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
      },
    });

    response = http.options(
      "https://dev2.augmedix.com:50050/dictionary/english",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(2.3);

    response = http.get("https://dev2.augmedix.com:50050/dictionary", {
      headers: {
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        accept: "application/json, text/plain, */*",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        origin: "https://dev2.augmedix.com:8191",
        "sec-fetch-site": "same-site",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
      },
    });

    response = http.options(
      "https://dev2.augmedix.com:50050/dictionary",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(2);

    response = http.post(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      '{"records":[{"data":"{\\"insertId\\":\\"kbaqgomqdg98enba\\",\\"timeStamp\\":1640159969558,\\"eventType\\":\\"scp_js_event\\",\\"userId\\":3473,\\"distinctId\\":3473,\\"scribeId\\":3473,\\"scribeEmail\\":\\"test_account_scribe_dev_03@augmedix.com\\",\\"scribeName\\":\\"test scribe\\",\\"vendorName\\":\\"AXBD\\",\\"scribeUid\\":\\"999999\\",\\"clinicianId\\":1348,\\"clinicianName\\":\\"Stg Doc1 Gd\\",\\"clinicianEmail\\":\\"stg_gd_doc1@augmedix.com\\",\\"facilityName\\":\\"Square Hospital, Dhaka\\",\\"clinicianStatus\\":\\"active\\",\\"os\\":\\"Windows\\",\\"browser\\":\\"Chrome\\",\\"initialReferrer\\":\\"$direct\\",\\"initialReferringDomain\\":\\"$direct\\",\\"device\\":\\"\\",\\"currentUrl\\":\\"https://dev2.augmedix.com:8191/app/dashboard\\",\\"browserVersion\\":96,\\"screenHeight\\":864,\\"screenWidth\\":1536,\\"payload\\":{\\"eventName\\":\\"Clinician Selected\\",\\"eventTime\\":\\"2021-12-22T07:59:29.554Z\\",\\"focusTimeSec\\":0}}","partitionKey":"kbaqgomqdg98enba"}]}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json; charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(3);

    response = http.post(
      "https://dev2.augmedix.com:50050/scribe-sessions",
      '{"scopeId":"stg_gd_doc1@augmedix.com1348","userType":"primary_scribe","scopeUserId":3473,"userEmail":"test_account_scribe_dev_03@augmedix.com"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://dev2.augmedix.com:50050/connection-settings/1348",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/scribe-sessions",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/connection-settings/1348",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.6);

    response = http.post(
      "https://mcu-test.augmedix.com/v1/fast/",
      '{"What":"initialize","Code":1001,"Scope":"stg_gd_doc1@augmedix.com1348","Email":"test_account_scribe_dev_03@augmedix.com","Type":"publisher","SDKType":"javascript","Display":"test scribe","IsRecording":false,"Fir":5,"AudioCodec":"OPUS"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "*/*",
          destination: "broker",
          "content-type": "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options("https://mcu-test.augmedix.com/v1/fast/", null, {
      headers: {
        accept: "*/*",
        "access-control-request-method": "POST",
        "access-control-request-headers": "content-type,destination",
        origin: "https://dev2.augmedix.com:8191",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "sec-fetch-dest": "empty",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
      },
    });

    response = http.get(
      "https://dev2.augmedix.com:50012/appointments?doctorId=1348&startDate=2021-12-22&scribeId=3473&scribeRole=Full%20Control",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50012/appointments?doctorId=1348&startDate=2021-12-22&scribeId=3473&scribeRole=Full%20Control",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://staging-wfm-backend.augmedix.com/api/v1/providers/uid/0000-0001",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMjE1MTUsInVpZCI6MjIyLCJybHMiOlsiVklFV19PTkxZIixbInBydG5yLUFkdmVuc3VzIiwicHJ0bnItQXVnbWVkaXgiLCJwcnRuci1Db250ZWNoQlBPIiwicHJ0bnItRGVjaXBoZXIiLCJwcnRuci1FbGljbyIsInBydG5yLUZpcnN0U291cmNlIiwicHJ0bnItSURTIiwicHJ0bnItTWVkc291cmNlIiwicHJ0bnItT25seUdyb3VwIiwicHJ0bnItU2kyIiwicHJ0bnItT2N1TWVkIl1dfQ.zU_QX7_0Zjb1FwIg3V-JJMHcy6KV3WDU1TzwP7L3SbU",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://staging-wfm-backend.augmedix.com/api/v1/providers/uid/0000-0001",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get("https://dev2.augmedix.com:50050/recording/1348", {
      headers: {
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        accept: "application/json, text/plain, */*",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        origin: "https://dev2.augmedix.com:8191",
        "sec-fetch-site": "same-site",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
      },
    });

    response = http.options(
      "https://dev2.augmedix.com:50050/recording/1348",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.7);

    response = http.get(
      "https://augmedix-dev.s3.us-west-2.amazonaws.com/nlp/test/stg_gd_doc1%40augmedix.com/dictation_1348_1629969932934.ogg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211222T075933Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=AKIARA776I3VJ53EJUWJ%2F20211222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=bb8d7e7186e26f587dda36946f5fddc203885f80f22ef85993af28b7ba290f3c",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "accept-encoding": "identity;q=1, *;q=0",
          "sec-ch-ua-mobile": "?0",
          range: "bytes=0-",
          "sec-ch-ua-platform": '"Windows"',
          accept: "*/*",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "video",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://mcu-test2.augmedix.com/janus/6770362640734963?rid=02db799bcc2b&maxev=20&_=1640159974254",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "*/*",
          destination: "janus_8",
          "content-type": "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://mcu-test.augmedix.com/v1/fast/",
      '{"What":"join","Code":1003,"Scope":"stg_gd_doc1@augmedix.com1348","Email":"test_account_scribe_dev_03@augmedix.com","Type":"publisher","SDKType":"javascript"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "*/*",
          destination: "broker",
          "content-type": "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://mcu-test2.augmedix.com/janus/6770362640734963?rid=02db799bcc2b&maxev=20&_=1640159974254",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "content-type,destination",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.7);

    response = http.post(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      '{"records":[{"data":"{\\"insertId\\":\\"3wrebpuo0mhdi0li\\",\\"timeStamp\\":1640159974956,\\"eventType\\":\\"scp_js_event\\",\\"userId\\":3473,\\"distinctId\\":3473,\\"scribeId\\":3473,\\"scribeEmail\\":\\"test_account_scribe_dev_03@augmedix.com\\",\\"scribeName\\":\\"test scribe\\",\\"vendorName\\":\\"AXBD\\",\\"scribeUid\\":\\"999999\\",\\"clinicianId\\":1348,\\"clinicianName\\":\\"Stg Doc1 Gd\\",\\"clinicianEmail\\":\\"stg_gd_doc1@augmedix.com\\",\\"facilityName\\":\\"Square Hospital, Dhaka\\",\\"clinicianStatus\\":\\"active\\",\\"specialty\\":\\"Primary Care\\",\\"specialtyId\\":36,\\"service\\":\\"Live\\",\\"scribeRole\\":\\"primaryFullControl\\",\\"os\\":\\"Windows\\",\\"browser\\":\\"Chrome\\",\\"initialReferrer\\":\\"$direct\\",\\"initialReferringDomain\\":\\"$direct\\",\\"device\\":\\"\\",\\"currentUrl\\":\\"https://dev2.augmedix.com:8191/app/dashboard\\",\\"browserVersion\\":96,\\"screenHeight\\":864,\\"screenWidth\\":1536,\\"payload\\":{\\"eventName\\":\\"Role Selected\\",\\"eventTime\\":\\"2021-12-22T07:59:34.954Z\\",\\"focusTimeSec\\":0}}","partitionKey":"3wrebpuo0mhdi0li"}]}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json; charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://api-js.mixpanel.com/track/?verbose=1&ip=1&_=1640159975016",
      {
        data: "WwogICAgeyJldmVudCI6ICIkaWRlbnRpZnkiLCJwcm9wZXJ0aWVzIjogeyIkb3MiOiAiV2luZG93cyIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RldjIuYXVnbWVkaXguY29tOjgxOTEvYXBwL2Rhc2hib2FyZCIsIiRicm93c2VyX3ZlcnNpb24iOiA5NiwiJHNjcmVlbl9oZWlnaHQiOiA4NjQsIiRzY3JlZW5fd2lkdGgiOiAxNTM2LCJtcF9saWIiOiAid2ViIiwiJGxpYl92ZXJzaW9uIjogIjIuNDAuMCIsIiRpbnNlcnRfaWQiOiAibjZ3djcxcWdtYW15cHhvYyIsInRpbWUiOiAxNjQwMTU5OTYwLjAzOSwiZGlzdGluY3RfaWQiOiAzNDczLCIkZGV2aWNlX2lkIjogIjE3ZGUxMjZkYmUxMTdiLTA1MmRhMDc4OTg1MWY1LTQzMDMwNjYtMTQ0MDAwLTE3ZGUxMjZkYmUyYjk2IiwiJHVzZXJfaWQiOiAzNDczLCIkaW5pdGlhbF9yZWZlcnJlciI6ICIkZGlyZWN0IiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICIkZGlyZWN0IiwiJGFub25fZGlzdGluY3RfaWQiOiAiMTdkZTEyNmRiZTExN2ItMDUyZGEwNzg5ODUxZjUtNDMwMzA2Ni0xNDQwMDAtMTdkZTEyNmRiZTJiOTYiLCJ0b2tlbiI6ICI1ODc4YjIxZmQzZjYxODBmMGY0NDcxZjc5OTU0NmJhNyJ9fSwKICAgIHsiZXZlbnQiOiAiTG9nZ2VkIEluIiwicHJvcGVydGllcyI6IHsiJG9zIjogIldpbmRvd3MiLCIkYnJvd3NlciI6ICJDaHJvbWUiLCIkY3VycmVudF91cmwiOiAiaHR0cHM6Ly9kZXYyLmF1Z21lZGl4LmNvbTo4MTkxL2FwcC9kYXNoYm9hcmQiLCIkYnJvd3Nlcl92ZXJzaW9uIjogOTYsIiRzY3JlZW5faGVpZ2h0IjogODY0LCIkc2NyZWVuX3dpZHRoIjogMTUzNiwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjQwLjAiLCIkaW5zZXJ0X2lkIjogInJncjdkYmFiNnpqNmYwZTkiLCJ0aW1lIjogMTY0MDE1OTk2Mi40NjYsImRpc3RpbmN0X2lkIjogMzQ3MywiJGRldmljZV9pZCI6ICIxN2RlMTI2ZGJlMTE3Yi0wNTJkYTA3ODk4NTFmNS00MzAzMDY2LTE0NDAwMC0xN2RlMTI2ZGJlMmI5NiIsIiR1c2VyX2lkIjogMzQ3MywiJGluaXRpYWxfcmVmZXJyZXIiOiAiJGRpcmVjdCIsIiRpbml0aWFsX3JlZmVycmluZ19kb21haW4iOiAiJGRpcmVjdCIsIlNjcmliZSBJRCI6IDM0NzMsIlNjcmliZSBFbWFpbCI6ICJ0ZXN0X2FjY291bnRfc2NyaWJlX2Rldl8wM0BhdWdtZWRpeC5jb20iLCJTY3JpYmUgTmFtZSI6ICJ0ZXN0IHNjcmliZSIsIlZlbmRvciBOYW1lIjogIkFYQkQiLCJTY3JpYmUgVUlEIjogIjk5OTk5OSIsIkV2ZW50IFRpbWUiOiAiMjAyMS0xMi0yMlQwNzo1OToyMi40NjVaIiwiRm9jdXMgVGltZSAoc2VjKSI6IDAsInRva2VuIjogIjU4NzhiMjFmZDNmNjE4MGYwZjQ0NzFmNzk5NTQ2YmE3In19LAogICAgeyJldmVudCI6ICJDbGluaWNpYW4gU2VsZWN0ZWQiLCJwcm9wZXJ0aWVzIjogeyIkb3MiOiAiV2luZG93cyIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RldjIuYXVnbWVkaXguY29tOjgxOTEvYXBwL2Rhc2hib2FyZCIsIiRicm93c2VyX3ZlcnNpb24iOiA5NiwiJHNjcmVlbl9oZWlnaHQiOiA4NjQsIiRzY3JlZW5fd2lkdGgiOiAxNTM2LCJtcF9saWIiOiAid2ViIiwiJGxpYl92ZXJzaW9uIjogIjIuNDAuMCIsIiRpbnNlcnRfaWQiOiAiN2tlaXlvaGpoZDRzbWg5cCIsInRpbWUiOiAxNjQwMTU5OTY5LjU1NiwiZGlzdGluY3RfaWQiOiAzNDczLCIkZGV2aWNlX2lkIjogIjE3ZGUxMjZkYmUxMTdiLTA1MmRhMDc4OTg1MWY1LTQzMDMwNjYtMTQ0MDAwLTE3ZGUxMjZkYmUyYjk2IiwiJHVzZXJfaWQiOiAzNDczLCIkaW5pdGlhbF9yZWZlcnJlciI6ICIkZGlyZWN0IiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICIkZGlyZWN0IiwiU2NyaWJlIElEIjogMzQ3MywiU2NyaWJlIEVtYWlsIjogInRlc3RfYWNjb3VudF9zY3JpYmVfZGV2XzAzQGF1Z21lZGl4LmNvbSIsIlNjcmliZSBOYW1lIjogInRlc3Qgc2NyaWJlIiwiVmVuZG9yIE5hbWUiOiAiQVhCRCIsIlNjcmliZSBVSUQiOiAiOTk5OTk5IiwiQ2xpbmljaWFuIElEIjogMTM0OCwiQ2xpbmljaWFuIE5hbWUiOiAiU3RnIERvYzEgR2QiLCJDbGluaWNpYW4gRW1haWwiOiAic3RnX2dkX2RvYzFAYXVnbWVkaXguY29tIiwiRmFjaWxpdHkgTmFtZSI6ICJTcXVhcmUgSG9zcGl0YWwsIERoYWthIiwiQ2xpbmljaWFuIFN0YXR1cyI6ICJhY3RpdmUiLCJFdmVudCBUaW1lIjogIjIwMjEtMTItMjJUMDc6NTk6MjkuNTU0WiIsIkZvY3VzIFRpbWUgKHNlYykiOiAwLCJ0b2tlbiI6ICI1ODc4YjIxZmQzZjYxODBmMGY0NDcxZjc5OTU0NmJhNyJ9fSwKICAgIHsiZXZlbnQiOiAiUm9sZSBTZWxlY3RlZCIsInByb3BlcnRpZXMiOiB7IiRvcyI6ICJXaW5kb3dzIiwiJGJyb3dzZXIiOiAiQ2hyb21lIiwiJGN1cnJlbnRfdXJsIjogImh0dHBzOi8vZGV2Mi5hdWdtZWRpeC5jb206ODE5MS9hcHAvZGFzaGJvYXJkIiwiJGJyb3dzZXJfdmVyc2lvbiI6IDk2LCIkc2NyZWVuX2hlaWdodCI6IDg2NCwiJHNjcmVlbl93aWR0aCI6IDE1MzYsIm1wX2xpYiI6ICJ3ZWIiLCIkbGliX3ZlcnNpb24iOiAiMi40MC4wIiwiJGluc2VydF9pZCI6ICJoNG5obHRmdWNhdGtiaWZlIiwidGltZSI6IDE2NDAxNTk5NzQuOTU1LCJkaXN0aW5jdF9pZCI6IDM0NzMsIiRkZXZpY2VfaWQiOiAiMTdkZTEyNmRiZTExN2ItMDUyZGEwNzg5ODUxZjUtNDMwMzA2Ni0xNDQwMDAtMTdkZTEyNmRiZTJiOTYiLCIkdXNlcl9pZCI6IDM0NzMsIiRpbml0aWFsX3JlZmVycmVyIjogIiRkaXJlY3QiLCIkaW5pdGlhbF9yZWZlcnJpbmdfZG9tYWluIjogIiRkaXJlY3QiLCJTY3JpYmUgSUQiOiAzNDczLCJTY3JpYmUgRW1haWwiOiAidGVzdF9hY2NvdW50X3NjcmliZV9kZXZfMDNAYXVnbWVkaXguY29tIiwiU2NyaWJlIE5hbWUiOiAidGVzdCBzY3JpYmUiLCJWZW5kb3IgTmFtZSI6ICJBWEJEIiwiU2NyaWJlIFVJRCI6ICI5OTk5OTkiLCJDbGluaWNpYW4gSUQiOiAxMzQ4LCJDbGluaWNpYW4gTmFtZSI6ICJTdGcgRG9jMSBHZCIsIkNsaW5pY2lhbiBFbWFpbCI6ICJzdGdfZ2RfZG9jMUBhdWdtZWRpeC5jb20iLCJGYWNpbGl0eSBOYW1lIjogIlNxdWFyZSBIb3NwaXRhbCwgRGhha2EiLCJDbGluaWNpYW4gU3RhdHVzIjogImFjdGl2ZSIsIlNwZWNpYWx0eSI6ICJQcmltYXJ5IENhcmUiLCJTcGVjaWFsdHkgSUQiOiAzNiwiU2VydmljZSI6ICJMaXZlIiwiU2NyaWJlIFJvbGUiOiAicHJpbWFyeUZ1bGxDb250cm9sIiwiRXZlbnQgVGltZSI6ICIyMDIxLTEyLTIyVDA3OjU5OjM0Ljk1NFoiLCJGb2N1cyBUaW1lIChzZWMpIjogMCwidG9rZW4iOiAiNTg3OGIyMWZkM2Y2MTgwZjBmNDQ3MWY3OTk1NDZiYTcifX0KXQ%3D%3D",
      },
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "content-type": "application/x-www-form-urlencoded",
          accept: "*/*",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://api-js.mixpanel.com/engage/?verbose=1&ip=1&_=1640159975020",
      {
        data: "WwogICAgeyIkc2V0IjogeyIkb3MiOiAiV2luZG93cyIsIiRicm93c2VyIjogIkNocm9tZSIsIiRicm93c2VyX3ZlcnNpb24iOiA5NiwiJGluaXRpYWxfcmVmZXJyZXIiOiAiJGRpcmVjdCIsIiRpbml0aWFsX3JlZmVycmluZ19kb21haW4iOiAiJGRpcmVjdCIsIiRlbWFpbCI6ICJ0ZXN0X2FjY291bnRfc2NyaWJlX2Rldl8wM0BhdWdtZWRpeC5jb20iLCIkbmFtZSI6ICJ0ZXN0IHNjcmliZSIsIiRmaXJzdF9uYW1lIjogInRlc3QiLCIkbGFzdF9uYW1lIjogInNjcmliZSIsIiRjcmVhdGVkIjogIjIwMjEtMDgtMTZUMDc6NDM6NDJaIn0sIiR0b2tlbiI6ICI1ODc4YjIxZmQzZjYxODBmMGY0NDcxZjc5OTU0NmJhNyIsIiRkaXN0aW5jdF9pZCI6IDM0NzMsIiRkZXZpY2VfaWQiOiAiMTdkZTEyNmRiZTExN2ItMDUyZGEwNzg5ODUxZjUtNDMwMzA2Ni0xNDQwMDAtMTdkZTEyNmRiZTJiOTYiLCIkdXNlcl9pZCI6IDM0NzN9Cl0%3D",
      },
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "content-type": "application/x-www-form-urlencoded",
          accept: "*/*",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.7);

    response = http.post(
      "https://mcu-test.augmedix.com/v1/fast/",
      '{"What":"initialize","Code":1001,"Scope":"stg_gd_doc1@augmedix.com1348","Email":"test_account_scribe_dev_03@augmedix.com","Type":"subscriber","SDKType":"javascript","Display":"test scribe","IsRecording":false,"Fir":5,"AudioCodec":"OPUS"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "*/*",
          destination: "broker",
          "content-type": "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://mcu-test2.augmedix.com/janus/6770362640734963?rid=10b617cb2bb2&maxev=20&_=1640159975764",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "*/*",
          destination: "janus_8",
          "content-type": "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://mcu-test2.augmedix.com/janus/6770362640734963?rid=10b617cb2bb2&maxev=20&_=1640159975764",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "content-type,destination",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://mcu-test2.augmedix.com/janus/3161493908344783?rid=d63902734576&maxev=20&_=1640159976058",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "*/*",
          destination: "janus_8",
          "content-type": "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://mcu-test.augmedix.com/v1/fast/",
      '{"What":"join","Code":1003,"Scope":"stg_gd_doc1@augmedix.com1348","Email":"test_account_scribe_dev_03@augmedix.com","Type":"subscriber","SDKType":"javascript"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "*/*",
          destination: "broker",
          "content-type": "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://mcu-test2.augmedix.com/janus/3161493908344783?rid=d63902734576&maxev=20&_=1640159976058",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "content-type,destination",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.9);

    response = http.get(
      "https://dev2.augmedix.com:50050/notes/patients?patientVisitDate=22-12-2021&providerId=1348&scribeControl=Full%20Control&trainerNote=false&providerEmail=stg_gd_doc1@augmedix.com&providerFirstName=Stg%20Doc1&providerLastName=Gd&siteId=56&nonRealTimeMode=false",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get("https://dev2.augmedix.com:50050/macros", {
      headers: {
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        accept: "application/json, text/plain, */*",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        origin: "https://dev2.augmedix.com:8191",
        "sec-fetch-site": "same-site",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
      },
    });

    response = http.options(
      "https://dev2.augmedix.com:50050/notes/patients?patientVisitDate=22-12-2021&providerId=1348&scribeControl=Full%20Control&trainerNote=false&providerEmail=stg_gd_doc1@augmedix.com&providerFirstName=Stg%20Doc1&providerLastName=Gd&siteId=56&nonRealTimeMode=false",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options("https://dev2.augmedix.com:50050/macros", null, {
      headers: {
        accept: "*/*",
        "access-control-request-method": "GET",
        "access-control-request-headers": "authorization",
        origin: "https://dev2.augmedix.com:8191",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "sec-fetch-dest": "empty",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
      },
    });

    response = http.get("https://dev2.augmedix.com:50050/templates", {
      headers: {
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        accept: "application/json, text/plain, */*",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        origin: "https://dev2.augmedix.com:8191",
        "sec-fetch-site": "same-site",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
      },
    });

    response = http.options("https://dev2.augmedix.com:50050/templates", null, {
      headers: {
        accept: "*/*",
        "access-control-request-method": "GET",
        "access-control-request-headers": "authorization",
        origin: "https://dev2.augmedix.com:8191",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "sec-fetch-dest": "empty",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
      },
    });

    response = http.get(
      "https://dev2.augmedix.com:50050/upload-files?providerEmail=stg_gd_doc1@augmedix.com",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/upload-files?providerEmail=stg_gd_doc1@augmedix.com",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.6);

    response = http.get(
      "https://mcu-test2.augmedix.com/janus/3161493908344783?rid=4827381a7a32&maxev=20&_=1640159977523",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "*/*",
          destination: "janus_8",
          "content-type": "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://mcu-test2.augmedix.com/janus/3161493908344783?rid=4827381a7a32&maxev=20&_=1640159977523",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "content-type,destination",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(5.7);

    response = http.post(
      "https://dev2.augmedix.com:50050/notes/save",
      '{"patientInfo":"{\\"patientName\\":\\"New Patient-1\\",\\"scheduleStartTime\\":\\"2:59 AM\\",\\"scheduleEndTime\\":\\"3:29 AM\\",\\"providerTimezone\\":\\"EST\\",\\"scheduleStatus\\":\\"Scheduled\\",\\"notewriterEditorContent\\":\\"[{\\\\\\"title\\\\\\":\\\\\\"Untitled\\\\\\",\\\\\\"body\\\\\\":\\\\\\"\\\\\\"}]\\",\\"indexNo\\":0,\\"noteId\\":\\"\\",\\"patientBundle\\":\\"{\\\\\\"pid\\\\\\":\\\\\\"\\\\\\",\\\\\\"patient_name\\\\\\":\\\\\\"New Patient-1\\\\\\",\\\\\\"patient_age\\\\\\":0,\\\\\\"patient_gender\\\\\\":\\\\\\"\\\\\\",\\\\\\"image\\\\\\":\\\\\\"\\\\\\",\\\\\\"patient_state\\\\\\":\\\\\\"\\\\\\",\\\\\\"appointment_time\\\\\\":\\\\\\"2:59 AM\\\\\\",\\\\\\"patient_room\\\\\\":\\\\\\"\\\\\\",\\\\\\"chief_complaint\\\\\\":\\\\\\"\\\\\\",\\\\\\"personal_detail\\\\\\":\\\\\\"\\\\\\",\\\\\\"notes\\\\\\":\\\\\\"\\\\\\",\\\\\\"open_cards\\\\\\":{},\\\\\\"close_cards\\\\\\":[\\\\\\"vitals\\\\\\",\\\\\\"last-visit\\\\\\",\\\\\\"current-medication\\\\\\",\\\\\\"lab-results\\\\\\",\\\\\\"allergies\\\\\\",\\\\\\"medical-history\\\\\\"],\\\\\\"scribeId\\\\\\":\\\\\\"\\\\\\",\\\\\\"cardStatus\\\\\\":\\\\\\"\\\\\\"}\\",\\"cardId\\":\\"\\",\\"hasContents\\":false,\\"gender\\":null,\\"chiefComplaint\\":\\"\\",\\"dateOfBirth\\":\\"\\",\\"tempPatientId\\":1640159983266,\\"creationDate\\":null,\\"noteExpirationHour\\":0,\\"focusDuration\\":0,\\"visitDuration\\":0}","patientVisitDate":"22-12-2021","providerFirstName":"Stg Doc1","providerId":1348,"providerEmail":"stg_gd_doc1@augmedix.com","providerLastName":"Gd","providerSiteId":56,"providerTimezone":"EST","providerUid":"0000-0001","saveTypeRestore":null,"scopeId":"stg_gd_doc1@augmedix.com1348","scribeControl":"Full Control","isShowNotebuilder":true}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/notes/save",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.7);

    response = http.post(
      "https://dev2.augmedix.com:50050/save-event",
      '{"eventsArray":"[{\\"logMessage\\":\\"test scribe<test_account_scribe_dev_03@augmedix.com> 3473 switched to patient ID: 824909\\",\\"logPriority\\":\\"none\\",\\"eventTime\\":1640159983928,\\"logType\\":\\"general\\"}]"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/save-event",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      '{"records":[{"data":"{\\"insertId\\":\\"36nn1w7dmil0yi0z\\",\\"timeStamp\\":1640159983926,\\"eventType\\":\\"scp_js_event\\",\\"userId\\":3473,\\"distinctId\\":3473,\\"scribeId\\":3473,\\"scribeEmail\\":\\"test_account_scribe_dev_03@augmedix.com\\",\\"scribeName\\":\\"test scribe\\",\\"vendorName\\":\\"AXBD\\",\\"scribeUid\\":\\"999999\\",\\"clinicianId\\":1348,\\"clinicianName\\":\\"Stg Doc1 Gd\\",\\"clinicianEmail\\":\\"stg_gd_doc1@augmedix.com\\",\\"facilityName\\":\\"Square Hospital, Dhaka\\",\\"clinicianStatus\\":\\"active\\",\\"specialty\\":\\"Primary Care\\",\\"specialtyId\\":36,\\"service\\":\\"Live\\",\\"scribeRole\\":\\"primaryFullControl\\",\\"patientId\\":824909,\\"noteId\\":824909,\\"visitDate\\":\\"2021-12-22\\",\\"os\\":\\"Windows\\",\\"browser\\":\\"Chrome\\",\\"initialReferrer\\":\\"$direct\\",\\"initialReferringDomain\\":\\"$direct\\",\\"device\\":\\"\\",\\"currentUrl\\":\\"https://dev2.augmedix.com:8191/app/dashboard\\",\\"browserVersion\\":96,\\"screenHeight\\":864,\\"screenWidth\\":1536,\\"payload\\":{\\"eventName\\":\\"Visit Added\\",\\"eventTime\\":\\"2021-12-22T07:59:43.924Z\\",\\"focusTimeSec\\":0}}","partitionKey":"36nn1w7dmil0yi0z"}]}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json; charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/complaint-synonyms",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/complaint-synonyms",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"\\",\\"gender\\":null,\\"chiefComplaint\\":\\"\\",\\"complaints\\":[]},\\"activeTab\\":\\"organize\\",\\"isValidData\\":false}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-builder/save",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(6);

    response = http.post(
      "https://api-js.mixpanel.com/track/?verbose=1&ip=1&_=1640159990110",
      {
        data: "WwogICAgeyJldmVudCI6ICJWaXNpdCBBZGRlZCIsInByb3BlcnRpZXMiOiB7IiRvcyI6ICJXaW5kb3dzIiwiJGJyb3dzZXIiOiAiQ2hyb21lIiwiJGN1cnJlbnRfdXJsIjogImh0dHBzOi8vZGV2Mi5hdWdtZWRpeC5jb206ODE5MS9hcHAvbm90ZXdyaXRlciIsIiRicm93c2VyX3ZlcnNpb24iOiA5NiwiJHNjcmVlbl9oZWlnaHQiOiA4NjQsIiRzY3JlZW5fd2lkdGgiOiAxNTM2LCJtcF9saWIiOiAid2ViIiwiJGxpYl92ZXJzaW9uIjogIjIuNDAuMCIsIiRpbnNlcnRfaWQiOiAibThyMnR4ZzJvbGdpczA0eSIsInRpbWUiOiAxNjQwMTU5OTgzLjkyNiwiZGlzdGluY3RfaWQiOiAzNDczLCIkZGV2aWNlX2lkIjogIjE3ZGUxMjZkYmUxMTdiLTA1MmRhMDc4OTg1MWY1LTQzMDMwNjYtMTQ0MDAwLTE3ZGUxMjZkYmUyYjk2IiwiJHVzZXJfaWQiOiAzNDczLCIkaW5pdGlhbF9yZWZlcnJlciI6ICIkZGlyZWN0IiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICIkZGlyZWN0IiwiU2NyaWJlIElEIjogMzQ3MywiU2NyaWJlIEVtYWlsIjogInRlc3RfYWNjb3VudF9zY3JpYmVfZGV2XzAzQGF1Z21lZGl4LmNvbSIsIlNjcmliZSBOYW1lIjogInRlc3Qgc2NyaWJlIiwiVmVuZG9yIE5hbWUiOiAiQVhCRCIsIlNjcmliZSBVSUQiOiAiOTk5OTk5IiwiQ2xpbmljaWFuIElEIjogMTM0OCwiQ2xpbmljaWFuIE5hbWUiOiAiU3RnIERvYzEgR2QiLCJDbGluaWNpYW4gRW1haWwiOiAic3RnX2dkX2RvYzFAYXVnbWVkaXguY29tIiwiRmFjaWxpdHkgTmFtZSI6ICJTcXVhcmUgSG9zcGl0YWwsIERoYWthIiwiQ2xpbmljaWFuIFN0YXR1cyI6ICJhY3RpdmUiLCJTcGVjaWFsdHkiOiAiUHJpbWFyeSBDYXJlIiwiU3BlY2lhbHR5IElEIjogMzYsIlNlcnZpY2UiOiAiTGl2ZSIsIlNjcmliZSBSb2xlIjogInByaW1hcnlGdWxsQ29udHJvbCIsIlBhdGllbnQgSUQiOiA4MjQ5MDksIk5vdGUgSUQiOiA4MjQ5MDksIlZpc2l0IERhdGUiOiAiMjAyMS0xMi0yMiIsIkV2ZW50IFRpbWUiOiAiMjAyMS0xMi0yMlQwNzo1OTo0My45MjRaIiwiRm9jdXMgVGltZSAoc2VjKSI6IDAsInRva2VuIjogIjU4NzhiMjFmZDNmNjE4MGYwZjQ0NzFmNzk5NTQ2YmE3In19Cl0%3D",
      },
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "content-type": "application/x-www-form-urlencoded",
          accept: "*/*",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50011/stats/scribe/connection-status",
      '{"providerEmail":"stg_gd_doc1@augmedix.com","scopeConnectStatus":true,"scribeControl":"Full Control","scribeEmail":"test_account_scribe_dev_03@augmedix.com","streamStatus":false}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50050/last-activity",
      '{"providerEmail":"stg_gd_doc1@augmedix.com","scopeConnectStatus":true,"scribeControl":"Full Control","scribeEmail":"test_account_scribe_dev_03@augmedix.com","streamStatus":false}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50011/stats/scribe/connection-status",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/last-activity",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.5);

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/complaints?published=true&include[]=specialtyTag",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/complaints?published=true&include[]=specialtyTag",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.2);

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/visit-types?specialty=36",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/visit-types?specialty=36",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      '{"records":[{"data":"{\\"insertId\\":\\"jxw2lzwcdvy42to5\\",\\"timeStamp\\":1640159992145,\\"eventType\\":\\"scp_js_event\\",\\"userId\\":3473,\\"distinctId\\":3473,\\"scribeId\\":3473,\\"scribeEmail\\":\\"test_account_scribe_dev_03@augmedix.com\\",\\"scribeName\\":\\"test scribe\\",\\"vendorName\\":\\"AXBD\\",\\"scribeUid\\":\\"999999\\",\\"clinicianId\\":1348,\\"clinicianName\\":\\"Stg Doc1 Gd\\",\\"clinicianEmail\\":\\"stg_gd_doc1@augmedix.com\\",\\"facilityName\\":\\"Square Hospital, Dhaka\\",\\"clinicianStatus\\":\\"active\\",\\"specialty\\":\\"Primary Care\\",\\"specialtyId\\":36,\\"service\\":\\"Live\\",\\"scribeRole\\":\\"primaryFullControl\\",\\"patientId\\":824909,\\"noteId\\":824909,\\"visitDate\\":\\"2021-12-22\\",\\"os\\":\\"Windows\\",\\"browser\\":\\"Chrome\\",\\"initialReferrer\\":\\"$direct\\",\\"initialReferringDomain\\":\\"$direct\\",\\"device\\":\\"\\",\\"currentUrl\\":\\"https://dev2.augmedix.com:8191/app/dashboard\\",\\"browserVersion\\":96,\\"screenHeight\\":864,\\"screenWidth\\":1536,\\"payload\\":{\\"eventName\\":\\"Notebuilder Loaded\\",\\"loadTimeMs\\":8875,\\"loadType\\":\\"Visit Creation\\",\\"eventTime\\":\\"2021-12-22T07:59:52.142Z\\",\\"focusTimeSec\\":0}}","partitionKey":"jxw2lzwcdvy42to5"}]}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json; charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(6.8);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-event",
      '{"notewriterEventsArray":"[{\\"providerId\\":1348,\\"logTime\\":1640159983953,\\"scribeControl\\":\\"Full Control\\",\\"action\\":\\"Note created.\\",\\"effect\\":\\"\\",\\"appliedEffect\\":\\"Note ID: 824909\\"}]"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json;charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-event",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(2.8);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"\\",\\"complaints\\":[]},\\"activeTab\\":\\"organize\\",\\"isValidData\\":false},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[],\\"selectedComplaint\\":-1,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is male presenting today for: CHIEF COMPLAINT.\\"}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-builder/save",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50050/notes/focus-duration",
      '{"noteId":824909,"focusDuration":3}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/notes/focus-duration",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1);

    response = http.post(
      "https://dev2.augmedix.com:50011/stats/scribe/health-stat",
      '[{"doctorEmail":"stg_gd_doc1@augmedix.com","metricsType":"DATA_CHANNEL_CONNECTED","value":1,"eventTime":"Wed, 22 Dec 2021 07:59:33 GMT","scribeEmail":"test_account_scribe_dev_03@augmedix.com"},{"doctorEmail":"stg_gd_doc1@augmedix.com","metricsType":"STREAMING_SERVER_CONNECTED","value":1,"eventTime":"Wed, 22 Dec 2021 07:59:37 GMT","scribeEmail":"test_account_scribe_dev_03@augmedix.com"}]',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50011/stats/scribe/health-stat",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/complaints?published=true&nameSlice=&include[]=specialtyTag&specialtyContext=36&sex=MALE&age=22",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/complaints?published=true&nameSlice=&include[]=specialtyTag&specialtyContext=36&sex=MALE&age=22",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.7);

    response = http.post(
      "https://dev2.augmedix.com:50050/save-event",
      '{"eventsArray":"[{\\"logMessage\\":\\"test scribe<test_account_scribe_dev_03@augmedix.com> selected organize tab for note id: 824909\\",\\"logType\\":\\"notebuilder\\",\\"logPriority\\":\\"none\\",\\"eventTime\\":1640159990}]"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json;charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/save-event",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"\\",\\"complaints\\":[],\\"dob\\":\\"1999-12-22\\",\\"serviceType\\":[{\\"id\\":1,\\"name\\":\\"In-person\\"}]},\\"activeTab\\":\\"organize\\",\\"isValidData\\":false},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[],\\"selectedComplaint\\":-1,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is a 22 day old male presenting today for: CHIEF COMPLAINT.\\"}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://api-js.mixpanel.com/track/?verbose=1&ip=1&_=1640160005254",
      {
        data: "WwogICAgeyJldmVudCI6ICJOb3RlYnVpbGRlciBMb2FkZWQiLCJwcm9wZXJ0aWVzIjogeyIkb3MiOiAiV2luZG93cyIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RldjIuYXVnbWVkaXguY29tOjgxOTEvYXBwL25vdGV3cml0ZXIiLCIkYnJvd3Nlcl92ZXJzaW9uIjogOTYsIiRzY3JlZW5faGVpZ2h0IjogODY0LCIkc2NyZWVuX3dpZHRoIjogMTUzNiwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjQwLjAiLCIkaW5zZXJ0X2lkIjogInZ0N2tzbHNweXA3eXZhZmUiLCJ0aW1lIjogMTY0MDE1OTk5Mi4xNDQsImRpc3RpbmN0X2lkIjogMzQ3MywiJGRldmljZV9pZCI6ICIxN2RlMTI2ZGJlMTE3Yi0wNTJkYTA3ODk4NTFmNS00MzAzMDY2LTE0NDAwMC0xN2RlMTI2ZGJlMmI5NiIsIiR1c2VyX2lkIjogMzQ3MywiJGluaXRpYWxfcmVmZXJyZXIiOiAiJGRpcmVjdCIsIiRpbml0aWFsX3JlZmVycmluZ19kb21haW4iOiAiJGRpcmVjdCIsIlNjcmliZSBJRCI6IDM0NzMsIlNjcmliZSBFbWFpbCI6ICJ0ZXN0X2FjY291bnRfc2NyaWJlX2Rldl8wM0BhdWdtZWRpeC5jb20iLCJTY3JpYmUgTmFtZSI6ICJ0ZXN0IHNjcmliZSIsIlZlbmRvciBOYW1lIjogIkFYQkQiLCJTY3JpYmUgVUlEIjogIjk5OTk5OSIsIkNsaW5pY2lhbiBJRCI6IDEzNDgsIkNsaW5pY2lhbiBOYW1lIjogIlN0ZyBEb2MxIEdkIiwiQ2xpbmljaWFuIEVtYWlsIjogInN0Z19nZF9kb2MxQGF1Z21lZGl4LmNvbSIsIkZhY2lsaXR5IE5hbWUiOiAiU3F1YXJlIEhvc3BpdGFsLCBEaGFrYSIsIkNsaW5pY2lhbiBTdGF0dXMiOiAiYWN0aXZlIiwiU3BlY2lhbHR5IjogIlByaW1hcnkgQ2FyZSIsIlNwZWNpYWx0eSBJRCI6IDM2LCJTZXJ2aWNlIjogIkxpdmUiLCJTY3JpYmUgUm9sZSI6ICJwcmltYXJ5RnVsbENvbnRyb2wiLCJQYXRpZW50IElEIjogODI0OTA5LCJOb3RlIElEIjogODI0OTA5LCJWaXNpdCBEYXRlIjogIjIwMjEtMTItMjIiLCJMb2FkIFRpbWUgKG1zKSI6IDg4NzUsIkxvYWQgVHlwZSI6ICJWaXNpdCBDcmVhdGlvbiIsIkV2ZW50IFRpbWUiOiAiMjAyMS0xMi0yMlQwNzo1OTo1Mi4xNDJaIiwiRm9jdXMgVGltZSAoc2VjKSI6IDAsInRva2VuIjogIjU4NzhiMjFmZDNmNjE4MGYwZjQ0NzFmNzk5NTQ2YmE3In19Cl0%3D",
      },
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "content-type": "application/x-www-form-urlencoded",
          accept: "*/*",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.2);

    response = http.post(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      '{"records":[{"data":"{\\"insertId\\":\\"ud2q8ned0mhw8dkh\\",\\"timeStamp\\":1640160006427,\\"eventType\\":\\"scp_js_event\\",\\"userId\\":3473,\\"distinctId\\":3473,\\"scribeId\\":3473,\\"scribeEmail\\":\\"test_account_scribe_dev_03@augmedix.com\\",\\"scribeName\\":\\"test scribe\\",\\"vendorName\\":\\"AXBD\\",\\"scribeUid\\":\\"999999\\",\\"clinicianId\\":1348,\\"clinicianName\\":\\"Stg Doc1 Gd\\",\\"clinicianEmail\\":\\"stg_gd_doc1@augmedix.com\\",\\"facilityName\\":\\"Square Hospital, Dhaka\\",\\"clinicianStatus\\":\\"active\\",\\"specialty\\":\\"Primary Care\\",\\"specialtyId\\":36,\\"service\\":\\"Live\\",\\"scribeRole\\":\\"primaryFullControl\\",\\"patientId\\":824909,\\"noteId\\":824909,\\"visitDate\\":\\"2021-12-22\\",\\"patientGender\\":\\"Male\\",\\"patientAge\\":22,\\"visitType\\":\\"In-person\\",\\"telemedicineVisitType\\":\\"\\",\\"os\\":\\"Windows\\",\\"browser\\":\\"Chrome\\",\\"initialReferrer\\":\\"$direct\\",\\"initialReferringDomain\\":\\"$direct\\",\\"device\\":\\"\\",\\"currentUrl\\":\\"https://dev2.augmedix.com:8191/app/dashboard\\",\\"browserVersion\\":96,\\"screenHeight\\":864,\\"screenWidth\\":1536,\\"payload\\":{\\"eventName\\":\\"Complaint Added\\",\\"complaint\\":\\"Abdominal pain\\",\\"eventTime\\":\\"2021-12-22T08:00:06.425Z\\",\\"focusTimeSec\\":7}}","partitionKey":"ud2q8ned0mhw8dkh"}]}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json; charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.5);

    response = http.post(
      "https://dev2.augmedix.com:50050/notes/auto-save",
      '{"patientVisitDate":"22-12-2021","providerId":1348,"providerEmail":"stg_gd_doc1@augmedix.com","providerFirstName":"Stg Doc1","providerLastName":"Gd","siteId":56,"scribeControl":"Full Control","scopeId":"stg_gd_doc1@augmedix.com1348","patientList":"[{\\"patientName\\":\\"Vlad\\",\\"scheduleStartTime\\":\\"2:59 AM\\",\\"scheduleEndTime\\":\\"3:29 AM\\",\\"providerTimezone\\":\\"EST\\",\\"scheduleStatus\\":\\"Scheduled\\",\\"notewriterEditorContent\\":\\"[{\\\\\\"title\\\\\\":\\\\\\"Untitled\\\\\\",\\\\\\"body\\\\\\":\\\\\\"\\\\\\"}]\\",\\"indexNo\\":0,\\"noteId\\":824909,\\"patientBundle\\":\\"{\\\\\\"pid\\\\\\":824909,\\\\\\"patient_name\\\\\\":\\\\\\"New Patient-1\\\\\\",\\\\\\"patient_age\\\\\\":0,\\\\\\"patient_gender\\\\\\":\\\\\\"\\\\\\",\\\\\\"image\\\\\\":\\\\\\"\\\\\\",\\\\\\"patient_state\\\\\\":\\\\\\"\\\\\\",\\\\\\"appointment_time\\\\\\":\\\\\\"2:59 AM\\\\\\",\\\\\\"patient_room\\\\\\":\\\\\\"\\\\\\",\\\\\\"chief_complaint\\\\\\":\\\\\\"\\\\\\",\\\\\\"personal_detail\\\\\\":\\\\\\"\\\\\\",\\\\\\"notes\\\\\\":\\\\\\"\\\\\\",\\\\\\"open_cards\\\\\\":{},\\\\\\"close_cards\\\\\\":[\\\\\\"vitals\\\\\\",\\\\\\"last-visit\\\\\\",\\\\\\"current-medication\\\\\\",\\\\\\"lab-results\\\\\\",\\\\\\"allergies\\\\\\",\\\\\\"medical-history\\\\\\"],\\\\\\"scribeId\\\\\\":\\\\\\"\\\\\\",\\\\\\"cardStatus\\\\\\":\\\\\\"\\\\\\"}\\",\\"cardId\\":\\"\\",\\"hasContents\\":false,\\"gender\\":\\"M\\",\\"chiefComplaint\\":\\"\\",\\"dateOfBirth\\":\\"1999-12-22\\",\\"tempPatientId\\":1640159983266,\\"creationDate\\":\\"2021-12-22T07:59:43.836172Z\\",\\"noteExpirationHour\\":240,\\"focusDuration\\":0,\\"visitDuration\\":0,\\"noteExpiryInfo\\":{\\"expiryText\\":\\"Expires in 9 days\\",\\"status\\":\\"default\\"}}]"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/notes/auto-save",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://mcu-test2.augmedix.com/janus/6770362640734963?rid=a3368ab6c10c&maxev=20&_=1640160007239",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "*/*",
          destination: "janus_8",
          "content-type": "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://mcu-test2.augmedix.com/janus/6770362640734963?rid=a3368ab6c10c&maxev=20&_=1640160007239",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "content-type,destination",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.6);

    response = http.post(
      "https://dev2.augmedix.com:50050/notes/focus-duration",
      '{"noteId":824909,"focusDuration":8}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/notes/focus-duration",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/complaints/219?providerContext=1348&specialtyContext=36",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/complaints/219?providerContext=1348&specialtyContext=36",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      '{"records":[{"data":"{\\"insertId\\":\\"ldy5jjwq96lumeiu\\",\\"timeStamp\\":1640160007876,\\"eventType\\":\\"scp_js_event\\",\\"userId\\":3473,\\"distinctId\\":3473,\\"scribeId\\":3473,\\"scribeEmail\\":\\"test_account_scribe_dev_03@augmedix.com\\",\\"scribeName\\":\\"test scribe\\",\\"vendorName\\":\\"AXBD\\",\\"scribeUid\\":\\"999999\\",\\"clinicianId\\":1348,\\"clinicianName\\":\\"Stg Doc1 Gd\\",\\"clinicianEmail\\":\\"stg_gd_doc1@augmedix.com\\",\\"facilityName\\":\\"Square Hospital, Dhaka\\",\\"clinicianStatus\\":\\"active\\",\\"specialty\\":\\"Primary Care\\",\\"specialtyId\\":36,\\"service\\":\\"Live\\",\\"scribeRole\\":\\"primaryFullControl\\",\\"patientId\\":824909,\\"noteId\\":824909,\\"visitDate\\":\\"2021-12-22\\",\\"patientGender\\":\\"Male\\",\\"patientAge\\":22,\\"visitType\\":\\"In-person\\",\\"telemedicineVisitType\\":\\"\\",\\"os\\":\\"Windows\\",\\"browser\\":\\"Chrome\\",\\"initialReferrer\\":\\"$direct\\",\\"initialReferringDomain\\":\\"$direct\\",\\"device\\":\\"\\",\\"currentUrl\\":\\"https://dev2.augmedix.com:8191/app/dashboard\\",\\"browserVersion\\":96,\\"screenHeight\\":864,\\"screenWidth\\":1536,\\"payload\\":{\\"eventName\\":\\"Navigated to Note Section\\",\\"noteSectionName\\":\\"HPI\\",\\"eventTime\\":\\"2021-12-22T08:00:07.875Z\\",\\"focusTimeSec\\":8}}","partitionKey":"ldy5jjwq96lumeiu"}]}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json; charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.1);

    response = http.get(
      "https://mcu-test2.augmedix.com/janus/3161493908344783?rid=c87046122d15&maxev=20&_=1640160008996",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "*/*",
          destination: "janus_8",
          "content-type": "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://mcu-test2.augmedix.com/janus/3161493908344783?rid=c87046122d15&maxev=20&_=1640160008996",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "content-type,destination",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.9);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"Abdominal pain\\",\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"}],\\"dob\\":\\"1999-12-22\\",\\"serviceType\\":[{\\"id\\":1,\\"name\\":\\"In-person\\"}],\\"ageDescriptor\\":1,\\"startTime\\":\\"02:59:00\\",\\"templateId\\":null,\\"visitType\\":[]},\\"activeTab\\":\\"builder\\",\\"isValidData\\":true},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"}],\\"selectedComplaint\\":219,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is a 22 year old male presenting today for: Abdominal pain.\\",\\"activeSubnavId\\":1}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-builder/save",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(3.1);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-event",
      '{"notewriterEventsArray":"[{\\"providerId\\":1348,\\"logTime\\":1640160006428,\\"scribeControl\\":\\"Full Control\\",\\"action\\":\\"Complaint selected\\",\\"effect\\":\\"Abdominal pain\\",\\"appliedEffect\\":\\"Note ID: 824909\\"},{\\"providerId\\":1348,\\"logTime\\":1640160007864,\\"scribeControl\\":\\"Full Control\\",\\"action\\":\\"Visit setup\\",\\"effect\\":\\"\\",\\"appliedEffect\\":\\"Note ID: 824909\\"}]"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json;charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-event",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(4.7);

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.1);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"Abdominal pain\\",\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"}],\\"dob\\":\\"1999-12-22\\",\\"serviceType\\":[{\\"id\\":1,\\"name\\":\\"In-person\\"}],\\"ageDescriptor\\":1,\\"startTime\\":\\"02:59:00\\",\\"templateId\\":null,\\"visitType\\":[]},\\"activeTab\\":\\"builder\\",\\"isValidData\\":true},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"}],\\"selectedComplaint\\":219,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is a 22 year old male presenting today for: Abdominal pain.\\",\\"activeSubnavId\\":1,\\"template\\":null}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-builder/save",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.5);

    response = http.post(
      "https://dev2.augmedix.com:50050/save-event",
      '{"eventsArray":"[{\\"logMessage\\":\\"test scribe<test_account_scribe_dev_03@augmedix.com> updated organize tab for note id: 824909 with complaints (Abdominal pain)\\",\\"logType\\":\\"notebuilder\\",\\"logPriority\\":\\"none\\",\\"eventTime\\":1640160007},{\\"logMessage\\":\\"test scribe<test_account_scribe_dev_03@augmedix.com> selected builder tab for note id: 824909\\",\\"logType\\":\\"notebuilder\\",\\"logPriority\\":\\"none\\",\\"eventTime\\":1640160007},{\\"logMessage\\":\\"test scribe<test_account_scribe_dev_03@augmedix.com> selected complaint: Abdominal pain\\",\\"logType\\":\\"notebuilder\\",\\"logPriority\\":\\"none\\",\\"eventTime\\":1640160007}]"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json;charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/save-event",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://api-js.mixpanel.com/track/?verbose=1&ip=1&_=1640160020339",
      {
        data: "WwogICAgeyJldmVudCI6ICJDb21wbGFpbnQgQWRkZWQiLCJwcm9wZXJ0aWVzIjogeyIkb3MiOiAiV2luZG93cyIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RldjIuYXVnbWVkaXguY29tOjgxOTEvYXBwL25vdGV3cml0ZXIiLCIkYnJvd3Nlcl92ZXJzaW9uIjogOTYsIiRzY3JlZW5faGVpZ2h0IjogODY0LCIkc2NyZWVuX3dpZHRoIjogMTUzNiwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjQwLjAiLCIkaW5zZXJ0X2lkIjogIndxbGdmcm16NHQ1a2treXYiLCJ0aW1lIjogMTY0MDE2MDAwNi40MjcsImRpc3RpbmN0X2lkIjogMzQ3MywiJGRldmljZV9pZCI6ICIxN2RlMTI2ZGJlMTE3Yi0wNTJkYTA3ODk4NTFmNS00MzAzMDY2LTE0NDAwMC0xN2RlMTI2ZGJlMmI5NiIsIiR1c2VyX2lkIjogMzQ3MywiJGluaXRpYWxfcmVmZXJyZXIiOiAiJGRpcmVjdCIsIiRpbml0aWFsX3JlZmVycmluZ19kb21haW4iOiAiJGRpcmVjdCIsIlNjcmliZSBJRCI6IDM0NzMsIlNjcmliZSBFbWFpbCI6ICJ0ZXN0X2FjY291bnRfc2NyaWJlX2Rldl8wM0BhdWdtZWRpeC5jb20iLCJTY3JpYmUgTmFtZSI6ICJ0ZXN0IHNjcmliZSIsIlZlbmRvciBOYW1lIjogIkFYQkQiLCJTY3JpYmUgVUlEIjogIjk5OTk5OSIsIkNsaW5pY2lhbiBJRCI6IDEzNDgsIkNsaW5pY2lhbiBOYW1lIjogIlN0ZyBEb2MxIEdkIiwiQ2xpbmljaWFuIEVtYWlsIjogInN0Z19nZF9kb2MxQGF1Z21lZGl4LmNvbSIsIkZhY2lsaXR5IE5hbWUiOiAiU3F1YXJlIEhvc3BpdGFsLCBEaGFrYSIsIkNsaW5pY2lhbiBTdGF0dXMiOiAiYWN0aXZlIiwiU3BlY2lhbHR5IjogIlByaW1hcnkgQ2FyZSIsIlNwZWNpYWx0eSBJRCI6IDM2LCJTZXJ2aWNlIjogIkxpdmUiLCJTY3JpYmUgUm9sZSI6ICJwcmltYXJ5RnVsbENvbnRyb2wiLCJQYXRpZW50IElEIjogODI0OTA5LCJOb3RlIElEIjogODI0OTA5LCJWaXNpdCBEYXRlIjogIjIwMjEtMTItMjIiLCJQYXRpZW50IEdlbmRlciI6ICJNYWxlIiwiUGF0aWVudCBBZ2UiOiAyMiwiVmlzaXQgVHlwZSI6ICJJbi1wZXJzb24iLCJUZWxlbWVkaWNpbmUgVmlzaXQgVHlwZSI6ICIiLCJDb21wbGFpbnQiOiAiQWJkb21pbmFsIHBhaW4iLCJFdmVudCBUaW1lIjogIjIwMjEtMTItMjJUMDg6MDA6MDYuNDI1WiIsIkZvY3VzIFRpbWUgKHNlYykiOiA3LCJ0b2tlbiI6ICI1ODc4YjIxZmQzZjYxODBmMGY0NDcxZjc5OTU0NmJhNyJ9fSwKICAgIHsiZXZlbnQiOiAiTmF2aWdhdGVkIHRvIE5vdGUgU2VjdGlvbiIsInByb3BlcnRpZXMiOiB7IiRvcyI6ICJXaW5kb3dzIiwiJGJyb3dzZXIiOiAiQ2hyb21lIiwiJGN1cnJlbnRfdXJsIjogImh0dHBzOi8vZGV2Mi5hdWdtZWRpeC5jb206ODE5MS9hcHAvbm90ZXdyaXRlciIsIiRicm93c2VyX3ZlcnNpb24iOiA5NiwiJHNjcmVlbl9oZWlnaHQiOiA4NjQsIiRzY3JlZW5fd2lkdGgiOiAxNTM2LCJtcF9saWIiOiAid2ViIiwiJGxpYl92ZXJzaW9uIjogIjIuNDAuMCIsIiRpbnNlcnRfaWQiOiAiZGtncXk0bDFrcmZyeDh0dyIsInRpbWUiOiAxNjQwMTYwMDA3Ljg3NiwiZGlzdGluY3RfaWQiOiAzNDczLCIkZGV2aWNlX2lkIjogIjE3ZGUxMjZkYmUxMTdiLTA1MmRhMDc4OTg1MWY1LTQzMDMwNjYtMTQ0MDAwLTE3ZGUxMjZkYmUyYjk2IiwiJHVzZXJfaWQiOiAzNDczLCIkaW5pdGlhbF9yZWZlcnJlciI6ICIkZGlyZWN0IiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICIkZGlyZWN0IiwiU2NyaWJlIElEIjogMzQ3MywiU2NyaWJlIEVtYWlsIjogInRlc3RfYWNjb3VudF9zY3JpYmVfZGV2XzAzQGF1Z21lZGl4LmNvbSIsIlNjcmliZSBOYW1lIjogInRlc3Qgc2NyaWJlIiwiVmVuZG9yIE5hbWUiOiAiQVhCRCIsIlNjcmliZSBVSUQiOiAiOTk5OTk5IiwiQ2xpbmljaWFuIElEIjogMTM0OCwiQ2xpbmljaWFuIE5hbWUiOiAiU3RnIERvYzEgR2QiLCJDbGluaWNpYW4gRW1haWwiOiAic3RnX2dkX2RvYzFAYXVnbWVkaXguY29tIiwiRmFjaWxpdHkgTmFtZSI6ICJTcXVhcmUgSG9zcGl0YWwsIERoYWthIiwiQ2xpbmljaWFuIFN0YXR1cyI6ICJhY3RpdmUiLCJTcGVjaWFsdHkiOiAiUHJpbWFyeSBDYXJlIiwiU3BlY2lhbHR5IElEIjogMzYsIlNlcnZpY2UiOiAiTGl2ZSIsIlNjcmliZSBSb2xlIjogInByaW1hcnlGdWxsQ29udHJvbCIsIlBhdGllbnQgSUQiOiA4MjQ5MDksIk5vdGUgSUQiOiA4MjQ5MDksIlZpc2l0IERhdGUiOiAiMjAyMS0xMi0yMiIsIlBhdGllbnQgR2VuZGVyIjogIk1hbGUiLCJQYXRpZW50IEFnZSI6IDIyLCJWaXNpdCBUeXBlIjogIkluLXBlcnNvbiIsIlRlbGVtZWRpY2luZSBWaXNpdCBUeXBlIjogIiIsIk5vdGUgU2VjdGlvbiBOYW1lIjogIkhQSSIsIkV2ZW50IFRpbWUiOiAiMjAyMS0xMi0yMlQwODowMDowNy44NzVaIiwiRm9jdXMgVGltZSAoc2VjKSI6IDgsInRva2VuIjogIjU4NzhiMjFmZDNmNjE4MGYwZjQ0NzFmNzk5NTQ2YmE3In19Cl0%3D",
      },
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "content-type": "application/x-www-form-urlencoded",
          accept: "*/*",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50011/stats/scribe/connection-status",
      '{"providerEmail":"stg_gd_doc1@augmedix.com","scopeConnectStatus":true,"scribeControl":"Full Control","scribeEmail":"test_account_scribe_dev_03@augmedix.com","streamStatus":false}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50050/last-activity",
      '{"providerEmail":"stg_gd_doc1@augmedix.com","scopeConnectStatus":true,"scribeControl":"Full Control","scribeEmail":"test_account_scribe_dev_03@augmedix.com","streamStatus":false}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50011/stats/scribe/connection-status",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/last-activity",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/complaints/183?providerContext=1348&specialtyContext=36",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/complaints/183?providerContext=1348&specialtyContext=36",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      '{"records":[{"data":"{\\"insertId\\":\\"eka6nvri266fuh6o\\",\\"timeStamp\\":1640160020845,\\"eventType\\":\\"scp_js_event\\",\\"userId\\":3473,\\"distinctId\\":3473,\\"scribeId\\":3473,\\"scribeEmail\\":\\"test_account_scribe_dev_03@augmedix.com\\",\\"scribeName\\":\\"test scribe\\",\\"vendorName\\":\\"AXBD\\",\\"scribeUid\\":\\"999999\\",\\"clinicianId\\":1348,\\"clinicianName\\":\\"Stg Doc1 Gd\\",\\"clinicianEmail\\":\\"stg_gd_doc1@augmedix.com\\",\\"facilityName\\":\\"Square Hospital, Dhaka\\",\\"clinicianStatus\\":\\"active\\",\\"specialty\\":\\"Primary Care\\",\\"specialtyId\\":36,\\"service\\":\\"Live\\",\\"scribeRole\\":\\"primaryFullControl\\",\\"patientId\\":824909,\\"noteId\\":824909,\\"visitDate\\":\\"2021-12-22\\",\\"patientGender\\":\\"Male\\",\\"patientAge\\":22,\\"visitType\\":\\"In-person\\",\\"telemedicineVisitType\\":\\"\\",\\"os\\":\\"Windows\\",\\"browser\\":\\"Chrome\\",\\"initialReferrer\\":\\"$direct\\",\\"initialReferringDomain\\":\\"$direct\\",\\"device\\":\\"\\",\\"currentUrl\\":\\"https://dev2.augmedix.com:8191/app/dashboard\\",\\"browserVersion\\":96,\\"screenHeight\\":864,\\"screenWidth\\":1536,\\"payload\\":{\\"eventName\\":\\"Complaint Added\\",\\"complaint\\":\\"Abnormal vaginal discharge\\",\\"eventTime\\":\\"2021-12-22T08:00:20.842Z\\",\\"focusTimeSec\\":20}}","partitionKey":"eka6nvri266fuh6o"}]}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json; charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(3);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"Abdominal pain\\",\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"dob\\":\\"1999-12-22\\",\\"serviceType\\":[{\\"id\\":1,\\"name\\":\\"In-person\\"}],\\"ageDescriptor\\":1,\\"startTime\\":\\"02:59:00\\",\\"templateId\\":null,\\"visitType\\":[]},\\"activeTab\\":\\"builder\\",\\"isValidData\\":true},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"selectedComplaint\\":183,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is a 22 year old male presenting today for: Abdominal pain.\\",\\"activeSubnavId\\":1,\\"template\\":null}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(4.6);

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.5);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-event",
      '{"notewriterEventsArray":"[{\\"providerId\\":1348,\\"logTime\\":1640160020846,\\"scribeControl\\":\\"Full Control\\",\\"action\\":\\"Complaint selected\\",\\"effect\\":\\"Abnormal vaginal discharge\\",\\"appliedEffect\\":\\"Note ID: 824909\\"}]"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json;charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-event",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.9);

    response = http.post(
      "https://dev2.augmedix.com:50050/notes/focus-duration",
      '{"noteId":824909,"focusDuration":30}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/notes/focus-duration",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"Abdominal pain\\",\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"dob\\":\\"1999-12-22\\",\\"serviceType\\":[{\\"id\\":1,\\"name\\":\\"In-person\\"}],\\"ageDescriptor\\":1,\\"startTime\\":\\"02:59:00\\",\\"templateId\\":null,\\"visitType\\":[]},\\"activeTab\\":\\"builder\\",\\"isValidData\\":true},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"selectedComplaint\\":183,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is a 22 year old male presenting today for: Abdominal pain.\\",\\"activeSubnavId\\":1,\\"template\\":null}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-builder/save",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/complaints/468?providerContext=1348&specialtyContext=36",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/complaints/468?providerContext=1348&specialtyContext=36",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      '{"records":[{"data":"{\\"insertId\\":\\"o3zqr5vem5ougit8\\",\\"timeStamp\\":1640160030475,\\"eventType\\":\\"scp_js_event\\",\\"userId\\":3473,\\"distinctId\\":3473,\\"scribeId\\":3473,\\"scribeEmail\\":\\"test_account_scribe_dev_03@augmedix.com\\",\\"scribeName\\":\\"test scribe\\",\\"vendorName\\":\\"AXBD\\",\\"scribeUid\\":\\"999999\\",\\"clinicianId\\":1348,\\"clinicianName\\":\\"Stg Doc1 Gd\\",\\"clinicianEmail\\":\\"stg_gd_doc1@augmedix.com\\",\\"facilityName\\":\\"Square Hospital, Dhaka\\",\\"clinicianStatus\\":\\"active\\",\\"specialty\\":\\"Primary Care\\",\\"specialtyId\\":36,\\"service\\":\\"Live\\",\\"scribeRole\\":\\"primaryFullControl\\",\\"patientId\\":824909,\\"noteId\\":824909,\\"visitDate\\":\\"2021-12-22\\",\\"patientGender\\":\\"Male\\",\\"patientAge\\":22,\\"visitType\\":\\"In-person\\",\\"telemedicineVisitType\\":\\"\\",\\"os\\":\\"Windows\\",\\"browser\\":\\"Chrome\\",\\"initialReferrer\\":\\"$direct\\",\\"initialReferringDomain\\":\\"$direct\\",\\"device\\":\\"\\",\\"currentUrl\\":\\"https://dev2.augmedix.com:8191/app/dashboard\\",\\"browserVersion\\":96,\\"screenHeight\\":864,\\"screenWidth\\":1536,\\"payload\\":{\\"eventName\\":\\"Complaint Added\\",\\"complaint\\":\\"Abscess\\",\\"eventTime\\":\\"2021-12-22T08:00:30.472Z\\",\\"focusTimeSec\\":30}}","partitionKey":"o3zqr5vem5ougit8"}]}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json; charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(3);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"Abdominal pain\\",\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"dob\\":\\"1999-12-22\\",\\"serviceType\\":[{\\"id\\":1,\\"name\\":\\"In-person\\"}],\\"ageDescriptor\\":1,\\"startTime\\":\\"02:59:00\\",\\"templateId\\":null,\\"visitType\\":[]},\\"activeTab\\":\\"builder\\",\\"isValidData\\":true},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"selectedComplaint\\":468,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is a 22 year old male presenting today for: Abdominal pain.\\",\\"activeSubnavId\\":1,\\"template\\":null}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.7);

    response = http.post(
      "https://dev2.augmedix.com:50050/save-event",
      '{"eventsArray":"[{\\"logMessage\\":\\"test scribe<test_account_scribe_dev_03@augmedix.com> selected complaint: Abnormal vaginal discharge\\",\\"logType\\":\\"notebuilder\\",\\"logPriority\\":\\"none\\",\\"eventTime\\":1640160020},{\\"logMessage\\":\\"test scribe<test_account_scribe_dev_03@augmedix.com> selected complaint: Abscess\\",\\"logType\\":\\"notebuilder\\",\\"logPriority\\":\\"none\\",\\"eventTime\\":1640160030}]"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json;charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/save-event",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://api-js.mixpanel.com/track/?verbose=1&ip=1&_=1640160035463",
      {
        data: "WwogICAgeyJldmVudCI6ICJDb21wbGFpbnQgQWRkZWQiLCJwcm9wZXJ0aWVzIjogeyIkb3MiOiAiV2luZG93cyIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RldjIuYXVnbWVkaXguY29tOjgxOTEvYXBwL25vdGV3cml0ZXIiLCIkYnJvd3Nlcl92ZXJzaW9uIjogOTYsIiRzY3JlZW5faGVpZ2h0IjogODY0LCIkc2NyZWVuX3dpZHRoIjogMTUzNiwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjQwLjAiLCIkaW5zZXJ0X2lkIjogIjdjMno0MGg3ZjgzdHU3bWciLCJ0aW1lIjogMTY0MDE2MDAyMC44NDQsImRpc3RpbmN0X2lkIjogMzQ3MywiJGRldmljZV9pZCI6ICIxN2RlMTI2ZGJlMTE3Yi0wNTJkYTA3ODk4NTFmNS00MzAzMDY2LTE0NDAwMC0xN2RlMTI2ZGJlMmI5NiIsIiR1c2VyX2lkIjogMzQ3MywiJGluaXRpYWxfcmVmZXJyZXIiOiAiJGRpcmVjdCIsIiRpbml0aWFsX3JlZmVycmluZ19kb21haW4iOiAiJGRpcmVjdCIsIlNjcmliZSBJRCI6IDM0NzMsIlNjcmliZSBFbWFpbCI6ICJ0ZXN0X2FjY291bnRfc2NyaWJlX2Rldl8wM0BhdWdtZWRpeC5jb20iLCJTY3JpYmUgTmFtZSI6ICJ0ZXN0IHNjcmliZSIsIlZlbmRvciBOYW1lIjogIkFYQkQiLCJTY3JpYmUgVUlEIjogIjk5OTk5OSIsIkNsaW5pY2lhbiBJRCI6IDEzNDgsIkNsaW5pY2lhbiBOYW1lIjogIlN0ZyBEb2MxIEdkIiwiQ2xpbmljaWFuIEVtYWlsIjogInN0Z19nZF9kb2MxQGF1Z21lZGl4LmNvbSIsIkZhY2lsaXR5IE5hbWUiOiAiU3F1YXJlIEhvc3BpdGFsLCBEaGFrYSIsIkNsaW5pY2lhbiBTdGF0dXMiOiAiYWN0aXZlIiwiU3BlY2lhbHR5IjogIlByaW1hcnkgQ2FyZSIsIlNwZWNpYWx0eSBJRCI6IDM2LCJTZXJ2aWNlIjogIkxpdmUiLCJTY3JpYmUgUm9sZSI6ICJwcmltYXJ5RnVsbENvbnRyb2wiLCJQYXRpZW50IElEIjogODI0OTA5LCJOb3RlIElEIjogODI0OTA5LCJWaXNpdCBEYXRlIjogIjIwMjEtMTItMjIiLCJQYXRpZW50IEdlbmRlciI6ICJNYWxlIiwiUGF0aWVudCBBZ2UiOiAyMiwiVmlzaXQgVHlwZSI6ICJJbi1wZXJzb24iLCJUZWxlbWVkaWNpbmUgVmlzaXQgVHlwZSI6ICIiLCJDb21wbGFpbnQiOiAiQWJub3JtYWwgdmFnaW5hbCBkaXNjaGFyZ2UiLCJFdmVudCBUaW1lIjogIjIwMjEtMTItMjJUMDg6MDA6MjAuODQyWiIsIkZvY3VzIFRpbWUgKHNlYykiOiAyMCwidG9rZW4iOiAiNTg3OGIyMWZkM2Y2MTgwZjBmNDQ3MWY3OTk1NDZiYTcifX0sCiAgICB7ImV2ZW50IjogIkNvbXBsYWludCBBZGRlZCIsInByb3BlcnRpZXMiOiB7IiRvcyI6ICJXaW5kb3dzIiwiJGJyb3dzZXIiOiAiQ2hyb21lIiwiJGN1cnJlbnRfdXJsIjogImh0dHBzOi8vZGV2Mi5hdWdtZWRpeC5jb206ODE5MS9hcHAvbm90ZXdyaXRlciIsIiRicm93c2VyX3ZlcnNpb24iOiA5NiwiJHNjcmVlbl9oZWlnaHQiOiA4NjQsIiRzY3JlZW5fd2lkdGgiOiAxNTM2LCJtcF9saWIiOiAid2ViIiwiJGxpYl92ZXJzaW9uIjogIjIuNDAuMCIsIiRpbnNlcnRfaWQiOiAiaDg3b3Bkd3V3eDF5ZjIxNiIsInRpbWUiOiAxNjQwMTYwMDMwLjQ3NCwiZGlzdGluY3RfaWQiOiAzNDczLCIkZGV2aWNlX2lkIjogIjE3ZGUxMjZkYmUxMTdiLTA1MmRhMDc4OTg1MWY1LTQzMDMwNjYtMTQ0MDAwLTE3ZGUxMjZkYmUyYjk2IiwiJHVzZXJfaWQiOiAzNDczLCIkaW5pdGlhbF9yZWZlcnJlciI6ICIkZGlyZWN0IiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICIkZGlyZWN0IiwiU2NyaWJlIElEIjogMzQ3MywiU2NyaWJlIEVtYWlsIjogInRlc3RfYWNjb3VudF9zY3JpYmVfZGV2XzAzQGF1Z21lZGl4LmNvbSIsIlNjcmliZSBOYW1lIjogInRlc3Qgc2NyaWJlIiwiVmVuZG9yIE5hbWUiOiAiQVhCRCIsIlNjcmliZSBVSUQiOiAiOTk5OTk5IiwiQ2xpbmljaWFuIElEIjogMTM0OCwiQ2xpbmljaWFuIE5hbWUiOiAiU3RnIERvYzEgR2QiLCJDbGluaWNpYW4gRW1haWwiOiAic3RnX2dkX2RvYzFAYXVnbWVkaXguY29tIiwiRmFjaWxpdHkgTmFtZSI6ICJTcXVhcmUgSG9zcGl0YWwsIERoYWthIiwiQ2xpbmljaWFuIFN0YXR1cyI6ICJhY3RpdmUiLCJTcGVjaWFsdHkiOiAiUHJpbWFyeSBDYXJlIiwiU3BlY2lhbHR5IElEIjogMzYsIlNlcnZpY2UiOiAiTGl2ZSIsIlNjcmliZSBSb2xlIjogInByaW1hcnlGdWxsQ29udHJvbCIsIlBhdGllbnQgSUQiOiA4MjQ5MDksIk5vdGUgSUQiOiA4MjQ5MDksIlZpc2l0IERhdGUiOiAiMjAyMS0xMi0yMiIsIlBhdGllbnQgR2VuZGVyIjogIk1hbGUiLCJQYXRpZW50IEFnZSI6IDIyLCJWaXNpdCBUeXBlIjogIkluLXBlcnNvbiIsIlRlbGVtZWRpY2luZSBWaXNpdCBUeXBlIjogIiIsIkNvbXBsYWludCI6ICJBYnNjZXNzIiwiRXZlbnQgVGltZSI6ICIyMDIxLTEyLTIyVDA4OjAwOjMwLjQ3MloiLCJGb2N1cyBUaW1lIChzZWMpIjogMzAsInRva2VuIjogIjU4NzhiMjFmZDNmNjE4MGYwZjQ0NzFmNzk5NTQ2YmE3In19Cl0%3D",
      },
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "content-type": "application/x-www-form-urlencoded",
          accept: "*/*",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.5);

    response = http.post(
      "https://dev2.augmedix.com:50050/notes/auto-save",
      '{"patientVisitDate":"22-12-2021","providerId":1348,"providerEmail":"stg_gd_doc1@augmedix.com","providerFirstName":"Stg Doc1","providerLastName":"Gd","siteId":56,"scribeControl":"Full Control","scopeId":"stg_gd_doc1@augmedix.com1348","patientList":"[{\\"patientName\\":\\"Vlad\\",\\"scheduleStartTime\\":\\"2:59 AM\\",\\"scheduleEndTime\\":\\"3:29 AM\\",\\"providerTimezone\\":\\"EST\\",\\"scheduleStatus\\":\\"Scheduled\\",\\"notewriterEditorContent\\":\\"[{\\\\\\"title\\\\\\":\\\\\\"Untitled\\\\\\",\\\\\\"body\\\\\\":\\\\\\"\\\\\\"}]\\",\\"indexNo\\":0,\\"noteId\\":824909,\\"patientBundle\\":\\"{\\\\\\"pid\\\\\\":824909,\\\\\\"patient_name\\\\\\":\\\\\\"New Patient-1\\\\\\",\\\\\\"patient_age\\\\\\":0,\\\\\\"patient_gender\\\\\\":\\\\\\"\\\\\\",\\\\\\"image\\\\\\":\\\\\\"\\\\\\",\\\\\\"patient_state\\\\\\":\\\\\\"\\\\\\",\\\\\\"appointment_time\\\\\\":\\\\\\"2:59 AM\\\\\\",\\\\\\"patient_room\\\\\\":\\\\\\"\\\\\\",\\\\\\"chief_complaint\\\\\\":\\\\\\"\\\\\\",\\\\\\"personal_detail\\\\\\":\\\\\\"\\\\\\",\\\\\\"notes\\\\\\":\\\\\\"\\\\\\",\\\\\\"open_cards\\\\\\":{},\\\\\\"close_cards\\\\\\":[\\\\\\"vitals\\\\\\",\\\\\\"last-visit\\\\\\",\\\\\\"current-medication\\\\\\",\\\\\\"lab-results\\\\\\",\\\\\\"allergies\\\\\\",\\\\\\"medical-history\\\\\\"],\\\\\\"scribeId\\\\\\":\\\\\\"\\\\\\",\\\\\\"cardStatus\\\\\\":\\\\\\"\\\\\\"}\\",\\"cardId\\":\\"\\",\\"hasContents\\":false,\\"gender\\":\\"M\\",\\"chiefComplaint\\":\\"\\",\\"dateOfBirth\\":\\"1999-12-22\\",\\"tempPatientId\\":1640159983266,\\"creationDate\\":\\"2021-12-22T07:59:43.836172Z\\",\\"noteExpirationHour\\":240,\\"focusDuration\\":0,\\"visitDuration\\":0,\\"noteExpiryInfo\\":{\\"expiryText\\":\\"Expires in 9 days\\",\\"status\\":\\"default\\"}}]"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/notes/auto-save",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.7);

    response = http.get(
      "https://mcu-test2.augmedix.com/janus/6770362640734963?rid=92100d5482ac&maxev=20&_=1640160038692",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "*/*",
          destination: "janus_8",
          "content-type": "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://mcu-test2.augmedix.com/janus/6770362640734963?rid=92100d5482ac&maxev=20&_=1640160038692",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "content-type,destination",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.4);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"Abdominal pain\\",\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"dob\\":\\"1999-12-22\\",\\"serviceType\\":[{\\"id\\":1,\\"name\\":\\"In-person\\"}],\\"ageDescriptor\\":1,\\"startTime\\":\\"02:59:00\\",\\"templateId\\":null,\\"visitType\\":[]},\\"activeTab\\":\\"builder\\",\\"isValidData\\":true},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"selectedComplaint\\":468,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is a 22 year old male presenting today for: Abdominal pain.\\",\\"activeSubnavId\\":1,\\"template\\":null}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-builder/save",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://mcu-test2.augmedix.com/janus/3161493908344783?rid=793a872ca539&maxev=20&_=1640160040438",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "*/*",
          destination: "janus_8",
          "content-type": "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://mcu-test2.augmedix.com/janus/3161493908344783?rid=793a872ca539&maxev=20&_=1640160040438",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "content-type,destination",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.5);

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/complaints/290?providerContext=1348&specialtyContext=36",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/complaints/290?providerContext=1348&specialtyContext=36",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      '{"records":[{"data":"{\\"insertId\\":\\"aubv222dsq9x2rb1\\",\\"timeStamp\\":1640160040988,\\"eventType\\":\\"scp_js_event\\",\\"userId\\":3473,\\"distinctId\\":3473,\\"scribeId\\":3473,\\"scribeEmail\\":\\"test_account_scribe_dev_03@augmedix.com\\",\\"scribeName\\":\\"test scribe\\",\\"vendorName\\":\\"AXBD\\",\\"scribeUid\\":\\"999999\\",\\"clinicianId\\":1348,\\"clinicianName\\":\\"Stg Doc1 Gd\\",\\"clinicianEmail\\":\\"stg_gd_doc1@augmedix.com\\",\\"facilityName\\":\\"Square Hospital, Dhaka\\",\\"clinicianStatus\\":\\"active\\",\\"specialty\\":\\"Primary Care\\",\\"specialtyId\\":36,\\"service\\":\\"Live\\",\\"scribeRole\\":\\"primaryFullControl\\",\\"patientId\\":824909,\\"noteId\\":824909,\\"visitDate\\":\\"2021-12-22\\",\\"patientGender\\":\\"Male\\",\\"patientAge\\":22,\\"visitType\\":\\"In-person\\",\\"telemedicineVisitType\\":\\"\\",\\"os\\":\\"Windows\\",\\"browser\\":\\"Chrome\\",\\"initialReferrer\\":\\"$direct\\",\\"initialReferringDomain\\":\\"$direct\\",\\"device\\":\\"\\",\\"currentUrl\\":\\"https://dev2.augmedix.com:8191/app/dashboard\\",\\"browserVersion\\":96,\\"screenHeight\\":864,\\"screenWidth\\":1536,\\"payload\\":{\\"eventName\\":\\"Complaint Added\\",\\"complaint\\":\\"Acid reflux\\",\\"eventTime\\":\\"2021-12-22T08:00:40.985Z\\",\\"focusTimeSec\\":41}}","partitionKey":"aubv222dsq9x2rb1"}]}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json; charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(3);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-event",
      '{"notewriterEventsArray":"[{\\"providerId\\":1348,\\"logTime\\":1640160030475,\\"scribeControl\\":\\"Full Control\\",\\"action\\":\\"Complaint selected\\",\\"effect\\":\\"Abscess\\",\\"appliedEffect\\":\\"Note ID: 824909\\"},{\\"providerId\\":1348,\\"logTime\\":1640160040990,\\"scribeControl\\":\\"Full Control\\",\\"action\\":\\"Complaint selected\\",\\"effect\\":\\"Acid reflux\\",\\"appliedEffect\\":\\"Note ID: 824909\\"}]"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json;charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-event",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"Abdominal pain\\",\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"dob\\":\\"1999-12-22\\",\\"serviceType\\":[{\\"id\\":1,\\"name\\":\\"In-person\\"}],\\"ageDescriptor\\":1,\\"startTime\\":\\"02:59:00\\",\\"templateId\\":null,\\"visitType\\":[]},\\"activeTab\\":\\"builder\\",\\"isValidData\\":true},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"selectedComplaint\\":290,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is a 22 year old male presenting today for: Abdominal pain.\\",\\"activeSubnavId\\":1,\\"template\\":null}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(5.6);

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.6);

    response = http.post(
      "https://dev2.augmedix.com:50050/save-event",
      '{"eventsArray":"[{\\"logMessage\\":\\"test scribe<test_account_scribe_dev_03@augmedix.com> selected complaint: Acid reflux\\",\\"logType\\":\\"notebuilder\\",\\"logPriority\\":\\"none\\",\\"eventTime\\":1640160040}]"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json;charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/save-event",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50011/stats/scribe/connection-status",
      '{"providerEmail":"stg_gd_doc1@augmedix.com","scopeConnectStatus":true,"scribeControl":"Full Control","scribeEmail":"test_account_scribe_dev_03@augmedix.com","streamStatus":false}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50050/last-activity",
      '{"providerEmail":"stg_gd_doc1@augmedix.com","scopeConnectStatus":true,"scribeControl":"Full Control","scribeEmail":"test_account_scribe_dev_03@augmedix.com","streamStatus":false}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50011/stats/scribe/connection-status",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/last-activity",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://api-js.mixpanel.com/track/?verbose=1&ip=1&_=1640160050551",
      {
        data: "WwogICAgeyJldmVudCI6ICJDb21wbGFpbnQgQWRkZWQiLCJwcm9wZXJ0aWVzIjogeyIkb3MiOiAiV2luZG93cyIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RldjIuYXVnbWVkaXguY29tOjgxOTEvYXBwL25vdGV3cml0ZXIiLCIkYnJvd3Nlcl92ZXJzaW9uIjogOTYsIiRzY3JlZW5faGVpZ2h0IjogODY0LCIkc2NyZWVuX3dpZHRoIjogMTUzNiwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjQwLjAiLCIkaW5zZXJ0X2lkIjogImszaTB5M3FuZDJnMnBueGsiLCJ0aW1lIjogMTY0MDE2MDA0MC45ODcsImRpc3RpbmN0X2lkIjogMzQ3MywiJGRldmljZV9pZCI6ICIxN2RlMTI2ZGJlMTE3Yi0wNTJkYTA3ODk4NTFmNS00MzAzMDY2LTE0NDAwMC0xN2RlMTI2ZGJlMmI5NiIsIiR1c2VyX2lkIjogMzQ3MywiJGluaXRpYWxfcmVmZXJyZXIiOiAiJGRpcmVjdCIsIiRpbml0aWFsX3JlZmVycmluZ19kb21haW4iOiAiJGRpcmVjdCIsIlNjcmliZSBJRCI6IDM0NzMsIlNjcmliZSBFbWFpbCI6ICJ0ZXN0X2FjY291bnRfc2NyaWJlX2Rldl8wM0BhdWdtZWRpeC5jb20iLCJTY3JpYmUgTmFtZSI6ICJ0ZXN0IHNjcmliZSIsIlZlbmRvciBOYW1lIjogIkFYQkQiLCJTY3JpYmUgVUlEIjogIjk5OTk5OSIsIkNsaW5pY2lhbiBJRCI6IDEzNDgsIkNsaW5pY2lhbiBOYW1lIjogIlN0ZyBEb2MxIEdkIiwiQ2xpbmljaWFuIEVtYWlsIjogInN0Z19nZF9kb2MxQGF1Z21lZGl4LmNvbSIsIkZhY2lsaXR5IE5hbWUiOiAiU3F1YXJlIEhvc3BpdGFsLCBEaGFrYSIsIkNsaW5pY2lhbiBTdGF0dXMiOiAiYWN0aXZlIiwiU3BlY2lhbHR5IjogIlByaW1hcnkgQ2FyZSIsIlNwZWNpYWx0eSBJRCI6IDM2LCJTZXJ2aWNlIjogIkxpdmUiLCJTY3JpYmUgUm9sZSI6ICJwcmltYXJ5RnVsbENvbnRyb2wiLCJQYXRpZW50IElEIjogODI0OTA5LCJOb3RlIElEIjogODI0OTA5LCJWaXNpdCBEYXRlIjogIjIwMjEtMTItMjIiLCJQYXRpZW50IEdlbmRlciI6ICJNYWxlIiwiUGF0aWVudCBBZ2UiOiAyMiwiVmlzaXQgVHlwZSI6ICJJbi1wZXJzb24iLCJUZWxlbWVkaWNpbmUgVmlzaXQgVHlwZSI6ICIiLCJDb21wbGFpbnQiOiAiQWNpZCByZWZsdXgiLCJFdmVudCBUaW1lIjogIjIwMjEtMTItMjJUMDg6MDA6NDAuOTg1WiIsIkZvY3VzIFRpbWUgKHNlYykiOiA0MSwidG9rZW4iOiAiNTg3OGIyMWZkM2Y2MTgwZjBmNDQ3MWY3OTk1NDZiYTcifX0KXQ%3D%3D",
      },
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "content-type": "application/x-www-form-urlencoded",
          accept: "*/*",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.8);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"Abdominal pain\\",\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"dob\\":\\"1999-12-22\\",\\"serviceType\\":[{\\"id\\":1,\\"name\\":\\"In-person\\"}],\\"ageDescriptor\\":1,\\"startTime\\":\\"02:59:00\\",\\"templateId\\":null,\\"visitType\\":[]},\\"activeTab\\":\\"builder\\",\\"isValidData\\":true},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"selectedComplaint\\":290,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is a 22 year old male presenting today for: Abdominal pain.\\",\\"activeSubnavId\\":1,\\"template\\":null}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-builder/save",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.5);

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/complaints/337?providerContext=1348&specialtyContext=36",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/complaints/337?providerContext=1348&specialtyContext=36",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      '{"records":[{"data":"{\\"insertId\\":\\"1z14xf4ocn4djg2u\\",\\"timeStamp\\":1640160051904,\\"eventType\\":\\"scp_js_event\\",\\"userId\\":3473,\\"distinctId\\":3473,\\"scribeId\\":3473,\\"scribeEmail\\":\\"test_account_scribe_dev_03@augmedix.com\\",\\"scribeName\\":\\"test scribe\\",\\"vendorName\\":\\"AXBD\\",\\"scribeUid\\":\\"999999\\",\\"clinicianId\\":1348,\\"clinicianName\\":\\"Stg Doc1 Gd\\",\\"clinicianEmail\\":\\"stg_gd_doc1@augmedix.com\\",\\"facilityName\\":\\"Square Hospital, Dhaka\\",\\"clinicianStatus\\":\\"active\\",\\"specialty\\":\\"Primary Care\\",\\"specialtyId\\":36,\\"service\\":\\"Live\\",\\"scribeRole\\":\\"primaryFullControl\\",\\"patientId\\":824909,\\"noteId\\":824909,\\"visitDate\\":\\"2021-12-22\\",\\"patientGender\\":\\"Male\\",\\"patientAge\\":22,\\"visitType\\":\\"In-person\\",\\"telemedicineVisitType\\":\\"\\",\\"os\\":\\"Windows\\",\\"browser\\":\\"Chrome\\",\\"initialReferrer\\":\\"$direct\\",\\"initialReferringDomain\\":\\"$direct\\",\\"device\\":\\"\\",\\"currentUrl\\":\\"https://dev2.augmedix.com:8191/app/dashboard\\",\\"browserVersion\\":96,\\"screenHeight\\":864,\\"screenWidth\\":1536,\\"payload\\":{\\"eventName\\":\\"Complaint Added\\",\\"complaint\\":\\"Acne\\",\\"eventTime\\":\\"2021-12-22T08:00:51.902Z\\",\\"focusTimeSec\\":52}}","partitionKey":"1z14xf4ocn4djg2u"}]}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json; charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(3);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"Abdominal pain\\",\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"dob\\":\\"1999-12-22\\",\\"serviceType\\":[{\\"id\\":1,\\"name\\":\\"In-person\\"}],\\"ageDescriptor\\":1,\\"startTime\\":\\"02:59:00\\",\\"templateId\\":null,\\"visitType\\":[]},\\"activeTab\\":\\"builder\\",\\"isValidData\\":true},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"selectedComplaint\\":337,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is a 22 year old male presenting today for: Abdominal pain.\\",\\"activeSubnavId\\":1,\\"template\\":null}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(4);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-event",
      '{"notewriterEventsArray":"[{\\"providerId\\":1348,\\"logTime\\":1640160051905,\\"scribeControl\\":\\"Full Control\\",\\"action\\":\\"Complaint selected\\",\\"effect\\":\\"Acne\\",\\"appliedEffect\\":\\"Note ID: 824909\\"}]"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json;charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-event",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.9);

    response = http.post(
      "https://dev2.augmedix.com:50050/notes/focus-duration",
      '{"noteId":824909,"focusDuration":60}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/notes/focus-duration",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.8);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"Abdominal pain\\",\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"dob\\":\\"1999-12-22\\",\\"serviceType\\":[{\\"id\\":1,\\"name\\":\\"In-person\\"}],\\"ageDescriptor\\":1,\\"startTime\\":\\"02:59:00\\",\\"templateId\\":null,\\"visitType\\":[]},\\"activeTab\\":\\"builder\\",\\"isValidData\\":true},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"selectedComplaint\\":337,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is a 22 year old male presenting today for: Abdominal pain.\\",\\"activeSubnavId\\":1,\\"template\\":null}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-builder/save",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(2.1);

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/complaints/570?providerContext=1348&specialtyContext=36",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/complaints/570?providerContext=1348&specialtyContext=36",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      '{"records":[{"data":"{\\"insertId\\":\\"4032miavfvldyaxu\\",\\"timeStamp\\":1640160063098,\\"eventType\\":\\"scp_js_event\\",\\"userId\\":3473,\\"distinctId\\":3473,\\"scribeId\\":3473,\\"scribeEmail\\":\\"test_account_scribe_dev_03@augmedix.com\\",\\"scribeName\\":\\"test scribe\\",\\"vendorName\\":\\"AXBD\\",\\"scribeUid\\":\\"999999\\",\\"clinicianId\\":1348,\\"clinicianName\\":\\"Stg Doc1 Gd\\",\\"clinicianEmail\\":\\"stg_gd_doc1@augmedix.com\\",\\"facilityName\\":\\"Square Hospital, Dhaka\\",\\"clinicianStatus\\":\\"active\\",\\"specialty\\":\\"Primary Care\\",\\"specialtyId\\":36,\\"service\\":\\"Live\\",\\"scribeRole\\":\\"primaryFullControl\\",\\"patientId\\":824909,\\"noteId\\":824909,\\"visitDate\\":\\"2021-12-22\\",\\"patientGender\\":\\"Male\\",\\"patientAge\\":22,\\"visitType\\":\\"In-person\\",\\"telemedicineVisitType\\":\\"\\",\\"os\\":\\"Windows\\",\\"browser\\":\\"Chrome\\",\\"initialReferrer\\":\\"$direct\\",\\"initialReferringDomain\\":\\"$direct\\",\\"device\\":\\"\\",\\"currentUrl\\":\\"https://dev2.augmedix.com:8191/app/dashboard\\",\\"browserVersion\\":96,\\"screenHeight\\":864,\\"screenWidth\\":1536,\\"payload\\":{\\"eventName\\":\\"Complaint Added\\",\\"complaint\\":\\"Acne\\",\\"eventTime\\":\\"2021-12-22T08:01:03.096Z\\",\\"focusTimeSec\\":63}}","partitionKey":"4032miavfvldyaxu"}]}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json; charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(2.1);

    response = http.post(
      "https://dev2.augmedix.com:50050/save-event",
      '{"eventsArray":"[{\\"logMessage\\":\\"test scribe<test_account_scribe_dev_03@augmedix.com> selected complaint: Acne\\",\\"logType\\":\\"notebuilder\\",\\"logPriority\\":\\"none\\",\\"eventTime\\":1640160051},{\\"logMessage\\":\\"test scribe<test_account_scribe_dev_03@augmedix.com> selected complaint: Acne\\",\\"logType\\":\\"notebuilder\\",\\"logPriority\\":\\"none\\",\\"eventTime\\":1640160063}]"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json;charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/save-event",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://api-js.mixpanel.com/track/?verbose=1&ip=1&_=1640160065646",
      {
        data: "WwogICAgeyJldmVudCI6ICJDb21wbGFpbnQgQWRkZWQiLCJwcm9wZXJ0aWVzIjogeyIkb3MiOiAiV2luZG93cyIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RldjIuYXVnbWVkaXguY29tOjgxOTEvYXBwL25vdGV3cml0ZXIiLCIkYnJvd3Nlcl92ZXJzaW9uIjogOTYsIiRzY3JlZW5faGVpZ2h0IjogODY0LCIkc2NyZWVuX3dpZHRoIjogMTUzNiwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjQwLjAiLCIkaW5zZXJ0X2lkIjogInJzZDcxendkNGtueDEyd2siLCJ0aW1lIjogMTY0MDE2MDA1MS45MDMsImRpc3RpbmN0X2lkIjogMzQ3MywiJGRldmljZV9pZCI6ICIxN2RlMTI2ZGJlMTE3Yi0wNTJkYTA3ODk4NTFmNS00MzAzMDY2LTE0NDAwMC0xN2RlMTI2ZGJlMmI5NiIsIiR1c2VyX2lkIjogMzQ3MywiJGluaXRpYWxfcmVmZXJyZXIiOiAiJGRpcmVjdCIsIiRpbml0aWFsX3JlZmVycmluZ19kb21haW4iOiAiJGRpcmVjdCIsIlNjcmliZSBJRCI6IDM0NzMsIlNjcmliZSBFbWFpbCI6ICJ0ZXN0X2FjY291bnRfc2NyaWJlX2Rldl8wM0BhdWdtZWRpeC5jb20iLCJTY3JpYmUgTmFtZSI6ICJ0ZXN0IHNjcmliZSIsIlZlbmRvciBOYW1lIjogIkFYQkQiLCJTY3JpYmUgVUlEIjogIjk5OTk5OSIsIkNsaW5pY2lhbiBJRCI6IDEzNDgsIkNsaW5pY2lhbiBOYW1lIjogIlN0ZyBEb2MxIEdkIiwiQ2xpbmljaWFuIEVtYWlsIjogInN0Z19nZF9kb2MxQGF1Z21lZGl4LmNvbSIsIkZhY2lsaXR5IE5hbWUiOiAiU3F1YXJlIEhvc3BpdGFsLCBEaGFrYSIsIkNsaW5pY2lhbiBTdGF0dXMiOiAiYWN0aXZlIiwiU3BlY2lhbHR5IjogIlByaW1hcnkgQ2FyZSIsIlNwZWNpYWx0eSBJRCI6IDM2LCJTZXJ2aWNlIjogIkxpdmUiLCJTY3JpYmUgUm9sZSI6ICJwcmltYXJ5RnVsbENvbnRyb2wiLCJQYXRpZW50IElEIjogODI0OTA5LCJOb3RlIElEIjogODI0OTA5LCJWaXNpdCBEYXRlIjogIjIwMjEtMTItMjIiLCJQYXRpZW50IEdlbmRlciI6ICJNYWxlIiwiUGF0aWVudCBBZ2UiOiAyMiwiVmlzaXQgVHlwZSI6ICJJbi1wZXJzb24iLCJUZWxlbWVkaWNpbmUgVmlzaXQgVHlwZSI6ICIiLCJDb21wbGFpbnQiOiAiQWNuZSIsIkV2ZW50IFRpbWUiOiAiMjAyMS0xMi0yMlQwODowMDo1MS45MDJaIiwiRm9jdXMgVGltZSAoc2VjKSI6IDUyLCJ0b2tlbiI6ICI1ODc4YjIxZmQzZjYxODBmMGY0NDcxZjc5OTU0NmJhNyJ9fSwKICAgIHsiZXZlbnQiOiAiQ29tcGxhaW50IEFkZGVkIiwicHJvcGVydGllcyI6IHsiJG9zIjogIldpbmRvd3MiLCIkYnJvd3NlciI6ICJDaHJvbWUiLCIkY3VycmVudF91cmwiOiAiaHR0cHM6Ly9kZXYyLmF1Z21lZGl4LmNvbTo4MTkxL2FwcC9ub3Rld3JpdGVyIiwiJGJyb3dzZXJfdmVyc2lvbiI6IDk2LCIkc2NyZWVuX2hlaWdodCI6IDg2NCwiJHNjcmVlbl93aWR0aCI6IDE1MzYsIm1wX2xpYiI6ICJ3ZWIiLCIkbGliX3ZlcnNpb24iOiAiMi40MC4wIiwiJGluc2VydF9pZCI6ICJtdG5mNHg0cG1jOHU1ZHYwIiwidGltZSI6IDE2NDAxNjAwNjMuMDk3LCJkaXN0aW5jdF9pZCI6IDM0NzMsIiRkZXZpY2VfaWQiOiAiMTdkZTEyNmRiZTExN2ItMDUyZGEwNzg5ODUxZjUtNDMwMzA2Ni0xNDQwMDAtMTdkZTEyNmRiZTJiOTYiLCIkdXNlcl9pZCI6IDM0NzMsIiRpbml0aWFsX3JlZmVycmVyIjogIiRkaXJlY3QiLCIkaW5pdGlhbF9yZWZlcnJpbmdfZG9tYWluIjogIiRkaXJlY3QiLCJTY3JpYmUgSUQiOiAzNDczLCJTY3JpYmUgRW1haWwiOiAidGVzdF9hY2NvdW50X3NjcmliZV9kZXZfMDNAYXVnbWVkaXguY29tIiwiU2NyaWJlIE5hbWUiOiAidGVzdCBzY3JpYmUiLCJWZW5kb3IgTmFtZSI6ICJBWEJEIiwiU2NyaWJlIFVJRCI6ICI5OTk5OTkiLCJDbGluaWNpYW4gSUQiOiAxMzQ4LCJDbGluaWNpYW4gTmFtZSI6ICJTdGcgRG9jMSBHZCIsIkNsaW5pY2lhbiBFbWFpbCI6ICJzdGdfZ2RfZG9jMUBhdWdtZWRpeC5jb20iLCJGYWNpbGl0eSBOYW1lIjogIlNxdWFyZSBIb3NwaXRhbCwgRGhha2EiLCJDbGluaWNpYW4gU3RhdHVzIjogImFjdGl2ZSIsIlNwZWNpYWx0eSI6ICJQcmltYXJ5IENhcmUiLCJTcGVjaWFsdHkgSUQiOiAzNiwiU2VydmljZSI6ICJMaXZlIiwiU2NyaWJlIFJvbGUiOiAicHJpbWFyeUZ1bGxDb250cm9sIiwiUGF0aWVudCBJRCI6IDgyNDkwOSwiTm90ZSBJRCI6IDgyNDkwOSwiVmlzaXQgRGF0ZSI6ICIyMDIxLTEyLTIyIiwiUGF0aWVudCBHZW5kZXIiOiAiTWFsZSIsIlBhdGllbnQgQWdlIjogMjIsIlZpc2l0IFR5cGUiOiAiSW4tcGVyc29uIiwiVGVsZW1lZGljaW5lIFZpc2l0IFR5cGUiOiAiIiwiQ29tcGxhaW50IjogIkFjbmUiLCJFdmVudCBUaW1lIjogIjIwMjEtMTItMjJUMDg6MDE6MDMuMDk2WiIsIkZvY3VzIFRpbWUgKHNlYykiOiA2MywidG9rZW4iOiAiNTg3OGIyMWZkM2Y2MTgwZjBmNDQ3MWY3OTk1NDZiYTcifX0KXQ%3D%3D",
      },
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "content-type": "application/x-www-form-urlencoded",
          accept: "*/*",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.5);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"Abdominal pain\\",\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"}],\\"dob\\":\\"1999-12-22\\",\\"serviceType\\":[{\\"id\\":1,\\"name\\":\\"In-person\\"}],\\"ageDescriptor\\":1,\\"startTime\\":\\"02:59:00\\",\\"templateId\\":null,\\"visitType\\":[]},\\"activeTab\\":\\"builder\\",\\"isValidData\\":true},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"}],\\"selectedComplaint\\":570,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is a 22 year old male presenting today for: Abdominal pain.\\",\\"activeSubnavId\\":1,\\"template\\":null}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(4);

    response = http.get(
      "https://mcu-test2.augmedix.com/janus/6770362640734963?rid=4b6029a3018c&maxev=20&_=1640160070144",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "*/*",
          destination: "janus_8",
          "content-type": "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://mcu-test2.augmedix.com/janus/6770362640734963?rid=4b6029a3018c&maxev=20&_=1640160070144",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "content-type,destination",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.3);

    response = http.get(
      "https://mcu-test2.augmedix.com/janus/3161493908344783?rid=71b9d4334031&maxev=20&_=1640160071897",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "*/*",
          destination: "janus_8",
          "content-type": "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://mcu-test2.augmedix.com/janus/3161493908344783?rid=71b9d4334031&maxev=20&_=1640160071897",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "content-type,destination",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"Abdominal pain\\",\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"}],\\"dob\\":\\"1999-12-22\\",\\"serviceType\\":[{\\"id\\":1,\\"name\\":\\"In-person\\"}],\\"ageDescriptor\\":1,\\"startTime\\":\\"02:59:00\\",\\"templateId\\":null,\\"visitType\\":[]},\\"activeTab\\":\\"builder\\",\\"isValidData\\":true},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"}],\\"selectedComplaint\\":570,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is a 22 year old male presenting today for: Abdominal pain.\\",\\"activeSubnavId\\":1,\\"template\\":null}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-builder/save",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1);

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/complaints/587?providerContext=1348&specialtyContext=36",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/complaints/587?providerContext=1348&specialtyContext=36",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      '{"records":[{"data":"{\\"insertId\\":\\"jpoxea6syl5wf41n\\",\\"timeStamp\\":1640160073043,\\"eventType\\":\\"scp_js_event\\",\\"userId\\":3473,\\"distinctId\\":3473,\\"scribeId\\":3473,\\"scribeEmail\\":\\"test_account_scribe_dev_03@augmedix.com\\",\\"scribeName\\":\\"test scribe\\",\\"vendorName\\":\\"AXBD\\",\\"scribeUid\\":\\"999999\\",\\"clinicianId\\":1348,\\"clinicianName\\":\\"Stg Doc1 Gd\\",\\"clinicianEmail\\":\\"stg_gd_doc1@augmedix.com\\",\\"facilityName\\":\\"Square Hospital, Dhaka\\",\\"clinicianStatus\\":\\"active\\",\\"specialty\\":\\"Primary Care\\",\\"specialtyId\\":36,\\"service\\":\\"Live\\",\\"scribeRole\\":\\"primaryFullControl\\",\\"patientId\\":824909,\\"noteId\\":824909,\\"visitDate\\":\\"2021-12-22\\",\\"patientGender\\":\\"Male\\",\\"patientAge\\":22,\\"visitType\\":\\"In-person\\",\\"telemedicineVisitType\\":\\"\\",\\"os\\":\\"Windows\\",\\"browser\\":\\"Chrome\\",\\"initialReferrer\\":\\"$direct\\",\\"initialReferringDomain\\":\\"$direct\\",\\"device\\":\\"\\",\\"currentUrl\\":\\"https://dev2.augmedix.com:8191/app/dashboard\\",\\"browserVersion\\":96,\\"screenHeight\\":864,\\"screenWidth\\":1536,\\"payload\\":{\\"eventName\\":\\"Complaint Added\\",\\"complaint\\":\\"Acromegaly\\",\\"eventTime\\":\\"2021-12-22T08:01:13.040Z\\",\\"focusTimeSec\\":73}}","partitionKey":"jpoxea6syl5wf41n"}]}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json; charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.9);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-event",
      '{"notewriterEventsArray":"[{\\"providerId\\":1348,\\"logTime\\":1640160063099,\\"scribeControl\\":\\"Full Control\\",\\"action\\":\\"Complaint selected\\",\\"effect\\":\\"Acne\\",\\"appliedEffect\\":\\"Note ID: 824909\\"},{\\"providerId\\":1348,\\"logTime\\":1640160073044,\\"scribeControl\\":\\"Full Control\\",\\"action\\":\\"Complaint selected\\",\\"effect\\":\\"Acromegaly\\",\\"appliedEffect\\":\\"Note ID: 824909\\"}]"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json;charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-event",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(2.1);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"Abdominal pain\\",\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":587,\\"name\\":\\"Acromegaly\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"}],\\"dob\\":\\"1999-12-22\\",\\"serviceType\\":[{\\"id\\":1,\\"name\\":\\"In-person\\"}],\\"ageDescriptor\\":1,\\"startTime\\":\\"02:59:00\\",\\"templateId\\":null,\\"visitType\\":[]},\\"activeTab\\":\\"builder\\",\\"isValidData\\":true},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":587,\\"name\\":\\"Acromegaly\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"}],\\"selectedComplaint\\":587,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is a 22 year old male presenting today for: Abdominal pain.\\",\\"activeSubnavId\\":1,\\"template\\":null}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(4.2);

    response = http.post(
      "https://dev2.augmedix.com:50050/save-event",
      '{"eventsArray":"[{\\"logMessage\\":\\"test scribe<test_account_scribe_dev_03@augmedix.com> selected complaint: Acromegaly\\",\\"logType\\":\\"notebuilder\\",\\"logPriority\\":\\"none\\",\\"eventTime\\":1640160073}]"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json;charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/save-event",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50011/stats/scribe/connection-status",
      '{"providerEmail":"stg_gd_doc1@augmedix.com","scopeConnectStatus":true,"scribeControl":"Full Control","scribeEmail":"test_account_scribe_dev_03@augmedix.com","streamStatus":false}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50050/last-activity",
      '{"providerEmail":"stg_gd_doc1@augmedix.com","scopeConnectStatus":true,"scribeControl":"Full Control","scribeEmail":"test_account_scribe_dev_03@augmedix.com","streamStatus":false}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50011/stats/scribe/connection-status",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/last-activity",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://api-js.mixpanel.com/track/?verbose=1&ip=1&_=1640160080724",
      {
        data: "WwogICAgeyJldmVudCI6ICJDb21wbGFpbnQgQWRkZWQiLCJwcm9wZXJ0aWVzIjogeyIkb3MiOiAiV2luZG93cyIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RldjIuYXVnbWVkaXguY29tOjgxOTEvYXBwL25vdGV3cml0ZXIiLCIkYnJvd3Nlcl92ZXJzaW9uIjogOTYsIiRzY3JlZW5faGVpZ2h0IjogODY0LCIkc2NyZWVuX3dpZHRoIjogMTUzNiwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjQwLjAiLCIkaW5zZXJ0X2lkIjogInpkenQybmZpNng4aTBsenIiLCJ0aW1lIjogMTY0MDE2MDA3My4wNDIsImRpc3RpbmN0X2lkIjogMzQ3MywiJGRldmljZV9pZCI6ICIxN2RlMTI2ZGJlMTE3Yi0wNTJkYTA3ODk4NTFmNS00MzAzMDY2LTE0NDAwMC0xN2RlMTI2ZGJlMmI5NiIsIiR1c2VyX2lkIjogMzQ3MywiJGluaXRpYWxfcmVmZXJyZXIiOiAiJGRpcmVjdCIsIiRpbml0aWFsX3JlZmVycmluZ19kb21haW4iOiAiJGRpcmVjdCIsIlNjcmliZSBJRCI6IDM0NzMsIlNjcmliZSBFbWFpbCI6ICJ0ZXN0X2FjY291bnRfc2NyaWJlX2Rldl8wM0BhdWdtZWRpeC5jb20iLCJTY3JpYmUgTmFtZSI6ICJ0ZXN0IHNjcmliZSIsIlZlbmRvciBOYW1lIjogIkFYQkQiLCJTY3JpYmUgVUlEIjogIjk5OTk5OSIsIkNsaW5pY2lhbiBJRCI6IDEzNDgsIkNsaW5pY2lhbiBOYW1lIjogIlN0ZyBEb2MxIEdkIiwiQ2xpbmljaWFuIEVtYWlsIjogInN0Z19nZF9kb2MxQGF1Z21lZGl4LmNvbSIsIkZhY2lsaXR5IE5hbWUiOiAiU3F1YXJlIEhvc3BpdGFsLCBEaGFrYSIsIkNsaW5pY2lhbiBTdGF0dXMiOiAiYWN0aXZlIiwiU3BlY2lhbHR5IjogIlByaW1hcnkgQ2FyZSIsIlNwZWNpYWx0eSBJRCI6IDM2LCJTZXJ2aWNlIjogIkxpdmUiLCJTY3JpYmUgUm9sZSI6ICJwcmltYXJ5RnVsbENvbnRyb2wiLCJQYXRpZW50IElEIjogODI0OTA5LCJOb3RlIElEIjogODI0OTA5LCJWaXNpdCBEYXRlIjogIjIwMjEtMTItMjIiLCJQYXRpZW50IEdlbmRlciI6ICJNYWxlIiwiUGF0aWVudCBBZ2UiOiAyMiwiVmlzaXQgVHlwZSI6ICJJbi1wZXJzb24iLCJUZWxlbWVkaWNpbmUgVmlzaXQgVHlwZSI6ICIiLCJDb21wbGFpbnQiOiAiQWNyb21lZ2FseSIsIkV2ZW50IFRpbWUiOiAiMjAyMS0xMi0yMlQwODowMToxMy4wNDBaIiwiRm9jdXMgVGltZSAoc2VjKSI6IDczLCJ0b2tlbiI6ICI1ODc4YjIxZmQzZjYxODBmMGY0NDcxZjc5OTU0NmJhNyJ9fQpd",
      },
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "content-type": "application/x-www-form-urlencoded",
          accept: "*/*",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1);

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"Abdominal pain\\",\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":587,\\"name\\":\\"Acromegaly\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"}],\\"dob\\":\\"1999-12-22\\",\\"serviceType\\":[{\\"id\\":1,\\"name\\":\\"In-person\\"}],\\"ageDescriptor\\":1,\\"startTime\\":\\"02:59:00\\",\\"templateId\\":null,\\"visitType\\":[]},\\"activeTab\\":\\"builder\\",\\"isValidData\\":true},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":587,\\"name\\":\\"Acromegaly\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"}],\\"selectedComplaint\\":587,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is a 22 year old male presenting today for: Abdominal pain.\\",\\"activeSubnavId\\":1,\\"template\\":null}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-builder/save",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(2.1);

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/complaints/255?providerContext=1348&specialtyContext=36",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/complaints/255?providerContext=1348&specialtyContext=36",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      '{"records":[{"data":"{\\"insertId\\":\\"tbvg6ekmyzcja9dm\\",\\"timeStamp\\":1640160084108,\\"eventType\\":\\"scp_js_event\\",\\"userId\\":3473,\\"distinctId\\":3473,\\"scribeId\\":3473,\\"scribeEmail\\":\\"test_account_scribe_dev_03@augmedix.com\\",\\"scribeName\\":\\"test scribe\\",\\"vendorName\\":\\"AXBD\\",\\"scribeUid\\":\\"999999\\",\\"clinicianId\\":1348,\\"clinicianName\\":\\"Stg Doc1 Gd\\",\\"clinicianEmail\\":\\"stg_gd_doc1@augmedix.com\\",\\"facilityName\\":\\"Square Hospital, Dhaka\\",\\"clinicianStatus\\":\\"active\\",\\"specialty\\":\\"Primary Care\\",\\"specialtyId\\":36,\\"service\\":\\"Live\\",\\"scribeRole\\":\\"primaryFullControl\\",\\"patientId\\":824909,\\"noteId\\":824909,\\"visitDate\\":\\"2021-12-22\\",\\"patientGender\\":\\"Male\\",\\"patientAge\\":22,\\"visitType\\":\\"In-person\\",\\"telemedicineVisitType\\":\\"\\",\\"os\\":\\"Windows\\",\\"browser\\":\\"Chrome\\",\\"initialReferrer\\":\\"$direct\\",\\"initialReferringDomain\\":\\"$direct\\",\\"device\\":\\"\\",\\"currentUrl\\":\\"https://dev2.augmedix.com:8191/app/dashboard\\",\\"browserVersion\\":96,\\"screenHeight\\":864,\\"screenWidth\\":1536,\\"payload\\":{\\"eventName\\":\\"Complaint Added\\",\\"complaint\\":\\"Acute complaint\\",\\"eventTime\\":\\"2021-12-22T08:01:24.106Z\\",\\"focusTimeSec\\":84}}","partitionKey":"tbvg6ekmyzcja9dm"}]}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json; charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(3);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"Abdominal pain\\",\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":587,\\"name\\":\\"Acromegaly\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":255,\\"name\\":\\"Acute complaint\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"}],\\"dob\\":\\"1999-12-22\\",\\"serviceType\\":[{\\"id\\":1,\\"name\\":\\"In-person\\"}],\\"ageDescriptor\\":1,\\"startTime\\":\\"02:59:00\\",\\"templateId\\":null,\\"visitType\\":[]},\\"activeTab\\":\\"builder\\",\\"isValidData\\":true},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":587,\\"name\\":\\"Acromegaly\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":255,\\"name\\":\\"Acute complaint\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"}],\\"selectedComplaint\\":255,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is a 22 year old male presenting today for: Abdominal pain.\\",\\"activeSubnavId\\":1,\\"template\\":null}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.9);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-event",
      '{"notewriterEventsArray":"[{\\"providerId\\":1348,\\"logTime\\":1640160084109,\\"scribeControl\\":\\"Full Control\\",\\"action\\":\\"Complaint selected\\",\\"effect\\":\\"Acute complaint\\",\\"appliedEffect\\":\\"Note ID: 824909\\"}]"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json;charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-event",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.9);

    response = http.post(
      "https://dev2.augmedix.com:50050/notes/focus-duration",
      '{"noteId":824909,"focusDuration":90}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/notes/focus-duration",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.7);

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(2.4);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"Abdominal pain\\",\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":587,\\"name\\":\\"Acromegaly\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":255,\\"name\\":\\"Acute complaint\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"}],\\"dob\\":\\"1999-12-22\\",\\"serviceType\\":[{\\"id\\":1,\\"name\\":\\"In-person\\"}],\\"ageDescriptor\\":1,\\"startTime\\":\\"02:59:00\\",\\"templateId\\":null,\\"visitType\\":[]},\\"activeTab\\":\\"builder\\",\\"isValidData\\":true},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":587,\\"name\\":\\"Acromegaly\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":255,\\"name\\":\\"Acute complaint\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"}],\\"selectedComplaint\\":255,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is a 22 year old male presenting today for: Abdominal pain.\\",\\"activeSubnavId\\":1,\\"template\\":null}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-builder/save",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.7);

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/complaints/229?providerContext=1348&specialtyContext=36",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/complaints/229?providerContext=1348&specialtyContext=36",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      '{"records":[{"data":"{\\"insertId\\":\\"ksxcz0m426n3446i\\",\\"timeStamp\\":1640160093677,\\"eventType\\":\\"scp_js_event\\",\\"userId\\":3473,\\"distinctId\\":3473,\\"scribeId\\":3473,\\"scribeEmail\\":\\"test_account_scribe_dev_03@augmedix.com\\",\\"scribeName\\":\\"test scribe\\",\\"vendorName\\":\\"AXBD\\",\\"scribeUid\\":\\"999999\\",\\"clinicianId\\":1348,\\"clinicianName\\":\\"Stg Doc1 Gd\\",\\"clinicianEmail\\":\\"stg_gd_doc1@augmedix.com\\",\\"facilityName\\":\\"Square Hospital, Dhaka\\",\\"clinicianStatus\\":\\"active\\",\\"specialty\\":\\"Primary Care\\",\\"specialtyId\\":36,\\"service\\":\\"Live\\",\\"scribeRole\\":\\"primaryFullControl\\",\\"patientId\\":824909,\\"noteId\\":824909,\\"visitDate\\":\\"2021-12-22\\",\\"patientGender\\":\\"Male\\",\\"patientAge\\":22,\\"visitType\\":\\"In-person\\",\\"telemedicineVisitType\\":\\"\\",\\"os\\":\\"Windows\\",\\"browser\\":\\"Chrome\\",\\"initialReferrer\\":\\"$direct\\",\\"initialReferringDomain\\":\\"$direct\\",\\"device\\":\\"\\",\\"currentUrl\\":\\"https://dev2.augmedix.com:8191/app/dashboard\\",\\"browserVersion\\":96,\\"screenHeight\\":864,\\"screenWidth\\":1536,\\"payload\\":{\\"eventName\\":\\"Complaint Added\\",\\"complaint\\":\\"Acute kidney failure\\",\\"eventTime\\":\\"2021-12-22T08:01:33.674Z\\",\\"focusTimeSec\\":93}}","partitionKey":"ksxcz0m426n3446i"}]}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json; charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.5);

    response = http.post(
      "https://dev2.augmedix.com:50050/save-event",
      '{"eventsArray":"[{\\"logMessage\\":\\"test scribe<test_account_scribe_dev_03@augmedix.com> selected complaint: Acute complaint\\",\\"logType\\":\\"notebuilder\\",\\"logPriority\\":\\"none\\",\\"eventTime\\":1640160084},{\\"logMessage\\":\\"test scribe<test_account_scribe_dev_03@augmedix.com> selected complaint: Acute kidney failure\\",\\"logType\\":\\"notebuilder\\",\\"logPriority\\":\\"none\\",\\"eventTime\\":1640160093}]"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json;charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/save-event",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.6);

    response = http.post(
      "https://api-js.mixpanel.com/track/?verbose=1&ip=1&_=1640160095816",
      {
        data: "WwogICAgeyJldmVudCI6ICJDb21wbGFpbnQgQWRkZWQiLCJwcm9wZXJ0aWVzIjogeyIkb3MiOiAiV2luZG93cyIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RldjIuYXVnbWVkaXguY29tOjgxOTEvYXBwL25vdGV3cml0ZXIiLCIkYnJvd3Nlcl92ZXJzaW9uIjogOTYsIiRzY3JlZW5faGVpZ2h0IjogODY0LCIkc2NyZWVuX3dpZHRoIjogMTUzNiwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjQwLjAiLCIkaW5zZXJ0X2lkIjogIjFnNWw1ZGwycG11NnI5Y3UiLCJ0aW1lIjogMTY0MDE2MDA4NC4xMDgsImRpc3RpbmN0X2lkIjogMzQ3MywiJGRldmljZV9pZCI6ICIxN2RlMTI2ZGJlMTE3Yi0wNTJkYTA3ODk4NTFmNS00MzAzMDY2LTE0NDAwMC0xN2RlMTI2ZGJlMmI5NiIsIiR1c2VyX2lkIjogMzQ3MywiJGluaXRpYWxfcmVmZXJyZXIiOiAiJGRpcmVjdCIsIiRpbml0aWFsX3JlZmVycmluZ19kb21haW4iOiAiJGRpcmVjdCIsIlNjcmliZSBJRCI6IDM0NzMsIlNjcmliZSBFbWFpbCI6ICJ0ZXN0X2FjY291bnRfc2NyaWJlX2Rldl8wM0BhdWdtZWRpeC5jb20iLCJTY3JpYmUgTmFtZSI6ICJ0ZXN0IHNjcmliZSIsIlZlbmRvciBOYW1lIjogIkFYQkQiLCJTY3JpYmUgVUlEIjogIjk5OTk5OSIsIkNsaW5pY2lhbiBJRCI6IDEzNDgsIkNsaW5pY2lhbiBOYW1lIjogIlN0ZyBEb2MxIEdkIiwiQ2xpbmljaWFuIEVtYWlsIjogInN0Z19nZF9kb2MxQGF1Z21lZGl4LmNvbSIsIkZhY2lsaXR5IE5hbWUiOiAiU3F1YXJlIEhvc3BpdGFsLCBEaGFrYSIsIkNsaW5pY2lhbiBTdGF0dXMiOiAiYWN0aXZlIiwiU3BlY2lhbHR5IjogIlByaW1hcnkgQ2FyZSIsIlNwZWNpYWx0eSBJRCI6IDM2LCJTZXJ2aWNlIjogIkxpdmUiLCJTY3JpYmUgUm9sZSI6ICJwcmltYXJ5RnVsbENvbnRyb2wiLCJQYXRpZW50IElEIjogODI0OTA5LCJOb3RlIElEIjogODI0OTA5LCJWaXNpdCBEYXRlIjogIjIwMjEtMTItMjIiLCJQYXRpZW50IEdlbmRlciI6ICJNYWxlIiwiUGF0aWVudCBBZ2UiOiAyMiwiVmlzaXQgVHlwZSI6ICJJbi1wZXJzb24iLCJUZWxlbWVkaWNpbmUgVmlzaXQgVHlwZSI6ICIiLCJDb21wbGFpbnQiOiAiQWN1dGUgY29tcGxhaW50IiwiRXZlbnQgVGltZSI6ICIyMDIxLTEyLTIyVDA4OjAxOjI0LjEwNloiLCJGb2N1cyBUaW1lIChzZWMpIjogODQsInRva2VuIjogIjU4NzhiMjFmZDNmNjE4MGYwZjQ0NzFmNzk5NTQ2YmE3In19LAogICAgeyJldmVudCI6ICJDb21wbGFpbnQgQWRkZWQiLCJwcm9wZXJ0aWVzIjogeyIkb3MiOiAiV2luZG93cyIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RldjIuYXVnbWVkaXguY29tOjgxOTEvYXBwL25vdGV3cml0ZXIiLCIkYnJvd3Nlcl92ZXJzaW9uIjogOTYsIiRzY3JlZW5faGVpZ2h0IjogODY0LCIkc2NyZWVuX3dpZHRoIjogMTUzNiwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjQwLjAiLCIkaW5zZXJ0X2lkIjogInRheWsyczFqMnVrZm01M3EiLCJ0aW1lIjogMTY0MDE2MDA5My42NzUsImRpc3RpbmN0X2lkIjogMzQ3MywiJGRldmljZV9pZCI6ICIxN2RlMTI2ZGJlMTE3Yi0wNTJkYTA3ODk4NTFmNS00MzAzMDY2LTE0NDAwMC0xN2RlMTI2ZGJlMmI5NiIsIiR1c2VyX2lkIjogMzQ3MywiJGluaXRpYWxfcmVmZXJyZXIiOiAiJGRpcmVjdCIsIiRpbml0aWFsX3JlZmVycmluZ19kb21haW4iOiAiJGRpcmVjdCIsIlNjcmliZSBJRCI6IDM0NzMsIlNjcmliZSBFbWFpbCI6ICJ0ZXN0X2FjY291bnRfc2NyaWJlX2Rldl8wM0BhdWdtZWRpeC5jb20iLCJTY3JpYmUgTmFtZSI6ICJ0ZXN0IHNjcmliZSIsIlZlbmRvciBOYW1lIjogIkFYQkQiLCJTY3JpYmUgVUlEIjogIjk5OTk5OSIsIkNsaW5pY2lhbiBJRCI6IDEzNDgsIkNsaW5pY2lhbiBOYW1lIjogIlN0ZyBEb2MxIEdkIiwiQ2xpbmljaWFuIEVtYWlsIjogInN0Z19nZF9kb2MxQGF1Z21lZGl4LmNvbSIsIkZhY2lsaXR5IE5hbWUiOiAiU3F1YXJlIEhvc3BpdGFsLCBEaGFrYSIsIkNsaW5pY2lhbiBTdGF0dXMiOiAiYWN0aXZlIiwiU3BlY2lhbHR5IjogIlByaW1hcnkgQ2FyZSIsIlNwZWNpYWx0eSBJRCI6IDM2LCJTZXJ2aWNlIjogIkxpdmUiLCJTY3JpYmUgUm9sZSI6ICJwcmltYXJ5RnVsbENvbnRyb2wiLCJQYXRpZW50IElEIjogODI0OTA5LCJOb3RlIElEIjogODI0OTA5LCJWaXNpdCBEYXRlIjogIjIwMjEtMTItMjIiLCJQYXRpZW50IEdlbmRlciI6ICJNYWxlIiwiUGF0aWVudCBBZ2UiOiAyMiwiVmlzaXQgVHlwZSI6ICJJbi1wZXJzb24iLCJUZWxlbWVkaWNpbmUgVmlzaXQgVHlwZSI6ICIiLCJDb21wbGFpbnQiOiAiQWN1dGUga2lkbmV5IGZhaWx1cmUiLCJFdmVudCBUaW1lIjogIjIwMjEtMTItMjJUMDg6MDE6MzMuNjc0WiIsIkZvY3VzIFRpbWUgKHNlYykiOiA5MywidG9rZW4iOiAiNTg3OGIyMWZkM2Y2MTgwZjBmNDQ3MWY3OTk1NDZiYTcifX0KXQ%3D%3D",
      },
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "content-type": "application/x-www-form-urlencoded",
          accept: "*/*",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.9);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"Abdominal pain\\",\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":587,\\"name\\":\\"Acromegaly\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":255,\\"name\\":\\"Acute complaint\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"},{\\"id\\":229,\\"name\\":\\"Acute kidney failure\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"dob\\":\\"1999-12-22\\",\\"serviceType\\":[{\\"id\\":1,\\"name\\":\\"In-person\\"}],\\"ageDescriptor\\":1,\\"startTime\\":\\"02:59:00\\",\\"templateId\\":null,\\"visitType\\":[]},\\"activeTab\\":\\"builder\\",\\"isValidData\\":true},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":587,\\"name\\":\\"Acromegaly\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":255,\\"name\\":\\"Acute complaint\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"},{\\"id\\":229,\\"name\\":\\"Acute kidney failure\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"selectedComplaint\\":229,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is a 22 year old male presenting today for: Abdominal pain.\\",\\"activeSubnavId\\":1,\\"template\\":null}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(4.9);

    response = http.get(
      "https://mcu-test2.augmedix.com/janus/6770362640734963?rid=ddda25c0b199&maxev=20&_=1640160101582",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "*/*",
          destination: "janus_8",
          "content-type": "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://mcu-test2.augmedix.com/janus/6770362640734963?rid=ddda25c0b199&maxev=20&_=1640160101582",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "content-type,destination",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.1);

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.7);

    response = http.get(
      "https://mcu-test2.augmedix.com/janus/3161493908344783?rid=5aa4c3d17db2&maxev=20&_=1640160103317",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "*/*",
          destination: "janus_8",
          "content-type": "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://mcu-test2.augmedix.com/janus/3161493908344783?rid=5aa4c3d17db2&maxev=20&_=1640160103317",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "content-type,destination",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.6);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-event",
      '{"notewriterEventsArray":"[{\\"providerId\\":1348,\\"logTime\\":1640160093678,\\"scribeControl\\":\\"Full Control\\",\\"action\\":\\"Complaint selected\\",\\"effect\\":\\"Acute kidney failure\\",\\"appliedEffect\\":\\"Note ID: 824909\\"}]"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json;charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-event",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"Abdominal pain\\",\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":587,\\"name\\":\\"Acromegaly\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":255,\\"name\\":\\"Acute complaint\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"},{\\"id\\":229,\\"name\\":\\"Acute kidney failure\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"dob\\":\\"1999-12-22\\",\\"serviceType\\":[{\\"id\\":1,\\"name\\":\\"In-person\\"}],\\"ageDescriptor\\":1,\\"startTime\\":\\"02:59:00\\",\\"templateId\\":null,\\"visitType\\":[]},\\"activeTab\\":\\"builder\\",\\"isValidData\\":true},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":587,\\"name\\":\\"Acromegaly\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":255,\\"name\\":\\"Acute complaint\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"},{\\"id\\":229,\\"name\\":\\"Acute kidney failure\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"selectedComplaint\\":229,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is a 22 year old male presenting today for: Abdominal pain.\\",\\"activeSubnavId\\":1,\\"template\\":null}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-builder/save",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.6);

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/complaints/206?providerContext=1348&specialtyContext=36",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/complaints/206?providerContext=1348&specialtyContext=36",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      '{"records":[{"data":"{\\"insertId\\":\\"a4z2cpxcvtfp84k8\\",\\"timeStamp\\":1640160105676,\\"eventType\\":\\"scp_js_event\\",\\"userId\\":3473,\\"distinctId\\":3473,\\"scribeId\\":3473,\\"scribeEmail\\":\\"test_account_scribe_dev_03@augmedix.com\\",\\"scribeName\\":\\"test scribe\\",\\"vendorName\\":\\"AXBD\\",\\"scribeUid\\":\\"999999\\",\\"clinicianId\\":1348,\\"clinicianName\\":\\"Stg Doc1 Gd\\",\\"clinicianEmail\\":\\"stg_gd_doc1@augmedix.com\\",\\"facilityName\\":\\"Square Hospital, Dhaka\\",\\"clinicianStatus\\":\\"active\\",\\"specialty\\":\\"Primary Care\\",\\"specialtyId\\":36,\\"service\\":\\"Live\\",\\"scribeRole\\":\\"primaryFullControl\\",\\"patientId\\":824909,\\"noteId\\":824909,\\"visitDate\\":\\"2021-12-22\\",\\"patientGender\\":\\"Male\\",\\"patientAge\\":22,\\"visitType\\":\\"In-person\\",\\"telemedicineVisitType\\":\\"\\",\\"os\\":\\"Windows\\",\\"browser\\":\\"Chrome\\",\\"initialReferrer\\":\\"$direct\\",\\"initialReferringDomain\\":\\"$direct\\",\\"device\\":\\"\\",\\"currentUrl\\":\\"https://dev2.augmedix.com:8191/app/dashboard\\",\\"browserVersion\\":96,\\"screenHeight\\":864,\\"screenWidth\\":1536,\\"payload\\":{\\"eventName\\":\\"Complaint Added\\",\\"complaint\\":\\"Add to Oncologic history\\",\\"eventTime\\":\\"2021-12-22T08:01:45.674Z\\",\\"focusTimeSec\\":105}}","partitionKey":"a4z2cpxcvtfp84k8"}]}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json; charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(3);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"Abdominal pain\\",\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":587,\\"name\\":\\"Acromegaly\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":255,\\"name\\":\\"Acute complaint\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"},{\\"id\\":229,\\"name\\":\\"Acute kidney failure\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":206,\\"name\\":\\"Add to Oncologic history\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"}],\\"dob\\":\\"1999-12-22\\",\\"serviceType\\":[{\\"id\\":1,\\"name\\":\\"In-person\\"}],\\"ageDescriptor\\":1,\\"startTime\\":\\"02:59:00\\",\\"templateId\\":null,\\"visitType\\":[]},\\"activeTab\\":\\"builder\\",\\"isValidData\\":true},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":587,\\"name\\":\\"Acromegaly\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":255,\\"name\\":\\"Acute complaint\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"},{\\"id\\":229,\\"name\\":\\"Acute kidney failure\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":206,\\"name\\":\\"Add to Oncologic history\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"}],\\"selectedComplaint\\":206,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is a 22 year old male presenting today for: Abdominal pain.\\",\\"activeSubnavId\\":1,\\"template\\":null}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.5);

    response = http.post(
      "https://dev2.augmedix.com:50050/save-event",
      '{"eventsArray":"[{\\"logMessage\\":\\"test scribe<test_account_scribe_dev_03@augmedix.com> selected complaint: Add to Oncologic history\\",\\"logType\\":\\"notebuilder\\",\\"logPriority\\":\\"none\\",\\"eventTime\\":1640160105}]"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json;charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/save-event",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50011/stats/scribe/connection-status",
      '{"providerEmail":"stg_gd_doc1@augmedix.com","scopeConnectStatus":true,"scribeControl":"Full Control","scribeEmail":"test_account_scribe_dev_03@augmedix.com","streamStatus":false}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50050/last-activity",
      '{"providerEmail":"stg_gd_doc1@augmedix.com","scopeConnectStatus":true,"scribeControl":"Full Control","scribeEmail":"test_account_scribe_dev_03@augmedix.com","streamStatus":false}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50011/stats/scribe/connection-status",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/last-activity",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://api-js.mixpanel.com/track/?verbose=1&ip=1&_=1640160110966",
      {
        data: "WwogICAgeyJldmVudCI6ICJDb21wbGFpbnQgQWRkZWQiLCJwcm9wZXJ0aWVzIjogeyIkb3MiOiAiV2luZG93cyIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RldjIuYXVnbWVkaXguY29tOjgxOTEvYXBwL25vdGV3cml0ZXIiLCIkYnJvd3Nlcl92ZXJzaW9uIjogOTYsIiRzY3JlZW5faGVpZ2h0IjogODY0LCIkc2NyZWVuX3dpZHRoIjogMTUzNiwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjQwLjAiLCIkaW5zZXJ0X2lkIjogImM4anhoZWhpeXgweHR4ZHUiLCJ0aW1lIjogMTY0MDE2MDEwNS42NzUsImRpc3RpbmN0X2lkIjogMzQ3MywiJGRldmljZV9pZCI6ICIxN2RlMTI2ZGJlMTE3Yi0wNTJkYTA3ODk4NTFmNS00MzAzMDY2LTE0NDAwMC0xN2RlMTI2ZGJlMmI5NiIsIiR1c2VyX2lkIjogMzQ3MywiJGluaXRpYWxfcmVmZXJyZXIiOiAiJGRpcmVjdCIsIiRpbml0aWFsX3JlZmVycmluZ19kb21haW4iOiAiJGRpcmVjdCIsIlNjcmliZSBJRCI6IDM0NzMsIlNjcmliZSBFbWFpbCI6ICJ0ZXN0X2FjY291bnRfc2NyaWJlX2Rldl8wM0BhdWdtZWRpeC5jb20iLCJTY3JpYmUgTmFtZSI6ICJ0ZXN0IHNjcmliZSIsIlZlbmRvciBOYW1lIjogIkFYQkQiLCJTY3JpYmUgVUlEIjogIjk5OTk5OSIsIkNsaW5pY2lhbiBJRCI6IDEzNDgsIkNsaW5pY2lhbiBOYW1lIjogIlN0ZyBEb2MxIEdkIiwiQ2xpbmljaWFuIEVtYWlsIjogInN0Z19nZF9kb2MxQGF1Z21lZGl4LmNvbSIsIkZhY2lsaXR5IE5hbWUiOiAiU3F1YXJlIEhvc3BpdGFsLCBEaGFrYSIsIkNsaW5pY2lhbiBTdGF0dXMiOiAiYWN0aXZlIiwiU3BlY2lhbHR5IjogIlByaW1hcnkgQ2FyZSIsIlNwZWNpYWx0eSBJRCI6IDM2LCJTZXJ2aWNlIjogIkxpdmUiLCJTY3JpYmUgUm9sZSI6ICJwcmltYXJ5RnVsbENvbnRyb2wiLCJQYXRpZW50IElEIjogODI0OTA5LCJOb3RlIElEIjogODI0OTA5LCJWaXNpdCBEYXRlIjogIjIwMjEtMTItMjIiLCJQYXRpZW50IEdlbmRlciI6ICJNYWxlIiwiUGF0aWVudCBBZ2UiOiAyMiwiVmlzaXQgVHlwZSI6ICJJbi1wZXJzb24iLCJUZWxlbWVkaWNpbmUgVmlzaXQgVHlwZSI6ICIiLCJDb21wbGFpbnQiOiAiQWRkIHRvIE9uY29sb2dpYyBoaXN0b3J5IiwiRXZlbnQgVGltZSI6ICIyMDIxLTEyLTIyVDA4OjAxOjQ1LjY3NFoiLCJGb2N1cyBUaW1lIChzZWMpIjogMTA1LCJ0b2tlbiI6ICI1ODc4YjIxZmQzZjYxODBmMGY0NDcxZjc5OTU0NmJhNyJ9fQpd",
      },
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "content-type": "application/x-www-form-urlencoded",
          accept: "*/*",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(2);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"Abdominal pain\\",\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":587,\\"name\\":\\"Acromegaly\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":255,\\"name\\":\\"Acute complaint\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"},{\\"id\\":229,\\"name\\":\\"Acute kidney failure\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":206,\\"name\\":\\"Add to Oncologic history\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"}],\\"dob\\":\\"1999-12-22\\",\\"serviceType\\":[{\\"id\\":1,\\"name\\":\\"In-person\\"}],\\"ageDescriptor\\":1,\\"startTime\\":\\"02:59:00\\",\\"templateId\\":null,\\"visitType\\":[]},\\"activeTab\\":\\"builder\\",\\"isValidData\\":true},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":587,\\"name\\":\\"Acromegaly\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":255,\\"name\\":\\"Acute complaint\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"},{\\"id\\":229,\\"name\\":\\"Acute kidney failure\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":206,\\"name\\":\\"Add to Oncologic history\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"}],\\"selectedComplaint\\":206,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is a 22 year old male presenting today for: Abdominal pain.\\",\\"activeSubnavId\\":1,\\"template\\":null}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-builder/save",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/complaints/170?providerContext=1348&specialtyContext=36",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/complaints/170?providerContext=1348&specialtyContext=36",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      '{"records":[{"data":"{\\"insertId\\":\\"8re2rhjisxfj4deo\\",\\"timeStamp\\":1640160113106,\\"eventType\\":\\"scp_js_event\\",\\"userId\\":3473,\\"distinctId\\":3473,\\"scribeId\\":3473,\\"scribeEmail\\":\\"test_account_scribe_dev_03@augmedix.com\\",\\"scribeName\\":\\"test scribe\\",\\"vendorName\\":\\"AXBD\\",\\"scribeUid\\":\\"999999\\",\\"clinicianId\\":1348,\\"clinicianName\\":\\"Stg Doc1 Gd\\",\\"clinicianEmail\\":\\"stg_gd_doc1@augmedix.com\\",\\"facilityName\\":\\"Square Hospital, Dhaka\\",\\"clinicianStatus\\":\\"active\\",\\"specialty\\":\\"Primary Care\\",\\"specialtyId\\":36,\\"service\\":\\"Live\\",\\"scribeRole\\":\\"primaryFullControl\\",\\"patientId\\":824909,\\"noteId\\":824909,\\"visitDate\\":\\"2021-12-22\\",\\"patientGender\\":\\"Male\\",\\"patientAge\\":22,\\"visitType\\":\\"In-person\\",\\"telemedicineVisitType\\":\\"\\",\\"os\\":\\"Windows\\",\\"browser\\":\\"Chrome\\",\\"initialReferrer\\":\\"$direct\\",\\"initialReferringDomain\\":\\"$direct\\",\\"device\\":\\"\\",\\"currentUrl\\":\\"https://dev2.augmedix.com:8191/app/dashboard\\",\\"browserVersion\\":96,\\"screenHeight\\":864,\\"screenWidth\\":1536,\\"payload\\":{\\"eventName\\":\\"Complaint Added\\",\\"complaint\\":\\"ADHD\\",\\"eventTime\\":\\"2021-12-22T08:01:53.104Z\\",\\"focusTimeSec\\":113}}","partitionKey":"8re2rhjisxfj4deo"}]}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json; charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(3);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"Abdominal pain\\",\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":587,\\"name\\":\\"Acromegaly\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":255,\\"name\\":\\"Acute complaint\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"},{\\"id\\":229,\\"name\\":\\"Acute kidney failure\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":206,\\"name\\":\\"Add to Oncologic history\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"},{\\"id\\":170,\\"name\\":\\"ADHD\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"dob\\":\\"1999-12-22\\",\\"serviceType\\":[{\\"id\\":1,\\"name\\":\\"In-person\\"}],\\"ageDescriptor\\":1,\\"startTime\\":\\"02:59:00\\",\\"templateId\\":null,\\"visitType\\":[]},\\"activeTab\\":\\"builder\\",\\"isValidData\\":true},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":587,\\"name\\":\\"Acromegaly\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":255,\\"name\\":\\"Acute complaint\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"},{\\"id\\":229,\\"name\\":\\"Acute kidney failure\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":206,\\"name\\":\\"Add to Oncologic history\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"},{\\"id\\":170,\\"name\\":\\"ADHD\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"selectedComplaint\\":170,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is a 22 year old male presenting today for: Abdominal pain.\\",\\"activeSubnavId\\":1,\\"template\\":null}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(2.8);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-event",
      '{"notewriterEventsArray":"[{\\"providerId\\":1348,\\"logTime\\":1640160105677,\\"scribeControl\\":\\"Full Control\\",\\"action\\":\\"Complaint selected\\",\\"effect\\":\\"Add to Oncologic history\\",\\"appliedEffect\\":\\"Note ID: 824909\\"},{\\"providerId\\":1348,\\"logTime\\":1640160113107,\\"scribeControl\\":\\"Full Control\\",\\"action\\":\\"Complaint selected\\",\\"effect\\":\\"ADHD\\",\\"appliedEffect\\":\\"Note ID: 824909\\"}]"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json;charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-event",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.8);

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50050/notes/focus-duration",
      '{"noteId":824909,"focusDuration":120}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/notes/focus-duration",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.7);

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/complaints/22?providerContext=1348&specialtyContext=36",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/complaints/22?providerContext=1348&specialtyContext=36",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      '{"records":[{"data":"{\\"insertId\\":\\"gqup2uvjzklepelf\\",\\"timeStamp\\":1640160121670,\\"eventType\\":\\"scp_js_event\\",\\"userId\\":3473,\\"distinctId\\":3473,\\"scribeId\\":3473,\\"scribeEmail\\":\\"test_account_scribe_dev_03@augmedix.com\\",\\"scribeName\\":\\"test scribe\\",\\"vendorName\\":\\"AXBD\\",\\"scribeUid\\":\\"999999\\",\\"clinicianId\\":1348,\\"clinicianName\\":\\"Stg Doc1 Gd\\",\\"clinicianEmail\\":\\"stg_gd_doc1@augmedix.com\\",\\"facilityName\\":\\"Square Hospital, Dhaka\\",\\"clinicianStatus\\":\\"active\\",\\"specialty\\":\\"Primary Care\\",\\"specialtyId\\":36,\\"service\\":\\"Live\\",\\"scribeRole\\":\\"primaryFullControl\\",\\"patientId\\":824909,\\"noteId\\":824909,\\"visitDate\\":\\"2021-12-22\\",\\"patientGender\\":\\"Male\\",\\"patientAge\\":22,\\"visitType\\":\\"In-person\\",\\"telemedicineVisitType\\":\\"\\",\\"os\\":\\"Windows\\",\\"browser\\":\\"Chrome\\",\\"initialReferrer\\":\\"$direct\\",\\"initialReferringDomain\\":\\"$direct\\",\\"device\\":\\"\\",\\"currentUrl\\":\\"https://dev2.augmedix.com:8191/app/dashboard\\",\\"browserVersion\\":96,\\"screenHeight\\":864,\\"screenWidth\\":1536,\\"payload\\":{\\"eventName\\":\\"Complaint Added\\",\\"complaint\\":\\"Adult URI\\",\\"eventTime\\":\\"2021-12-22T08:02:01.667Z\\",\\"focusTimeSec\\":121}}","partitionKey":"gqup2uvjzklepelf"}]}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json; charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(3);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"Abdominal pain\\",\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":587,\\"name\\":\\"Acromegaly\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":255,\\"name\\":\\"Acute complaint\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"},{\\"id\\":229,\\"name\\":\\"Acute kidney failure\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":206,\\"name\\":\\"Add to Oncologic history\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"},{\\"id\\":170,\\"name\\":\\"ADHD\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":22,\\"name\\":\\"Adult URI\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"dob\\":\\"1999-12-22\\",\\"serviceType\\":[{\\"id\\":1,\\"name\\":\\"In-person\\"}],\\"ageDescriptor\\":1,\\"startTime\\":\\"02:59:00\\",\\"templateId\\":null,\\"visitType\\":[]},\\"activeTab\\":\\"builder\\",\\"isValidData\\":true},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":587,\\"name\\":\\"Acromegaly\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":255,\\"name\\":\\"Acute complaint\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"},{\\"id\\":229,\\"name\\":\\"Acute kidney failure\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":206,\\"name\\":\\"Add to Oncologic history\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"},{\\"id\\":170,\\"name\\":\\"ADHD\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":22,\\"name\\":\\"Adult URI\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"selectedComplaint\\":22,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is a 22 year old male presenting today for: Abdominal pain.\\",\\"activeSubnavId\\":1,\\"template\\":null}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-builder/save",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.5);

    response = http.post(
      "https://dev2.augmedix.com:50050/save-event",
      '{"eventsArray":"[{\\"logMessage\\":\\"test scribe<test_account_scribe_dev_03@augmedix.com> selected complaint: ADHD\\",\\"logType\\":\\"notebuilder\\",\\"logPriority\\":\\"none\\",\\"eventTime\\":1640160113},{\\"logMessage\\":\\"test scribe<test_account_scribe_dev_03@augmedix.com> selected complaint: Adult URI\\",\\"logType\\":\\"notebuilder\\",\\"logPriority\\":\\"none\\",\\"eventTime\\":1640160121}]"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json;charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/save-event",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.9);

    response = http.post(
      "https://api-js.mixpanel.com/track/?verbose=1&ip=1&_=1640160126055",
      {
        data: "WwogICAgeyJldmVudCI6ICJDb21wbGFpbnQgQWRkZWQiLCJwcm9wZXJ0aWVzIjogeyIkb3MiOiAiV2luZG93cyIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RldjIuYXVnbWVkaXguY29tOjgxOTEvYXBwL25vdGV3cml0ZXIiLCIkYnJvd3Nlcl92ZXJzaW9uIjogOTYsIiRzY3JlZW5faGVpZ2h0IjogODY0LCIkc2NyZWVuX3dpZHRoIjogMTUzNiwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjQwLjAiLCIkaW5zZXJ0X2lkIjogInBtbXpvNjNrNHIweHprejAiLCJ0aW1lIjogMTY0MDE2MDExMy4xMDYsImRpc3RpbmN0X2lkIjogMzQ3MywiJGRldmljZV9pZCI6ICIxN2RlMTI2ZGJlMTE3Yi0wNTJkYTA3ODk4NTFmNS00MzAzMDY2LTE0NDAwMC0xN2RlMTI2ZGJlMmI5NiIsIiR1c2VyX2lkIjogMzQ3MywiJGluaXRpYWxfcmVmZXJyZXIiOiAiJGRpcmVjdCIsIiRpbml0aWFsX3JlZmVycmluZ19kb21haW4iOiAiJGRpcmVjdCIsIlNjcmliZSBJRCI6IDM0NzMsIlNjcmliZSBFbWFpbCI6ICJ0ZXN0X2FjY291bnRfc2NyaWJlX2Rldl8wM0BhdWdtZWRpeC5jb20iLCJTY3JpYmUgTmFtZSI6ICJ0ZXN0IHNjcmliZSIsIlZlbmRvciBOYW1lIjogIkFYQkQiLCJTY3JpYmUgVUlEIjogIjk5OTk5OSIsIkNsaW5pY2lhbiBJRCI6IDEzNDgsIkNsaW5pY2lhbiBOYW1lIjogIlN0ZyBEb2MxIEdkIiwiQ2xpbmljaWFuIEVtYWlsIjogInN0Z19nZF9kb2MxQGF1Z21lZGl4LmNvbSIsIkZhY2lsaXR5IE5hbWUiOiAiU3F1YXJlIEhvc3BpdGFsLCBEaGFrYSIsIkNsaW5pY2lhbiBTdGF0dXMiOiAiYWN0aXZlIiwiU3BlY2lhbHR5IjogIlByaW1hcnkgQ2FyZSIsIlNwZWNpYWx0eSBJRCI6IDM2LCJTZXJ2aWNlIjogIkxpdmUiLCJTY3JpYmUgUm9sZSI6ICJwcmltYXJ5RnVsbENvbnRyb2wiLCJQYXRpZW50IElEIjogODI0OTA5LCJOb3RlIElEIjogODI0OTA5LCJWaXNpdCBEYXRlIjogIjIwMjEtMTItMjIiLCJQYXRpZW50IEdlbmRlciI6ICJNYWxlIiwiUGF0aWVudCBBZ2UiOiAyMiwiVmlzaXQgVHlwZSI6ICJJbi1wZXJzb24iLCJUZWxlbWVkaWNpbmUgVmlzaXQgVHlwZSI6ICIiLCJDb21wbGFpbnQiOiAiQURIRCIsIkV2ZW50IFRpbWUiOiAiMjAyMS0xMi0yMlQwODowMTo1My4xMDRaIiwiRm9jdXMgVGltZSAoc2VjKSI6IDExMywidG9rZW4iOiAiNTg3OGIyMWZkM2Y2MTgwZjBmNDQ3MWY3OTk1NDZiYTcifX0sCiAgICB7ImV2ZW50IjogIkNvbXBsYWludCBBZGRlZCIsInByb3BlcnRpZXMiOiB7IiRvcyI6ICJXaW5kb3dzIiwiJGJyb3dzZXIiOiAiQ2hyb21lIiwiJGN1cnJlbnRfdXJsIjogImh0dHBzOi8vZGV2Mi5hdWdtZWRpeC5jb206ODE5MS9hcHAvbm90ZXdyaXRlciIsIiRicm93c2VyX3ZlcnNpb24iOiA5NiwiJHNjcmVlbl9oZWlnaHQiOiA4NjQsIiRzY3JlZW5fd2lkdGgiOiAxNTM2LCJtcF9saWIiOiAid2ViIiwiJGxpYl92ZXJzaW9uIjogIjIuNDAuMCIsIiRpbnNlcnRfaWQiOiAiODkxOW02bWxoZXppMno2YyIsInRpbWUiOiAxNjQwMTYwMTIxLjY2OCwiZGlzdGluY3RfaWQiOiAzNDczLCIkZGV2aWNlX2lkIjogIjE3ZGUxMjZkYmUxMTdiLTA1MmRhMDc4OTg1MWY1LTQzMDMwNjYtMTQ0MDAwLTE3ZGUxMjZkYmUyYjk2IiwiJHVzZXJfaWQiOiAzNDczLCIkaW5pdGlhbF9yZWZlcnJlciI6ICIkZGlyZWN0IiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICIkZGlyZWN0IiwiU2NyaWJlIElEIjogMzQ3MywiU2NyaWJlIEVtYWlsIjogInRlc3RfYWNjb3VudF9zY3JpYmVfZGV2XzAzQGF1Z21lZGl4LmNvbSIsIlNjcmliZSBOYW1lIjogInRlc3Qgc2NyaWJlIiwiVmVuZG9yIE5hbWUiOiAiQVhCRCIsIlNjcmliZSBVSUQiOiAiOTk5OTk5IiwiQ2xpbmljaWFuIElEIjogMTM0OCwiQ2xpbmljaWFuIE5hbWUiOiAiU3RnIERvYzEgR2QiLCJDbGluaWNpYW4gRW1haWwiOiAic3RnX2dkX2RvYzFAYXVnbWVkaXguY29tIiwiRmFjaWxpdHkgTmFtZSI6ICJTcXVhcmUgSG9zcGl0YWwsIERoYWthIiwiQ2xpbmljaWFuIFN0YXR1cyI6ICJhY3RpdmUiLCJTcGVjaWFsdHkiOiAiUHJpbWFyeSBDYXJlIiwiU3BlY2lhbHR5IElEIjogMzYsIlNlcnZpY2UiOiAiTGl2ZSIsIlNjcmliZSBSb2xlIjogInByaW1hcnlGdWxsQ29udHJvbCIsIlBhdGllbnQgSUQiOiA4MjQ5MDksIk5vdGUgSUQiOiA4MjQ5MDksIlZpc2l0IERhdGUiOiAiMjAyMS0xMi0yMiIsIlBhdGllbnQgR2VuZGVyIjogIk1hbGUiLCJQYXRpZW50IEFnZSI6IDIyLCJWaXNpdCBUeXBlIjogIkluLXBlcnNvbiIsIlRlbGVtZWRpY2luZSBWaXNpdCBUeXBlIjogIiIsIkNvbXBsYWludCI6ICJBZHVsdCBVUkkiLCJFdmVudCBUaW1lIjogIjIwMjEtMTItMjJUMDg6MDI6MDEuNjY3WiIsIkZvY3VzIFRpbWUgKHNlYykiOiAxMjEsInRva2VuIjogIjU4NzhiMjFmZDNmNjE4MGYwZjQ0NzFmNzk5NTQ2YmE3In19Cl0%3D",
      },
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "content-type": "application/x-www-form-urlencoded",
          accept: "*/*",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(5.4);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"Abdominal pain\\",\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":587,\\"name\\":\\"Acromegaly\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":255,\\"name\\":\\"Acute complaint\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"},{\\"id\\":229,\\"name\\":\\"Acute kidney failure\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":206,\\"name\\":\\"Add to Oncologic history\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"},{\\"id\\":170,\\"name\\":\\"ADHD\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":22,\\"name\\":\\"Adult URI\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"dob\\":\\"1999-12-22\\",\\"serviceType\\":[{\\"id\\":1,\\"name\\":\\"In-person\\"}],\\"ageDescriptor\\":1,\\"startTime\\":\\"02:59:00\\",\\"templateId\\":null,\\"visitType\\":[]},\\"activeTab\\":\\"builder\\",\\"isValidData\\":true},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":587,\\"name\\":\\"Acromegaly\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":255,\\"name\\":\\"Acute complaint\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"},{\\"id\\":229,\\"name\\":\\"Acute kidney failure\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":206,\\"name\\":\\"Add to Oncologic history\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"},{\\"id\\":170,\\"name\\":\\"ADHD\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":22,\\"name\\":\\"Adult URI\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"selectedComplaint\\":22,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is a 22 year old male presenting today for: Abdominal pain.\\",\\"activeSubnavId\\":1,\\"template\\":null}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-builder/save",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.7);

    response = http.options(
      "https://mcu-test2.augmedix.com/janus/6770362640734963?rid=7217840450ba&maxev=20&_=1640160133066",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "content-type,destination",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.9);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-event",
      '{"notewriterEventsArray":"[{\\"providerId\\":1348,\\"logTime\\":1640160121672,\\"scribeControl\\":\\"Full Control\\",\\"action\\":\\"Complaint selected\\",\\"effect\\":\\"Adult URI\\",\\"appliedEffect\\":\\"Note ID: 824909\\"}]"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json;charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-event",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.8);

    response = http.options(
      "https://mcu-test2.augmedix.com/janus/3161493908344783?rid=a0c871959b91&maxev=20&_=1640160134790",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "content-type,destination",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.9);

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/complaints/22?providerContext=1348&specialtyContext=36",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/complaints/22?providerContext=1348&specialtyContext=36",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      '{"records":[{"data":"{\\"insertId\\":\\"dbqq7cz6t6ozm3gw\\",\\"timeStamp\\":1640160136663,\\"eventType\\":\\"scp_js_event\\",\\"userId\\":3473,\\"distinctId\\":3473,\\"scribeId\\":3473,\\"scribeEmail\\":\\"test_account_scribe_dev_03@augmedix.com\\",\\"scribeName\\":\\"test scribe\\",\\"vendorName\\":\\"AXBD\\",\\"scribeUid\\":\\"999999\\",\\"clinicianId\\":1348,\\"clinicianName\\":\\"Stg Doc1 Gd\\",\\"clinicianEmail\\":\\"stg_gd_doc1@augmedix.com\\",\\"facilityName\\":\\"Square Hospital, Dhaka\\",\\"clinicianStatus\\":\\"active\\",\\"specialty\\":\\"Primary Care\\",\\"specialtyId\\":36,\\"service\\":\\"Live\\",\\"scribeRole\\":\\"primaryFullControl\\",\\"patientId\\":824909,\\"noteId\\":824909,\\"visitDate\\":\\"2021-12-22\\",\\"patientGender\\":\\"Male\\",\\"patientAge\\":22,\\"visitType\\":\\"In-person\\",\\"telemedicineVisitType\\":\\"\\",\\"os\\":\\"Windows\\",\\"browser\\":\\"Chrome\\",\\"initialReferrer\\":\\"$direct\\",\\"initialReferringDomain\\":\\"$direct\\",\\"device\\":\\"\\",\\"currentUrl\\":\\"https://dev2.augmedix.com:8191/app/dashboard\\",\\"browserVersion\\":96,\\"screenHeight\\":864,\\"screenWidth\\":1536,\\"payload\\":{\\"eventName\\":\\"Navigated to Note Section\\",\\"noteSectionName\\":\\"PE\\",\\"eventTime\\":\\"2021-12-22T08:02:16.661Z\\",\\"focusTimeSec\\":136}}","partitionKey":"dbqq7cz6t6ozm3gw"}]}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json; charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348/pe-template",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/templates/sentence",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/users/providers/1348/pe-template",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50009/api/v1/templates/sentence",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.9);

    response = http.get(
      "https://dev2.augmedix.com:50009/api/v1/complaints/22?providerContext=1348&specialtyContext=36",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      '{"records":[{"data":"{\\"insertId\\":\\"z5k84wrmhx3n046i\\",\\"timeStamp\\":1640160138536,\\"eventType\\":\\"scp_js_event\\",\\"userId\\":3473,\\"distinctId\\":3473,\\"scribeId\\":3473,\\"scribeEmail\\":\\"test_account_scribe_dev_03@augmedix.com\\",\\"scribeName\\":\\"test scribe\\",\\"vendorName\\":\\"AXBD\\",\\"scribeUid\\":\\"999999\\",\\"clinicianId\\":1348,\\"clinicianName\\":\\"Stg Doc1 Gd\\",\\"clinicianEmail\\":\\"stg_gd_doc1@augmedix.com\\",\\"facilityName\\":\\"Square Hospital, Dhaka\\",\\"clinicianStatus\\":\\"active\\",\\"specialty\\":\\"Primary Care\\",\\"specialtyId\\":36,\\"service\\":\\"Live\\",\\"scribeRole\\":\\"primaryFullControl\\",\\"patientId\\":824909,\\"noteId\\":824909,\\"visitDate\\":\\"2021-12-22\\",\\"patientGender\\":\\"Male\\",\\"patientAge\\":22,\\"visitType\\":\\"In-person\\",\\"telemedicineVisitType\\":\\"\\",\\"os\\":\\"Windows\\",\\"browser\\":\\"Chrome\\",\\"initialReferrer\\":\\"$direct\\",\\"initialReferringDomain\\":\\"$direct\\",\\"device\\":\\"\\",\\"currentUrl\\":\\"https://dev2.augmedix.com:8191/app/dashboard\\",\\"browserVersion\\":96,\\"screenHeight\\":864,\\"screenWidth\\":1536,\\"payload\\":{\\"eventName\\":\\"Navigated to Note Section\\",\\"noteSectionName\\":\\"A/P\\",\\"eventTime\\":\\"2021-12-22T08:02:18.535Z\\",\\"focusTimeSec\\":138}}","partitionKey":"z5k84wrmhx3n046i"}]}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json; charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.7);

    response = http.post(
      "https://dev2.augmedix.com:50050/save-event",
      '{"eventsArray":"[{\\"logMessage\\":\\"test scribe<test_account_scribe_dev_03@augmedix.com> selected complaint: Adult URI\\",\\"logType\\":\\"notebuilder\\",\\"logPriority\\":\\"none\\",\\"eventTime\\":1640160136},{\\"logMessage\\":\\"test scribe<test_account_scribe_dev_03@augmedix.com> selected complaint: Adult URI\\",\\"logType\\":\\"notebuilder\\",\\"logPriority\\":\\"none\\",\\"eventTime\\":1640160138}]"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json;charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/save-event",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50011/stats/scribe/connection-status",
      '{"providerEmail":"stg_gd_doc1@augmedix.com","scopeConnectStatus":true,"scribeControl":"Full Control","scribeEmail":"test_account_scribe_dev_03@augmedix.com","streamStatus":false}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50050/last-activity",
      '{"providerEmail":"stg_gd_doc1@augmedix.com","scopeConnectStatus":true,"scribeControl":"Full Control","scribeEmail":"test_account_scribe_dev_03@augmedix.com","streamStatus":false}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50011/stats/scribe/connection-status",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/last-activity",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.7);

    response = http.post(
      "https://api-js.mixpanel.com/track/?verbose=1&ip=1&_=1640160141141",
      {
        data: "WwogICAgeyJldmVudCI6ICJOYXZpZ2F0ZWQgdG8gTm90ZSBTZWN0aW9uIiwicHJvcGVydGllcyI6IHsiJG9zIjogIldpbmRvd3MiLCIkYnJvd3NlciI6ICJDaHJvbWUiLCIkY3VycmVudF91cmwiOiAiaHR0cHM6Ly9kZXYyLmF1Z21lZGl4LmNvbTo4MTkxL2FwcC9ub3Rld3JpdGVyIiwiJGJyb3dzZXJfdmVyc2lvbiI6IDk2LCIkc2NyZWVuX2hlaWdodCI6IDg2NCwiJHNjcmVlbl93aWR0aCI6IDE1MzYsIm1wX2xpYiI6ICJ3ZWIiLCIkbGliX3ZlcnNpb24iOiAiMi40MC4wIiwiJGluc2VydF9pZCI6ICJobTMwNDM5aHVzbjRjd3NhIiwidGltZSI6IDE2NDAxNjAxMzYuNjYyLCJkaXN0aW5jdF9pZCI6IDM0NzMsIiRkZXZpY2VfaWQiOiAiMTdkZTEyNmRiZTExN2ItMDUyZGEwNzg5ODUxZjUtNDMwMzA2Ni0xNDQwMDAtMTdkZTEyNmRiZTJiOTYiLCIkdXNlcl9pZCI6IDM0NzMsIiRpbml0aWFsX3JlZmVycmVyIjogIiRkaXJlY3QiLCIkaW5pdGlhbF9yZWZlcnJpbmdfZG9tYWluIjogIiRkaXJlY3QiLCJTY3JpYmUgSUQiOiAzNDczLCJTY3JpYmUgRW1haWwiOiAidGVzdF9hY2NvdW50X3NjcmliZV9kZXZfMDNAYXVnbWVkaXguY29tIiwiU2NyaWJlIE5hbWUiOiAidGVzdCBzY3JpYmUiLCJWZW5kb3IgTmFtZSI6ICJBWEJEIiwiU2NyaWJlIFVJRCI6ICI5OTk5OTkiLCJDbGluaWNpYW4gSUQiOiAxMzQ4LCJDbGluaWNpYW4gTmFtZSI6ICJTdGcgRG9jMSBHZCIsIkNsaW5pY2lhbiBFbWFpbCI6ICJzdGdfZ2RfZG9jMUBhdWdtZWRpeC5jb20iLCJGYWNpbGl0eSBOYW1lIjogIlNxdWFyZSBIb3NwaXRhbCwgRGhha2EiLCJDbGluaWNpYW4gU3RhdHVzIjogImFjdGl2ZSIsIlNwZWNpYWx0eSI6ICJQcmltYXJ5IENhcmUiLCJTcGVjaWFsdHkgSUQiOiAzNiwiU2VydmljZSI6ICJMaXZlIiwiU2NyaWJlIFJvbGUiOiAicHJpbWFyeUZ1bGxDb250cm9sIiwiUGF0aWVudCBJRCI6IDgyNDkwOSwiTm90ZSBJRCI6IDgyNDkwOSwiVmlzaXQgRGF0ZSI6ICIyMDIxLTEyLTIyIiwiUGF0aWVudCBHZW5kZXIiOiAiTWFsZSIsIlBhdGllbnQgQWdlIjogMjIsIlZpc2l0IFR5cGUiOiAiSW4tcGVyc29uIiwiVGVsZW1lZGljaW5lIFZpc2l0IFR5cGUiOiAiIiwiTm90ZSBTZWN0aW9uIE5hbWUiOiAiUEUiLCJFdmVudCBUaW1lIjogIjIwMjEtMTItMjJUMDg6MDI6MTYuNjYxWiIsIkZvY3VzIFRpbWUgKHNlYykiOiAxMzYsInRva2VuIjogIjU4NzhiMjFmZDNmNjE4MGYwZjQ0NzFmNzk5NTQ2YmE3In19LAogICAgeyJldmVudCI6ICJOYXZpZ2F0ZWQgdG8gTm90ZSBTZWN0aW9uIiwicHJvcGVydGllcyI6IHsiJG9zIjogIldpbmRvd3MiLCIkYnJvd3NlciI6ICJDaHJvbWUiLCIkY3VycmVudF91cmwiOiAiaHR0cHM6Ly9kZXYyLmF1Z21lZGl4LmNvbTo4MTkxL2FwcC9ub3Rld3JpdGVyIiwiJGJyb3dzZXJfdmVyc2lvbiI6IDk2LCIkc2NyZWVuX2hlaWdodCI6IDg2NCwiJHNjcmVlbl93aWR0aCI6IDE1MzYsIm1wX2xpYiI6ICJ3ZWIiLCIkbGliX3ZlcnNpb24iOiAiMi40MC4wIiwiJGluc2VydF9pZCI6ICJhbHdlMzB6bG9nM2dhZDI1IiwidGltZSI6IDE2NDAxNjAxMzguNTM2LCJkaXN0aW5jdF9pZCI6IDM0NzMsIiRkZXZpY2VfaWQiOiAiMTdkZTEyNmRiZTExN2ItMDUyZGEwNzg5ODUxZjUtNDMwMzA2Ni0xNDQwMDAtMTdkZTEyNmRiZTJiOTYiLCIkdXNlcl9pZCI6IDM0NzMsIiRpbml0aWFsX3JlZmVycmVyIjogIiRkaXJlY3QiLCIkaW5pdGlhbF9yZWZlcnJpbmdfZG9tYWluIjogIiRkaXJlY3QiLCJTY3JpYmUgSUQiOiAzNDczLCJTY3JpYmUgRW1haWwiOiAidGVzdF9hY2NvdW50X3NjcmliZV9kZXZfMDNAYXVnbWVkaXguY29tIiwiU2NyaWJlIE5hbWUiOiAidGVzdCBzY3JpYmUiLCJWZW5kb3IgTmFtZSI6ICJBWEJEIiwiU2NyaWJlIFVJRCI6ICI5OTk5OTkiLCJDbGluaWNpYW4gSUQiOiAxMzQ4LCJDbGluaWNpYW4gTmFtZSI6ICJTdGcgRG9jMSBHZCIsIkNsaW5pY2lhbiBFbWFpbCI6ICJzdGdfZ2RfZG9jMUBhdWdtZWRpeC5jb20iLCJGYWNpbGl0eSBOYW1lIjogIlNxdWFyZSBIb3NwaXRhbCwgRGhha2EiLCJDbGluaWNpYW4gU3RhdHVzIjogImFjdGl2ZSIsIlNwZWNpYWx0eSI6ICJQcmltYXJ5IENhcmUiLCJTcGVjaWFsdHkgSUQiOiAzNiwiU2VydmljZSI6ICJMaXZlIiwiU2NyaWJlIFJvbGUiOiAicHJpbWFyeUZ1bGxDb250cm9sIiwiUGF0aWVudCBJRCI6IDgyNDkwOSwiTm90ZSBJRCI6IDgyNDkwOSwiVmlzaXQgRGF0ZSI6ICIyMDIxLTEyLTIyIiwiUGF0aWVudCBHZW5kZXIiOiAiTWFsZSIsIlBhdGllbnQgQWdlIjogMjIsIlZpc2l0IFR5cGUiOiAiSW4tcGVyc29uIiwiVGVsZW1lZGljaW5lIFZpc2l0IFR5cGUiOiAiIiwiTm90ZSBTZWN0aW9uIE5hbWUiOiAiQS9QIiwiRXZlbnQgVGltZSI6ICIyMDIxLTEyLTIyVDA4OjAyOjE4LjUzNVoiLCJGb2N1cyBUaW1lIChzZWMpIjogMTM4LCJ0b2tlbiI6ICI1ODc4YjIxZmQzZjYxODBmMGY0NDcxZjc5OTU0NmJhNyJ9fQpd",
      },
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "content-type": "application/x-www-form-urlencoded",
          accept: "*/*",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50050/note-builder/save",
      '{"id":824909,"data":"{\\"organize\\":{\\"visit\\":{\\"name\\":\\"Vlad\\",\\"gender\\":1,\\"chiefComplaint\\":\\"Abdominal pain\\",\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":587,\\"name\\":\\"Acromegaly\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":255,\\"name\\":\\"Acute complaint\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"},{\\"id\\":229,\\"name\\":\\"Acute kidney failure\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":206,\\"name\\":\\"Add to Oncologic history\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"},{\\"id\\":170,\\"name\\":\\"ADHD\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":22,\\"name\\":\\"Adult URI\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"dob\\":\\"1999-12-22\\",\\"serviceType\\":[{\\"id\\":1,\\"name\\":\\"In-person\\"}],\\"ageDescriptor\\":1,\\"startTime\\":\\"02:59:00\\",\\"templateId\\":null,\\"visitType\\":[]},\\"activeTab\\":\\"builder\\",\\"isValidData\\":true},\\"builder\\":{\\"hpi\\":{\\"complaints\\":[{\\"id\\":219,\\"name\\":\\"Abdominal pain\\",\\"parentId\\":null,\\"isCheif\\":true,\\"color\\":\\"warning\\"},{\\"id\\":183,\\"name\\":\\"Abnormal vaginal discharge\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":468,\\"name\\":\\"Abscess\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":290,\\"name\\":\\"Acid reflux\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":337,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":570,\\"name\\":\\"Acne\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":587,\\"name\\":\\"Acromegaly\\",\\"color\\":\\"warning\\",\\"type\\":\\"CHRONIC\\"},{\\"id\\":255,\\"name\\":\\"Acute complaint\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"},{\\"id\\":229,\\"name\\":\\"Acute kidney failure\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":206,\\"name\\":\\"Add to Oncologic history\\",\\"color\\":\\"warning\\",\\"type\\":\\"VISIT\\"},{\\"id\\":170,\\"name\\":\\"ADHD\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"},{\\"id\\":22,\\"name\\":\\"Adult URI\\",\\"color\\":\\"warning\\",\\"type\\":\\"ACUTE\\"}],\\"selectedComplaint\\":22,\\"elements\\":[],\\"uiState\\":[]},\\"ap\\":{},\\"ros\\":{},\\"pe\\":{},\\"initialSentence\\":\\"The patient is a 22 year old male presenting today for: Abdominal pain.\\",\\"activeSubnavId\\":4,\\"template\\":null}}"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-builder/save",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.1);

    response = http.del(
      "https://dev2.augmedix.com:50050/notes/patient/824909",
      null,
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/notes/patient/824909",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "DELETE",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.6);

    response = http.get(
      "https://dev2.augmedix.com:50050/notes/patients?patientVisitDate=22-12-2021&providerId=1348&scribeControl=Full%20Control&trainerNote=false&providerEmail=stg_gd_doc1@augmedix.com&providerFirstName=Stg%20Doc1&providerLastName=Gd&siteId=56&nonRealTimeMode=false",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/notes/patients?patientVisitDate=22-12-2021&providerId=1348&scribeControl=Full%20Control&trainerNote=false&providerEmail=stg_gd_doc1@augmedix.com&providerFirstName=Stg%20Doc1&providerLastName=Gd&siteId=56&nonRealTimeMode=false",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(2.9);

    response = http.del(
      "https://dev2.augmedix.com:50050/scribe-sessions",
      null,
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50050/logs",
      '{"logMessage":"test scribe<test_account_scribe_dev_03@augmedix.com> has played audio\\n                    in total 0 time for provider: Stg Doc1 Gd<stg_gd_doc1@augmedix.com>","logPriority":"medium","logType":"session","userEmail":"test_account_scribe_dev_03@augmedix.com","userId":3473,"userType":"scribe"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/scribe-sessions",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "DELETE",
          "access-control-request-headers": "authorization",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.put(
      "https://dev2.augmedix.com:50050/scope-disconnect-log",
      "{}",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options("https://dev2.augmedix.com:50050/logs", null, {
      headers: {
        accept: "*/*",
        "access-control-request-method": "POST",
        "access-control-request-headers": "authorization,content-type",
        origin: "https://dev2.augmedix.com:8191",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "sec-fetch-dest": "empty",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
      },
    });

    response = http.options(
      "https://dev2.augmedix.com:50050/scope-disconnect-log",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "PUT",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50050/dailylog/recent-sdl",
      '{"type":"signOut"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/dailylog/recent-sdl",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://mcu-test.augmedix.com/v1/fast/",
      '{"What":"dispose","Code":1002,"Scope":"stg_gd_doc1@augmedix.com1348","Email":"test_account_scribe_dev_03@augmedix.com","Type":"publisher","SDKType":"javascript"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "*/*",
          destination: "broker",
          "content-type": "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.8);

    response = http.post(
      "https://mcu-test.augmedix.com/v1/fast/",
      '{"What":"dispose","Code":1002,"Scope":"stg_gd_doc1@augmedix.com1348","Email":"test_account_scribe_dev_03@augmedix.com","Type":"subscriber","SDKType":"javascript"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "*/*",
          destination: "broker",
          "content-type": "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.5);

    response = http.post(
      "https://dev2.augmedix.com:50011/stats/scribe/health-stat",
      '[{"doctorEmail":"stg_gd_doc1@augmedix.com","metricsType":"DATA_CHANNEL_CONNECTED","value":0,"eventTime":"Wed, 22 Dec 2021 08:02:26 GMT","scribeEmail":"test_account_scribe_dev_03@augmedix.com"},{"doctorEmail":"stg_gd_doc1@augmedix.com","metricsType":"STREAMING_SERVER_CONNECTED","value":0,"eventTime":"Wed, 22 Dec 2021 08:02:27 GMT","scribeEmail":"test_account_scribe_dev_03@augmedix.com"}]',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://dev2.augmedix.com:50050/signout",
      '{"logoutType":"General"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50011/stats/scribe/health-stat",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options("https://dev2.augmedix.com:50050/signout", null, {
      headers: {
        accept: "*/*",
        "access-control-request-method": "POST",
        "access-control-request-headers": "authorization,content-type",
        origin: "https://dev2.augmedix.com:8191",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "sec-fetch-dest": "empty",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
      },
    });
    sleep(0.5);

    response = http.post(
      "https://dev2.augmedix.com:50050/note-event",
      '{"notewriterEventsArray":"[{\\"providerId\\":1348,\\"logTime\\":1640160143304,\\"scribeControl\\":\\"Full Control\\",\\"action\\":\\"Patient Deleted.\\",\\"effect\\":\\"Patient ID: 824909\\"}]"}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json;charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://dev2.augmedix.com:50050/note-event",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      '{"records":[{"data":"{\\"insertId\\":\\"3iurx4v5hzmlzeo6\\",\\"timeStamp\\":1640160149285,\\"eventType\\":\\"scp_js_event\\",\\"userId\\":3473,\\"distinctId\\":3473,\\"scribeId\\":3473,\\"scribeEmail\\":\\"test_account_scribe_dev_03@augmedix.com\\",\\"scribeName\\":\\"test scribe\\",\\"vendorName\\":\\"AXBD\\",\\"scribeUid\\":\\"999999\\",\\"os\\":\\"Windows\\",\\"browser\\":\\"Chrome\\",\\"initialReferrer\\":\\"$direct\\",\\"initialReferringDomain\\":\\"$direct\\",\\"device\\":\\"\\",\\"currentUrl\\":\\"https://dev2.augmedix.com:8191/app/dashboard\\",\\"browserVersion\\":96,\\"screenHeight\\":864,\\"screenWidth\\":1536,\\"payload\\":{\\"eventName\\":\\"Logged Out\\",\\"eventTime\\":\\"2021-12-22T08:02:29.284Z\\",\\"focusTimeSec\\":0}}","partitionKey":"3iurx4v5hzmlzeo6"}]}',
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "content-type": "application/json; charset=UTF-8",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXVnbWVkaXgiLCJleHAiOjE2NDAyMDMxNTcsInVpZCI6MzQ3MywicmxzIjpbIlNDUklCRSJdfQ.OdoqRl4Uu96zA_o8kLubLdQ72YoHQQpaZcwmlQDgDfs",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://v79q0np4q4.execute-api.us-west-1.amazonaws.com/dev/streams/analytics-stream/records",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "authorization,content-type",
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get(
      "https://dev2.augmedix.com:50050/open/login/bootstrap",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          accept: "application/json, text/plain, */*",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev2.augmedix.com:8191",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
  });
}