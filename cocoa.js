if (process.argv.some(function (x) { return x ===  "-h" })) {
    console.log("cocoa 1.0.0\
                 使用法:	cocoa [オプション]\
                 コマンド\
                 -a - はぁ…ココアちゃん…！\
                 -b - cocはぁ…ココアちゃん…！\
                 -c - はぁ…ココアちゃん…！\
                 -d - はぁ…ココアちゃん…！\
                 -e - はぁ…ココアちゃん…！\
                 -f - はぁ…ココアちゃん…！\
                 -g - はぁ…ココアちゃん…！\
                 -h - はぁ…ココアちゃん…？\
                 -i - はぁ…ココアちゃん…！\
                 -j - はぁ…ココアちゃん…！\
                 -k - はぁ…ココアちゃん…！\
                 -l - はぁ…ココアちゃん…！\
                 -m - はぁ…ココアちゃん…！\
                 -n - はぁ…ココアちゃん…！\
                 -o - はぁ…ココアちゃん…！\
                 -p - はぁ…ココアちゃん…！\
                 -q - はぁ…ココアちゃん…！\
                 -r - はぁ…ココアちゃん…！\
                 -s - はぁ…ココアちゃん…！\
                 -t - はぁ…ココアちゃん…！\
                 -u - はぁ…ココアちゃん…！\
                 -v - はぁ…ココアちゃん…！\
                 -w - はぁ…ココアちゃん…！\
                 -x - はぁ…ココアちゃん…！\
                 -y - はぁ…ココアちゃん…！\
                 -z - はぁ…ココアちゃん…！");
} else if (process.argv.some(function (x) { return x ===  "-cocoa"; })) {
    require("fs").readFile("./cocoaAA",  "utf-8", function (err, text) {
        console.log(text);
    });
} else {
    console.log("はぁ…ココアちゃん…！");
}