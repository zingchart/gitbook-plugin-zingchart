
# 2021 UPDATE:

**This plugin is no longer maintained. It will not work with newer versions of GitBook. This repository exists purely for historical reasons. No further updates will be made.**


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

* Any key/value pairs that can be specified in [zingchart.render](https://www.zingchart.com/docs/developers/zingchart-object-and-methods/?q=zingchart%20object%20and%20methods%20%7C%20developers%20%7C%20zingchart#render-method) can be declared in the `{% zingchart %}` block separated by commas.
* To include a raw JSON block, it can be placed between the open and close blocks.
* To include an external JSON file, the `dataurl` attribute can be placed in the `{% zingchart %}` block.

### Examples
```
{% zingchart dataurl='./zingchart.json', width=700, height=200 %}{% endzingchart %}
```
![External JSON](/assets/images/external.png)

```
{% zingchart width=700, height=200 %}
{
    "type":"bar",
    "series":[
        { "values": [35, 42, 67, 89]},
        { "values": [28, 40, 39, 36]}
    ]
}
{% endzingchart %}
```
![Embedded JSON](/assets/images/embedded.png)

