# DeliverLocal PWA Launcher

This complete GitHub Pages package has **no folders**. Upload every file directly to the repository root. It includes an Apple Home Screen icon and iPhone/iPad installation instructions.

## Upload

1. Extract this ZIP on your Chromebook.
2. On your GitHub repository's **Code** page, choose **Add file → Upload files**.
3. Select all files from the extracted package together. They should appear as individual files, not inside a folder.
4. Commit the upload.
5. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, and save.

Do not upload the ZIP itself. `index.html` must be at the repository root.

## Install on iPhone or iPad

Open the published Pages link in **Safari**. Tap **Share → Add to Home Screen**, turn on **Open as Web App**, then tap **Add**. When launched from the Home Screen, the app opens the DeliverLocal ordering page.

## What it does

- Shows a DeliverLocal landing page with an **Order Now** link.
- Offers installation when the browser supports the PWA install prompt.
- Provides Safari setup instructions on Apple devices.
- When opened from its installed Home Screen icon, redirects to `https://order.deliverlocal.net/glue/landing`.

Browsers do not allow a website to silently install a PWA. Android/Chromium may offer an install prompt after user interaction; iPhone/iPad installation is done from Safari's Share menu.
