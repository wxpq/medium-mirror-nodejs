const http = require("https");
const http2 = require("http");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;



var server = http2.createServer((req,res)=>{
    url_parsed = req.url.split("=");
    http.get(url_parsed[1],(resp)=>{
        let data = '';
    
        resp.on('data', (chunk) => {
          data += chunk;
        });
    
        resp.on('end', () => {
            const dom = new JSDOM(data);
            var scripts = dom.window.document.getElementsByTagName('script');
            var noscripts = dom.window.document.getElementsByTagName('noscript');
            var nav = dom.window.document.getElementsByTagName('nav');
            var divs = dom.window.document.getElementsByTagName('div');
            var btns = dom.window.document.getElementsByTagName('button');
            var footer = dom.window.document.querySelectorAll("#root>div>div");
            var h2 = dom.window.document.getElementsByTagName('h2');
            var h1 = dom.window.document.getElementsByTagName('h1');
            var imgs = dom.window.document.getElementsByTagName('img');
            output_data = '';

            // remove nav

            for (let item of nav) {
                item.remove();
            }

            // remove empty div's

            for (let item of divs) {
                if(item.childElementCount == 0){
                    item.remove();
                }
            }

            // remove bottom

            footer[footer.length-1].remove();
            for (let item of h2) {
                if(item.textContent == 'More From Medium'){
                    item.parentElement.parentElement.remove();
                }
            }
            
            // remove buttons

            for (let item of btns) {
                item.remove();
            }
            for (let item of btns) {
                item.remove();
            }
            for (let item of btns) {
                item.remove();
            }

            // remove scripts

            for (let item of scripts) {
                item.remove();
            }
            for (let item of scripts) {
                item.remove();
            }
            for (let item of scripts) {
                item.remove();
            }
            for (let item of scripts) {
                item.remove();
            }
            for (let item of scripts) {
                item.remove();
            }
            for (let item of scripts) {
                item.remove();
            }

            // remove noscripts

            for (let item of noscripts) {
                item.remove();
            }
            for (let item of noscripts) {
                item.remove();
            }
            for (let item of noscripts) {
                item.remove();
            }
            for (let item of noscripts) {
                item.remove();
            }
            for (let item of noscripts) {
                item.remove();
            }
            for (let item of noscripts) {
                item.remove();
            }

            // remove margin and increase witdh


            h1[0].parentElement.parentElement.setAttribute('style','max-width: 900px !important;margin: 0;');


            // replace good images and remove gifs

            const img_regex = RegExp(/^https:\/\/miro.medium.com\/max/);
            const gifimg_regex = RegExp(/^https:\/\/miro.medium.com\/freeze/);
            const gif_regex = RegExp(/.gif/);
            for (var item of imgs) {
                if(img_regex.test(item.getAttribute('src'))){
                    var urlparsed = item.getAttribute('src').split('/');
                    var remove = urlparsed[5].split('?');
                    item.setAttribute('src','https://miro.medium.com/max/900/'+remove[0]);
                    item.setAttribute('style','filter:none !important;transform: none;cursor: none;');
                    item.parentElement.setAttribute('class', '');
                }
                if (gifimg_regex.test(item.getAttribute('src'))) {
                    if(gif_regex.test(item.getAttribute('src'))){
                        item.parentElement.parentElement.remove();
                    }
                }
            }
            for (var item of imgs) {
                if(img_regex.test(item.getAttribute('src'))){
                    var urlparsed = item.getAttribute('src').split('/');
                    var remove = urlparsed[5].split('?');
                    item.setAttribute('src','https://miro.medium.com/max/900/'+remove[0]);
                    item.setAttribute('style','filter:none !important;transform: none;cursor: none;');
                    item.parentElement.setAttribute('class', '');
                }
                if (gifimg_regex.test(item.getAttribute('src'))) {
                    if(gif_regex.test(item.getAttribute('src'))){
                        item.parentElement.parentElement.remove();
                    }
                }
            }
            for (var item of imgs) {
                if(img_regex.test(item.getAttribute('src'))){
                    var urlparsed = item.getAttribute('src').split('/');
                    var remove = urlparsed[5].split('?');
                    item.setAttribute('src','https://miro.medium.com/max/900/'+remove[0]);
                    item.setAttribute('style','filter:none !important;transform: none;cursor: none;');
                    item.parentElement.setAttribute('class', '');
                }
                if (gifimg_regex.test(item.getAttribute('src'))) {
                    if(gif_regex.test(item.getAttribute('src'))){
                        item.parentElement.parentElement.remove();
                    }
                }
            }

            res.end(dom.window.document.documentElement.innerHTML);
        });
    });
});
server.listen(8080);




