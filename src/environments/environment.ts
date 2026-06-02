declare const window: any;

export const environment = {
    emailjsServiceId: window.__env?.emailjsServiceId || '',
    emailjsTemplateId: window.__env?.emailjsTemplateId || '',
    emailjsPublicKey: window.__env?.emailjsPublicKey || '',
};