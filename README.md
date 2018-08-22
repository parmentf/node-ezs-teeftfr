# Teeft adapted to French language

This package cannot be used alone. [ezs](https://www.npmjs.com/package/ezs) has to be installed

## Usage

```js
import ezs from 'ezs';
import teeftfr from 'ezs-teeftfr';

ezs.use(teeftfr);

process.stdin
    .pipe(ezs('STATEMENT_NAME', { STATEMENT_PARAMETERS })
    .pipe(process.stdout);
```

## Statements

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [beginsWith](#beginswith)
    -   [Parameters](#parameters)
-   [someBeginsWith](#somebeginswith)
    -   [Parameters](#parameters-1)
-   [TEEFTFilterTags](#teeftfiltertags)
    -   [Parameters](#parameters-2)
-   [TEEFTFrToTagLem](#teeftfrtotaglem)
    -   [Parameters](#parameters-3)
    -   [Examples](#examples)
-   [TEEFTStopWords](#teeftstopwords)
    -   [Parameters](#parameters-4)
-   [TEEFTTokenize](#teefttokenize)
    -   [Parameters](#parameters-5)

### beginsWith

Check that a `text` begins with any of the `tags`.

#### Parameters

-   `tags` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** 
-   `text` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### someBeginsWith

Check if some of the `texts` begins with any of the `tags`

#### Parameters

-   `tags` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** 
-   `texts` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** 

Returns **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### TEEFTFilterTags

Filter the text in input, by keeping only adjectives and names

#### Parameters

-   `data` **[Stream](https://nodejs.org/api/stream.html)** 
-   `feed` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** 
-   `tags` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Tags to keep (optional, default `['ADJ','NOM']`)

### TEEFTFrToTagLem

Tokenize, tag, and lemmatize a French text

#### Parameters

-   `data` **[Stream](https://nodejs.org/api/stream.html)** 
-   `feed` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** 
-   `tagTypes` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** tag types (optional, default `['adj','adv','art','con','nom','ono','pre','ver','pro']`)
-   `strictness` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** When false, non-accentuated character are the same as accentuated ones (optional, default `true`)
-   `minimumLength` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Ignore words shorter than this (optional, default `1`)
-   `doTag` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** return tags if true (optional, default `true`)
-   `doLemmatize` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** return lems if true (optional, default `true`)

#### Examples

```javascript
from(['Elle semble se nourrir essentiellement de plancton, et de hotdog.'])
.pipe(ezs('TEEFTFrToTagLem', { doLemmatize: false }))
```

```javascript
[ { id: 0, word: 'elle', pos: [ 'PRO:per' ] },
{ id: 1, word: 'semble', pos: [ 'VER' ] },
{ id: 2, word: 'se', pos: [ 'PRO:per' ] },
{ id: 3, word: 'nourrir', pos: [ 'VER' ] },
{ id: 4, word: 'essentiellement', pos: [ 'ADV' ] },
{ id: 5, word: 'de', pos: [ 'PRE', 'NOM', 'ART:def' ] },
{ id: 6, word: 'plancton', pos: [ 'NOM' ] },
{ id: 7, word: 'et', pos: [ 'CON' ] },
{ id: 8, word: 'de', pos: [ 'PRE', 'NOM', 'ART:def' ] },
{ id: 9, word: 'hotdog', pos: [ 'UNK' ] } ]
```

### TEEFTStopWords

Filter the text in input, by removing stopwords

#### Parameters

-   `data` **[Stream](https://nodejs.org/api/stream.html)** 
-   `feed` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** 
-   `stopwords` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name of the stopwords file to use (optional, default `'StopwFrench'`)

### TEEFTTokenize

-   **See: <http://yomguithereal.github.io/talisman/tokenizers/words>**

Extract tokens from a text

#### Parameters

-   `data` **[Stream](https://nodejs.org/api/stream.html)** 
-   `feed` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** 

## count

Take `Object` object getting some fields with json path, and do ...

### Parameters

-   `data`
-   `feed`
-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**
