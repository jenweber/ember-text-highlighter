import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: 'highlight',
  searchTerm: [],
  text: '',
  highlightedText: Ember.computed('searchTerms', 'text', 'classNames', function() {
    let searchTerm = this.get('searchTerm');
    let text = this.get('text');
    let classNames = this.get('classNames');
    if (this.validateInput(searchTerm, text)) {
      let searchTermRegex = new RegExp(searchTerm, 'gi');
      let highlightedText = text.replace(searchTermRegex, function (str) {
         return '<span class="' + classNames +'">' + str + '</span>';
       });
      return new Ember.String.htmlSafe(highlightedText);
    } else {
      console.error('text-highlighter detects invalid characters in ' + searchTerm);
      return text;
    }
  }),
  validateInput(searchTerm, text) {
    let searchTermRegex;
    if ((!searchTerm && searchTerm !== 0) || (!text && text !== 0)) {
      // if searchTerm or text are falsey and not equal to 0, don't highlight
      return false;
    } else if (!(/\S/.test(searchTerm))) {
      // if search term is empty or is only whitespace, don't highlight
      return false;
    }
    try {
      // try catch necessary in case searchTerm contains chars that break regex
      searchTermRegex = new RegExp(searchTerm, 'gi');
      return true;
    }
    catch(err) {
      return false;
    }
  }
  // setupXbutton: Ember.on('didInsertElement', function() {
  //   // ...
  // }),
  // teardownXbutton: Ember.on('willDestroyElement', function() {
  //   this.get('text-highlighter').destroy();
  // }),
});

export { default } from 'ember-text-highlighter/components/text-highlighter';
