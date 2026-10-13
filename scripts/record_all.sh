#!/bin/sh
# Records every missing clip, restarting the generator after each batch to release GPU memory.
# Usage: scripts/record_all.sh   (from the repository root)
export HF_HUB_OFFLINE=1
while true; do
  .venv-tts/bin/python scripts/generate_speech.py
  status=$?
  [ "$status" -eq 3 ] || exit "$status"
done
