#!/usr/bin/env python3
"""
Facebook Group Video Downloader Script for JLPT N5 Learning Web Portal

Usage:
  python3 scripts/download_fb_videos.py [--browser chrome|firefox|safari] [--cookies cookies.txt]

Note: Since Facebook Group posts are private, you must either:
  1) Log in to Facebook in Chrome/Firefox/Safari and pass --browser chrome
  OR
  2) Export your cookies to a Netscape `cookies.txt` file and pass --cookies cookies.txt
"""

import os
import sys
import argparse
import subprocess

# List of 29 Basic N5 Video Links extracted from n5 learning.txt
VIDEO_LIST = [
    {"id": "bv-1", "title": "Video No. 1", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1221239021999469/"},
    {"id": "bv-2", "title": "Video No. 2", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1221244151998956/"},
    {"id": "bv-3", "title": "Video No. 3", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1221271611996210/"},
    {"id": "bv-4", "title": "Video No. 4", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1221283185328386/"},
    {"id": "bv-5", "title": "Video No. 5", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1221287665327938/"},
    {"id": "bv-6", "title": "Video No. 6", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1221296708660367/"},
    {"id": "bv-7", "title": "Video No. 7", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1221304041992967/"},
    {"id": "bv-8", "title": "Video No. 8", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1221315961991775/"},
    {"id": "bv-9", "title": "Video No. 9", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1221329135323791/"},
    {"id": "bv-10", "title": "Video No. 10", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1222486758541362/"},
    {"id": "bv-11", "title": "Video No. 11", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1222496905207014/"},
    {"id": "bv-12", "title": "Video No. 12", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1222502745206430/"},
    {"id": "bv-13", "title": "Video No. 13", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1222510271872344/"},
    {"id": "bv-14", "title": "Video No. 14", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1222513865205318/"},
    {"id": "bv-15", "title": "Video No. 15", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1222516448538393/"},
    {"id": "bv-16", "title": "Video No. 16", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1222518795204825/"},
    {"id": "bv-17", "title": "Video No. 17", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1222528195203885/"},
    {"id": "bv-18", "title": "Video No. 18", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1222531785203526/"},
    {"id": "bv-19", "title": "Video No. 19", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1222533711870000/"},
    {"id": "bv-20", "title": "Video No. 20", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1222536778536360/"},
    {"id": "bv-21", "title": "Video No. 21", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1222540501869321/"},
    {"id": "bv-22", "title": "Video No. 22", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1222543921868979/"},
    {"id": "bv-23", "title": "Video No. 23", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1222547378535300/"},
    {"id": "bv-24", "title": "Video No. 24", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1222557535200951/"},
    {"id": "bv-25", "title": "Video No. 25", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1222566925200012/"},
    {"id": "bv-26", "title": "Video No. 26", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1222570651866306/"},
    {"id": "bv-27", "title": "Video No. 27", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1222575051865866/"},
    {"id": "bv-28", "title": "Video No. 28", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1222578071865564/"},
    {"id": "bv-29", "title": "Video No. 29", "url": "https://www.facebook.com/groups/1221225785334126/permalink/1223904345066270/"}
]

def main():
    parser = argparse.ArgumentParser(description="Download Facebook Group N5 Videos to public/videos/")
    parser.add_argument("--browser", choices=["chrome", "firefox", "safari", "edge", "brave"], default="chrome", help="Extract cookies from your browser where logged into FB")
    parser.add_argument("--cookies", help="Path to Netscape cookies.txt file")
    parser.add_argument("--output-dir", default="public/videos", help="Target output directory")
    args = parser.parse_args()

    os.makedirs(args.output_dir, exist_ok=True)

    print("==========================================================")
    print(" 🎌 JLPT N5 Facebook Group Video Downloader")
    print("==========================================================")
    print(f"Output Directory: {args.output_dir}")
    if args.cookies:
        print(f"Using cookies file: {args.cookies}")
    else:
        print(f"Using browser cookies: {args.browser}")
    print("----------------------------------------------------------")

    success_count = 0
    total = len(VIDEO_LIST)

    for idx, item in enumerate(VIDEO_LIST, start=1):
        output_file = os.path.join(args.output_dir, f"{item['id']}.mp4")
        if os.path.exists(output_file):
            print(f"[{idx}/{total}] ⏩ {item['title']} already downloaded at {output_file}")
            success_count += 1
            continue

        print(f"[{idx}/{total}] 📥 Downloading {item['title']} ({item['url']})...")

        cmd = [
            sys.executable, "-m", "yt_dlp",
            "-f", "b/bestvideo+bestaudio",
            "--format", "mp4",
            "-o", output_file,
            item["url"]
        ]

        if args.cookies:
            cmd.extend(["--cookies", args.cookies])
        elif args.browser:
            cmd.extend(["--cookies-from-browser", args.browser])

        try:
            res = subprocess.run(cmd, check=True)
            if res.returncode == 0:
                print(f"   ✅ Successfully downloaded -> {output_file}")
                success_count += 1
        except subprocess.CalledProcessError as e:
            print(f"   ❌ Failed to download {item['title']}. (Check if you are logged into Facebook in {args.browser} or if cookies expired)")

    print("==========================================================")
    print(f"🎉 Download Summary: {success_count}/{total} videos downloaded to {args.output_dir}")
    print("==========================================================")

if __name__ == "__main__":
    main()
