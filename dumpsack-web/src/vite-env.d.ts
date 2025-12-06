/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IOS_URL?: string;
  readonly VITE_ANDROID_URL?: string;
  readonly VITE_CHROME_URL?: string;
  readonly VITE_TWITTER_URL?: string;
  readonly VITE_GITHUB_URL?: string;
  readonly VITE_STATUS_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
