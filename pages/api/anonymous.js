const { WebClient } = require('@slack/web-api');
const token = process.env.SLACK_BOT_OAUTH_TOKEN;
const web = new WebClient(token);

export default async (event) => {
    const body = JSON.parse(event.body);
    try {
        // sample
        await web.chat.postMessage({
            text: body,
            channel: '@naomi.yamashita',
        });
    } catch (error) {
        console.log(error.data);
    }
};
