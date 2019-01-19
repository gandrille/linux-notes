// ===================
// GENERAL / Démarrage
// ===================

// Page d'accueil et nouvelles fenêtres
// user_pref("browser.startup.homepage", "about:home");
// Nouveaux onglets
// user_pref("browser.newtabpage.enabled", true);

user_pref("browser.newtabpage.pinned", "[{\"url\":\"http://127.1/bm\",\"label\":\"Bookmarks\"},{\"url\":\"https://www.fastmail.com/mail/Bo%C3%AEte_de_r%C3%A9ception/?u=f7a14098\",\"label\":\"fastmail\"},{\"url\":\"https://gandrille.com/rss/#f=0&c=0\",\"label\":\"gandrille\"},{\"url\":\"http://www.lefigaro.fr/\",\"label\":\"lefigaro\"},{\"url\":\"https://www.laposte.fr/\",\"label\":\"laposte\"},{\"url\":\"https://www.cmmc.fr/domivirtualis/index.html#/dashboard\",\"label\":\"cmmc.fr\"},{\"url\":\"https://www.openstreetmap.org/\",\"label\":\"OpenStreetMap\"}]");

// Startup
// 0 Start with a blank page (about:blank).
// 1 Start with the web page(s) defined as the home page(s).
// 2 Load the last visited page.
// 3 Resume the previous browser session
user_pref("browser.startup.page", 3);
// Prévenir à la fermeture du navigateur
user_pref("browser.sessionstore.warnOnQuit", true);
// Toujours vérifier que firefox est votre navigateur par défaut
user_pref("browser.shell.checkDefaultBrowser", true);


// ===========================
// GENERAL / Paramètres réseau
// ===========================

// In order to check the config
// https://www.cloudflare.com/ssl/encrypted-sni/

// Trusted Recursive Resolver (TRR) aka DoH
// see https://wiki.mozilla.org/Trusted_Recursive_Resolver
user_pref("network.trr.mode", 2);
user_pref("network.trr.uri", "https://mozilla.cloudflare-dns.com/dns-query");
user_pref("network.trr.bootstrapAddress", "1.1.1.1");

// Encrypted Server Name Indication
user_pref("network.security.esni.enabled", true);

// First-Party Isolation (FPI) - BREAKS TOO MANY WEBSITES
// FPI works by separating cookies on a per-domain basis
// global switch
// user_pref("privacy.firstparty.isolate", true);
// to block postMessage across different first party domains
// user_pref("privacy.firstparty.isolate.block_post_message", false);
// Users can set this parameter to false if they're having problems logging into websites (lower some of the "isolation" rules).
// user_pref("privacy.firstparty.isolate.restrict_opener_access", true);


// =================================================
// ACCUEIL / Contenu de la page d'accueil de Firefox
// =================================================

// Recherche web
user_pref("browser.newtabpage.activity-stream.showSearch", true);
// Sites les plus visités
user_pref("browser.newtabpage.activity-stream.feeds.topsites", true);
// Elements Clé
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
// Brèves
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); 


// =========
// RECHERCHE
// =========

// Moteurs de recherche accessibles en un clic désactivés
user_pref("browser.search.hiddenOneOffs", "Google,Bing,Amazon.fr,eBay");


// ======================
// VIE PRIVEE ET SECURITE
// ======================

user_pref("browser.contentblocking.category", "strict");

// For manual configuration
// user_pref("network.cookie.cookieBehavior", 0);
// user_pref("privacy.trackingprotection.enabled", true);
// user_pref("privacy.trackingprotection.socialtracking.enabled", true);
// user_pref("privacy.trackingprotection.pbmode.enabled", false);
// user_pref("privacy.trackingprotection.enabled", true);
// user_pref("privacy.trackingprotection.pbmode.enabled", false);
// user_pref("privacy.trackingprotection.socialtracking.enabled", true);
// user_pref("privacy.trackingprotection.cryptomining.enabled", false);
// user_pref("privacy.trackingprotection.enabled", true);
// user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
// user_pref("privacy.trackingprotection.socialtracking.enabled", true);

