# Bernd's Cookie Consent for Webflow

## Overview
Bernd's Cookie Consent (BCC) is a customizable and GDPR-compliant cookie consent banner for Webflow. This script ensures users can manage their cookie preferences, including necessary, preferences, statistics, and marketing cookies.

## Features
✅ GDPR & CCPA Compliance  
✅ Blocks YouTube & Marketing Cookies Until Consent  
✅ Fully Customizable  
✅ Webflow Integration  
✅ Hosted via IONOS Deploy Now  

## Deployment Steps
### 1️⃣ Fork or Clone This Repository
1. Go to **GitHub** and **fork this repo**.
2. If needed, rename the fork to **bernds-cookie-consent**.
3. Clone the repo locally using:
   ```sh
   git clone https://github.com/YOUR-USERNAME/bernds-cookie-consent.git
   ```

### 2️⃣ Deploy Using IONOS Deploy Now
1. **Sign up for IONOS Deploy Now** (https://www.ionos.com/hosting/deploy-now)
2. **Connect Your GitHub Repo**:
   - Select your forked repo (`bernds-cookie-consent`).
   - Choose **Static Site** as the deployment type.
   - Set the **`public/` directory as the deployment root**.
3. **Deploy the Project**.
   - Get your hosted script URL:
     ```
     https://your-deploynow-subdomain.ionos.com/BCC_v1.0.js
     ```

### 3️⃣ Install the Script in Webflow
1. **Go to Webflow → Project Settings → Custom Code**.
2. **Paste this in the Before </body> section**:
   ```html
   <script src="https://your-deploynow-subdomain.ionos.com/BCC_v1.0.js" defer></script>
   ```
3. **Save & Publish** ✅

### 4️⃣ (Optional) Customization
You can customize the behavior using URL parameters:
```html
<script src="https://your-deploynow-subdomain.ionos.com/BCC_v1.0.js?theme=dark&position=bottom"></script>
```
- `theme=dark` → Enables dark mode.
- `position=bottom` → Moves the banner to the bottom.

## Contributing
Feel free to **submit pull requests** or **open issues** for improvements.

## License
MIT License © 2024 Bernd's Cookie Consent

## Support
For questions or support, please create an **issue on GitHub** or contact **support@example.com**.

