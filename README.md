# hexo-tag-garminconnect

Simply Embed Garmin Connect activity tag plugin for [Hexo](https://github.com/hexojs/hexo).

## Introduction

This is a Hexo tag plugin which allows you to simply embed Garmin activities to you blog.

## DEMO


## Installation


## Usage

```
{% garmin post-url %}
```

or

```
{% garmin shortcode %}
```

## Example

For example, if you want embed [this posts](https://www.instagram.com/p/BXkz1bYB1-N/) (This posts shortcode is *BXkz1bYB1-N*), please enter the following this.

```
{% instagram https://www.instagram.com/p/BXkz1bYB1-N/ %}
```

Also, the above example can coding differently.

```
{% instagram BXkz1bYB1-N %}
```


## Customization

This plugin can specify the following options.

- width
- height

## caption & size

You can decide whether to display the caption of posts of instagram. ( By default the caption is displayed. )

Please edit your `_config.yml` as following example.

```
# captioned: false. Hide the captions of all instagrams.
# width: set the width of all instagrams
tagGarmin:
  captioned: false
  width: 50%
```

Also, can customize individually by posts. please edit your `your-posts-markdown.md` as following example.

```
{% garmin false 50% https://www.instagram.com/p/BXkz1bYB1-N/ %}
```

## License

MIT

[Hexo]: http://hexo.io/

## Thanks
Inspired by the work of tea3 [hexo-tag-instagram](https://github.com/tea3/hexo-tag-instagram)

