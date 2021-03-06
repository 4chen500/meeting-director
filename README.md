## Meeting guide
### Outline builder
* Dynamically build the outline
* Each level can start with an input if 2 buttons, to be able to add either a topic or a detail
Choosing topic would give you an input of, say, 256 chars
Choosing a detail would give you a text area
* Everything is either a Topic or a Detail
* Let's persist as JSON.
### Meeting director mvp
* By default a meeting should have at least 1 topic
* Each topic length is the total number of minutes available to that hierarchal level divided by the number of sub-topics.
* Subtopic should mean the same as child
* Builder and displayer can also be the same. For displayer it would be read only
Need to think about how to express this state
### Implementation notes
Focus on clean markup for all devices
Clean design first, Mobile second
Webworkers/savable app?
