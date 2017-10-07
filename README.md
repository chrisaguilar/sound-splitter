# SoundSplitter

## Instructions

1. Get some audio files.
2. Configure `setup.json`
3. Run `splitSounds.js`

## `setup.json` Structure
```json
{
    "/path/to/input/file/1.mp3": {
        "outdir": "/path/to/output/directory",
        "splits": [
            { "title": "title of the split", "start": "start time", "end": "end time" },
            { "title": "really good track", "start": "00:00:00", "end": "00:02:03" }
        ]
    },
    "/home/downloads/totallynotpirated.opus": {
        "outdir": "/home/music/my favorite artist",
        "splits": [
            { "title": "track 1", "start": "00:00:00", "end": "00:03:00" },
            { "title": "track 2", "start": "00:03:00", "end": "00:06:00" },
            { "title": "track 1.5", "start": "00:02:00", "end": "00:05:00" }
        ]
    }
}
```
*(the setup.json included in this repo is the one that I built this mini-project for)*

### Outputs:
```
/path/to/output/directory/title of the split.mp3
/path/to/output/directory/really good track.mp3
/home/music/my favorite artist/track 1.mp3
/home/music/my favorite artist/track 2.mp3
/home/music/my favorite artist/track 1.5.mp3
```

## Example

*(assuming you have youtube-dl installed)*

1. `$ youtube-dl -x "<LinkToYourFavoriteYouTubeCompilationVideoHere>"`
2. Change the input file in `setup.json` to `/path/to/downloaded/file.ext`
3. `$ mkdir /home/whatever/directory`
4. Change the output directory in `setup.json` to `/home/whatever/directory`
5. Configure the splits
6. `$ node splitSounds.js`

That's it. Have fun!
