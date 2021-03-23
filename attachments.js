if (window.rcmail) {
	rcmail.addEventListener('init', function (evt) {
		if (!Dropbox.isBrowserSupported()) {
			console.log('Browser not supported for Drop-ins');
			//return;
		}

		Dropbox.appKey = rcmail.env.dropbox_appKey;
		var button = Dropbox.createChooseButton({
			success: function (files) {
				content = '<span>' + rcmail.get_label('uploading' + (files.length > 1 ? 'many' : '')) + '</span>';
				if (files != null && files.length > 0) {
					for (var i = 0; i < files.length; i++) {
						var name = files[i].name;
						var link = files[i].link;
						var icon = files[i].icon;
						if (rcmail.editor.editor == null) {
							rcmail.editor.replace('[' + name + '] : ' + link + '\r\n');
						} else if (rcmail.editor.editor != null) {
							rcmail.editor.editor.selection.setContent('</br><a href="' + link + '"><img src=' + icon + ' height="18" width="18">' + name + '</img></a>');
						}
					}
				}
			},
			cancel: function () {

			},
			linkType: "preview",
			multiselect: rcmail.env.dropbox_multiselect,
			extensions: rcmail.env.dropbox_extensions,
		});

		if (button) {
			var buttonDiv = $('<div style="text-align:center; margin-bottom:20px"></div>');
			$(rcmail.gui_objects.filedrop).prepend($(buttonDiv).append(button));
		}

	})
}