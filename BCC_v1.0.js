<div id="cookieConsent" class="cookie-popup hidden">
  <div class="cookie-content">
    <p>We use cookies to improve your experience on our website. You can select which categories you accept. See our <a href="#">Privacy Policy</a>.</p>
    <div class="cookie-options">
      <div class="cookie-column">
        <label class="switch"><input type="checkbox" id="necessaryCookies" checked disabled><span class="slider"></span> Necessary</label>
        <label class="switch"><input type="checkbox" id="preferenceCookies"><span class="slider"></span> Preferences</label>
      </div>
      <div class="cookie-column">
        <label class="switch"><input type="checkbox" id="statisticsCookies"><span class="slider"></span> Statistics</label>
        <label class="switch"><input type="checkbox" id="marketingCookies"><span class="slider"></span> Marketing</label>
      </div>
    </div>
    <div class="cookie-buttons">
      <button id="declineCookies" class="btn decline">Decline all</button>
      <button id="acceptSelectedCookies" class="btn accept">Accept selected</button>
      <button id="acceptAllCookies" class="btn accept-all">Accept all</button>
    </div>
  </div>
</div>

<!-- Button to Toggle Cookie Consent Dialog -->
<button id="openCookieSettings" class="btn settings">Cookie Settings</button>

<style>
  .cookie-popup {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #424242;
    padding: 15px 25px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    z-index: 9999;
    font-family: Arial, sans-serif;
    color: white;
  }

  .cookie-popup.hidden {
    display: none;
  }

  .cookie-content p {
    margin: 0 0 10px;
    font-size: 14px;
  }

  .cookie-content a {
    color: #0073e6;
    text-decoration: none;
  }

  .cookie-options {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .cookie-column {
    display: flex;
    flex-direction: column;
  }

  .switch {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 5px 0;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: relative;
    display: inline-block;
    width: 34px;
    height: 20px;
    background: #ccc;
    border-radius: 34px;
    transition: background 0.3s;
  }

  .slider:before {
    content: "";
    position: absolute;
    width: 14px;
    height: 14px;
    background: white;
    border-radius: 50%;
    left: 3px;
    bottom: 3px;
    transition: transform 0.3s;
  }

  input:checked + .slider {
    background: #0073e6;
  }

  input:checked + .slider:before {
    transform: translateX(14px);
  }

  .cookie-buttons {
    display: flex;
    gap: 10px;
  }

  .btn {
    padding: 8px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .btn.accept {
    background: #0073e6;
    color: white;
  }

  .btn.accept-all {
    background: #00b300;
    color: white;
  }

  .btn.decline {
    background: #ccc;
    color: black;
  }

  .btn.settings {
    position: fixed;
    bottom: 20px;
    left: 20px;
    background: #0073e6;
    color: white;
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const cookiePopup = document.getElementById('cookieConsent');
    const acceptButton = document.getElementById('acceptSelectedCookies');
    const acceptAllButton = document.getElementById('acceptAllCookies');
    const declineButton = document.getElementById('declineCookies');
    const settingsButton = document.getElementById('openCookieSettings');

    const preferenceCheckbox = document.getElementById('preferenceCookies');
    const statisticsCheckbox = document.getElementById('statisticsCookies');
    const marketingCheckbox = document.getElementById('marketingCookies');

    function blockYouTubeEmbeds() {
      document.querySelectorAll('iframe[src*="youtube.com"], iframe[src*="youtu.be"]').forEach(iframe => {
        iframe.setAttribute('data-src', iframe.src);
        iframe.src = '';
      });
    }

    function loadYouTubeEmbeds() {
      document.querySelectorAll('iframe[data-src]').forEach(iframe => {
        iframe.src = iframe.getAttribute('data-src');
      });
    }

    if (!localStorage.getItem('cookieConsent') && !localStorage.getItem('cookieClosed')) {
      cookiePopup.classList.remove('hidden');
    }

    acceptAllButton.addEventListener('click', function () {
      preferenceCheckbox.checked = true;
      statisticsCheckbox.checked = true;
      marketingCheckbox.checked = true;
      localStorage.setItem('cookieConsent', JSON.stringify({ necessary: true, preferences: true, statistics: true, marketing: true }));
      loadYouTubeEmbeds();
      cookiePopup.classList.add('hidden');
    });

    acceptButton.addEventListener('click', function () {
      localStorage.setItem('cookieConsent', JSON.stringify({
        necessary: true,
        preferences: preferenceCheckbox.checked,
        statistics: statisticsCheckbox.checked,
        marketing: marketingCheckbox.checked
      }));
      if (!marketingCheckbox.checked) {
        blockYouTubeEmbeds();
      } else {
        loadYouTubeEmbeds();
      }
      cookiePopup.classList.add('hidden');
    });

    declineButton.addEventListener('click', function () {
      preferenceCheckbox.checked = false;
      statisticsCheckbox.checked = false;
      marketingCheckbox.checked = false;
      localStorage.setItem('cookieConsent', JSON.stringify({ necessary: true }));
      blockYouTubeEmbeds();
      cookiePopup.classList.add('hidden');
    });

    settingsButton.addEventListener('click', function () {
      cookiePopup.classList.toggle('hidden');
    });
  });
</script>
