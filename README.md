
ZingChart integration for GitBook
==============

### 1. You can use install it via **NPM** and save it to package.json:
```
$ npm install gitbook-plugin-zingchart --save
```
### 2. add the plugin to `book.json` config
```
{
    "plugins": [ "zingchart"]
}
```

### 3. include zingchart block in your markdown files.
```
{% zingchart width=300, height=300 %}
{
    "type":"bar",  
    "series":[  
        { "values": [35, 42, 67, 89]},
        { "values": [28, 40, 39, 36]}
    ]
}
{% endzingchart %}
```
