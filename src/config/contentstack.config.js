import Contentstack from 'contentstack';

const Stack = Contentstack.Stack('blt8d507b37767adeff', 'cs34e20d9fcb27a6e77c23944c', 'production')
const dashboardConfig = {
    pageData:"cyber_dashboard",
    locale: "no-no"
}
const config = {
    pageData:"fortumfaq",
    articles: "fortum_faq",
    help:"fortum_help",
    footer:"fortum_footer",
    locale: "en-us"
}
const config2 = {
    pageData:"cxl_faq",
    faqs: "fortum_faq",
    help:"fortum_help",
    footer:"fortum_footer",
    locale: "fi-fi"
}

export { Stack, config, dashboardConfig };