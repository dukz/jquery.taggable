/*
 * jQuery Taggable v0.1.0
 * Andrew Angelo Ang
 */
(function($) {
	var taggable_init = function(container, options) {
		function getTagList() {
			var raw_values = $(options.field_selector).val().split(',');
			var values = [];
			
			$.each(raw_values, function(index, value) {
				value = value.trim();
				if(value.length > 0) values.push(value);
			});

			return values;
		}
		function setTagList(values) {
			values.sort();
			$(options.field_selector).val(values.join(', '));
		}
		function fieldKeyUpHandler(event) {
			var values = getTagList();
			$('.taggable-tags-cb').each(function(index, el) {
				el.checked = (values.indexOf(el.value) >= 0);
			});
		}
		function checkChangedHandler(event) {
			var input = event.target;
			var values = getTagList();
			var found = (values.indexOf(input.value) >= 0);

			if(input.checked) {
				values.push(input.value);
			} else {
				var new_array = $.grep(values, function(value) {
					return value != input.value
				});
				values = new_array;
			}

			setTagList(values);
		}

		container.append(function(index, html) {
			var values = getTagList();

			var html = '<div class="taggable-container">';

			$.each(options.available_tags, function(idx, tag) {
				var checked = (values.indexOf(tag) >= 0 ? ' checked="checked" ' : '');
				var id = 'taggable-cb-' + tag;
				html += '<div class="taggable-tag">';
				html +=	 '<input type="checkbox" class="taggable-tags-cb" ' + checked + ' id="' + id + '" value="' + tag + '" onclick="javascript:this.blur();" />';
				html +=	 '<label for="' + id + '">' + tag + '</label>';
				html += '</div>';
			});

			html += '<div class="clear"></div>';
			html += '</div>';

			return html;
		});

		container.find('input.taggable-tags-cb').change(checkChangedHandler);
		$(options.field_selector).keyup(fieldKeyUpHandler);
	};

	/*
	 * Public Methods
	 */
	$.fn.Taggable = function(options) {
		return this.each(function() {
			taggable_init($(this), options);
		});
	}
})(jQuery);
