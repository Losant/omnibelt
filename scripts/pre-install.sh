#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

losant-scripts force-yarn || {
  npm install --no-scripts --no-save @losant/scripts && (losant-scripts force-yarn || true)
}
