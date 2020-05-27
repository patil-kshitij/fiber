window.BENCHMARK_DATA = {
  "lastUpdate": 1590613666246,
  "repoUrl": "https://github.com/gofiber/fiber",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "a327b3f3568baba916dcbe0e465046ab950b4648",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:03:54+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/a327b3f3568baba916dcbe0e465046ab950b4648"
        },
        "date": 1590221127681,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5908,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "201554 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 148,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8046382 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 66.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17356180 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 87.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13189620 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 70.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18025490 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 308,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3887755 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 93.3,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13916310 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7894350 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 145,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8788046 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8178201 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 492,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2451261 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1832,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "726921 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 191,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6408763 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 122,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9348828 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 51.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21001200 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 26.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45884270 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 136,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8740178 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 460,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2529094 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 606,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2011128 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 231,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5120035 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 239,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4547926 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27742423 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 125,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9352356 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 290,
            "unit": "ns/op\t     268 B/op\t       4 allocs/op",
            "extra": "5058030 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1219,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "834403 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1183,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 256,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4781695 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1070,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 60.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17040109 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "900676 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1164,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "971652 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 967815,
            "unit": "ns/op\t     157 B/op\t       2 allocs/op",
            "extra": "1279 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5662,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "197924 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5825,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "208052 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 161,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7448835 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "aec1bfccf0feb8b46a32fd5346ae03718557cea2",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:04:19+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/aec1bfccf0feb8b46a32fd5346ae03718557cea2"
        },
        "date": 1590221158280,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6882,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174276 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6944904 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15359299 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 104,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11851038 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 81.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14980516 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 346,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3476216 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 104,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11686802 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7630262 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7259845 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7401229 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 556,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2164884 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2086,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "501114 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 213,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5705665 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 145,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8344276 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 62.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18665475 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38710495 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 150,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8039445 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 510,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2316861 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 689,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1759981 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 262,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4757036 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 277,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4455441 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 47.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24284116 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8240382 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 312,
            "unit": "ns/op\t     248 B/op\t       4 allocs/op",
            "extra": "4479597 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1390,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "743244 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1331,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "904795 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 295,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4058607 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1227,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "904572 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 70.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16416525 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1309,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "908965 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1318,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "864550 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1098255,
            "unit": "ns/op\t     182 B/op\t       2 allocs/op",
            "extra": "1100 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6648,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173996 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6771,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "179304 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 187,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6787734 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "c756ad1a683e9f2efcbb3fddfb8f9b906b695c8d",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:04:25+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/c756ad1a683e9f2efcbb3fddfb8f9b906b695c8d"
        },
        "date": 1590221166147,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6594,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174668 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 192,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6116889 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 83.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13760398 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 113,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10824260 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 87.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13610191 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 383,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3192066 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 114,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11061216 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7133569 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 178,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6735625 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 176,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6590764 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 608,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2003412 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2402,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "548586 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 239,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4970832 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7370757 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16733985 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38619174 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 173,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7006621 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 533,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2213222 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 686,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1752673 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 283,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4395303 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 286,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4125919 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 57.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20597263 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7456862 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 306,
            "unit": "ns/op\t     242 B/op\t       4 allocs/op",
            "extra": "4646276 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1394,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "763916 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1345,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "873414 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 324,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3637936 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1271,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "972121 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16604815 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1347,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "861614 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1325,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "836100 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1103445,
            "unit": "ns/op\t     196 B/op\t       2 allocs/op",
            "extra": "1020 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6540,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "182323 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6805,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "170246 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 202,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6304389 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "dca25b9acb7f441c2ef776b3efcd503f9bfe4fa6",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:04:34+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/dca25b9acb7f441c2ef776b3efcd503f9bfe4fa6"
        },
        "date": 1590221168681,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5466,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "200353 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7582100 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 67.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15226286 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 96.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11941981 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 71.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15881466 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 296,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4140196 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 101,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13982180 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 135,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9005012 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8170423 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 139,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8270665 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 504,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2461436 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2003,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "702424 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 198,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6058598 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8076579 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 56.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20134260 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44529176 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 138,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9143799 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 443,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2591816 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 568,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2136828 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 255,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5159176 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 225,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4745187 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 49.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24922525 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 127,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9272284 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 258,
            "unit": "ns/op\t     242 B/op\t       4 allocs/op",
            "extra": "5805948 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1163,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000431 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1133,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 268,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4430234 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1027,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 53.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21126986 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1136,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1117782 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1106,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 907109,
            "unit": "ns/op\t     150 B/op\t       2 allocs/op",
            "extra": "1334 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5467,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "209133 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5324,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "217870 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 169,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6957451 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "7ae76de074d8616369bf390ca63a8aa4d4aaa002",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:04:39+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/7ae76de074d8616369bf390ca63a8aa4d4aaa002"
        },
        "date": 1590221184802,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6825,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "170893 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 176,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6817038 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15494589 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 103,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11824790 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 80.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15046272 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 344,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3415024 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 110,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11769265 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7522387 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7497993 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7564983 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 565,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2181003 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2087,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "586856 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 213,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5501140 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 145,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8408938 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 62.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19372512 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39796776 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 153,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7701271 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 507,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2354757 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 690,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1749742 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 262,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4547433 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 268,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4452776 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 48.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25071849 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8092066 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 309,
            "unit": "ns/op\t     242 B/op\t       4 allocs/op",
            "extra": "4625116 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1348,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "873399 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1294,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "874696 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 294,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4151847 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1211,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "974406 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 69.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16901713 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1285,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "908643 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1285,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "900694 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1101918,
            "unit": "ns/op\t     190 B/op\t       2 allocs/op",
            "extra": "1056 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6588,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "179948 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6659,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "177840 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 185,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6558902 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "5ebb13d98c5485c0bdc9fc70b490dbeb09f93257",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:04:45+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/5ebb13d98c5485c0bdc9fc70b490dbeb09f93257"
        },
        "date": 1590221186635,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6599,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "185773 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 190,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6300045 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 85.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14124558 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 111,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10695285 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 83.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14471541 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 370,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3100953 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 113,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10894684 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7355325 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6710812 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7073095 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 566,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2106282 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2170,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "639321 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 226,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5172242 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7490973 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 69.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15214497 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38092396 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 171,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7232805 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 530,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2285128 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 681,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1727148 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 270,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4551552 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 288,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4145827 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 60.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19911072 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7640660 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 289,
            "unit": "ns/op\t     239 B/op\t       4 allocs/op",
            "extra": "4703804 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1359,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "795535 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1328,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "889792 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 331,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3685837 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1227,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "920563 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 64.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17452468 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1273,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "919010 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1271,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "891787 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1092261,
            "unit": "ns/op\t     184 B/op\t       2 allocs/op",
            "extra": "1090 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6372,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "185662 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6302,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173372 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 197,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6122710 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "7b5180e8b2557ae3e88e853abea22a5633bd4bb6",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:04:54+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/7b5180e8b2557ae3e88e853abea22a5633bd4bb6"
        },
        "date": 1590221194710,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5980,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "181789 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 180,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6355780 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 78.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14838772 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 105,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11533654 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 77.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14738552 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 340,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3573669 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 106,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11653846 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7388038 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 165,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7085872 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7610882 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 555,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2153790 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2010,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "672686 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 213,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5494740 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7153735 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 65.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17829296 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39065472 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 158,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7494667 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 500,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2422608 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 644,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1824772 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 252,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4633720 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 264,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4425530 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 56.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21305120 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7797597 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 287,
            "unit": "ns/op\t     244 B/op\t       4 allocs/op",
            "extra": "4595220 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1289,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "841302 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1221,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "919922 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 320,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3895849 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18851499 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1198,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "902569 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1222,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "922978 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1025635,
            "unit": "ns/op\t     170 B/op\t       2 allocs/op",
            "extra": "1176 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5741,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "193251 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5929,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "201074 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 188,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6631088 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "3f316b21e53b92d72d5eb32a3f977754ba146157",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:05:04+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/3f316b21e53b92d72d5eb32a3f977754ba146157"
        },
        "date": 1590221198644,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5814,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "197121 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8107976 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 66.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18491883 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 88.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14052360 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 68.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18192164 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 303,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3876772 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 89,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13098943 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 135,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8793972 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8660469 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 139,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9313813 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 480,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2550097 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1881,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "804637 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 187,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6356600 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 125,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9394983 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 53.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23393176 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 25.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42451184 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 131,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9206106 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 447,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2653251 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 583,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1838612 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 220,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5191544 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 233,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4881944 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 42.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29558216 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 124,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10260262 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 271,
            "unit": "ns/op\t     257 B/op\t       4 allocs/op",
            "extra": "5346679 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1215,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "884662 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 245,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5050186 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1035,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 59.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18937914 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "988498 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "988124 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 968462,
            "unit": "ns/op\t     155 B/op\t       2 allocs/op",
            "extra": "1293 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5805,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "187167 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5753,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "201064 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 164,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7750779 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "0bc84eb91cd8d1dca85f2b2a0403f4686a1c77a4",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:05:16+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/0bc84eb91cd8d1dca85f2b2a0403f4686a1c77a4"
        },
        "date": 1590221214701,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6588,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "187134 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 150,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7542622 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 67.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14959532 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 92.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13859097 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 75.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15973107 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 311,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3658844 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 96.8,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12668262 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7943338 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8131251 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7688781 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 522,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2200461 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1978,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "694582 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 200,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6027873 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8887676 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 60.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19841587 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 28.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40547031 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 143,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8411968 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 448,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2456678 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 594,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2006151 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 244,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5076552 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 258,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4416183 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 45.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27050380 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 133,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8866191 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 299,
            "unit": "ns/op\t     241 B/op\t       4 allocs/op",
            "extra": "4656859 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1355,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "768421 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1233,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "970714 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 276,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4270426 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1207,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "965870 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16939849 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "910959 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1248,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "928224 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1083993,
            "unit": "ns/op\t     186 B/op\t       2 allocs/op",
            "extra": "1077 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6600,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "194910 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7739,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174814 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 180,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6260184 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "1614feaddb8371327e2d935234ec642aa7a39d7e",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:05:21+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/1614feaddb8371327e2d935234ec642aa7a39d7e"
        },
        "date": 1590221221135,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6305,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "179181 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6604652 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 77.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14497041 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 105,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11257684 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 80.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15098032 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 337,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3473900 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 104,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11546920 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7726622 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6797560 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 157,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7208397 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 544,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2221166 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2200,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "644654 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 212,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5537901 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 153,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7516918 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18684066 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41040518 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 159,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7932055 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 499,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2445626 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 624,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1811053 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 257,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4699300 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 259,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4629518 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 56.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20833449 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 150,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8056930 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 280,
            "unit": "ns/op\t     229 B/op\t       4 allocs/op",
            "extra": "4987354 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1272,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "819523 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1186,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 300,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3886852 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "885760 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 63.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17315575 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1217,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "961785 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "952683 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1005037,
            "unit": "ns/op\t     170 B/op\t       2 allocs/op",
            "extra": "1178 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6124,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "198310 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6130,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "187622 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 193,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6625688 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "b8da80d9997e79ca54a3343c7a0775b806cabb4e",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:05:27+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/b8da80d9997e79ca54a3343c7a0775b806cabb4e"
        },
        "date": 1590221224666,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6825,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173636 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7020873 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15640980 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 100,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11721778 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15148908 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 338,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3514214 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 103,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12191536 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7557319 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6239822 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 157,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7676710 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 549,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2186485 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2037,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "678720 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 211,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5565464 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8206634 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19354044 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 29.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40332814 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 153,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8108620 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 503,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2390684 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 664,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1780978 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 255,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4597508 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 272,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4507888 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 50.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23749137 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8292949 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 311,
            "unit": "ns/op\t     243 B/op\t       4 allocs/op",
            "extra": "4619768 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1351,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "773642 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1290,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "910048 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 293,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4159410 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1206,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "947905 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16985143 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1295,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "899739 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1311,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "905299 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1084393,
            "unit": "ns/op\t     189 B/op\t       2 allocs/op",
            "extra": "1062 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6569,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "157838 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6535,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "185556 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 184,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6958580 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "13ac6767e77890f7b2ff4261130b0ce17baafac9",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:06:28+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/13ac6767e77890f7b2ff4261130b0ce17baafac9"
        },
        "date": 1590221279831,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5346,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "199759 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8440382 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 67.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15571372 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 89.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14661435 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 67.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17228514 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 300,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4142433 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 89.5,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13881226 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 132,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9422665 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 126,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8721279 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 135,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8393490 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 441,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2680881 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1745,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "822493 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 176,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6148628 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 127,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10186722 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 50.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23762908 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 24.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47002138 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 126,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9450985 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 454,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2836611 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 558,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2169536 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 216,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5628428 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 225,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "5299268 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 38.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30874964 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 116,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10517493 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 268,
            "unit": "ns/op\t     260 B/op\t       4 allocs/op",
            "extra": "5259207 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1141,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "883722 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1049,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 243,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5038231 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1017,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 55.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20624485 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1093,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1080,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 874359,
            "unit": "ns/op\t     145 B/op\t       2 allocs/op",
            "extra": "1380 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5180,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "201530 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5334,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "225386 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 153,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7980153 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "49c703744cbe51b2b570c17c7187b97d9b2f4256",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:06:45+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/49c703744cbe51b2b570c17c7187b97d9b2f4256"
        },
        "date": 1590221298376,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5781,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "200782 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 152,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8381664 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 64.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19255677 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 84.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14901362 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 64.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18234577 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 282,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4079516 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 90.8,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "14040873 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8691478 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8176148 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 131,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8045392 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 433,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2731282 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1802,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "777804 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 173,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6740394 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 117,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9465663 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 50.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23977144 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 25.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50276888 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 126,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9496641 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 438,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2791050 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 557,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2114523 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 222,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5873404 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 233,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "5422842 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27734235 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 120,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9565390 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 258,
            "unit": "ns/op\t     260 B/op\t       4 allocs/op",
            "extra": "5264686 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1152,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1040763 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1126,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 242,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4911174 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1048,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1190648 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 55.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20052880 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1067,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1098,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 919088,
            "unit": "ns/op\t     151 B/op\t       2 allocs/op",
            "extra": "1324 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5470,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "213169 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5307,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "217923 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 162,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "8314392 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "8fad71a750dfab784ae5445831718a98bac73766",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:06:38+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/8fad71a750dfab784ae5445831718a98bac73766"
        },
        "date": 1590221298449,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6123,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173012 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 168,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6666517 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 74.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14503516 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 108,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10290328 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 79.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13903344 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 314,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3537801 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 105,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12103965 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 170,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7082234 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 175,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6569379 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7316676 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 551,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2013270 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2101,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "534817 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 217,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5293977 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7320661 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 62.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19082708 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41728336 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 159,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7741935 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 486,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2473950 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 634,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1868376 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 259,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4451208 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 264,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4569470 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 58.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21129361 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7590355 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 275,
            "unit": "ns/op\t     229 B/op\t       4 allocs/op",
            "extra": "4989595 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1318,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "783259 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1282,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "976674 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 302,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3996340 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1170,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 71.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18881275 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1225,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "907812 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1198,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "984810 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1008821,
            "unit": "ns/op\t     168 B/op\t       2 allocs/op",
            "extra": "1192 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6552,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "208447 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6457,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "191310 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 206,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6411987 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "59fcad317adde10a5e1dc24b5b087686ca14a685",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:06:59+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/59fcad317adde10a5e1dc24b5b087686ca14a685"
        },
        "date": 1590221334500,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6652,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168771 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 170,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7183717 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 77.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15432301 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 101,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11633557 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15250738 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 346,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3529362 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 102,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11926194 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7228856 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7430929 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7518691 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 534,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2275959 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2022,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "703436 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 210,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5817198 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 144,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8401354 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18903224 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 29.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40324490 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 148,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8285451 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 508,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2304810 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 672,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1751583 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 253,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4799811 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 265,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4522183 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 46.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25318732 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8353246 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 312,
            "unit": "ns/op\t     241 B/op\t       4 allocs/op",
            "extra": "4654518 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1362,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "775051 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1281,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "939800 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 287,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4127229 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1205,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "983860 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16901986 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1291,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "916354 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1311,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "910238 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1083600,
            "unit": "ns/op\t     184 B/op\t       2 allocs/op",
            "extra": "1089 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6460,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "181774 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6568,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173479 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 185,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6530664 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "c27fd7ae7438bbed5d69e71667edba99dc317115",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:06:32+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/c27fd7ae7438bbed5d69e71667edba99dc317115"
        },
        "date": 1590221349201,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6572,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "181195 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7122925 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 74.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16139485 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 98.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12357987 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 77.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14192767 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 333,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3670321 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 99.7,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12305936 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7841940 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7556610 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7840566 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 522,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2283891 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2025,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "658312 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 205,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5719339 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8719542 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20510274 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39699892 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 149,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8236921 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 498,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2387150 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 656,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1824650 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 249,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4683882 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 263,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4426251 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 47.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24686408 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8406474 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 304,
            "unit": "ns/op\t     254 B/op\t       4 allocs/op",
            "extra": "4344187 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1361,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "791064 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1309,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "938366 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 279,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4301518 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1177,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "943383 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17102338 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1261,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "990487 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1277,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "942346 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1052083,
            "unit": "ns/op\t     174 B/op\t       2 allocs/op",
            "extra": "1150 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6358,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "188592 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6428,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "181143 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 183,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7056067 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "02b373e43049cb98c8a1bf71b81803ffba4f6d20",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:08:11+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/02b373e43049cb98c8a1bf71b81803ffba4f6d20"
        },
        "date": 1590221392299,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6691,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "176275 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 197,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6270418 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 83.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14103565 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 112,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10575601 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 85.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14323899 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 363,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3294889 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 108,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11137264 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7014541 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6349430 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6949238 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 594,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2032914 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2304,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "607192 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 223,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5378834 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7239896 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 67.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16108239 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38992708 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 166,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7309459 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 533,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2309710 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 684,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1740064 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 279,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4233991 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 299,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4121949 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 60.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20370915 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7278751 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 303,
            "unit": "ns/op\t     240 B/op\t       4 allocs/op",
            "extra": "4675646 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1438,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "708061 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1338,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "822268 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 329,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3606740 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1263,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "886509 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17587945 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1377,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "876607 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1345,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "818317 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1080637,
            "unit": "ns/op\t     186 B/op\t       2 allocs/op",
            "extra": "1078 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6357,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "180552 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6678,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "167052 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 198,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5961386 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "5b5612c98c699e192e7ffea7a89aac21dd60549f",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:08:07+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/5b5612c98c699e192e7ffea7a89aac21dd60549f"
        },
        "date": 1590221391967,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6184,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "186142 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 153,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7791261 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 68.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16824632 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 92.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13008424 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 76.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17883044 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 352,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3431008 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 107,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11566192 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7236232 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6673190 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6930974 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 551,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2191485 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2071,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "683677 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 212,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5364445 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 144,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8286660 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 62.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19439731 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36786456 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 153,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7706709 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 520,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2337628 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 686,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1723792 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 265,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4623878 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 261,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4357500 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25519604 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8721664 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 300,
            "unit": "ns/op\t     235 B/op\t       4 allocs/op",
            "extra": "4825238 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1281,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "921925 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1219,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 270,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4541511 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 63.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16667490 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1211,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "889975 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1193,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1021506,
            "unit": "ns/op\t     181 B/op\t       2 allocs/op",
            "extra": "1107 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5957,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "194628 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6205,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "196498 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 180,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6663357 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "583f326be15b793b7bf730d2d6a6edfb75c3948a",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:08:17+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/583f326be15b793b7bf730d2d6a6edfb75c3948a"
        },
        "date": 1590221397171,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6903,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "178006 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6944271 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15445988 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 100,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12267552 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 79.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15034966 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 337,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3587382 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 102,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12037467 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7868617 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6979644 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7673557 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 535,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2265009 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2060,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "674739 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 214,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5837349 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8551243 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19711491 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38652051 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 148,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8222647 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 502,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2300719 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 663,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1781559 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 252,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4716748 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 270,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4472545 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 46.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25188622 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8321095 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 306,
            "unit": "ns/op\t     241 B/op\t       4 allocs/op",
            "extra": "4659816 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1387,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "767174 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1307,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "924538 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 289,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4095585 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1219,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "979113 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16483470 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1299,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "924949 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1313,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "886204 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1086803,
            "unit": "ns/op\t     183 B/op\t       2 allocs/op",
            "extra": "1092 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6481,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "177552 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6555,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "172515 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 184,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6645658 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "c422f90fbac4aa7710185273574280f3b4e70d7e",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:08:29+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/c422f90fbac4aa7710185273574280f3b4e70d7e"
        },
        "date": 1590221400776,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6590,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "161346 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7159993 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14821255 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 101,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12280862 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 77.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15261510 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 338,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3527110 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 103,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11757007 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7455012 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7745937 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 157,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7519009 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 564,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2238608 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1968,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "708708 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 211,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5792427 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8451813 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18845989 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 29.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42519114 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 149,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7732090 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 503,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2315852 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 659,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1780369 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 257,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4719753 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 261,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4528716 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 45.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "26304846 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8628630 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 306,
            "unit": "ns/op\t     242 B/op\t       4 allocs/op",
            "extra": "4630782 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1343,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "778945 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1282,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "913640 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 283,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4138616 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1205,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 70.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16524799 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1231,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "932556 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1272,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "940460 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1047807,
            "unit": "ns/op\t     178 B/op\t       2 allocs/op",
            "extra": "1128 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6274,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "184694 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6340,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "176775 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 184,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6858109 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "1e9cae81f82d36f2b547ae467834665ff8b3c91e",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:08:36+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/1e9cae81f82d36f2b547ae467834665ff8b3c91e"
        },
        "date": 1590221418856,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6951,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168158 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6942063 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 78.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15286974 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 103,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11304494 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 81.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13651016 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 352,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3268712 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 107,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11366322 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7308483 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7083523 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 165,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7155141 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 572,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2169390 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2075,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "669802 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 218,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5660692 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 148,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7818897 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18988707 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37555506 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 153,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8128321 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 511,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2311398 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 696,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1680277 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 261,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4488423 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 276,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4402676 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 50.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23766582 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8189782 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 320,
            "unit": "ns/op\t     249 B/op\t       4 allocs/op",
            "extra": "4460414 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1402,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "758926 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1319,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "912128 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 297,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4099146 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1234,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "983841 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 70.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16132360 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1344,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "880957 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1321,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "840502 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1111316,
            "unit": "ns/op\t     185 B/op\t       2 allocs/op",
            "extra": "1080 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6793,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "180804 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6686,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173911 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 187,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6813622 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "e66afea4c07bc3c98c34ad80aa096e29ad59d5e7",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:08:41+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/e66afea4c07bc3c98c34ad80aa096e29ad59d5e7"
        },
        "date": 1590221466703,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6643,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "184905 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6224947 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 81.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14535877 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 107,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11331289 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 84.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13531500 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 365,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3398859 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 109,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11776364 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6966891 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 178,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6857890 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7017078 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 571,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2071520 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2296,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "572241 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 231,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5156979 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7624730 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 67.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17587412 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "35982333 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 171,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7428663 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 518,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2329119 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 669,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1746750 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 277,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4527778 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 286,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4283581 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 59.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20513244 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7547887 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 298,
            "unit": "ns/op\t     239 B/op\t       4 allocs/op",
            "extra": "4725936 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1380,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "725940 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1274,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "961918 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 326,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3507949 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1242,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "959626 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15641511 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1314,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1314,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "864405 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1117316,
            "unit": "ns/op\t     202 B/op\t       2 allocs/op",
            "extra": "991 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6647,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173671 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6563,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "166560 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 199,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6023516 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "071fec42feee82e04e0ab5bf5970e84808fdb50f",
          "message": "Merge pull request #399 from Fenny/master\n\n☄️ v1.10.0",
          "timestamp": "2020-05-23T09:58:31+02:00",
          "tree_id": "12a2768cf756eae8210ba53b0cb43d601589b2f7",
          "url": "https://github.com/gofiber/fiber/commit/071fec42feee82e04e0ab5bf5970e84808fdb50f"
        },
        "date": 1590221846056,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6840,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "171388 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 193,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6164066 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 85.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14010475 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 114,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10567923 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13683459 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 368,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3196201 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 109,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11044017 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7281742 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 178,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6614444 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7104496 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 554,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2161341 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2121,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "634596 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 207,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5712840 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7847458 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 64.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18143486 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37241127 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 163,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7256071 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 526,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2225781 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 682,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1749711 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 277,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4441910 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 281,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4289902 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 60.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19673821 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7330866 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 295,
            "unit": "ns/op\t     245 B/op\t       4 allocs/op",
            "extra": "4551703 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1388,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "780181 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1337,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "893109 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 332,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3643240 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1242,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "943824 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 70.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17080225 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1312,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "897446 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1310,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "859245 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1111090,
            "unit": "ns/op\t     185 B/op\t       2 allocs/op",
            "extra": "1083 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6579,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "177858 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6678,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168696 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 200,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6227306 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25568509ce8a4353267c7be624d88c1d2ccedf09",
          "message": "Merge pull request #402 from Fenny/master\n\nReduce pre allocated memory, fix Etag benchmark, cleanup unused stuff",
          "timestamp": "2020-05-23T15:05:59+02:00",
          "tree_id": "8100e45065c9123e61f4a7626f5f6b55a55cb39f",
          "url": "https://github.com/gofiber/fiber/commit/25568509ce8a4353267c7be624d88c1d2ccedf09"
        },
        "date": 1590239244173,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7029,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "171033 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6958,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "170164 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6974134 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 78.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15252714 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 103,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11842718 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 79.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15171691 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 345,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3469423 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 109,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10998738 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7503802 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7346085 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7411100 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 551,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2091404 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2186,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "561220 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 227,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5433220 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8171557 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 62.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19263528 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38371462 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 163,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7552465 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 541,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2200629 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 725,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1675021 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 274,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4453101 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 297,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4075852 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 49.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24346780 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 144,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8357721 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 341,
            "unit": "ns/op\t     251 B/op\t       4 allocs/op",
            "extra": "3535909 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1322,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "892791 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1230,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "932779 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 291,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4075387 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "979968 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 67.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18055885 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1210,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "966361 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1252,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "897747 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1064329,
            "unit": "ns/op\t     180 B/op\t       2 allocs/op",
            "extra": "1114 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7051,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168742 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7123,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "162848 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 196,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6238957 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cdea1c806aa146c8aa45b5785eaf2e17c40a9f2c",
          "message": "Merge pull request #406 from Fenny/master\n\nHot fix delimiter miss match, parser needs fix",
          "timestamp": "2020-05-23T18:42:29-04:00",
          "tree_id": "4bc232c2eb72ef87c9a86d3987dcd3fcf0599a3c",
          "url": "https://github.com/gofiber/fiber/commit/cdea1c806aa146c8aa45b5785eaf2e17c40a9f2c"
        },
        "date": 1590273833149,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6029,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "210688 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6178,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "201342 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 148,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8216066 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 67.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18467043 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 87.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13042873 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 67.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17361658 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 296,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3996176 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 88.9,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13576927 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 139,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8907838 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9128516 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 135,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7972208 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 481,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2533334 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1797,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "722389 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 195,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5932870 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 123,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8614941 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 56.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23890554 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 25.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41369850 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 135,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9371680 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 453,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2732350 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 606,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1996568 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 231,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5116122 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 252,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4771114 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 40.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28198203 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 121,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10220020 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 274,
            "unit": "ns/op\t     252 B/op\t       4 allocs/op",
            "extra": "4390412 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1132,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "892770 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1039,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 240,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5177130 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 962,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1273982 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 56.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21657040 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1035,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 994,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1243413 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 878439,
            "unit": "ns/op\t     144 B/op\t       2 allocs/op",
            "extra": "1392 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5808,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "198697 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5858,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "195193 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 157,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7702484 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3ab0e90802d448f60a795068c5fa5540b5b9dcd",
          "message": "Merge pull request #407 from ReneWerner87/panic_on_optional_param\n\n🐞 Panic on \":param\" #405",
          "timestamp": "2020-05-24T05:47:42-04:00",
          "tree_id": "893daf6fb9cf8d0bdb5010c3f1516ec389870c14",
          "url": "https://github.com/gofiber/fiber/commit/b3ab0e90802d448f60a795068c5fa5540b5b9dcd"
        },
        "date": 1590313745859,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5567,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "180397 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 5580,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "223207 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8357325 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 61.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21351387 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 78.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15397273 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 62.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17636956 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 277,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4102557 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 94.3,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12028449 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 133,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9079516 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 130,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9007264 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 131,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10284445 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 459,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2745081 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1693,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "738260 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 176,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6701473 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 118,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10221072 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 52.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23975140 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52688847 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 131,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8736580 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 471,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2874726 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 604,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1874149 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 227,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5219218 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 249,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "5050867 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 42.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28825471 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 125,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10620037 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 290,
            "unit": "ns/op\t     229 B/op\t       4 allocs/op",
            "extra": "4005363 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1119,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1112,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 301,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4004100 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1044,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 59.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19341325 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1033,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1139348 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1088,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 980581,
            "unit": "ns/op\t     150 B/op\t       2 allocs/op",
            "extra": "1334 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6254,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173269 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6688,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "179209 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 153,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7017324 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a1896b7d615fa743ab910459c9bbd2cbbc9eae0e",
          "message": "Merge pull request #408 from ReneWerner87/panic_on_optional_param\n\nFix error on static \":param\" #405",
          "timestamp": "2020-05-24T08:11:32-04:00",
          "tree_id": "e3c7afcebeeb28d1e5d706635785bd528f9d856b",
          "url": "https://github.com/gofiber/fiber/commit/a1896b7d615fa743ab910459c9bbd2cbbc9eae0e"
        },
        "date": 1590322377828,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6265,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "180392 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6303,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "193436 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6911764 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 77.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17014519 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 102,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12417642 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 82.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13740966 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 341,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3673677 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 103,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11005206 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 148,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7852528 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7648480 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7478238 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 563,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2314527 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2069,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "610164 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 227,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5452770 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 152,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7901478 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 68.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18422763 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 29.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36820556 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 158,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7292584 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 496,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2357323 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 652,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1932870 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 259,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4399407 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 269,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4348524 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 51.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23275207 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8650893 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 275,
            "unit": "ns/op\t     251 B/op\t       4 allocs/op",
            "extra": "4412640 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1161,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "897636 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "997272 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 311,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4006653 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1056,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 58.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20022974 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1125,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1153,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 975504,
            "unit": "ns/op\t     165 B/op\t       2 allocs/op",
            "extra": "1215 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6359,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "195152 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6016,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "201496 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 187,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6643285 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "73a29062ae6ad300147d9b8063275c644184e1b2",
          "message": "Merge pull request #409 from ReneWerner87/panic_on_optional_param\n\nPanic on static \":param\" path #405",
          "timestamp": "2020-05-24T08:54:58-04:00",
          "tree_id": "bace46735dfdd979ff804c2bbff6f47fed37efa7",
          "url": "https://github.com/gofiber/fiber/commit/73a29062ae6ad300147d9b8063275c644184e1b2"
        },
        "date": 1590324983646,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6600,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "190420 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6686,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174628 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7737507 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 70.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14772694 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 92.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13744993 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 72.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16273603 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 312,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3896310 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 100,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12370681 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 152,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8145465 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 157,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7323606 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 153,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7337913 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 546,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2177193 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2021,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "556399 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 213,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5403003 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 136,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9010512 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 60.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20577067 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 27.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39204764 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 145,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8343739 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 517,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2412728 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 684,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1734204 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 259,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4506010 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 281,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4333591 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 45.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "26018214 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9109659 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 322,
            "unit": "ns/op\t     250 B/op\t       4 allocs/op",
            "extra": "3545678 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1254,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "917125 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 292,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4125889 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1087,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1120527 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 59.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19958665 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 18.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "63605341 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "289982919 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1222,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "978602 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1251,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "955788 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1051239,
            "unit": "ns/op\t     176 B/op\t       2 allocs/op",
            "extra": "1140 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6634,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "157136 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6790,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "184809 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 184,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6574399 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8b8fdfb35c4dd68bd764e7e9362d704145a56db",
          "message": "Add Handler type (#410)\n\n* Add new supporter\r\n* Add new test condition\r\n* Add Handler Type",
          "timestamp": "2020-05-24T16:02:21+02:00",
          "tree_id": "ecc0ca80589cb60d7279cb2b8b036198b9f4dc3d",
          "url": "https://github.com/gofiber/fiber/commit/e8b8fdfb35c4dd68bd764e7e9362d704145a56db"
        },
        "date": 1590329037352,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6046,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "205047 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6332,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "206756 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 150,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7497595 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 69.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16179696 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 88.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13716735 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 71.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15884607 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 318,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3867324 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 92.1,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11904986 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9010078 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 140,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7576983 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8838789 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 487,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2382585 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1785,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "595888 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 194,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6242706 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 134,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8677268 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 55.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22266532 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 26.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48925347 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 142,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8985025 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 465,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2576008 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 647,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1909778 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 242,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5056560 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 253,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4889035 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 47.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25736155 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 129,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9682174 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 277,
            "unit": "ns/op\t     242 B/op\t       4 allocs/op",
            "extra": "4634991 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1143,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1084,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 258,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4509454 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1021,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 56.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20429971 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 17.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58644014 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "305822737 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1042,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "976083 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1035,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 938121,
            "unit": "ns/op\t     157 B/op\t       2 allocs/op",
            "extra": "1276 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6032,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "177879 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6333,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "187387 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 170,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7270345 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "02b4061b447a5eb1c4a4d1299e2d0e9523528e84",
          "message": "Add Handler & Templates interface (#412)\n\n* Add new supporter\r\n* Add new test condition\r\n* Add Handler Type\r\n* Update Templates Interface",
          "timestamp": "2020-05-25T13:31:20+02:00",
          "tree_id": "8532e5bf8554df5c88c3355a650ca8e6eb11fb87",
          "url": "https://github.com/gofiber/fiber/commit/02b4061b447a5eb1c4a4d1299e2d0e9523528e84"
        },
        "date": 1590406377453,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7215,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174621 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7121,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "169497 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 199,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5903671 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 89.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13870660 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 119,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10464064 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 91.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12677215 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 386,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3073507 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 119,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10143578 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6758824 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 186,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6501931 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 175,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6886214 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 650,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "1862478 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2256,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "554638 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 251,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4775796 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 176,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6601830 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 75.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15354175 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 33.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37332776 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 194,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6494467 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 560,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2096877 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 734,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1653246 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 297,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4074936 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 309,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4080937 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 60.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19828474 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7286391 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 315,
            "unit": "ns/op\t     246 B/op\t       4 allocs/op",
            "extra": "3636984 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1333,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "864831 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1340,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "830545 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 335,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3653810 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1282,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "911524 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18105225 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 21.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55086541 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.45,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "275237451 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1375,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "842682 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1353,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "852741 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1156858,
            "unit": "ns/op\t     199 B/op\t       2 allocs/op",
            "extra": "1006 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7088,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "169495 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7165,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "169705 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 211,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5629922 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2c027e715258f278a746e6cb40e2315bd2ee377",
          "message": "Small changes (#415)\n\n* Update template examples\r\n\r\n* Update fasthttp to v1.13.1\r\n\r\nCo-Authored-By: Thomas van Vugt <thomasvvugt@users.noreply.github.com>\r\n\r\n* Cookie SameSite defaults to Lax\r\n\r\nCo-Authored-By: Thomas van Vugt <thomasvvugt@users.noreply.github.com>\r\nCo-Authored-By: Queru <pascal@queru.net>\r\n\r\n* Fix router bug\r\n\r\nCo-Authored-By: RW <renewerner87@googlemail.com>\r\n\r\n* Remove unused code\r\n\r\nCo-Authored-By: RW <renewerner87@googlemail.com>\r\n\r\nCo-authored-by: Thomas van Vugt <thomasvvugt@users.noreply.github.com>\r\nCo-authored-by: Queru <pascal@queru.net>\r\nCo-authored-by: RW <renewerner87@googlemail.com>",
          "timestamp": "2020-05-27T10:22:01+02:00",
          "tree_id": "b81d876e4a019ebbac6b80afa50df1533e19e525",
          "url": "https://github.com/gofiber/fiber/commit/f2c027e715258f278a746e6cb40e2315bd2ee377"
        },
        "date": 1590567825897,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7430,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "147462 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7502,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "151586 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 208,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5871662 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 89.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13119732 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 121,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9985495 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 97.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12237968 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 373,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3248650 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 122,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "9872228 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 194,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6284635 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 189,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6330150 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6752020 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 571,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2099086 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2192,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "489775 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 249,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4917182 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 175,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6766088 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 73.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16353150 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 34.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "35230467 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 187,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6083907 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 584,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2062518 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 748,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1629578 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 313,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "3936873 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 316,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3715630 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 61.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17479040 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7242024 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 328,
            "unit": "ns/op\t     251 B/op\t       4 allocs/op",
            "extra": "3524502 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1392,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "835782 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1345,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "826314 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 358,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3406532 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1253,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "890544 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 70.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17189142 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 22.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55086918 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "246169815 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1322,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "859414 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1327,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "828614 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1194106,
            "unit": "ns/op\t     195 B/op\t       2 allocs/op",
            "extra": "1026 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7301,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168524 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7214,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "149324 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 213,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5802204 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2c027e715258f278a746e6cb40e2315bd2ee377",
          "message": "Small changes (#415)\n\n* Update template examples\r\n\r\n* Update fasthttp to v1.13.1\r\n\r\nCo-Authored-By: Thomas van Vugt <thomasvvugt@users.noreply.github.com>\r\n\r\n* Cookie SameSite defaults to Lax\r\n\r\nCo-Authored-By: Thomas van Vugt <thomasvvugt@users.noreply.github.com>\r\nCo-Authored-By: Queru <pascal@queru.net>\r\n\r\n* Fix router bug\r\n\r\nCo-Authored-By: RW <renewerner87@googlemail.com>\r\n\r\n* Remove unused code\r\n\r\nCo-Authored-By: RW <renewerner87@googlemail.com>\r\n\r\nCo-authored-by: Thomas van Vugt <thomasvvugt@users.noreply.github.com>\r\nCo-authored-by: Queru <pascal@queru.net>\r\nCo-authored-by: RW <renewerner87@googlemail.com>",
          "timestamp": "2020-05-27T10:22:01+02:00",
          "tree_id": "b81d876e4a019ebbac6b80afa50df1533e19e525",
          "url": "https://github.com/gofiber/fiber/commit/f2c027e715258f278a746e6cb40e2315bd2ee377"
        },
        "date": 1590567992541,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6551,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "171439 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6743,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "177526 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 191,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6237942 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 81.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15072429 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 112,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11079007 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 84.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14211128 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 358,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3467212 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 114,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10465390 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6749799 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 180,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6631082 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 177,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7054178 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 539,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2067904 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2128,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "548712 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 240,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5247926 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 168,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6763435 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 70.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17185803 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 32.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37941918 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 181,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6664236 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 554,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2123618 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 733,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1673954 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 290,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4166726 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 298,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3966909 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 60.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19560769 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7411687 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 292,
            "unit": "ns/op\t     245 B/op\t       4 allocs/op",
            "extra": "3643684 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1262,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "933174 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1235,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "903020 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 332,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3645964 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1153,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "961845 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 64.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17476702 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 21.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55946844 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "245188364 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1221,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "932187 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1212,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "944498 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1073336,
            "unit": "ns/op\t     179 B/op\t       2 allocs/op",
            "extra": "1117 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6969,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173722 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6648,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "179616 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 194,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6324334 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cd55804b7dcf33c078cd1e435090d72533e1e15",
          "message": "Merge pull request #418 from Fenny/master\n\nFix partial wildcard in Static",
          "timestamp": "2020-05-27T17:04:33-04:00",
          "tree_id": "f801b78eb7aafef05296f76cbdec9436230b0c4f",
          "url": "https://github.com/gofiber/fiber/commit/1cd55804b7dcf33c078cd1e435090d72533e1e15"
        },
        "date": 1590613562963,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6898,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "164840 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6863,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "175752 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 165,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7229065 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 75.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15760374 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 99.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11526022 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 78.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15570862 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 336,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3567600 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 105,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11898326 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 164,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7142361 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7689441 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7560954 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 547,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2247393 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2156,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "468049 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 219,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5443192 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8223805 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 65.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17759584 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 29.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39231627 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 159,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7470003 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 519,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2293101 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 689,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1739497 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 259,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4452880 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 285,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4196986 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 46.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25830506 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8530190 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 316,
            "unit": "ns/op\t     247 B/op\t       4 allocs/op",
            "extra": "3606442 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1280,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "925573 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1198,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "937869 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 168,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "7146162 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1108,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 63.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19252178 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59829741 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "270726764 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1200,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1221,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "980700 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1046316,
            "unit": "ns/op\t     189 B/op\t       2 allocs/op",
            "extra": "1062 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6928,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "161739 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7041,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "176566 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 186,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6475915 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cd55804b7dcf33c078cd1e435090d72533e1e15",
          "message": "Merge pull request #418 from Fenny/master\n\nFix partial wildcard in Static",
          "timestamp": "2020-05-27T17:04:33-04:00",
          "tree_id": "f801b78eb7aafef05296f76cbdec9436230b0c4f",
          "url": "https://github.com/gofiber/fiber/commit/1cd55804b7dcf33c078cd1e435090d72533e1e15"
        },
        "date": 1590613624704,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7057,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "157486 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7107,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174876 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5929700 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 83.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14749753 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 115,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10473444 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 88.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13558128 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 363,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3189030 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 123,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10062302 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6636969 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7011324 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7093707 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 544,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2149989 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2163,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "508930 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 236,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5055860 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6972954 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 69.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16837473 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36557281 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 172,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7227313 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 564,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2204835 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 702,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1697564 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 282,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4518336 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 295,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3971607 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 56.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19438110 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 157,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7768700 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 285,
            "unit": "ns/op\t     233 B/op\t       4 allocs/op",
            "extra": "3898320 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1294,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "873050 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1255,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "906494 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 198,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5995203 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 71.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16936402 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "61409661 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "275492930 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1252,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "978369 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1248,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "930456 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1078554,
            "unit": "ns/op\t     182 B/op\t       2 allocs/op",
            "extra": "1098 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6698,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "156829 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6801,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "167877 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 200,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6232092 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edb10010da90edcf7d35b5988cd40e33d52d35d8",
          "message": "Update app.go",
          "timestamp": "2020-05-27T23:05:47+02:00",
          "tree_id": "276d09c082785d34067469f22c28eb652c7cd7e8",
          "url": "https://github.com/gofiber/fiber/commit/edb10010da90edcf7d35b5988cd40e33d52d35d8"
        },
        "date": 1590613652016,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7159,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "155275 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6940,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "177937 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7021231 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16208154 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 99.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11946069 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 78.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14895499 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 332,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3458418 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 106,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11143773 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7431333 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7574985 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7691296 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 554,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2100883 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2107,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "558622 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 219,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5559913 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8436666 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 66.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18662757 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39971463 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 153,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8030001 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 541,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2225377 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 738,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1610343 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 285,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4473032 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 295,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4212079 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 48.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25839020 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8290126 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 338,
            "unit": "ns/op\t     254 B/op\t       4 allocs/op",
            "extra": "3471375 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1289,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "910796 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1196,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "991123 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 181,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "6951074 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1129,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 65.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18594142 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 19.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "60753633 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "262877634 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1223,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "953268 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1207,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "992985 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1078393,
            "unit": "ns/op\t     178 B/op\t       2 allocs/op",
            "extra": "1126 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7207,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168776 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7123,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "167694 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 189,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6219537 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edb10010da90edcf7d35b5988cd40e33d52d35d8",
          "message": "Update app.go",
          "timestamp": "2020-05-27T23:05:47+02:00",
          "tree_id": "276d09c082785d34067469f22c28eb652c7cd7e8",
          "url": "https://github.com/gofiber/fiber/commit/edb10010da90edcf7d35b5988cd40e33d52d35d8"
        },
        "date": 1590613665189,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7078,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "163388 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7210,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "182952 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 196,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5531990 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 88.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13075063 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 116,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10359805 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 87.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12703825 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 391,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2971606 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 122,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "9612846 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 178,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6911642 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 195,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5842502 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6177829 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 600,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2002868 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2140,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "523383 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 247,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4855467 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 180,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7321863 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 75.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17165931 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 33.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36756987 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 182,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6296329 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 574,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2147415 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 780,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1578805 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 292,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "3735231 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 302,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3881599 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 64.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18780822 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7515486 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 329,
            "unit": "ns/op\t     245 B/op\t       4 allocs/op",
            "extra": "3651298 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1449,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "762741 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1374,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "907676 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 197,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5542719 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1232,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 72.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16887823 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 23.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48599545 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "257326538 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1382,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "811347 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1352,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "845721 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1108756,
            "unit": "ns/op\t     182 B/op\t       2 allocs/op",
            "extra": "1099 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7270,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "163262 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7158,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173646 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 211,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5543809 times\n2 procs"
          }
        ]
      }
    ]
  }
}