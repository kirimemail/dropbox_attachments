Roundcube Dropbox Attachment Plugin
===========================================

Roundcube plugin to attach files from Dropbox. Uses Dropbox dropins api: https://www.dropbox.com/developers/dropins. NO php file size upload limitation.

Install
=======
* Place this plugin folder into plugins directory of Roundcube.
* Follow the steps in https://www.dropbox.com/developers/dropins/chooser/js and get your appKey
* Update config.inc.php with the above appKey and other optional options
* Add `dropbox_attachments` to $config['plugins'] in your Roundcube config

Screenshot
==========
![Screnshot](https://raw.githubusercontent.com/hassansin/dropbox_attachments/master/screenshot.png)
