const { execSync } = require('child_process');
const { extname, resolve } = require('path');

const setup = require('./setup.json');

// Loop through each input file in setup.json
for (const infile of Object.keys(setup)) {
    // Get the output directory and track splits for each input file
    const { outdir, splits } = setup[infile];

    // Get file extension of the input file
    const extension = extname(infile);

    // Loop over the split list
    for (const split of splits) {
        // Get the start and end times, as well as the title
        const { end, start, title } = split;

        // The output file for each split will be <outdir><title><extension>
        const outfile = resolve(outdir, `${title}${extension}`);

        // Use ffmpeg to extract the audio
        execSync(`ffmpeg -i "${infile}" -acodec copy -to "${end}" -ss "${start}" "${outfile}"`);
    }
}
