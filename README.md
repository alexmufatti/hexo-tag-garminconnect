[![Build Status](https://travis-ci.org/alexmufatti/hexo-tag-garminconnect.svg?branch=master)](https://travis-ci.org/alexmufatti/hexo-tag-garminconnect)

# hexo-tag-garminconnect

Simply Embed Garmin Connect activity tag plugin for [Hexo](https://github.com/hexojs/hexo).

## Introduction

This is a Hexo tag plugin which allows you to simply embed Garmin activities to you blog.

## DEMO

TBD

## Installation

`npm install hexo-tag-garminconnect`

## Usage

```
{% garmin activity-url %}
```

or

```
{% garmin activityId %}
```

## Example

For example, if you want embed [this posts](https://connect.garmin.com/modern/activity/2830474044) (This posts activityId is *2830474044*), please enter the following this.

```
{% garmin https://connect.garmin.com/modern/activity/2830474044 %}
```

Also, the above example can coding differently.

```
{% instagram 2830474044 %}
```

## License

MIT

[Hexo]: http://hexo.io/

## Thanks

Inspired by the work of tea3 [hexo-tag-instagram](https://github.com/tea3/hexo-tag-instagram)

