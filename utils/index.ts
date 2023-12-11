//@ts-nocheck
import Contentstack from "contentstack";
import ContentstackLivePreview from "@contentstack/live-preview-utils";

export const Stack = Contentstack.Stack({
    api_key: "",
    delivery_token: "",
    environment: "",
    live_preview: {
        management_token: "",
        enable: true,
        host: "api.contentstack.io",
    },
});

ContentstackLivePreview.init({
    stackSdk: Stack,
    ssr: true
});