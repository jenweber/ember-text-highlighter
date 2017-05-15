# Ember-Text-Highlighter

THIS ADDON IS A WORK IN PROGRESS

Ember Text Highlighter is a simple addon for simple use cases - searching a string
and inserting a `<span>` around the word you are looking for.

Since it does not rely on JQuery to insert highlighting, it respects all updates
made to Ember Data records and objects.

## Installation

Coming soon via npm/ember install. For now:

Clone this repo, then inside the project, use `npm link`.
Then navigate to your app's repository, use `npm link ember-text-highlighter`.
Add an entry by hand to your package.json.

## Quick Start

In your component template, pass in a searchTerm and text you want to do some highlighting within:
```
<div>
{{ember-text-highlighter searchTerm="mascot" text="Zoey is my favorite mascot"}}
</div>
```

In your CSS file, add some styling rules of your choice for the class name `.highlighter`.
This addon does not add any default styling rules.
```
.highlighter {
  background-color: #ffb656;
  padding: 4px;
}
```

Result:
```
<div>
Zoey is my favorite <span class="highlighter">mascot</span>
</div>
```

## Configuration Options and Defaults

| Attribute Name   | Description   | Options  |  Default  |
| ------------- |-------------| -----| -----|
| highlighterClass| The class name to be used in the span  | any string | 'highlighter'|
| caseSensitive | Whether or not results should be case-sensitive |  boolean (true or false) | false |
| text  | The text to be searched |  any string | null |
| searchTerm  | The word that should be highlighted |  any string | null |

Usage:
```
{{ember-text-highlighter
  searchTerm=searchTerm
  text=text
  caseSensitive=false
  highlighterClass="blue-highlighter"}}
```

## Limitations

This addon works by using a simple Regex replace to search for a given term, then
returns an a `Ember.String.htmlSafe`. Due to performance concerns,
it is not recommended to use this addon to search large amounts of text.

## Credits

This addon was inspired by the technique described by Channa Somathilaka in this [StackOverflow](http://stackoverflow.com/questions/40001210/how-to-highlight-a-given-word-inside-hbs) post.

Special thanks to the Ember Community Slack members for answering my questions. Visit the [Ember Community](https://www.emberjs.com/community/) page to find out how to join us.
