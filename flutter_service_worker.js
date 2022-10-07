'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e76619f519c54e2dc151b269eb8b3bc0",
".git/config": "e5e6f7896fe1a3458b6165e07a049991",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "30624d6e52ce686bd77ed721fc1aedd4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2378880d4566f86d3dd3655217fd7928",
".git/logs/refs/heads/main": "ea87d7ca2cd8849a59f6ce712947085a",
".git/logs/refs/remotes/origin/main": "2e1ad60c1b508995b37d056222798f4b",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1d/a9720f68220a8f9fe2100a8bf7ee6516edb3a5": "f59e02cc6764b3712c84dea4eae3cace",
".git/objects/22/899766513e923a07d93051d1ee5978e2d525d4": "30023cba68eeae094408e6ba7b8af9e6",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/f71b00a127060d4a7f468d37332e60ce89d921": "7e8fc4ed7e73e89d50dd6056c3c2cf37",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/fb5e3a56795d82bf5573810d40839f49bcf4e2": "3ea9452f3e646974e3d6fe7c995f5135",
".git/objects/55/4a82b00590e3fd77ad6736cf22aaac5e358044": "157856f82c7142bffafcc3b9b596b5d4",
".git/objects/56/042a7bf187f2607daed78ceedf27c25939c426": "8a5b744a1ceef19aa35ca4fafd5bb355",
".git/objects/5f/4c51e283d67fe3496e99d5c5794fbde0c11554": "82d7272920f3cf13642ef40583a33858",
".git/objects/61/231590228da9422a67a6dd9e59c144f334d844": "be67928f633d2e3148a6c97abdde59fb",
".git/objects/74/9254aed825b4c322b9192926634eb23d215ab5": "33ef3a47602566b0220c28a162d18feb",
".git/objects/75/3403432b3a1ade7886d51cf38f3efd233855b5": "7b1904997ca28844145522a71c081512",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/84/2a988eb3710285a40398ff11a0e69644928d06": "83ec4877edf90861079b079cb8817ba0",
".git/objects/8f/d6461a5069a5a72f2349c2e14862e1999f4613": "acf15e987120fb4463cb29869b80c961",
".git/objects/96/c536d24e999eb7e1e145ea0d7ca68ce65a0f92": "e954bf4a6da2f57df250c42ba50636e4",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/99/2c858b3a459fb165bc44f3b02a3f31cd763531": "d4ccc647151e7ce2ace6bb76214f7092",
".git/objects/9e/4717a4a716afb30080c9e88045ffce40942f9b": "5df1a459ecfdbcccce102a850c65ec08",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/dae50119ba11170d15d4e03a47e7ab4199cff5": "32607df7db28ac03aac9b897cca07885",
".git/objects/a5/fd1b3fa68afef6479a89a39029446c26a90427": "0e7744355b2d542e2dea3cc95736a996",
".git/objects/ae/857edc52f4878786a126ec1d28f54c42d3e069": "fb3dd5be0e65ec94e60dfd1a6aafb48a",
".git/objects/b2/4fb43177089ead7b98a93c4cf9ec5d9ec7037d": "f599ce6e6a9ccd46b175e0d63d47d459",
".git/objects/b2/fe13f7e100e4d16fb3325c097d29d1342c09b3": "956c3c8320fb82a91155cc8456857bd5",
".git/objects/bf/5b325c33d09f715a1184577f7b037aa9ff0342": "2905f9094a6495c03625b9b3c25373b8",
".git/objects/c0/cddb30cb630dab1b4a2ba3d82c1f1ae8783abc": "9499e69729bda5063fc4c9b70400a8c8",
".git/objects/c2/6dcecde30773687251a35c6cface6f4260f28b": "5418711cce8b410f91a0627255f7c925",
".git/objects/c2/78367b8248dedb8504b02664c68d237d0dbca5": "34ca32b6453776ea26b56bf8081d1ffc",
".git/objects/cb/eefb31882fe8cc890619392228ad133210ab02": "5e51cb6d6badb95aa26073f9a533009b",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d4/feb5269fe29d40849ca52f6580101172744a38": "08f62444f6b84bf4dd05e7cc4faee0b1",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/40c683366c3b852129fb98ed35018beec06498": "fa292454b6c7f0382daa4c0355e27867",
".git/objects/f4/22dc7f1a0d750400073c0629156cb1470c154d": "4ba75bad30037f3ab2d62991b62e50ef",
".git/refs/heads/main": "e3233841be9fa291d577eb7350c17605",
".git/refs/remotes/origin/main": "e3233841be9fa291d577eb7350c17605",
"assets/AssetManifest.json": "7ccbe5cf222f3efb24b0fda6df1b8381",
"assets/FontManifest.json": "ec8a82ec184cf6cd45fbf68291b1fe6b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/profile_pic.png": "8be4761a526ff75ab3bb5ac68ad65fbb",
"assets/NOTICES": "b4891375c517df8420159015fde10552",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_donation_buttons/assets/coffe.png": "2159a0ac84d49abbdb353eaaf502eeb8",
"assets/packages/flutter_donation_buttons/assets/coffe2.png": "1446f4880b85af9912f34dd705a371f5",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "6f12ee07cbfada68d794ba108fed5106",
"assets/shaders/ink_sparkle.frag": "9bd5d42faca54fc1631267926c75fd0b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "847c1a2adbdab8f48cf9253b572a788e",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "351e5d3a8337cfbc819da547c6e64fc3",
"icons/Icon-512.png": "4c563fe13208086c02abf55e1a1531a8",
"icons/Icon-maskable-192.png": "351e5d3a8337cfbc819da547c6e64fc3",
"icons/Icon-maskable-512.png": "4c563fe13208086c02abf55e1a1531a8",
"index.html": "44db29c19d2e676e0ad2202804823735",
"/": "44db29c19d2e676e0ad2202804823735",
"main.dart.js": "ae7a11aa78f3e9cdaa9e0d7149dae5aa",
"manifest.json": "2303b8b0303d122c6e7ba4c394388492",
"version.json": "9f583fe74d027e5a595143dd331bef72"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
