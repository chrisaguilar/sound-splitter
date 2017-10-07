const { execSync } = require('child_process');
const { extname, resolve } = require('path');

const setup = require('./setup.json');

// Loop through each input file in setup.json
for (const file of Object.keys(setup)) {
    // Get the input file and the output directory
    const input = file;
    const outdir = setup[file].outdir;

    // Get file extension of the input file (e.g. .opus, .ogg, .mp3, etc.)
    const extension = extname(input);

    // Loop over the split list
    for (const split of setup[file].splits) {

        // The output file for each split will be <outdir><title><extension>
        const title = resolve(outdir, `${split.title}${extension}`);

        // Get the start and end times
        const { start, end } = split;

        // Use ffmpeg to extract the audio
        execSync(`ffmpeg -i "${input}" -acodec copy -to "${end}" -ss "${start}" "${title}"`);
    }
}
