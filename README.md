# Commands:

npm run dev

npm run build

npx serve@latest dist

## Converting to IOS/Android apps

Install the Capacitor CLI locally:
npm install -D @capacitor/cli

Add the native platforms:
npx cap add ios
npx cap add android

Build local project and sync:

npm run build
npx cap sync

Open xcode or android studio:
npx cap open ios
npx cap open android

# Hosting

Project is hosted on netlify

Website is continually updated by using https://cron-job.org/en/
to continually hit the web api hook every hour:
curl -X POST -d '{}' https://api.netlify.com/build_hooks/5c23354f454e1350f8543e78