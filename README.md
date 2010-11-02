jQuery Taggable Plugin
=========================

The taggable plugin helps you create an area with a checkboxes for the tags, and will bind them to a specified text input field.

Usage
-------------------------
Create your tag field with an `input[type="text"]` or a `text_area` as well as a `div` that will contain the checkbox tags.

	<input type="text" id="skills_list_field" name="skills_list" value="c#" />
	<div id="skills_list_tags"></div>

Use the jQuery selector to select the tag container, and instantiate Taggable passing the field selector (preferrably ID of the input or text area), as well as an array of tags.

	<script type="text/javascript">
		$(document).ready(function() {
			var skill_tags = ['c#', 'php', 'java', 'javascript', 'ruby'];
			$('#skills_list_tags').Taggable({ field_selector: '#skills_list_field', available_tags: skill_tags });
		});
	</script>


