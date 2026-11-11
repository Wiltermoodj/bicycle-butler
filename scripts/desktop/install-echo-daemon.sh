#!/usr/bin/env bash
set -euo pipefail

# OmniButler Echo Desktop Copilot 1-Click Installer
# Downloads, clears quarantine flags, and starts the sovereign local AI engine.

GITHUB_REPO="Wiltermoodj/bicycle-butler"
RELEASES_URL="https://github.com/${GITHUB_REPO}/releases/latest/download"
PORT=11435

echo "========================================================"
echo "    OmniButler Echo Copilot Installer (Sovereign AI)   "
echo "========================================================"

OS="$(uname -s)"
ARCH="$(uname -m)"

case "$OS" in
  Darwin*)
    echo "==> macOS detected ($ARCH)"
    DMG_NAME="Echo-Desktop-macOS.dmg"
    DMG_PATH="/tmp/$DMG_NAME"
    MOUNT_POINT="/tmp/Echo-DMG-Mount"

    echo "==> Downloading latest Echo Desktop macOS release..."
    curl -fSL "${RELEASES_URL}/${DMG_NAME}" -o "$DMG_PATH"

    # Remove macOS quarantine flag from the installer image
    xattr -d com.apple.quarantine "$DMG_PATH" 2>/dev/null || true

    echo "==> Mounting disk image..."
    mkdir -p "$MOUNT_POINT"
    hdiutil attach "$DMG_PATH" -nobrowse -mountpoint "$MOUNT_POINT" -quiet

    echo "==> Installing Echo to /Applications..."
    if [[ -d "$MOUNT_POINT/Echo.app" ]]; then
      rm -rf /Applications/Echo.app
      cp -R "$MOUNT_POINT/Echo.app" /Applications/
    else
      APP_FOUND=$(find "$MOUNT_POINT" -maxdepth 2 -name "*.app" -print -quit)
      if [[ -n "$APP_FOUND" ]]; then
        rm -rf /Applications/Echo.app
        cp -R "$APP_FOUND" /Applications/Echo.app
      else
        echo "Error: Echo.app not found in disk image."
        hdiutil detach "$MOUNT_POINT" -quiet || true
        exit 1
      fi
    fi

    # Detach disk image & clean up temp file
    hdiutil detach "$MOUNT_POINT" -quiet || true
    rm -f "$DMG_PATH"

    echo "==> Clearing Gatekeeper quarantine attributes..."
    xattr -cr /Applications/Echo.app 2>/dev/null || true

    echo "==> Starting Echo Copilot background daemon..."
    open -a /Applications/Echo.app || true
    ;;

  Linux*)
    echo "==> Linux detected ($ARCH)"
    APPIMAGE_NAME="Echo-Desktop-Linux.AppImage"
    INSTALL_DIR="$HOME/.local/bin"
    mkdir -p "$INSTALL_DIR"

    echo "==> Downloading Echo Desktop AppImage..."
    curl -fSL "${RELEASES_URL}/${APPIMAGE_NAME}" -o "$INSTALL_DIR/echo-desktop"
    chmod +x "$INSTALL_DIR/echo-desktop"

    echo "==> Starting Echo Desktop..."
    nohup "$INSTALL_DIR/echo-desktop" > /tmp/echo-daemon.log 2>&1 &
    ;;

  *)
    echo "Unsupported OS: $OS"
    exit 1
    ;;
esac

echo "==> Probing daemon health on http://127.0.0.1:${PORT}/health..."
for i in {1..15}; do
  if curl -s "http://127.0.0.1:${PORT}/health" | grep -q "11435"; then
    echo "========================================================"
    echo " SUCCESS: Echo Copilot daemon is active on port ${PORT}! "
    echo " Model: Liquid AI LFM3-1.7B-OmniButler"
    echo " Ready for Jules CRM, Stow WMS, and ecosystem apps."
    echo "========================================================"
    exit 0
  fi
  sleep 1
done

echo "Echo is starting up in the background. Verify with:"
echo "curl http://127.0.0.1:11435/health"
