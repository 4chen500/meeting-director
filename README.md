## Meeting guide
demo: https://main.d3fv4fm9tg6gzl.amplifyapp.com/

going to change directions on this.
I don't need to do what I'm doing
I need to start with a canned text outline editor
disable the features I don't need, and start with that.
### Outline builder
* Dynamically build the outline
* Each level can start with an input if 2 buttons, to be able to add either a topic or a detail
- Choosing topic would give you an input of, say, 256 chars
- Choosing a detail would give you a text area
* Everything is either a Topic or a Detail
* Let's persist as JSON.
### Meeting director mvp
* By default a meeting should have at least 1 topic
* Each topic length is the total number of minutes available to that hierarchal level divided by the number of sub-topics.
* Subtopic should mean the same as child
* Builder and displayer can also be the same. For displayer it would be read only
Need to think about how to express this state
### Implementation notes
* Focus on clean markup for all devices
* Clean design first, Mobile second
* Webworkers/savable app?
his section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
