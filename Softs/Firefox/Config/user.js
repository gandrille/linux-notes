// =================
// GENERAL / STARTUP
// =================

// THE ONLINE DOCUMENTATION (INSIDE FF SOURCE CODE)
// https://hg.mozilla.org/mozilla-central/file/tip/modules/libpref/init/StaticPrefList.yaml

// Client Side Decorations (CSD)
user_pref("browser.tabs.drawInTitlebar", true);

// New Window
// user_pref("browser.startup.homepage", "about:home");

// Startup
// 0 Start with a blank page (about:blank).
// 1 Start with the web page(s) defined as the home page(s).
// 2 Load the last visited page.
// 3 Resume the previous browser session
user_pref("browser.startup.page", 1);
// Warm on quit
user_pref("browser.sessionstore.warnOnQuit", true);
// Check that Firefox is the default browser
user_pref("browser.shell.checkDefaultBrowser", true);


// ============================
// FIREFOX NEW TAB PAGE CONTENT
// ============================

// Searches
user_pref("browser.newtabpage.activity-stream.showSearch", true);
// Most visited websites
user_pref("browser.newtabpage.activity-stream.feeds.topsites", true);
// Highlights (key elements)
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
// News feed
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); 


// ==============
// SEARCH ENGINES
// ==============

// Moteurs de recherche accessibles en un clic désactivés
user_pref("browser.search.hiddenOneOffs", "Google,Bing,Amazon.fr,eBay");


// ========================
// GENERAL PRIVACY SETTINGS
// ========================

// telemetry is now disabled
user_pref("datareporting.healthreport.uploadEnabled", false);

user_pref("browser.contentblocking.category", "strict");
// For manual configuration -> browser.contentblocking.category = custom
// user_pref("network.cookie.cookieBehavior", 4);
// user_pref("privacy.trackingprotection.enabled", true);
// user_pref("privacy.trackingprotection.pbmode.enabled", true);
// user_pref("privacy.trackingprotection.socialtracking.enabled", true);
// user_pref("privacy.trackingprotection.cryptomining.enabled", true);
// user_pref("privacy.trackingprotection.fingerprinting.enabled", true);


// ============
// HTTPS CONFIG
// ============

// General on/off switch. NOTE: if dom.security.https_only_mode is true, no need to enable dom.security.https_only_mode_pbm
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_pbm", false);

// For mozilla reporting (telemety)
user_pref("dom.security.https_only_mode_ever_enabled", true);
user_pref("dom.security.https_only_mode_ever_enabled_pbm", true);

// no upgrade on local addresses
user_pref("dom.security.https_only_mode.upgrade_local", false);
// upgrade on onion network as well
user_pref("dom.security.https_only_mode.upgrade_onion", true);

// if true, send HTTP (NOT HTTPS!) requests in background (less secure but improves timeout)
user_pref("dom.security.https_only_mode_send_http_background_request", true);


// ===============================
// SPECIFIC DNS CONFIG FOR FIREFOX
// ===============================

// In order to check the config
// https://www.cloudflare.com/ssl/encrypted-sni/

// Trusted Recursive Resolver (TRR) aka DoH
// see https://wiki.mozilla.org/Trusted_Recursive_Resolver
// mode
// 0 - Off (default). use standard native resolving only (don't use TRR at all)
// 1 - Reserved (used to be Race mode)
// 2 - First. Use TRR first, and only if the name resolve fails use the native resolver as a fallback.
// 3 - Only. Only use TRR, never use the native resolver.
// 4 - Reserved (used to be Shadow mode)
// 5 - Off by choice. This is the same as 0 but marks it as done by choice and not done by default.
//user_pref("network.trr.mode", 2);
// DNS server to be used. Ask your DNS provider ! or see https://github.com/curl/curl/wiki/DNS-over-HTTPS
//user_pref("network.trr.uri", "https://mozilla.cloudflare-dns.com/dns-query");
// to speedup, and in case network.trr.uri native resolution fails
//user_pref("network.trr.bootstrapAddress", "1.1.1.1");

// Encrypted Server Name Indication
//user_pref("network.security.esni.enabled", true);


// ===========================
// First-Party Isolation (FPI)
// ===========================

// First-Party Isolation (FPI) - BREAKS TOO MANY WEBSITES end 2019
// FPI works by separating cookies on a per-domain basis
// global switch
// user_pref("privacy.firstparty.isolate", true);
// to block postMessage across different first party domains
// user_pref("privacy.firstparty.isolate.block_post_message", false);
// Users can set this parameter to false if they're having problems logging into websites (lower some of the "isolation" rules).
// user_pref("privacy.firstparty.isolate.restrict_opener_access", true);

