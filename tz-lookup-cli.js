#!/usr/bin/env node
/*
 * Offline coordinate to timezone lookup service via terminal via tz-lookup npm module.
 * Usage: ./tz-lookup-cli.js <Lat> <Lng>
 * Return: TZInfo Identifier of the time zone or error message.
 * Exit Code: 0 on success, 1 on error.
 */

try {
    var tz = require("tz-lookup");
    var lat = process.argv[2];
    var lng = process.argv[3];
    console.log(tz(lat, lng));
} catch (ex) {
    console.log(ex.message);
    process.exit(code=1)
}
